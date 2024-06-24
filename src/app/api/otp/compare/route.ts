import prisma from "@/lib/prisma/prisma"
import _ from "lodash"
import moment from "moment"
import { AES } from 'crypto-js'
const secred = process.env.SECRET
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    const { code, phoneNumber } = await req.json()

    console.log(code, phoneNumber, "compare code and phone number")
    if (_.isEmpty(code) || _.isEmpty(phoneNumber)) {
        return Response.json({
            success: false,
            message: "code and phone number tidak boleh kosong"
        }, { status: 400 })
    }

    const otp = await prisma.otp.findFirst({
        where: {
            phone: phoneNumber,
            code: code
        }
    })

    console.log("otp", otp)

    if (!otp) {
        console.log("otp not found")
        return Response.json({
            success: false,
            message: "otp not found"
        }, { status: 400 })
    }

    if (moment().isAfter(otp.expiresAt)) {
        return Response.json({
            success: false,
            message: "otp expired"
        }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: {
            phone: phoneNumber
        }
    })

    const token = AES.encrypt(phoneNumber + "", secred!).toString()
    await prisma.authLog.create({
        data: {
            userId: user?.id,
            expiresAt: moment().add(30, "day").toDate(),
            token
        }
    })

    cookies().set("token", token)

    return Response.json({
        success: true,
        message: "success",
        data: {
            token
        }
    })
}
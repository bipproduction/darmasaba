import prisma from "@/lib/prisma/prisma"
import _ from "lodash"
import moment from "moment"
import { AES } from 'crypto-js'
const secred = process.env.SECRET
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    const { code, phoneNumber } = await req.json()
    if (_.isEmpty(code) || _.isEmpty(phoneNumber)) {
        return new Response("nomor telepon dan kode otp tidak boleh kosong", { status: 400 })
    }

    const otp = await prisma.otp.findFirst({
        where: {
            phone: phoneNumber,
            code: code
        }
    })

    if (!otp) {
        return new Response("nomor telepon dan kode otp tidak cocok", { status: 400 })
    }

    if (moment().isAfter(otp.expiresAt)) {
        return new Response("otp expired", { status: 400 })
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

    return new Response(JSON.stringify({ token, message: "success" }), { status: 200 })
}
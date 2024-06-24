import _ from "lodash"
import appConfig from "../../../../../app.config"
import prisma from "@/lib/prisma/prisma"
import moment from "moment"

export async function POST(req: Request) {
    try {
        const { phoneNumber } = await req.json()

        console.log(phoneNumber)
        if (_.isEmpty(phoneNumber)) {
            return Response.json({
                success: false,
                message: "nomor telepon tidak boleh kosong",
            }, { status: 400 })
        }

        const user = await prisma.user.findUnique({
            where: {
                phone: phoneNumber
            }
        })

        if (!user) {
            return Response.json({
                success: false,
                message: "nomor telepon tidak ditemukan",
            }, { status: 400 })
        }

        const code = _.random(1000, 9999)
        const text = `berikut adalah kode otp anda ${code}. silahkan masukkan kode otp pada halaman login, jangan bagikan kode otp ini ke siapa pun.`
        const wa = await fetch(appConfig.waHost + "/code?text=" + text + "&nom=" + phoneNumber)
            .then((res) => res.json())

        const expiresAt = moment().add(5, "minutes").toDate()
        const simpan = await prisma.otp.upsert({
            where: {
                phone: phoneNumber
            },
            create: {
                code: code + "",
                phone: phoneNumber + "",
                expiresAt
            } as any,
            update: {
                code: code + "",
                expiresAt
            }
        })

        console.log(simpan, "simpan otp")
        
        return Response.json({
            success: true,
            message: "success",
            data: {
                ...wa,
                phone: phoneNumber,
                code
            }
        })
    } catch (error) {
        return Response.json({
            data: null,
            success: false,
            message: "error",
        }, { status: 500 })
    }
}
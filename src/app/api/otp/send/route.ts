import _ from "lodash"
import appConfig from "../../../../../app.config"
import prisma from "@/lib/prisma/prisma"
import moment from "moment"

interface BODY {
    phoneNumber: string
}
export async function POST(req: Request) {
    try {
        const { phoneNumber } = await req.json()

        console.log(phoneNumber)
        if (_.isEmpty(phoneNumber)) {
            return new Response("nomor telepon tidak boleh kosong", { status: 400 })
        }

        const user = await prisma.user.findUnique({
            where: {
                phone: phoneNumber
            }
        })

        if (!user) {
            return new Response("nomor telepon tidak terdaftar", { status: 400 })
        }

        const code = _.random(1000, 9999)
        const text = `berikut adalah kode otp anda ${code}. silahkan masukkan kode otp pada halaman login, jangan bagikan kode otp ini ke siapa pun.`
        const wa = await fetch(appConfig.waHost + "/code?text=" + text + "&nom=" + phoneNumber)
            .then((res) => res.json())

        if (!wa) {
            return new Response("internal server error, gagal kirim otp", { status: 500 })
        }

        const expiresAt = moment().add(5, "minutes").toDate()
        await prisma.otp.upsert({
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
        return Response.json({ ...wa, code })
    } catch (error) {
        return new Response("internal server error", { status: 500 })
    }
}
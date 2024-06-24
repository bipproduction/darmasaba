import prisma from "@/lib/prisma/prisma"
import { revalidateTag } from "next/cache"

export async function POST(req: Request) {
    const { name } = await req.json()
    if (!name) {
        return Response.json({
            success: false,
            message: "Please fill all field"
        })
    }

    const desa = await prisma.desa.findUnique({
        where: {
            name: name
        }
    })

    if (desa) {
        return Response.json({
            success: false,
            message: "desa already exist"
        }, { status: 400 })
    }
    const data = await prisma.desa.create({
        data: {
            name
        }
    })

    return Response.json({
        success: true,
        message: "success",
        data
    })
}
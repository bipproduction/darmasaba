import prisma from "@/lib/prisma/prisma"
import { revalidateTag } from "next/cache"

export async function POST(req: Request) {
    const { name } = await req.json()
    if (!name) {
        return new Response(JSON.stringify({ success: false, message: "name is required" }), { status: 400 })
    }

    const desa = await prisma.desa.findUnique({
        where: {
            name: name
        }
    })

    if (desa) {
        return new Response(JSON.stringify({ success: false, message: "desa already exists" }), { status: 400 })
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
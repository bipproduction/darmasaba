import prisma from "@/lib/prisma/prisma"

export async function POST(req: Request) {
    const { name, desc } = await req.json()
    if (!name || !desc) {
        return Response.json({
            success: false,
            message: "Please fill all field"
        }, { status: 400 })
    }
    const body = await prisma.accessRole.create({
        data: {
            name,
            desc
        }
    })
    return Response.json({
        success: true,
        message: "success",
        data: body
    })
}
import prisma from "@/lib/prisma/prisma"

export async function GET() {
    const user = await prisma.user.findMany()
    return Response.json({
        success: true,
        message: "success",
        data: user
    })
}
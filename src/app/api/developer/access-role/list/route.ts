import prisma from "@/lib/prisma/prisma"

export async function GET() {
    const accessRole = await prisma.accessRole.findMany()
    return Response.json({
        success: true,
        message: "success",
        data: accessRole
    })
}
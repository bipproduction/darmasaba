import prisma from "@/lib/prisma/prisma"

export async function GET() {
    const listJabatan = await prisma.userRole.findMany()
    return Response.json({
        success: true,
        message: "success",
        data: listJabatan
    })
}
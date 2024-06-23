import prisma from "@/lib/prisma/prisma"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const userRoleId = searchParams.get("userRoleId")

    if (!userRoleId) {
        return Response.json({
            success: false,
            message: "userRoleId is required"
        }, { status: 400 })
    }

    const res = await prisma.userRoleAccessRole.findMany({
        where: {
            userRoleId: userRoleId,
            active: true
        }
    })

    return Response.json(res.map(item => item.accessRoleId))
}
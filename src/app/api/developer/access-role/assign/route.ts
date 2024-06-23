import prisma from "@/lib/prisma/prisma"

export async function POST(request: Request) {
    const { accessId, listRole }: { accessId: string, listRole: string[] } = await request.json()

    console.log(accessId, listRole)


    if (!accessId || !listRole) {
        return Response.json({
            success: false,
            message: "roleId and listAccess is required"
        }, { status: 400 })
    }

    // Ambil semua akses yang sudah ada untuk userRoleId tertentu
    const existingAccesses = await prisma.userRoleAccessRole.findMany({
        where: { accessRoleId: accessId },
        select: { userRoleId: true }
    });

    // Dapatkan accessRoleId yang ada di database
    const existingAccessIds = existingAccesses.map(access => access.userRoleId);

    for (const item of listRole) {
        if (existingAccessIds.includes(item)) {
            // Jika item ada di existingAccessIds, update active menjadi false
            await prisma.userRoleAccessRole.update({
                where: {
                    accessRoleId_userRoleId: {
                        accessRoleId: accessId,
                        userRoleId: item
                    }
                },
                data: {
                    active: false
                }
            });
        } else {
            // Jika item tidak ada di existingAccessIds, create record baru
            await prisma.userRoleAccessRole.create({
                data: {
                    userRoleId: item,
                    accessRoleId: accessId
                }
            });
        }
    }

    return Response.json({
        success: true,
        message: "success",
        data: []
    })
}

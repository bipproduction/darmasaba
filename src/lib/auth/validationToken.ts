import prisma from "../prisma/prisma"

export async function validationTokenUser(req: Request) {
    const auth = req.headers.get('Authorization') || null
    if (!auth) {
        return new Response("Unauthorized", { status: 401 })
    }
    const token = auth.split(' ')[1]

    const authLog = await prisma.authLog.findUnique({
        where: {
            token: token
        },
        select: {
            user: {
                where: {
                    active: true
                },
                select: {
                    id: true,
                    name: true,
                    Jabatan: {
                        where: {
                            active: true
                        },
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    Desa: {
                        where: {
                            active: true
                        },
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    phone: true,
                    role: {
                        where: {
                            active: true
                        },
                        select: {
                            id: true,
                            name: true,
                            UserRoleAccessRole: {
                                where: {
                                    active: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    if (!authLog) {
        return null
    }

    return authLog.user
}
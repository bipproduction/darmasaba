import { validationTokenUser } from "@/lib/auth/validationToken"
import prisma from "@/lib/prisma/prisma"

export async function GET(req: Request) {
    const user = validationTokenUser(req)
    if (!user) {
        return Response.json({
            success: false,
            message: "Unauthorized"
        }, { status: 401 })
    }
    return Response.json(user)
}   
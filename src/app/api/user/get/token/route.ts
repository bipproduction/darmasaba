import prisma from '@/lib/prisma/prisma'
import { headers } from 'next/headers'
import moment from 'moment'
export async function GET() {
    const auth = headers().get('Authorization') || null
    const token = auth?.split(' ')[1]
    console.log(token, "ini adalah tokennya")
    if (!token) {
        return new Response("Unauthorized", { status: 401 })
    }

    console.log(token)

    const authLog = await prisma.authLog.findUnique({
        where: {
            token: token
        }
    })

    if (!authLog) {
        return new Response("Unauthorized", { status: 401 })
    }

    if (!authLog.active) {
        return new Response("Unauthorized", { status: 401 })
    }

    // check expiresAt
    if (moment().isAfter(authLog.expiresAt)) {
        return new Response("Unauthorized", { status: 401 })
    }

    return Response.json([{ token }])
}
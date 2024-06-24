import prisma from '@/lib/prisma/prisma'
import { headers } from 'next/headers'
import moment from 'moment'
export async function GET() {
    const auth = headers().get('Authorization') || null
    const token = auth?.split(' ')[1]
    console.log(token, "ini adalah tokennya")
    if (!token) {
        return Response.json({
            success: false,
            message: "Unauthorized"
        }, { status: 401 })
    }

    console.log(token)

    const authLog = await prisma.authLog.findUnique({
        where: {
            token: token
        }
    })

    if (!authLog) {
        return Response.json({
            success: false,
            message: "Unauthorized !authlog"
        }, { status: 401 })
    }

    if (!authLog.active) {
        return Response.json({
            success: false,
            message: "Unauthorized !active"
        }, { status: 401 })
    }

    // check expiresAt
    if (moment().isAfter(authLog.expiresAt)) {
        return Response.json({
            success: false,
            message: "Unauthorized !expired"
        }, { status: 401 })
    }

    return Response.json({
        success: true,
        message: "success",
        data: {
            token
        }
    })
}
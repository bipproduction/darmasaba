import { cookies } from 'next/headers'
export async function GET() {
    const cookieStore = cookies()
    cookieStore.set("token", "", { maxAge: 0 })
    cookieStore.delete("token")
    return Response.json({
        message: "success",
        success: true
    })
}
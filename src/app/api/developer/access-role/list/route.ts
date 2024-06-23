import prisma from "@/lib/prisma/prisma"

export async function GET() {
    const accessRole = await prisma.accessRole.findMany()


    return new Response(JSON.stringify(accessRole))
}
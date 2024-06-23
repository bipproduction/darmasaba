import prisma from "@/lib/prisma/prisma";

export async function GET() {
    const listJabatan = await prisma.jabatan.findMany()
    return new Response(JSON.stringify(listJabatan))
}
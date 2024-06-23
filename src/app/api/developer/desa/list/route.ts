import prisma from "@/lib/prisma/prisma";

export const dynamic = "force-dynamic"
export const revalidate = 0
export async function GET(){
    const listDesa = await prisma.desa.findMany()
    return new Response(JSON.stringify(listDesa))
}
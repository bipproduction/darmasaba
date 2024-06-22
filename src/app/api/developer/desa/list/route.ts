import prisma from "@/lib/prisma/prisma";

export async function GET(){
    const listDesa = await prisma.desa.findMany()
    return new Response(JSON.stringify(listDesa))
}
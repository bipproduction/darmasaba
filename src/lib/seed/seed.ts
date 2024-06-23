import prisma from "../prisma/prisma";
import * as jsonData from ".";

export async function libSeed() {
    console.log("seeding...")

    console.log("seeding desa...")
    for (const item of jsonData.desa) {
        await prisma.desa.upsert({
            where: {
                id: item.id
            },
            create: item,
            update: item
        })
    }

    console.log("seeding userRole...")
    for (const item of jsonData.userRole) {
        await prisma.userRole.upsert({
            where: {
                id: item.id
            },
            create: item,
            update: item
        })
    }

    // seed jabatan
    console.log("seeding jabatan...")
    for (const item of jsonData.jabatan) {
        await prisma.jabatan.upsert({
            where: {
                id: item.id
            },
            create: item,
            update: item
        })
    } 

    console.log("seeding users...")
    for (const item of jsonData.users) {
        await prisma.user.upsert({
            where: {
                id: item.id
            },
            create: item,
            update: item
        })
    }

}
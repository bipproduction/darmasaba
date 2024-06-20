import prisma from "../prisma/prisma";
import jsonData from "./jsonData";

export async function libSeed() {
    console.log("seeding...")

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
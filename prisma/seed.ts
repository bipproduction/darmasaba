import { libSeed } from './../src/lib/seed/seed';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

; (async () => {
    await libSeed()
})()
    .then(() => {
        console.log('done')
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
        process.exit(0)
    })

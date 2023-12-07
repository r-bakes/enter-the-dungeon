import { PrismaClient, characters } from '@prisma/client'

export const prisma = new PrismaClient()

export async function GET() {
    const character = await prisma.characters.findUnique({where: {id: 1}});
    return Response.json({character: character})
}
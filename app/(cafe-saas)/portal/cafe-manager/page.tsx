import { prisma } from '@/lib/prisma'
import { CafeManagerClient } from './CafeManagerClient'

export default async function CafeManagerPage() {
  const cafes = await prisma.cafe.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return <CafeManagerClient initialCafes={cafes} />
}

'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function toggleCafeActive(id: string, isActive: boolean) {
  await prisma.cafe.update({
    where: { id },
    data: { isActive },
  })
  revalidatePath('/portal/cafe-manager')
}

export async function createCafe(data: {
  name: string
  slug: string
  upiId: string
  googleReviewUrl: string
  subscriptionEnd: Date
}) {
  await prisma.cafe.create({
    data,
  })
  revalidatePath('/portal/cafe-manager')
}

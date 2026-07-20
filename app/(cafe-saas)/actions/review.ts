'use server'

import { prisma } from '@/lib/prisma'

export async function submitReview(cafeId: string, rating: number, feedback: string | null) {
  if (rating < 1 || rating > 5) {
    throw new Error('Invalid rating')
  }

  await prisma.reviewLog.create({
    data: {
      cafeId,
      rating,
      feedback,
    },
  })
}

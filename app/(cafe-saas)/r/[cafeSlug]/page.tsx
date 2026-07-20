import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { CafeClient } from './CafeClient'

export default async function CafePage({ params }: { params: Promise<{ cafeSlug: string }> }) {
  const { cafeSlug } = await params
  const cafe = await prisma.cafe.findUnique({
    where: { slug: cafeSlug }
  })

  if (!cafe) {
    return notFound()
  }

  const now = new Date()
  if (!cafe.isActive || cafe.subscriptionEnd < now) {
    return (
      <div className="flex h-screen w-full items-center justify-center p-6 bg-white">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Service Temporarily Inactive</h1>
          <p className="text-gray-600">Please request the bill directly from staff.</p>
        </div>
      </div>
    )
  }

  return <CafeClient cafe={cafe} />
}

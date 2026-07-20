import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { CafeClient } from './CafeClient'
import { Logo } from '@/components/wexlogic/Logo'

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
      <div className="flex h-screen w-full items-center justify-center p-6 bg-transparent relative z-10 text-[#f3f4f6]">
        <div className="text-center glass-card p-8 flex flex-col items-center">
          <div className="mb-4">
            <Logo size={50} />
          </div>
          <h1 className="text-2xl font-bold mb-2 cn-syne text-[#dfb76c]">Service Temporarily Inactive</h1>
          <p className="text-gray-400 cn-grotesk">Please request the bill directly from staff.</p>
        </div>
      </div>
    )
  }

  return <CafeClient cafe={cafe} />
}

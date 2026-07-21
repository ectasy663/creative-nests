'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { submitReview } from '../../actions/review'
import { Logo } from '@/components/wexlogic/Logo'

type Cafe = {
  id: string
  name: string
  upiId: string
  googleReviewUrl: string
}

export function CafeClient({ cafe }: { cafe: Cafe }) {
  const [rating, setRating] = useState<number>(0)
  const [amount, setAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasReviewed, setHasReviewed] = useState(false)
  const [showFinalPayment, setShowFinalPayment] = useState(false)

  // Check if returning user
  useEffect(() => {
    const reviewed = localStorage.getItem(`wexlogic_reviewed_${cafe.id}`)
    if (reviewed === 'true') {
      setHasReviewed(true)
    }
  }, [cafe.id])

  const handlePayClick = async () => {
    if (!amount || parseFloat(amount) <= 0) return

    const upiLink = `upi://pay?pa=${cafe.upiId}&pn=${encodeURIComponent(cafe.name)}&am=${amount}&cu=INR`

    // Case 1: Already reviewed in the past
    if (hasReviewed) {
      window.location.href = upiLink
      return
    }

    // Case 2: New review 1-3 stars
    if (rating >= 1 && rating <= 3) {
      setIsSubmitting(true)
      try {
        await submitReview(cafe.id, rating, '')
        localStorage.setItem(`wexlogic_reviewed_${cafe.id}`, 'true')
        window.location.href = upiLink
      } catch (error) {
        console.error('Failed to submit review', error)
      } finally {
        setIsSubmitting(false)
      }
      return
    }

    // Case 3: New review 4-5 stars
    if (rating === 4 || rating === 5) {
      // Background log
      submitReview(cafe.id, rating, '').catch(console.error)
      localStorage.setItem(`wexlogic_reviewed_${cafe.id}`, 'true')
      
      // Open Google synchronously
      if (cafe.googleReviewUrl) {
        window.open(cafe.googleReviewUrl, '_blank', 'noopener,noreferrer')
      }
      
      // Change to final payment screen
      setShowFinalPayment(true)
      return
    }
  }

  // Final Payment Screen for 4-5 star reviewers who just got sent to Google
  if (showFinalPayment) {
    return (
      <div className="flex justify-center w-full min-h-screen bg-transparent p-4 relative z-10">
        <div className="w-full max-w-[375px] glass-card p-6 min-h-[90vh] flex flex-col relative mx-auto my-auto animate-in fade-in duration-500">
          <header className="text-center mb-8 pt-4 flex flex-col items-center">
            <div className="mb-4">
              <Logo size={50} />
            </div>
            <h1 className="text-3xl font-bold cn-syne text-[#dfb76c]">{cafe.name}</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-bold mb-4 cn-syne text-[#dfb76c]">Thank You!</h2>
            <p className="text-sm text-gray-400 mb-8 cn-grotesk">
              We appreciate your feedback. You can now complete your payment of ₹{amount}.
            </p>
            
            <button
              onClick={() => {
                const upiLink = `upi://pay?pa=${cafe.upiId}&pn=${encodeURIComponent(cafe.name)}&am=${amount}&cu=INR`
                window.location.href = upiLink
              }}
              className="w-full gradient-btn-primary flex items-center justify-center gap-2"
            >
              <span>Pay ₹{amount} via UPI App</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Single-Screen Intercept UI
  const isPayDisabled = !amount || parseFloat(amount) <= 0 || (!hasReviewed && rating === 0) || isSubmitting

  return (
    <div className="flex justify-center w-full min-h-screen bg-transparent p-4 relative z-10">
      <div className="w-full max-w-[375px] glass-card p-6 min-h-[90vh] flex flex-col relative mx-auto my-auto animate-in fade-in duration-500">
        
        <header className="text-center mb-8 pt-4 flex flex-col items-center">
          <div className="mb-4">
            <Logo size={50} />
          </div>
          <h1 className="text-3xl font-bold cn-syne text-[#dfb76c]">{cafe.name}</h1>
        </header>

        <div className="flex-1 flex flex-col gap-8">
          
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Bill Amount (INR)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#dfb76c] font-bold text-lg">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                style={{ paddingLeft: '2.5rem' }}
                className="neon-input text-lg font-bold"
              />
            </div>
          </div>

          {/* Rating Intercept (Hidden for returning reviewers) */}
          {!hasReviewed && (
            <div className="flex flex-col items-center pt-2 animate-in fade-in duration-500">
              <p className="text-sm text-gray-400 mb-4 cn-grotesk">How was your experience today?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-transform active:scale-95 focus:outline-none"
                  >
                    <Star
                      size={40}
                      className={`${
                        rating >= star ? 'fill-[#dfb76c] text-[#dfb76c]' : 'text-[rgba(255,255,255,0.15)]'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
        
        {/* Pay Button */}
        <div className="mt-auto pt-8">
          <button
            onClick={handlePayClick}
            disabled={isPayDisabled}
            className="w-full gradient-btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>
              {isSubmitting 
                ? 'Processing...' 
                : hasReviewed 
                  ? 'Pay via UPI App' 
                  : rating >= 4 
                    ? 'Review on Google & Pay' 
                    : 'Pay via UPI App'}
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

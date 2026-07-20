'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { submitReview } from '../../actions/review'

type Cafe = {
  id: string
  name: string
  upiId: string
  googleReviewUrl: string
}

import { Logo } from '@/components/wexlogic/Logo'

export function CafeClient({ cafe }: { cafe: Cafe }) {
  const [rating, setRating] = useState<number>(0)
  const [feedback, setFeedback] = useState('')
  const [showPayment, setShowPayment] = useState(false)
  const [amount, setAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleStarClick = (value: number) => {
    setRating(value)
  }

  const handleGoogleReviewClick = () => {
    // Open synchronously to prevent mobile browser popup blockers
    window.open(cafe.googleReviewUrl, '_blank', 'noopener,noreferrer')
    
    // Transition UI state immediately
    setShowPayment(true)
    
    // Asynchronously log the review in the background
    submitReview(cafe.id, rating, feedback).catch((error) => {
      console.error('Failed to log positive review', error)
    })
  }

  const handleFeedbackSubmit = async () => {
    if (rating > 0 && rating <= 3) {
      setIsSubmitting(true)
      try {
        await submitReview(cafe.id, rating, feedback)
        setShowPayment(true)
      } catch (error) {
        console.error('Failed to submit review', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handlePay = () => {
    if (!amount) return
    const upiLink = `upi://pay?pa=${cafe.upiId}&pn=${encodeURIComponent(cafe.name)}&am=${amount}&cu=INR`
    window.location.href = upiLink
  }

  return (
    <div className="flex justify-center w-full min-h-screen bg-transparent p-4 relative z-10">
      <div className="w-full max-w-[375px] glass-card p-6 min-h-[90vh] flex flex-col relative mx-auto my-auto">
        
        <header className="text-center mb-8 pt-4 flex flex-col items-center">
          <div className="mb-4">
            <Logo size={50} />
          </div>
          <h1 className="text-3xl font-bold cn-syne text-[#dfb76c]">{cafe.name}</h1>
          <p className="text-sm text-gray-400 mt-2 cn-grotesk">How was your experience today?</p>
        </header>

        {!showPayment ? (
          <div className="flex-1 flex flex-col items-center">
            {/* Stars */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
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

            {/* Dynamic Panels */}
            {rating === 4 || rating === 5 ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col items-center">
                <p className="text-center text-sm text-gray-400 mb-6 cn-grotesk">We are so glad you loved it!</p>
                <button
                  onClick={handleGoogleReviewClick}
                  className="w-full gradient-btn-primary text-center"
                >
                  Leave Review on Google & Pay
                </button>
              </div>
            ) : rating > 0 && rating <= 3 ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col gap-4">
                <p className="text-sm text-[#dfb76c] font-medium cn-syne text-center">How can we improve?</p>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="neon-input min-h-[100px]"
                />
                <button
                  onClick={handleFeedbackSubmit}
                  disabled={isSubmitting}
                  className="w-full gradient-btn-primary text-center disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback & Pay'}
                </button>
              </div>
            ) : null}

            {/* Skip to pay */}
            <div className="mt-auto pb-4 pt-10">
              <button
                onClick={() => setShowPayment(true)}
                className="text-sm text-gray-400 underline underline-offset-4 hover:text-white transition-colors"
              >
                Skip to Pay
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in duration-500">
            <h2 className="text-xl font-bold mb-6 text-center cn-syne text-[#dfb76c]">Payment Details</h2>
            <div className="flex flex-col gap-5">
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

              <button
                onClick={handlePay}
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full gradient-btn-primary mt-2 text-center disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span>Pay via UPI App</span>
              </button>
            </div>
            
            <div className="mt-auto pb-4 pt-8 text-center">
              <button
                onClick={() => setShowPayment(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

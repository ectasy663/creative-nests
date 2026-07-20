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
    window.open(cafe.googleReviewUrl, '_blank')
    setShowPayment(true)
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
    <div className="flex justify-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-[375px] bg-white p-6 shadow-sm min-h-screen flex flex-col relative">
        
        <header className="text-center mb-8 pt-4">
          <h1 className="text-2xl font-bold text-gray-900">{cafe.name}</h1>
          <p className="text-sm text-gray-500 mt-1">How was your experience today?</p>
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
                      rating >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Dynamic Panels */}
            {rating === 4 || rating === 5 ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                <p className="text-center text-sm text-gray-600 mb-4">We are so glad you loved it!</p>
                <button
                  onClick={handleGoogleReviewClick}
                  className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
                >
                  Leave Review on Google & Pay
                </button>
              </div>
            ) : rating > 0 && rating <= 3 ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col gap-3">
                <p className="text-sm text-gray-600 font-medium">How can we improve?</p>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  onClick={handleFeedbackSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-semibold py-4 rounded-xl shadow-md hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback & Proceed to Pay'}
                </button>
              </div>
            ) : null}

            {/* Skip to pay */}
            <div className="mt-auto pb-4 pt-10">
              <button
                onClick={() => setShowPayment(true)}
                className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-600"
              >
                Skip to Pay
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col animate-in fade-in duration-500">
            <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bill Amount (INR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full border-2 border-gray-200 rounded-xl py-4 pl-10 pr-4 text-lg font-semibold focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              <button
                onClick={handlePay}
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-green-700 transition-colors disabled:opacity-50 mt-4"
              >
                Pay via UPI
              </button>
            </div>
            
            <div className="mt-auto pb-4 text-center">
              <button
                onClick={() => setShowPayment(false)}
                className="text-sm text-gray-400 hover:text-gray-600"
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

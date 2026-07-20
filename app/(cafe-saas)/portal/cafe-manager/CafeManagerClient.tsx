'use client'

import { useState } from 'react'
import { toggleCafeActive, createCafe } from '../../actions/cafe'
import { QRCodeCanvas } from 'qrcode.react'
import { Logo } from '@/components/wexlogic/Logo'

type Cafe = {
  id: string
  name: string
  slug: string
  upiId: string
  googleReviewUrl: string
  isActive: boolean
  subscriptionEnd: Date
}

export function CafeManagerClient({ initialCafes }: { initialCafes: Cafe[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pin, setPin] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [qrModal, setQrModal] = useState<string | null>(null) // holds the slug
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    upiId: '',
    googleReviewUrl: '',
    subscriptionEnd: ''
  })

  const ADMIN_PIN = '7777' // Hardcoded PIN for now as requested "simple PIN input state"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin === ADMIN_PIN || pin === process.env.NEXT_PUBLIC_ADMIN_PIN) {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect PIN')
    }
  }

  const handleToggle = async (id: string, currentStatus: boolean) => {
    await toggleCafeActive(id, !currentStatus)
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await createCafe({
        ...formData,
        subscriptionEnd: new Date(formData.subscriptionEnd)
      })
      setShowModal(false)
      setFormData({ name: '', slug: '', upiId: '', googleReviewUrl: '', subscriptionEnd: '' })
    } catch (error) {
      console.error(error)
      alert('Failed to create cafe.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const downloadQR = (slug: string) => {
    const canvas = document.getElementById(`qr-${slug}`) as HTMLCanvasElement
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      let downloadLink = document.createElement('a')
      downloadLink.href = pngUrl
      downloadLink.download = `qr-${slug}.png`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-transparent text-[#f3f4f6]">
        <form onSubmit={handleLogin} className="glass-card p-8 max-w-sm w-full relative z-10 flex flex-col items-center">
          <div className="mb-6">
            <Logo size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center cn-bebas tracking-wider text-[#dfb76c]">Admin Access</h2>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            className="neon-input mb-6 text-center tracking-widest text-lg font-bold"
          />
          <button type="submit" className="w-full gradient-btn-primary text-center">
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 text-[#f3f4f6] font-sans relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold cn-syne text-[#dfb76c]">Cafe Manager Portal</h1>
            <p className="text-gray-400 mt-1 cn-grotesk">Manage onboarded cafes, statuses, and QR codes.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="gradient-btn-primary"
          >
            + Add New Cafe
          </button>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]">
                  <th className="p-5 font-semibold">Name</th>
                  <th className="p-5 font-semibold">Slug</th>
                  <th className="p-5 font-semibold">UPI ID</th>
                  <th className="p-5 font-semibold">Expiry</th>
                  <th className="p-5 font-semibold text-center">Active</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                {initialCafes.map((cafe) => (
                  <tr key={cafe.id} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                    <td className="p-5 font-bold text-[#dfb76c]">{cafe.name}</td>
                    <td className="p-5 text-gray-400 font-mono text-sm">{cafe.slug}</td>
                    <td className="p-5 text-gray-400 text-sm">{cafe.upiId}</td>
                    <td className="p-5 text-gray-400 text-sm">
                      {new Date(cafe.subscriptionEnd).toLocaleDateString()}
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => handleToggle(cafe.id, cafe.isActive)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfb76c] focus:ring-offset-2 focus:ring-offset-[#08070d] ${
                          cafe.isActive ? 'bg-[#dfb76c]' : 'bg-[rgba(255,255,255,0.1)]'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            cafe.isActive ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="p-5 text-right">
                      <button
                        onClick={() => setQrModal(cafe.slug)}
                        className="text-sm font-semibold underline underline-offset-4 text-gray-400 hover:text-[#dfb76c]"
                      >
                        Get QR Code
                      </button>
                    </td>
                  </tr>
                ))}
                {initialCafes.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-500">
                      No cafes found. Create one to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="glass-card w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-6 border-b border-[rgba(255,255,255,0.1)] flex justify-between items-center bg-[rgba(255,255,255,0.02)]">
                <h3 className="text-xl font-bold cn-syne text-[#dfb76c]">Add New Cafe</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="overflow-y-auto">
                <form onSubmit={handleCreate} className="p-6 flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1.5">Cafe Name</label>
                    <input required className="neon-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Blue Tokai" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1.5">Slug (URL)</label>
                    <input required className="neon-input font-mono text-sm" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} placeholder="blue-tokai" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1.5">UPI ID</label>
                    <input required className="neon-input" value={formData.upiId} onChange={e => setFormData({...formData, upiId: e.target.value})} placeholder="merchant@upi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1.5">Google Review URL</label>
                    <input required type="url" className="neon-input" value={formData.googleReviewUrl} onChange={e => setFormData({...formData, googleReviewUrl: e.target.value})} placeholder="https://g.page/r/..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1.5">Subscription End Date</label>
                    <input required type="date" className="neon-input" value={formData.subscriptionEnd} onChange={e => setFormData({...formData, subscriptionEnd: e.target.value})} />
                  </div>
                  <button disabled={isSubmitting} type="submit" className="w-full gradient-btn-primary mt-4 disabled:opacity-50 text-center">
                    {isSubmitting ? 'Creating...' : 'Create Cafe'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {qrModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="glass-card p-8 max-w-sm w-full flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center cn-syne text-[#dfb76c]">Cafe QR Code</h3>
              <p className="text-sm text-gray-400 mb-8 text-center font-mono">
                wexlogic.com/r/{qrModal}
              </p>
              <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm mb-8 inline-block">
                <QRCodeCanvas
                  id={`qr-${qrModal}`}
                  value={`https://wexlogic.com/r/${qrModal}`}
                  size={220}
                  level="H"
                  includeMargin={true}
                />
              </div>
              
              <div className="flex w-full gap-3">
                <button
                  onClick={() => setQrModal(null)}
                  className="flex-1 glass-btn-secondary text-center"
                >
                  Close
                </button>
                <button
                  onClick={() => downloadQR(qrModal)}
                  className="flex-1 gradient-btn-primary text-center"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { toggleCafeActive, createCafe } from '../../actions/cafe'
import { QRCodeCanvas } from 'qrcode.react'

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
      <div className="flex h-screen items-center justify-center bg-gray-50 text-gray-900">
        <form onSubmit={handleLogin} className="bg-white p-8 shadow-sm border border-gray-100 rounded-2xl max-w-sm w-full">
          <h2 className="text-xl font-bold mb-6 text-center">Admin Access</h2>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN (try 7777)"
            className="w-full border-2 border-gray-200 rounded-xl p-4 mb-6 focus:outline-none focus:border-black font-semibold text-center tracking-widest text-lg"
          />
          <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Cafe Manager Portal</h1>
            <p className="text-gray-500 mt-1">Manage onboarded cafes, statuses, and QR codes.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition-colors"
          >
            + Add New Cafe
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-5 border-b font-semibold">Name</th>
                  <th className="p-5 border-b font-semibold">Slug</th>
                  <th className="p-5 border-b font-semibold">UPI ID</th>
                  <th className="p-5 border-b font-semibold">Expiry</th>
                  <th className="p-5 border-b font-semibold text-center">Active</th>
                  <th className="p-5 border-b font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {initialCafes.map((cafe) => (
                  <tr key={cafe.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 font-bold">{cafe.name}</td>
                    <td className="p-5 text-gray-500 font-mono text-sm">{cafe.slug}</td>
                    <td className="p-5 text-gray-500 text-sm">{cafe.upiId}</td>
                    <td className="p-5 text-gray-500 text-sm">
                      {new Date(cafe.subscriptionEnd).toLocaleDateString()}
                    </td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => handleToggle(cafe.id, cafe.isActive)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                          cafe.isActive ? 'bg-black' : 'bg-gray-300'
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
                        className="text-sm font-semibold underline underline-offset-4 text-gray-600 hover:text-black"
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-bold">Add New Cafe</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="overflow-y-auto">
                <form onSubmit={handleCreate} className="p-6 flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cafe Name</label>
                    <input required className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-black focus:outline-none transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Blue Tokai" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Slug (URL)</label>
                    <input required className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-black focus:outline-none transition-colors font-mono text-sm" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})} placeholder="blue-tokai" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">UPI ID</label>
                    <input required className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-black focus:outline-none transition-colors" value={formData.upiId} onChange={e => setFormData({...formData, upiId: e.target.value})} placeholder="merchant@upi" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Google Review URL</label>
                    <input required type="url" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-black focus:outline-none transition-colors" value={formData.googleReviewUrl} onChange={e => setFormData({...formData, googleReviewUrl: e.target.value})} placeholder="https://g.page/r/..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subscription End Date</label>
                    <input required type="date" className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-black focus:outline-none transition-colors" value={formData.subscriptionEnd} onChange={e => setFormData({...formData, subscriptionEnd: e.target.value})} />
                  </div>
                  <button disabled={isSubmitting} type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold mt-4 hover:bg-gray-800 transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Creating...' : 'Create Cafe'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {qrModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center">Cafe QR Code</h3>
              <p className="text-sm text-gray-500 mb-8 text-center font-mono">
                wexlogic.com/r/{qrModal}
              </p>
              <div className="p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-sm mb-8 inline-block">
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
                  className="flex-1 border-2 border-gray-200 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => downloadQR(qrModal)}
                  className="flex-1 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
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

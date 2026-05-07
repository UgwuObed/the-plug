'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'

export default function ForgotPasswordPage() {
  const [email, setEmail]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState('')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // TODO: replace with your auth call
      // await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
      await new Promise((r) => setTimeout(r, 800))
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-plug-off-white flex items-center justify-center px-5 py-20">
        <div className="w-full max-w-[420px]">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="heading-display text-[36px] text-plug-text-primary mb-2">
              Reset password
            </h1>
            <p className="text-[14px] text-plug-text-secondary">
              {submitted
                ? 'Check your inbox for a reset link.'
                : "Enter your email and we'll send you a reset link."}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white border border-plug-border rounded-card-lg p-8 shadow-[0_2px_20px_rgba(27,31,50,0.05)]">
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-mint-pale rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5 9-9" stroke="#4D9E99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[14px] text-plug-text-secondary mb-1">
                  We sent a reset link to
                </p>
                <p className="text-[14px] font-medium text-plug-text-primary">{email}</p>
                <button
                  onClick={() => { setSubmitted(false); setEmail('') }}
                  className="mt-6 text-[13px] text-coral hover:underline cursor-pointer bg-transparent border-none font-body"
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="label-mono text-plug-text-muted block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                    className="
                      w-full px-4 py-3 text-[14px] font-body
                      bg-plug-off-white border border-plug-border rounded-lg
                      text-plug-text-primary placeholder:text-plug-text-muted
                      focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                      transition-colors
                    "
                  />
                </div>

                {error && (
                  <div className="p-3.5 bg-coral-pale border border-coral/20 rounded-lg">
                    <p className="text-[13px] text-coral">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full py-3 text-[14px] font-medium font-body
                    text-white bg-coral rounded-lg border-none
                    hover:bg-coral-dark disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 mt-2 cursor-pointer
                  "
                >
                  {loading ? 'Sending…' : 'Send Reset Link'}
                </button>
              </form>
            )}
          </div>

          {/* Footer link */}
          <p className="text-center text-[13px] text-plug-text-muted mt-6">
            Remember your password?{' '}
            <Link href="/login" className="text-coral font-medium hover:underline">
              Back to login
            </Link>
          </p>

        </div>
      </main>
    </>
  )
}

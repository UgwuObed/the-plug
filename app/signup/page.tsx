'use client'
// app/signup/page.tsx

import { useState } from 'react'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirm) {
      setError('Passwords don\'t match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    try {
      // TODO: replace with your auth call
      // const res = await fetch('/api/auth/signup', { method: 'POST', ... })
      // router.push('/dashboard')

      await new Promise((r) => setTimeout(r, 900))
      setError('Auth not connected yet — this is a UI shell.')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-plug-off-white flex items-center justify-center px-5 py-20">
        <div className="w-full max-w-[460px]">

          <div className="mb-8 text-center">
            <h1 className="heading-display text-[36px] text-plug-text-primary mb-2">
              Create your account
            </h1>
            <p className="text-[14px] text-plug-text-secondary">
              Free to join. No credit card needed.
            </p>
          </div>

          <div className="bg-white border border-plug-border rounded-card-lg p-8 shadow-[0_2px_20px_rgba(27,31,50,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label-mono text-plug-text-muted block mb-2">First Name</label>
                  <input
                    type="text" required autoComplete="given-name"
                    value={form.firstName} onChange={update('firstName')}
                    placeholder="John"
                    className="w-full px-4 py-3 text-[14px] font-body bg-plug-off-white border border-plug-border rounded-lg text-plug-text-primary placeholder:text-plug-text-muted focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors"
                  />
                </div>
                <div>
                  <label className="label-mono text-plug-text-muted block mb-2">Last Name</label>
                  <input
                    type="text" required autoComplete="family-name"
                    value={form.lastName} onChange={update('lastName')}
                    placeholder="Doe"
                    className="w-full px-4 py-3 text-[14px] font-body bg-plug-off-white border border-plug-border rounded-lg text-plug-text-primary placeholder:text-plug-text-muted focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="label-mono text-plug-text-muted block mb-2">Email</label>
                <input
                  type="email" required autoComplete="email"
                  value={form.email} onChange={update('email')}
                  placeholder="johndoe@gmail.com"
                  className="w-full px-4 py-3 text-[14px] font-body bg-plug-off-white border border-plug-border rounded-lg text-plug-text-primary placeholder:text-plug-text-muted focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label-mono text-plug-text-muted block mb-2">Password</label>
                <input
                  type="password" required autoComplete="new-password" minLength={8}
                  value={form.password} onChange={update('password')}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-[14px] font-body bg-plug-off-white border border-plug-border rounded-lg text-plug-text-primary placeholder:text-plug-text-muted focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors"
                />
              </div>

              {/* Confirm */}
              <div>
                <label className="label-mono text-plug-text-muted block mb-2">Re-enter Password</label>
                <input
                  type="password" required autoComplete="new-password"
                  value={form.confirm} onChange={update('confirm')}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-[14px] font-body bg-plug-off-white border border-plug-border rounded-lg text-plug-text-primary placeholder:text-plug-text-muted focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="p-3.5 bg-coral-pale border border-coral/20 rounded-lg">
                  <p className="text-[13px] text-coral">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-[14px] font-medium font-body text-white bg-coral rounded-lg border-none hover:bg-coral-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-2"
              >
                {loading ? 'Creating account...' : 'Sign Up Free'}
              </button>

              {/* Terms */}
              <p className="text-[11.5px] text-plug-text-muted text-center leading-relaxed">
                By signing up you agree to our{' '}
                <Link href="/terms" className="text-coral hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-coral hover:underline">Privacy Policy</Link>.
              </p>

            </form>
          </div>

          <p className="text-center text-[13px] text-plug-text-muted mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-coral font-medium hover:underline">Log In</Link>
          </p>

        </div>
      </main>
    </>
  )
}

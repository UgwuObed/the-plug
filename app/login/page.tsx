'use client'
// app/login/page.tsx

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Nav } from '@/components/layout/Nav'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // TODO: replace with your real auth call
      // const res = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password }),
      //   headers: { 'Content-Type': 'application/json' },
      // })
      // if (!res.ok) throw new Error('Invalid credentials')

      await new Promise((r) => setTimeout(r, 800))
      router.push('/dashboard')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed')
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
              Welcome back
            </h1>
            <p className="text-[14px] text-plug-text-secondary">
              Log in to your Plug account
            </p>
          </div>

          {/* Card */}
          <div className="bg-white border border-plug-border rounded-card-lg p-8 shadow-[0_2px_20px_rgba(27,31,50,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
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

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="label-mono text-plug-text-muted">Password</label>
                  <Link href="/forgot-password" className="text-[12px] text-mint hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="
                    w-full px-4 py-3 text-[14px] font-body
                    bg-plug-off-white border border-plug-border rounded-lg
                    text-plug-text-primary placeholder:text-plug-text-muted
                    focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                    transition-colors
                  "
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
                className="
                  w-full py-3 text-[14px] font-medium font-body
                  text-white bg-coral rounded-lg border-none
                  hover:bg-coral-dark disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200 mt-2
                "
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>

            </form>
          </div>

          {/* Footer link */}
          <p className="text-center text-[13px] text-plug-text-muted mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-coral font-medium hover:underline">
              Create one free
            </Link>
          </p>

        </div>
      </main>
    </>
  )
}

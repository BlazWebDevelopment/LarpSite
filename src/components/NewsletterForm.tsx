'use client'

import { useEffect, useState } from 'react'

type Variant = 'inline' | 'stacked'
type Tone = 'dark' | 'light'

interface NewsletterFormProps {
  variant?: Variant
  tone?: Tone
  buttonLabel?: string
  placeholder?: string
  className?: string
}

const STORAGE_KEY = 'dcn-news-subscribed-email'

const isValidEmail = (val: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
}

export default function NewsletterForm({
  variant = 'stacked',
  tone = 'dark',
  buttonLabel = 'Subscribe Free',
  placeholder = 'your@email.com',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) setSubscribedEmail(stored)
    } catch {
      /* localStorage unavailable */
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }
    if (!isValidEmail(trimmed)) {
      setStatus('error')
      setMessage("That doesn't look like a valid email.")
      return
    }

    setStatus('submitting')
    setMessage('')

    window.setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, trimmed)
      } catch {
        /* ignore */
      }
      setSubscribedEmail(trimmed)
      setStatus('success')
      setMessage(`You're on the wire — confirmation sent to ${trimmed}.`)
      setEmail('')
    }, 700)
  }

  const handleUnsubscribe = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setSubscribedEmail(null)
    setStatus('idle')
    setMessage('')
  }

  if (subscribedEmail && status !== 'submitting') {
    return (
      <div className={className}>
        <div
          className={
            tone === 'dark'
              ? 'border border-emerald-400/40 bg-emerald-500/10 text-emerald-200 px-3 py-3 text-sm'
              : 'border border-emerald-500/50 bg-emerald-50 text-emerald-800 px-3 py-3 text-sm'
          }
        >
          <div className="flex items-start gap-2">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <div className="font-semibold">You&apos;re subscribed.</div>
              <div className={tone === 'dark' ? 'text-emerald-100/80 mt-0.5' : 'text-emerald-700 mt-0.5'}>
                Headlines will land at {subscribedEmail}.
              </div>
              <button
                type="button"
                onClick={handleUnsubscribe}
                className={
                  tone === 'dark'
                    ? 'mt-2 text-[11px] uppercase tracking-widest font-bold text-white/60 hover:text-white underline'
                    : 'mt-2 text-[11px] uppercase tracking-widest font-bold text-emerald-700 hover:text-emerald-900 underline'
                }
              >
                Use a different email
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const inputClass =
    tone === 'dark'
      ? 'bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-blue-400'
      : 'bg-slate-100 border border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-700'

  const buttonClass =
    'bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest transition-colors disabled:opacity-60 disabled:cursor-not-allowed'

  const errorClass = tone === 'dark' ? 'text-rose-300' : 'text-rose-600'

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      {variant === 'stacked' ? (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') {
                setStatus('idle')
                setMessage('')
              }
            }}
            placeholder={placeholder}
            disabled={status === 'submitting'}
            aria-invalid={status === 'error'}
            className={`w-full px-3 py-2.5 text-sm mb-3 focus:outline-none ${inputClass}`}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full py-2.5 text-sm ${buttonClass}`}
          >
            {status === 'submitting' ? 'Subscribing…' : buttonLabel}
          </button>
        </>
      ) : (
        <div className="flex gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') {
                setStatus('idle')
                setMessage('')
              }
            }}
            placeholder={placeholder}
            disabled={status === 'submitting'}
            aria-invalid={status === 'error'}
            className={`flex-1 px-3 py-2 text-sm focus:outline-none ${inputClass}`}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`px-4 py-2 text-sm ${buttonClass} shrink-0`}
          >
            {status === 'submitting' ? '…' : buttonLabel}
          </button>
        </div>
      )}

      {status === 'error' && message && (
        <div className={`mt-2 text-xs font-semibold ${errorClass}`}>{message}</div>
      )}
    </form>
  )
}

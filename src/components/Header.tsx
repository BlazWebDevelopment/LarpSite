'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/hot', label: 'Hot', live: true },
    { href: '/newspaper', label: 'Politics' },
    { href: '/live', label: 'Live', pulse: true },
    { href: '/opinion', label: 'Opinion' },
    { href: '/finance', label: 'Finance' },
    { href: '/tech', label: 'Tech' },
    { href: '/culture', label: 'Culture' },
    { href: '/sports', label: 'Sports' },
  ]

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="sticky top-0 z-50 shadow-[0_2px_0_0_rgba(10,18,36,0.06)]">
      {/* Date strip */}
      <div className="bg-black text-white text-[11px] tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-4 h-7 flex items-center justify-between">
          <span className="font-semibold">{today}</span>
          <div className="hidden md:flex items-center gap-4 text-white/70">
            <span>BTC <span className="text-emerald-300 font-semibold">$104,288 ▲</span></span>
            <span>ETH <span className="text-emerald-300 font-semibold">$5,712 ▲</span></span>
            <span>S&amp;P <span className="text-rose-300 font-semibold">5,894 ▼</span></span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 pt-4 pb-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo.svg" alt="DCN News" className="w-12 h-12 rounded-md shadow-sm" />
            <div className="leading-none">
              <div className="font-display text-[40px] md:text-[56px] font-bold text-black leading-none">
                DCN<span className="text-blue-700"> News</span>
              </div>
              <div className="mt-1 text-[10px] tracking-[0.32em] uppercase text-black/60 font-semibold">
                Daily Crypto Network · Est. 2022
              </div>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search the wire…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-100 border border-slate-300 rounded-none px-3 py-2 pr-9 text-sm w-64 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-slate-900 placeholder-slate-500"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <a href="#newsletter" className="hidden sm:inline-flex bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors">
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Nav row */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group px-4 py-3 text-[13px] font-bold uppercase tracking-wider whitespace-nowrap text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                {item.pulse && <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></span>}
                <span>{item.label}</span>
                {item.live && <span className="text-[9px] font-extrabold text-emerald-300 tracking-widest">LIVE</span>}
                <span className="absolute left-3 right-3 bottom-0 h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

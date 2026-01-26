'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const { language, setLanguage } = useLanguage()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full pulse-glow"></span>
              {language === 'en' ? 'LIVE' : '直播'}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              {language === 'en' ? 'Monday, January 26, 2026' : '2026年1月26日 星期一'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-teal-400 transition-colors">
              Login
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:from-teal-400 hover:to-cyan-400 transition-all">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="glass-darker">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo */}
              <div className="relative flex items-center">
                <div className="relative">
                  {/* Hexagon logo */}
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <defs>
                      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6"/>
                        <stop offset="50%" stopColor="#06b6d4"/>
                        <stop offset="100%" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                    {/* Outer hexagon */}
                    <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
                    {/* Inner D */}
                    <path d="M16 14V34H24C32 34 36 28 36 24C36 20 32 14 24 14H16Z M20 18H24C28 18 32 20 32 24C32 28 28 30 24 30H20V18Z" fill="url(#logoGrad)"/>
                    {/* Accent dot */}
                    <circle cx="38" cy="10" r="3" fill="#14b8a6" className="animate-pulse"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="ml-3">
                  <div className="text-2xl font-bold tracking-tight font-[family-name:var(--font-space)]">
                    <span className="gradient-text">DAYBREAK</span>
                  </div>
                  <div className="text-[10px] font-medium tracking-[0.4em] text-slate-500 uppercase">
                    {language === 'en' ? 'The Future of News' : '新闻的未来'}
                  </div>
                </div>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder={language === 'en' ? 'Search news...' : '搜索新闻...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 pr-10 text-sm w-64 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-200 placeholder-slate-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center overflow-x-auto">
            <Link href="/" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/hot" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap flex items-center gap-2">
              {language === 'en' ? 'Hot' : '热点'}
              <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></span>
            </Link>
            <Link href="/newspaper" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Politics' : '政治'}
            </Link>
            <Link href="/live" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              {language === 'en' ? 'Live' : '直播'}
            </Link>
            <Link href="/opinion" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Opinion' : '评论'}
            </Link>
            <Link href="/finance" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Finance' : '财经'}
            </Link>
            <Link href="/tech" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Tech' : '科技'}
            </Link>
            <Link href="/culture" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Culture' : '文化'}
            </Link>
            <Link href="/sports" className="text-slate-300 font-medium px-5 py-3 hover:text-teal-400 hover:bg-teal-500/10 transition-all border-b-2 border-transparent hover:border-teal-400 whitespace-nowrap">
              {language === 'en' ? 'Sports' : '体育'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

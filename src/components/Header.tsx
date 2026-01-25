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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top bar - full width */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {language === 'en' ? 'Friday, January 24, 2026' : '2026年1月24日 星期五'}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">
              {language === 'en' ? 'Beijing -2°C Sunny' : '北京 -2°C 晴'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Language toggle disabled for now - will enable later */}
            <button className="hover:text-amber-400 transition-colors">
              Login
            </button>
            <button className="hover:text-amber-400 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Main header - full width with logo */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Custom Logo */}
              <div className="relative flex items-center">
                {/* Sun icon */}
                <div className="relative">
                  <svg className="w-12 h-12 text-amber-500" viewBox="0 0 48 48" fill="none">
                    {/* Sun rays */}
                    <g className="origin-center">
                      <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="9.86" y1="9.86" x2="14.1" y2="14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="33.9" y1="33.9" x2="38.14" y2="38.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="9.86" y1="38.14" x2="14.1" y2="33.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="33.9" y1="14.1" x2="38.14" y2="9.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    {/* Sun circle with gradient */}
                    <circle cx="24" cy="24" r="10" className="fill-amber-400"/>
                    <circle cx="24" cy="24" r="10" fill="url(#sunGradient)"/>
                    <defs>
                      <radialGradient id="sunGradient" cx="0.3" cy="0.3" r="0.7">
                        <stop offset="0%" stopColor="#fcd34d"/>
                        <stop offset="100%" stopColor="#f59e0b"/>
                      </radialGradient>
                    </defs>
                  </svg>
                  {/* Horizon line */}
                  <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                </div>
                {/* Text */}
                <div className="ml-2">
                  <div className="text-2xl font-bold tracking-tight">
                    <span className="text-slate-800">DAY</span>
                    <span className="text-amber-500">BREAK</span>
                  </div>
                  <div className="text-xs font-semibold tracking-[0.3em] text-slate-500 -mt-1">
                    {language === 'en' ? 'NEWS' : '新闻'}
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
                  className="border border-slate-300 rounded-full px-4 py-2 pr-10 text-sm w-64 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - gradient */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center">
            <Link href="/" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/hot" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Hot' : '热点'}
            </Link>
            <Link href="/newspaper" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Politics' : '政治'}
            </Link>
            <Link href="/live" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Live' : '直播'}
            </Link>
            <Link href="/opinion" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Opinion' : '评论'}
            </Link>
            <Link href="/finance" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Finance' : '财经'}
            </Link>
            <Link href="/tech" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Tech' : '科技'}
            </Link>
            <Link href="/culture" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border-r border-slate-600">
              {language === 'en' ? 'Culture' : '文化'}
            </Link>
            <Link href="/sports" className="text-white font-medium px-5 py-3 hover:bg-amber-500/20 hover:text-amber-400 transition-colors">
              {language === 'en' ? 'Sports' : '体育'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

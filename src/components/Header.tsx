'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const { language } = useLanguage()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top red bar */}
      <div className="china-red-bar">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-yellow-300 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              {language === 'en' ? 'LIVE' : '直播'}
            </span>
            <span className="text-red-300">|</span>
            <span className="text-red-100">
              {language === 'en' ? 'Friday, March 6, 2026' : '2026年3月6日 星期五'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-red-100 hover:text-white transition-colors">
              {language === 'en' ? 'Login' : '登录'}
            </button>
            <button className="bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-yellow-700 transition-colors">
              {language === 'en' ? 'Register' : '注册'}
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="glass-darker bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center">
                <img src="/logo.svg" alt="DaybreakNews" className="w-12 h-12" />
                <div className="ml-3">
                  <div className="text-2xl font-black tracking-tight text-red-700">
                    DAYBREAK NEWS
                  </div>
                  <div className="text-[10px] font-medium tracking-[0.15em] text-gray-500 uppercase">
                    Breaking News & Analysis
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
                  className="bg-gray-50 border border-gray-300 rounded px-4 py-2 pr-10 text-sm w-64 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-gray-900 placeholder-gray-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <button className="bg-red-700 text-white px-5 py-2 rounded text-sm font-medium hover:bg-red-800 transition-colors">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white border-b-2 border-red-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center overflow-x-auto">
            <Link href="/" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/hot" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap flex items-center gap-2">
              {language === 'en' ? 'Hot' : '热点'}
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            </Link>
            <Link href="/newspaper" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Politics' : '政治'}
            </Link>
            <Link href="/live" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              {language === 'en' ? 'Live' : '直播'}
            </Link>
            <Link href="/opinion" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Opinion' : '评论'}
            </Link>
            <Link href="/finance" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Finance' : '财经'}
            </Link>
            <Link href="/tech" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Tech' : '科技'}
            </Link>
            <Link href="/culture" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Culture' : '文化'}
            </Link>
            <Link href="/sports" className="text-gray-700 font-medium px-5 py-3 hover:text-red-700 hover:bg-red-50 transition-all border-b-2 border-transparent hover:border-red-700 whitespace-nowrap">
              {language === 'en' ? 'Sports' : '体育'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

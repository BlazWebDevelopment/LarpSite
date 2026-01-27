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
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              {language === 'en' ? 'LIVE' : '直播'}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">
              {language === 'en' ? 'Monday, January 26, 2026' : '2026年1月26日 星期一'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-700 transition-colors">
              Login
            </button>
            <button className="bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-800 transition-colors">
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
                <img src="/logo.svg" alt="Daybreak News" className="w-12 h-12" />
                {/* Text */}
                <div className="ml-3">
                  <div className="text-2xl font-bold tracking-tight text-gray-900">
                    DAYBREAK
                  </div>
                  <div className="text-[10px] font-medium tracking-[0.2em] text-gray-500 uppercase">
                    {language === 'en' ? 'News' : '新闻'}
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
                  className="bg-gray-50 border border-gray-300 rounded px-4 py-2 pr-10 text-sm w-64 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-gray-900 placeholder-gray-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <button className="bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center overflow-x-auto">
            <Link href="/" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/hot" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap flex items-center gap-2">
              {language === 'en' ? 'Hot' : '热点'}
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            </Link>
            <Link href="/newspaper" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Politics' : '政治'}
            </Link>
            <Link href="/live" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              {language === 'en' ? 'Live' : '直播'}
            </Link>
            <Link href="/opinion" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Opinion' : '评论'}
            </Link>
            <Link href="/finance" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Finance' : '财经'}
            </Link>
            <Link href="/tech" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Tech' : '科技'}
            </Link>
            <Link href="/culture" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Culture' : '文化'}
            </Link>
            <Link href="/sports" className="text-gray-700 font-medium px-5 py-3 hover:text-blue-700 hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-blue-700 whitespace-nowrap">
              {language === 'en' ? 'Sports' : '体育'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

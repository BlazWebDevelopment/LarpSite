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

  const navItems = [
    { href: '/', label: language === 'en' ? 'Home' : '首页' },
    { href: '/hot', label: language === 'en' ? 'Hot' : '热点', live: true },
    { href: '/newspaper', label: language === 'en' ? 'Politics' : '政治' },
    { href: '/live', label: language === 'en' ? 'Live' : '直播', pulse: true },
    { href: '/opinion', label: language === 'en' ? 'Opinion' : '评论' },
    { href: '/finance', label: language === 'en' ? 'Finance' : '财经' },
    { href: '/tech', label: language === 'en' ? 'Tech' : '科技' },
    { href: '/culture', label: language === 'en' ? 'Culture' : '文化' },
    { href: '/sports', label: language === 'en' ? 'Sports' : '体育' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2.5 group">
                <img
                  src="/logo.svg"
                  alt="DaybreakNews"
                  className="w-9 h-9 rounded-lg"
                />
                <span className="text-white font-extrabold text-xl tracking-tight hidden sm:block">
                  DAYBREAK
                </span>
              </Link>

              <nav className="hidden lg:flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3.5 py-2 text-sm font-medium transition-colors flex items-center gap-1.5"
                  >
                    {item.pulse && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                    {item.label}
                    {item.live && (
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search...' : '搜索...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-sm w-56 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 text-gray-200 placeholder-gray-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              <button className="text-gray-400 hover:text-white text-sm font-medium transition-colors hidden sm:block">
                {language === 'en' ? 'Log in' : '登录'}
              </button>
              <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                {language === 'en' ? 'Sign up' : '注册'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/95 border-t border-gray-800 lg:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center overflow-x-auto gap-1 py-2 scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap rounded-full hover:bg-gray-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

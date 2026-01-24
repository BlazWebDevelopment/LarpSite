'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top bar - full width */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{language === 'zh' ? '2026年1月24日 星期五' : 'Friday, January 24, 2026'}</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">{language === 'zh' ? '北京 -2°C 晴' : 'Beijing -2°C Sunny'}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded font-medium transition-colors"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-blue-400 transition-colors">
              {language === 'zh' ? '登录' : 'Login'}
            </button>
            <button className="hover:text-blue-400 transition-colors">
              {language === 'zh' ? '注册' : 'Register'}
            </button>
          </div>
        </div>
      </div>

      {/* Main header - full width with logo */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="bg-red-600 text-white px-3 py-2 font-bold text-2xl tracking-tight">
                  中国日报
                </div>
                <div className="bg-blue-600 text-white px-3 py-2 font-bold text-lg">
                  CHINA DAILY
                </div>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={language === 'zh' ? '搜索新闻...' : 'Search news...'}
                  className="border border-slate-300 rounded px-4 py-2 pr-10 text-sm w-64 focus:outline-none focus:border-blue-500"
                />
                <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                {language === 'zh' ? '订阅' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - full width red */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center">
            <Link href="/" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '首页' : 'Home'}
            </Link>
            <Link href="/hot" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '热点' : 'Hot'}
            </Link>
            <Link href="/newspaper" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '时政' : 'Politics'}
            </Link>
            <Link href="/live" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '直播' : 'Live'}
            </Link>
            <Link href="/opinion" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '评论' : 'Opinion'}
            </Link>
            <Link href="#" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '财经' : 'Finance'}
            </Link>
            <Link href="#" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '科技' : 'Tech'}
            </Link>
            <Link href="#" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors border-r border-red-800">
              {language === 'zh' ? '文化' : 'Culture'}
            </Link>
            <Link href="#" className="text-white font-medium px-5 py-3 hover:bg-red-800 transition-colors">
              {language === 'zh' ? '体育' : 'Sports'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 shadow-lg relative overflow-hidden">
      {/* Decorative Chinese pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 text-6xl text-yellow-300">龍</div>
        <div className="absolute top-0 right-10 text-6xl text-yellow-300">鳳</div>
        <div className="absolute bottom-0 left-1/4 text-4xl text-yellow-300">福</div>
        <div className="absolute bottom-0 right-1/4 text-4xl text-yellow-300">禄</div>
      </div>
      
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-red-900 px-4 py-2 rounded font-black text-xl shadow-lg border-2 border-yellow-300">
                  {t('site.abbr')}
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-yellow-300 font-bold text-lg tracking-wider">{t('site.name')}</span>
                <div className="text-yellow-200/60 text-xs">China Daily News</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1 text-white">
              <Link href="/hot" className="hover:bg-red-600/50 px-4 py-2 rounded transition-all font-medium border border-transparent hover:border-yellow-500/30">
                {t('nav.hot')}
              </Link>
              <Link href="/live" className="hover:bg-red-600/50 px-4 py-2 rounded transition-all font-medium border border-transparent hover:border-yellow-500/30">
                {t('nav.live')}
              </Link>
              <Link href="/newspaper" className="hover:bg-red-600/50 px-4 py-2 rounded transition-all font-medium border border-transparent hover:border-yellow-500/30">
                {t('nav.newspaper')}
              </Link>
              <Link href="/opinion" className="hover:bg-red-600/50 px-4 py-2 rounded transition-all font-medium border border-transparent hover:border-yellow-500/30">
                {t('nav.opinion')}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="text-white hover:text-yellow-300 transition-colors font-medium border border-yellow-500/50 hover:border-yellow-400 px-3 py-1.5 rounded bg-red-900/30"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
            <button className="text-yellow-200 hover:text-yellow-300 transition-colors hidden sm:block">{t('nav.subscribe')}</button>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 px-4 py-1.5 rounded hover:from-yellow-400 hover:to-yellow-500 transition-all font-bold shadow-md hidden sm:block border border-yellow-400">
              {t('nav.download')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom gold accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 px-3 py-1.5 rounded-lg font-black text-lg shadow-md">
                {t('site.abbr')}
              </div>
              <span className="text-amber-400 font-bold text-sm hidden sm:block">{t('site.name')}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-slate-300">
              <Link href="/hot" className="hover:text-amber-400 transition-colors font-medium">{t('nav.hot')}</Link>
              <Link href="/live" className="hover:text-amber-400 transition-colors font-medium">{t('nav.live')}</Link>
              <Link href="/newspaper" className="hover:text-amber-400 transition-colors font-medium">{t('nav.newspaper')}</Link>
              <Link href="/opinion" className="hover:text-amber-400 transition-colors font-medium">{t('nav.opinion')}</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="text-slate-300 hover:text-amber-400 transition-colors font-medium border border-slate-600 hover:border-amber-400 px-3 py-1.5 rounded-lg"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
            <button className="text-slate-300 hover:text-amber-400 transition-colors hidden sm:block">{t('nav.subscribe')}</button>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-4 py-1.5 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all font-semibold shadow-md hidden sm:block">
              {t('nav.download')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

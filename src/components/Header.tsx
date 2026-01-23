'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-red-600 text-white px-2 py-1 rounded font-bold text-lg">
                {t('site.abbr')}
              </div>
              <span className="text-red-600 font-bold text-sm">{t('site.name')}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-gray-700">
              <Link href="/hot" className="hover:text-red-600 transition-colors">{t('nav.hot')}</Link>
              <Link href="/live" className="hover:text-red-600 transition-colors">{t('nav.live')}</Link>
              <Link href="/newspaper" className="hover:text-red-600 transition-colors">{t('nav.newspaper')}</Link>
              <Link href="/opinion" className="hover:text-red-600 transition-colors">{t('nav.opinion')}</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="hover:text-red-600 transition-colors font-medium border border-gray-300 px-3 py-1 rounded"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
            <button className="hover:text-red-600 transition-colors hidden sm:block">{t('nav.subscribe')}</button>
            <button className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition-colors hidden sm:block">
              {t('nav.download')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

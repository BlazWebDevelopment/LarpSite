'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 mt-12 relative overflow-hidden">
      {/* Top gold accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>
      
      {/* Decorative Chinese characters */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-20 text-8xl text-yellow-300">喜</div>
        <div className="absolute top-4 right-20 text-8xl text-yellow-300">樂</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-900 px-3 py-1.5 rounded font-black border border-yellow-300">
                {t('site.abbr')}
              </div>
            </div>
            <div>
              <span className="text-yellow-200 font-medium">{t('site.name')}</span>
              <div className="text-red-300/60 text-xs">Your Trusted Chinese News Source</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-red-200">
            <button className="hover:text-yellow-300 transition-colors">{t('footer.about')}</button>
            <button className="hover:text-yellow-300 transition-colors">{t('footer.contact')}</button>
            <button className="hover:text-yellow-300 transition-colors">{t('footer.privacy')}</button>
            <button className="hover:text-yellow-300 transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
        
        {/* Chinese proverb */}
        <div className="mt-6 text-center">
          <p className="text-yellow-400/60 text-sm italic">
            "千里之行，始于足下" — A journey of a thousand miles begins with a single step
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-red-700/50 text-center text-red-300/70 text-sm">
          © 2026 {t('site.name')}. All rights reserved. | 保留所有权利
        </div>
      </div>
    </footer>
  )
}

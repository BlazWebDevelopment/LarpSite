'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 px-2 py-1 rounded-lg font-black">
              {t('site.abbr')}
            </div>
            <span className="text-slate-400">{t('site.name')}</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <button className="hover:text-amber-400 transition-colors">{t('footer.about')}</button>
            <button className="hover:text-amber-400 transition-colors">{t('footer.contact')}</button>
            <button className="hover:text-amber-400 transition-colors">{t('footer.privacy')}</button>
            <button className="hover:text-amber-400 transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700 text-center text-slate-500 text-sm">
          © 2026 {t('site.name')}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

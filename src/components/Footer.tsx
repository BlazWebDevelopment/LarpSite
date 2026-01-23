'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white px-2 py-1 rounded font-bold">
              {t('site.abbr')}
            </div>
            <span className="text-gray-600">{t('site.name')}</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-red-600 transition-colors">{t('footer.about')}</button>
            <button className="hover:text-red-600 transition-colors">{t('footer.contact')}</button>
            <button className="hover:text-red-600 transition-colors">{t('footer.privacy')}</button>
            <button className="hover:text-red-600 transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

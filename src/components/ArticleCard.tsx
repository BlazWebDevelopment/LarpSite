'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

interface ArticleCardProps {
  id: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
  category: string
  categoryZh: string
  time: string
  featured?: boolean
}

export default function ArticleCard({
  id,
  titleZh,
  titleEn,
  summaryZh,
  summaryEn,
  category,
  categoryZh,
  time,
  featured = false
}: ArticleCardProps) {
  const { language } = useLanguage()

  const title = language === 'zh' ? titleZh : titleEn
  const summary = language === 'zh' ? summaryZh : summaryEn
  const cat = language === 'zh' ? categoryZh : category

  if (featured) {
    return (
      <Link href={`/article/${id}`} className="block group">
        <div className="bg-gray-900 rounded-xl p-6 text-white hover:bg-gray-800 transition-all">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-500/30">{cat}</span>
          <h2 className="text-xl font-bold mt-3 mb-2 group-hover:text-emerald-400 transition-colors leading-tight">{title}</h2>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{summary}</p>
          <div className="mt-4 text-gray-500 text-xs flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2026-04-08 {time}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-600 text-xs font-medium px-2.5 py-0.5 bg-emerald-50 rounded-full">{cat}</span>
          <span className="text-gray-400 text-xs">{time}</span>
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 text-sm leading-snug">
          {title}
        </h3>
      </div>
    </Link>
  )
}

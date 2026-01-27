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
        <div className="relative overflow-hidden rounded-lg bg-blue-700 p-6 text-white hover:shadow-lg transition-all">
          <div className="relative">
            <span className="inline-block bg-white/20 text-white px-3 py-1 text-xs font-semibold rounded border border-white/30">{cat}</span>
            <h2 className="text-xl font-bold mt-4 mb-3 group-hover:text-blue-100 transition-colors">{title}</h2>
            <p className="text-white/90 text-sm line-clamp-2 leading-relaxed">{summary}</p>
            <div className="mt-4 text-white/80 text-xs flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2026-01-27 {time}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:border-blue-300 transition-all bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-700 text-xs font-medium px-2 py-0.5 bg-blue-50 rounded">{cat}</span>
          <span className="text-gray-500 text-xs">{time}</span>
        </div>
        <h3 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 text-sm">
          {title}
        </h3>
      </div>
    </Link>
  )
}

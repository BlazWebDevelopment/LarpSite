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
  const { language, t } = useLanguage()

  const title = language === 'zh' ? titleZh : titleEn
  const summary = language === 'zh' ? summaryZh : summaryEn
  const cat = language === 'zh' ? categoryZh : category

  if (featured) {
    return (
      <Link href={`/article/${id}`} className="block group">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden hover:from-blue-800 hover:via-blue-700 hover:to-slate-800 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative">
            <div className="absolute top-0 right-0">
              <span className="bg-amber-500 text-slate-900 rounded-full px-3 py-1 text-sm font-bold">{cat}</span>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-3 group-hover:text-amber-400 transition-colors">{title}</h2>
            <p className="text-slate-300 line-clamp-2">{summary}</p>
            <div className="mt-4 text-slate-400 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="border border-slate-200 rounded-xl p-4 hover:shadow-xl transition-all bg-white hover:border-blue-300 hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{cat}</span>
          <span className="text-slate-400 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </span>
        </div>
        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">{title}</h3>
        <p className="text-slate-500 text-sm line-clamp-2">{summary}</p>
      </div>
    </Link>
  )
}

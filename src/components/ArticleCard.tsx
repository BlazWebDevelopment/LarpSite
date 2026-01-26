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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-600 to-purple-700 p-6 text-white hover:shadow-2xl hover:shadow-teal-500/20 transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
          <div className="relative">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold rounded-full border border-white/30">{cat}</span>
            <h2 className="text-xl font-bold mt-4 mb-3 group-hover:text-teal-200 transition-colors font-[family-name:var(--font-space)]">{title}</h2>
            <p className="text-white/80 text-sm line-clamp-2 leading-relaxed">{summary}</p>
            <div className="mt-4 text-white/60 text-xs flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2026-01-26 {time}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/50 hover:border-teal-500/30 transition-all">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-teal-400 text-xs font-medium px-2 py-0.5 bg-teal-500/10 rounded-full">{cat}</span>
          <span className="text-slate-500 text-xs">{time}</span>
        </div>
        <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors line-clamp-2 text-sm">
          {title}
        </h3>
      </div>
    </Link>
  )
}

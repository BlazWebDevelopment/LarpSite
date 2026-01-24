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
        <div className="bg-red-600 rounded p-5 text-white relative overflow-hidden hover:bg-red-700 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/30 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="relative">
            <span className="bg-white text-red-600 px-2 py-0.5 text-xs font-semibold">{cat}</span>
            <h2 className="text-xl font-bold mt-3 mb-2 group-hover:underline">{title}</h2>
            <p className="text-red-100 text-sm line-clamp-2">{summary}</p>
            <div className="mt-3 text-red-200 text-xs">
              2026-01-24 {time}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="border-b border-slate-100 pb-3 hover:bg-slate-50 -mx-2 px-2 py-2 transition-colors">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-600 text-xs font-medium">[{cat}]</span>
          <span className="text-slate-400 text-xs">{time}</span>
        </div>
        <h3 className="font-medium text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2 text-sm">
          {title}
        </h3>
      </div>
    </Link>
  )
}

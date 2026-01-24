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
        <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-lg p-6 text-white relative overflow-hidden hover:from-red-700 hover:via-red-600 hover:to-red-800 transition-all shadow-xl border-2 border-yellow-500/30">
          {/* Decorative Chinese elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/20 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-4 right-4 text-6xl text-yellow-500/10 font-serif">報</div>
          
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-500/50"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-500/50"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-500/50"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-500/50"></div>
          
          <div className="relative">
            <div className="absolute top-0 right-0">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 rounded px-3 py-1 text-sm font-bold shadow-md border border-yellow-300">{cat}</span>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-3 group-hover:text-yellow-300 transition-colors">{title}</h2>
            <p className="text-red-100 line-clamp-2">{summary}</p>
            <div className="mt-4 text-yellow-200/80 text-sm flex items-center gap-2">
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
      <div className="border-2 border-red-200 rounded-lg p-4 hover:shadow-xl transition-all bg-white hover:border-red-400 hover:-translate-y-1 relative overflow-hidden">
        {/* Subtle Chinese pattern */}
        <div className="absolute top-0 right-0 text-4xl text-red-100 opacity-30">福</div>
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold border border-red-200">{cat}</span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors line-clamp-2">{title}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">{summary}</p>
        </div>
      </div>
    </Link>
  )
}

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
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden hover:from-orange-600 hover:to-orange-700 transition-all">
          <div className="absolute top-4 right-4">
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">{cat}</span>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-3 group-hover:underline">{title}</h2>
          <p className="text-orange-100 line-clamp-2">{summary}</p>
          <div className="mt-4 text-orange-200 text-sm">{time}</div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="block group">
      <div className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-medium">{cat}</span>
          <span className="text-gray-400 text-xs">{time}</span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{summary}</p>
      </div>
    </Link>
  )
}

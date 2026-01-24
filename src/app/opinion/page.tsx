'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesBySection } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'

export default function OpinionPage() {
  const { language } = useLanguage()
  const articles = getArticlesBySection('opinion')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white chinese-pattern">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Chinese decorative header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          <div className="flex items-center gap-3">
            <span className="text-red-700 text-2xl">論</span>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-800">
                {language === 'zh' ? '锐评' : 'Opinion'}
              </h1>
              <p className="text-red-400 text-xs mt-1">
                {language === 'zh' ? '观点评论' : 'Commentary'}
              </p>
            </div>
            <span className="text-red-700 text-2xl">評</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              titleZh={article.titleZh}
              titleEn={article.titleEn}
              summaryZh={article.summaryZh}
              summaryEn={article.summaryEn}
              category={article.category}
              categoryZh={article.categoryZh}
              time={article.time}
              featured={index === 0}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

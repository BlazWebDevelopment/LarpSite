'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesBySection } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'

export default function LivePage() {
  const { language } = useLanguage()
  const articles = getArticlesBySection('live')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'zh' ? '📺 直播' : '📺 Live'}
        </h1>

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

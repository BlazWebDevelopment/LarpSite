'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesBySection } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'

export default function NewspaperPage() {
  const { language } = useLanguage()
  const articles = getArticlesBySection('newspaper')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
          <h1 className="text-2xl font-bold text-slate-800">
            {language === 'zh' ? '📰 报刊' : '📰 Newspaper'}
          </h1>
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

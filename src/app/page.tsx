'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { language } = useLanguage()
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></div>
          <h1 className="text-2xl font-bold text-slate-800">
            {language === 'zh' ? '最新资讯' : 'Latest News'}
          </h1>
        </div>

        {/* Featured Article */}
        <div className="mb-8">
          <ArticleCard
            id={featuredArticle.id}
            titleZh={featuredArticle.titleZh}
            titleEn={featuredArticle.titleEn}
            summaryZh={featuredArticle.summaryZh}
            summaryEn={featuredArticle.summaryEn}
            category={featuredArticle.category}
            categoryZh={featuredArticle.categoryZh}
            time={featuredArticle.time}
            featured={true}
          />
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherArticles.map((article) => (
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
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

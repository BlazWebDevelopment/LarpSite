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
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white chinese-pattern">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Chinese decorative header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          <div className="flex items-center gap-3">
            <span className="text-red-700 text-2xl">龍</span>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-800">
                {language === 'zh' ? '最新资讯' : 'Latest News'}
              </h1>
              <p className="text-red-400 text-xs mt-1">
                {language === 'zh' ? '新闻快讯' : 'Breaking Stories'}
              </p>
            </div>
            <span className="text-red-700 text-2xl">鳳</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
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

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-200"></div>
          <span className="text-red-600 font-bold px-4 py-1 border border-red-200 rounded bg-red-50">
            {language === 'zh' ? '更多新闻' : 'More News'}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-200"></div>
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

        {/* Bottom Chinese decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-red-300">
            <span className="text-2xl">福</span>
            <div className="h-px w-16 bg-red-200"></div>
            <span className="text-2xl">禄</span>
            <div className="h-px w-16 bg-red-200"></div>
            <span className="text-2xl">寿</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

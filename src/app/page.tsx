'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function Home() {
  const { language } = useLanguage()
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      {/* Breaking news ticker */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          <span className="bg-white text-red-600 px-2 py-0.5 text-xs font-bold shrink-0">
            {language === 'zh' ? '快讯' : 'BREAKING'}
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <span className="text-sm">
              {language === 'zh' 
                ? '北京动物园诞生罕见白化帝企鹅 | 比特币突破历史新高 | 数字人民币跨境支付系统上线' 
                : 'Rare leucistic penguin born at Beijing Zoo | Bitcoin breaks all-time high | Digital Yuan cross-border system launches'}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Section */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-600"></span>
                  {language === 'zh' ? '今日头条' : 'Top Story'}
                </h2>
                <Link href="/hot" className="text-sm text-red-600 hover:underline">
                  {language === 'zh' ? '更多 >' : 'More >'}
                </Link>
              </div>
              <div className="p-4">
                <Link href={`/article/${featuredArticle.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-medium">
                          {language === 'zh' ? '独家' : 'Exclusive'}
                        </span>
                        <span className="bg-amber-500 text-white px-2 py-0.5 text-xs font-medium">
                          {language === 'zh' ? featuredArticle.categoryZh : featuredArticle.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors mb-2">
                        {language === 'zh' ? featuredArticle.titleZh : featuredArticle.titleEn}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                        {language === 'zh' ? featuredArticle.summaryZh : featuredArticle.summaryEn}
                      </p>
                      <div className="text-xs text-slate-400">
                        2026-01-24 {featuredArticle.time}
                      </div>
                    </div>
                    <div className="w-48 h-32 bg-slate-200 rounded overflow-hidden shrink-0">
                      <img src="/penguin-donald.png?v=2" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* News Grid */}
            <div className="bg-white rounded shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-600"></span>
                  {language === 'zh' ? '最新资讯' : 'Latest News'}
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            {/* Hot Rankings */}
            <div className="bg-white rounded shadow-sm mb-4">
              <div className="bg-red-600 text-white px-4 py-2 font-bold text-sm flex items-center justify-between">
                <span>{language === 'zh' ? '热点排行' : 'Hot Rankings'}</span>
                <span className="text-xs opacity-80">{language === 'zh' ? '实时更新' : 'Live'}</span>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 8).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-2 group">
                        <span className={`font-bold text-sm w-5 ${index < 3 ? 'text-red-600' : 'text-slate-400'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-600 group-hover:text-red-600 line-clamp-1 flex-1">
                          {language === 'zh' ? article.titleZh : article.titleEn}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Follow us */}
            <div className="bg-white rounded shadow-sm mb-4">
              <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm">
                {language === 'zh' ? '关注我们' : 'Follow Us'}
              </div>
              <div className="p-4 text-center">
                <div className="w-28 h-28 bg-slate-100 mx-auto mb-3 flex items-center justify-center text-slate-400 text-xs border">
                  QR Code
                </div>
                <p className="text-xs text-slate-500">{language === 'zh' ? '扫码关注公众号' : 'Scan to follow'}</p>
              </div>
            </div>

            {/* Ad */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="bg-slate-100 h-48 flex items-center justify-center text-slate-400 text-sm border border-dashed border-slate-300">
                {language === 'zh' ? '广告位招租' : 'Ad Space'}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

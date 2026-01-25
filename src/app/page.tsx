'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles } from '@/data/articles'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { language } = useLanguage()
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      {/* Breaking news ticker */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          <span className="bg-white text-amber-600 px-2 py-0.5 text-xs font-bold shrink-0 rounded">
            {language === 'en' ? 'BREAKING' : '快讯'}
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <span className="text-sm">
              {language === 'en' 
                ? 'WLFI sees massive growth | Bitcoin breaks all-time high | Zak Folkman exclusive interview'
                : 'WLFI实现大幅增长 | 比特币突破历史新高 | Zak Folkman独家专访'
              }
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Section */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-amber-500 rounded"></span>
                  {language === 'en' ? 'Top Story' : '头条新闻'}
                </h2>
                <Link href="/hot" className="text-sm text-amber-600 hover:underline">
                  {language === 'en' ? 'More >' : '更多 >'}
                </Link>
              </div>
              <div className="p-4">
                <Link href={`/article/${featuredArticle.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-500 text-white px-2 py-0.5 text-xs font-medium rounded">
                          {language === 'en' ? 'Exclusive' : '独家'}
                        </span>
                        <span className="bg-slate-700 text-white px-2 py-0.5 text-xs font-medium rounded">
                          {language === 'en' ? featuredArticle.category : featuredArticle.categoryZh}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors mb-2">
                        {language === 'en' ? featuredArticle.titleEn : featuredArticle.titleZh}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                        {language === 'en' ? featuredArticle.summaryEn : featuredArticle.summaryZh}
                      </p>
                      <div className="text-xs text-slate-400">
                        2026-01-24 {featuredArticle.time}
                      </div>
                    </div>
                    <div className="w-48 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                      <div className="text-white text-center p-3">
                        <div className="text-3xl font-bold">WLFI</div>
                        <div className="text-xs opacity-90">USD1</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* News Grid */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-amber-500 rounded"></span>
                  {language === 'en' ? 'Latest News' : '最新新闻'}
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherArticles.map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className="border-b border-slate-100 pb-3 hover:bg-amber-50 -mx-2 px-2 py-2 transition-colors rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-amber-600 text-xs font-medium">[{language === 'en' ? article.category : article.categoryZh}]</span>
                          <span className="text-slate-400 text-xs">{article.time}</span>
                        </div>
                        <h3 className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 text-sm">
                          {language === 'en' ? article.titleEn : article.titleZh}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            {/* Hot Rankings */}
            <div className="bg-white rounded-lg shadow-sm mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm flex items-center justify-between rounded-t-lg">
                <span>{language === 'en' ? 'Hot Rankings' : '热门排行'}</span>
                <span className="text-xs opacity-80">{language === 'en' ? 'Live' : '实时'}</span>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 10).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-2 group">
                        <span className={`font-bold text-sm w-5 ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-600 group-hover:text-amber-600 line-clamp-1 flex-1">
                          {language === 'en' ? article.titleEn : article.titleZh}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-slate-800 mb-2">{language === 'en' ? 'Stay Updated' : '保持关注'}</h3>
              <p className="text-sm text-slate-500 mb-3">{language === 'en' ? 'Get the latest news delivered to your inbox.' : '将最新新闻发送到您的邮箱。'}</p>
              <input 
                type="email" 
                placeholder={language === 'en' ? 'Enter your email' : '输入您的邮箱'}
                className="w-full border border-slate-300 rounded px-3 py-2 text-sm mb-2 focus:outline-none focus:border-amber-500"
              />
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded text-sm font-medium hover:from-amber-600 hover:to-orange-600">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

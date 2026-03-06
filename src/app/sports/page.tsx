'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticlesBySection, articles } from '@/data/articles'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function SportsPage() {
  const sportsArticles = getArticlesBySection('sports')
  const { language } = useLanguage()

  return (
    <div className="min-h-screen" style={{background: 'var(--bg-cream)'}}>
      <Header />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-red-700">{language === 'en' ? 'Home' : '首页'}</Link>
            <span>/</span>
            <span className="text-gray-700">{language === 'en' ? 'Sports' : '体育'}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 chinese-border-top">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h1 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-700 rounded"></span>
                  {language === 'en' ? 'Sports' : '体育'}
                </h1>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {sportsArticles.map((article, index) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className={`flex gap-4 pb-4 ${index < sportsArticles.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <span className={`font-bold text-xl w-8 ${index < 3 ? 'text-red-700' : 'text-gray-300'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-red-700 text-xs font-medium">[{language === 'en' ? article.category : article.categoryZh}]</span>
                            <span className="text-gray-400 text-xs">{article.time}</span>
                          </div>
                          <h3 className="font-medium text-gray-800 group-hover:text-red-700 transition-colors mb-1">
                            {language === 'en' ? article.titleEn : article.titleZh}
                          </h3>
                          <p className="text-gray-500 text-sm line-clamp-2">
                            {language === 'en' ? article.summaryEn : article.summaryZh}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="china-red-bar text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                {language === 'en' ? 'Sports Headlines' : '体育头条'}
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 8).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-2 group">
                        <span className={`font-bold text-sm w-5 ${index < 3 ? 'text-red-700' : 'text-gray-400'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-red-700 line-clamp-1 flex-1">
                          {language === 'en' ? article.titleEn : article.titleZh}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

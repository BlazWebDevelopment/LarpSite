'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticlesBySection, articles } from '@/data/articles'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function NewspaperPage() {
  const { language } = useLanguage()
  const newspaperArticles = getArticlesBySection('newspaper')

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-red-600">{language === 'zh' ? '首页' : 'Home'}</Link>
            <span>/</span>
            <span className="text-slate-700">{language === 'zh' ? '时政' : 'Politics'}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h1 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-600"></span>
                  {language === 'zh' ? '时政要闻' : 'Politics'}
                </h1>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {newspaperArticles.map((article, index) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className={`flex gap-4 pb-4 ${index < newspaperArticles.length - 1 ? 'border-b border-slate-100' : ''}`}>
                        <span className={`font-bold text-xl w-8 ${index < 3 ? 'text-red-600' : 'text-slate-300'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-red-600 text-xs font-medium">[{language === 'zh' ? article.categoryZh : article.category}]</span>
                            <span className="text-slate-400 text-xs">{article.time}</span>
                          </div>
                          <h3 className="font-medium text-slate-800 group-hover:text-red-600 transition-colors mb-1">
                            {language === 'zh' ? article.titleZh : article.titleEn}
                          </h3>
                          <p className="text-slate-500 text-sm line-clamp-2">
                            {language === 'zh' ? article.summaryZh : article.summaryEn}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-white rounded shadow-sm">
              <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm">
                {language === 'zh' ? '热门推荐' : 'Recommended'}
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
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

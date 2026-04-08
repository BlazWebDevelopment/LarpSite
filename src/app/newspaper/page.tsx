'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticlesBySection, articles } from '@/data/articles'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function NewspaperPage() {
  const sectionArticles = getArticlesBySection('newspaper')
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">{language === 'en' ? 'Home' : '首页'}</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium">{language === 'en' ? 'Politics' : '政治'}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h1 className="font-extrabold text-lg text-gray-900">
                  {language === 'en' ? 'Politics' : '政治'}
                </h1>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {sectionArticles.map((article, index) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className={`flex gap-4 pb-4 ${index < sectionArticles.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <span className={`font-bold text-sm w-8 h-8 flex items-center justify-center rounded-lg shrink-0 ${
                          index < 3 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-emerald-600 text-xs font-semibold px-2.5 py-0.5 bg-emerald-50 rounded-full">{language === 'en' ? article.category : article.categoryZh}</span>
                            <span className="text-gray-400 text-xs">{article.time}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1 leading-snug">
                            {language === 'en' ? article.titleEn : article.titleZh}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
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

          <aside className="hidden lg:block w-80 shrink-0">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-900 text-white px-5 py-3.5 font-bold text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                {language === 'en' ? 'Trending' : '热门'}
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 10).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-3 group items-start">
                        <span className={`font-bold text-xs w-6 h-6 flex items-center justify-center rounded-lg shrink-0 ${
                          index < 3 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-emerald-600 line-clamp-2 flex-1 transition-colors leading-snug">
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

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { searchArticles, articles } from '@/data/articles'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useLanguage } from '@/context/LanguageContext'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = query ? searchArticles(query) : []
  const { language } = useLanguage()

  return (
    <div className="min-h-screen" style={{background: 'var(--bg-cream)'}}>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-red-700">{language === 'en' ? 'Home' : '首页'}</Link>
            <span>/</span>
            <span className="text-gray-700">{language === 'en' ? 'Search Results' : '搜索结果'}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h1 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-700 rounded"></span>
                  {language === 'en' ? `Search Results for "${query}"` : `"${query}" 的搜索结果`}
                </h1>
                <span className="text-sm text-gray-500">
                  {language === 'en' ? `${results.length} results found` : `找到 ${results.length} 条结果`}
                </span>
              </div>
              <div className="p-4">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((article, index) => (
                      <Link key={article.id} href={`/article/${article.id}`} className="block group">
                        <div className={`flex gap-4 pb-4 ${index < results.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
                ) : (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      {language === 'en' ? 'No results found' : '未找到结果'}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {language === 'en' ? 'Try searching with different keywords' : '请尝试使用不同的关键词搜索'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="china-red-bar text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                {language === 'en' ? 'Popular Searches' : '热门搜索'}
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Link href="/search?q=Neuralink" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">Neuralink</Link>
                  <Link href="/search?q=AI" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">AI</Link>
                  <Link href="/search?q=tech" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">{language === 'en' ? 'Tech' : '科技'}</Link>
                  <Link href="/search?q=sports" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">{language === 'en' ? 'Sports' : '体育'}</Link>
                  <Link href="/search?q=finance" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">{language === 'en' ? 'Finance' : '财经'}</Link>
                  <Link href="/search?q=Kaoru" className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 border border-red-200">Kaoru</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm mt-4 border border-gray-200">
              <div className="china-red-bar text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                {language === 'en' ? 'Trending Now' : '热门趋势'}
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 5).map((article, index) => (
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

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{background: 'var(--bg-cream)'}}>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}

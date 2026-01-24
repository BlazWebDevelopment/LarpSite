'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { searchArticles, articles } from '@/data/articles'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = query ? searchArticles(query) : []

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Search Results</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h1 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <span className="w-1 h-5 bg-amber-500 rounded"></span>
                  Search Results for "{query}"
                </h1>
                <span className="text-sm text-slate-500">{results.length} results found</span>
              </div>
              <div className="p-4">
                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((article, index) => (
                      <Link key={article.id} href={`/article/${article.id}`} className="block group">
                        <div className={`flex gap-4 pb-4 ${index < results.length - 1 ? 'border-b border-slate-100' : ''}`}>
                          <span className={`font-bold text-xl w-8 ${index < 3 ? 'text-amber-500' : 'text-slate-300'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-amber-600 text-xs font-medium">[{article.category}]</span>
                              <span className="text-slate-400 text-xs">{article.time}</span>
                            </div>
                            <h3 className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors mb-1">
                              {article.titleEn}
                            </h3>
                            <p className="text-slate-500 text-sm line-clamp-2">
                              {article.summaryEn}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-slate-600 mb-2">No results found</h3>
                    <p className="text-slate-500 text-sm">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                Popular Searches
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Link href="/search?q=bitcoin" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">Bitcoin</Link>
                  <Link href="/search?q=AI" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">AI</Link>
                  <Link href="/search?q=tech" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">Tech</Link>
                  <Link href="/search?q=sports" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">Sports</Link>
                  <Link href="/search?q=finance" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">Finance</Link>
                  <Link href="/search?q=penguin" className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600">Penguin</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm mt-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                Trending Now
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 5).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-2 group">
                        <span className={`font-bold text-sm w-5 ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-600 group-hover:text-amber-600 line-clamp-1 flex-1">
                          {article.titleEn}
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
    <Suspense fallback={<div className="min-h-screen bg-slate-100 flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}

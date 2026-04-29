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
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-700">Search Results</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="bg-white border border-slate-200">
              <div className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h1 className="font-display text-xl tracking-widest flex items-center gap-3">
                  <span className="w-1 h-5 bg-blue-500 shrink-0" />
                  <span className="leading-snug">
                    Results for <span className="text-blue-300">&quot;{query}&quot;</span>
                  </span>
                </h1>
                <span className="text-xs text-white/60 shrink-0 uppercase tracking-widest font-semibold">
                  {results.length} {results.length === 1 ? 'result' : 'results'}
                </span>
              </div>
              <div>
                {results.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {results.map((article, index) => (
                      <Link key={article.id} href={`/article/${article.id}`} className="group flex items-start gap-5 p-5 md:p-6 hover:bg-blue-50/40 transition-colors">
                        <span className={`font-display text-3xl shrink-0 w-10 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-700 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                              {article.category}
                            </span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{article.time}</span>
                          </div>
                          <h3 className="tabloid-headline text-xl leading-tight mb-2 group-hover:text-blue-800 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                            {article.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 px-6">
                    <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="font-display text-2xl text-black mb-2">Nothing on the wire</h3>
                    <p className="text-slate-500 text-sm">Try different keywords, or browse the desks below.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:w-80 lg:shrink-0 space-y-4">
            <div className="bg-white border border-slate-200">
              <div className="bg-black text-white px-5 py-3 font-display text-sm tracking-widest">
                Popular Searches
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {['Gemini', 'AI', 'Bitcoin', 'Knicks', 'NYC', 'Yankees', 'Memecoin', 'OpenAI'].map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-800 px-3 py-1 text-xs font-bold border border-slate-200 transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200">
              <div className="bg-blue-700 text-white px-5 py-3 font-display text-sm tracking-widest">
                Trending Now
              </div>
              <ol className="divide-y divide-slate-100">
                {articles.slice(0, 6).map((article, index) => (
                  <li key={article.id}>
                    <Link href={`/article/${article.id}`} className="flex gap-3 p-4 group items-start">
                      <span className={`font-display text-2xl shrink-0 w-7 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-3 flex-1 leading-snug">
                        {article.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
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
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-600">
          Loading…
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  )
}

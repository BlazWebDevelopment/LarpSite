'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticlesBySection, articles } from '@/data/articles'
import Link from 'next/link'

export default function HotPage() {
  const hotArticles = getArticlesBySection('hot')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Breadcrumb */}
      <div className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-400">Hot News</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">
                <h1 className="font-bold text-lg text-white flex items-center gap-3 font-[family-name:var(--font-space)]">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
                  Hot News
                  <span className="ml-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                </h1>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {hotArticles.map((article, index) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className={`flex gap-4 pb-4 ${index < hotArticles.length - 1 ? 'border-b border-slate-700/50' : ''}`}>
                        <span className={`font-bold text-xl w-10 h-10 flex items-center justify-center rounded-xl shrink-0 ${
                          index < 3 
                            ? 'bg-gradient-to-br from-teal-500 to-cyan-500 text-white' 
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-teal-400 text-xs font-medium px-2 py-0.5 bg-teal-500/10 rounded-full">{article.category}</span>
                            <span className="text-slate-500 text-xs">{article.time}</span>
                          </div>
                          <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors mb-1">
                            {article.titleEn}
                          </h3>
                          <p className="text-slate-400 text-sm line-clamp-2">
                            {article.summaryEn}
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
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 font-bold text-sm flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                24h Hot List
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 10).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-3 group items-start">
                        <span className={`font-bold text-sm w-6 h-6 flex items-center justify-center rounded-lg shrink-0 ${
                          index < 3 
                            ? 'bg-gradient-to-br from-teal-500 to-cyan-500 text-white' 
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-400 group-hover:text-teal-400 line-clamp-2 flex-1 transition-colors">
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

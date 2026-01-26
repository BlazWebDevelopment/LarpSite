'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles } from '@/data/articles'
import Link from 'next/link'

export default function Home() {
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      {/* Breaking news ticker */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23fff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%221%22 cy=%221%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4 relative">
          <span className="bg-white text-teal-600 px-3 py-1 text-xs font-bold shrink-0 rounded-full shadow-lg animate-pulse">
            BREAKING
          </span>
          <div className="overflow-hidden whitespace-nowrap text-white">
            <span className="text-sm font-medium">
              WLFI surges amid memecoin boom! | Zak Folkman exclusive interview | Crypto markets reach new highs
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Section */}
            <div className="glass rounded-2xl mb-6 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">
                <h2 className="font-bold text-white flex items-center gap-3 font-[family-name:var(--font-space)]">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
                  Top Story
                </h2>
                <Link href="/hot" className="text-sm text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                  More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="p-5">
                <Link href={`/article/${featuredArticle.id}`} className="group block">
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                          Exclusive
                        </span>
                        <span className="bg-slate-700 text-slate-300 px-3 py-1 text-xs font-medium rounded-full">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3 font-[family-name:var(--font-space)]">
                        {featuredArticle.titleEn}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {featuredArticle.summaryEn}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Today {featuredArticle.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          31.4K views
                        </span>
                      </div>
                    </div>
                    <div className="w-52 h-36 rounded-xl overflow-hidden shrink-0 relative group-hover:scale-[1.02] transition-transform">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-purple-700"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        {/* WLFI icon */}
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-1 font-[family-name:var(--font-space)]">WLFI</div>
                          <div className="text-xs opacity-80">World Liberty Financial</div>
                          <div className="mt-2 flex items-center justify-center gap-1 text-green-400 text-sm">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            +127%
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-3 left-3 text-[10px] opacity-60 text-white">USD1</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* News Grid */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">
                <h2 className="font-bold text-white flex items-center gap-3 font-[family-name:var(--font-space)]">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
                  Latest News
                </h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherArticles.map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className="border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/50 hover:border-teal-500/30 transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-teal-400 text-xs font-medium px-2 py-0.5 bg-teal-500/10 rounded-full">{article.category}</span>
                          <span className="text-slate-500 text-xs">{article.time}</span>
                        </div>
                        <h3 className="font-medium text-slate-200 group-hover:text-teal-400 transition-colors line-clamp-2 text-sm">
                          {article.titleEn}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            {/* Hot Rankings */}
            <div className="glass rounded-2xl mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-3 font-bold text-sm flex items-center justify-between">
                <span className="flex items-center gap-2 font-[family-name:var(--font-space)]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                  </svg>
                  Hot Rankings
                </span>
                <span className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  Live
                </span>
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

            {/* Newsletter Signup */}
            <div className="glass rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="font-bold text-white mb-2 font-[family-name:var(--font-space)]">Stay Updated</h3>
                <p className="text-sm text-slate-400 mb-4">Get the latest news delivered to your inbox.</p>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-200 placeholder-slate-500"
                />
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-xl text-sm font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Crypto Ticker */}
            <div className="glass rounded-2xl p-5 mt-6">
              <h3 className="font-bold text-white mb-4 font-[family-name:var(--font-space)] flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Market Watch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">₿</div>
                    <span className="text-slate-300 text-sm font-medium">BTC</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">$98,432</div>
                    <div className="text-green-400 text-xs">+2.4%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">Ξ</div>
                    <span className="text-slate-300 text-sm font-medium">ETH</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">$3,891</div>
                    <div className="text-green-400 text-xs">+1.8%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-[10px]">WLFI</div>
                    <span className="text-slate-300 text-sm font-medium">WLFI</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">$0.0234</div>
                    <div className="text-green-400 text-xs">+127.3%</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

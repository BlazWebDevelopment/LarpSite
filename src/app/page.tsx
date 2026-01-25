'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles } from '@/data/articles'
import Link from 'next/link'
export default function Home() {
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      
      {/* Breaking news ticker */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">
          <span className="bg-white text-amber-600 px-2 py-0.5 text-xs font-bold shrink-0 rounded">
            BREAKING
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <span className="text-sm">
              Clawdbot officially launches! | Peter Steinberger announces Klawdbot | Developer community celebrates
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
                  Top Story
                </h2>
                <Link href="/hot" className="text-sm text-amber-600 hover:underline">
                  More &gt;
                </Link>
              </div>
              <div className="p-4">
                <Link href={`/article/${featuredArticle.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-500 text-white px-2 py-0.5 text-xs font-medium rounded">
                          Exclusive
                        </span>
                        <span className="bg-slate-700 text-white px-2 py-0.5 text-xs font-medium rounded">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors mb-2">
                        {featuredArticle.titleEn}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                        {featuredArticle.summaryEn}
                      </p>
                      <div className="text-xs text-slate-400">
                        2026-01-24 {featuredArticle.time}
                      </div>
                    </div>
                    <div className="w-48 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg overflow-hidden shrink-0 flex items-center justify-center relative">
                      <div className="text-white text-center">
                        {/* Robot claw icon */}
                        <svg className="w-12 h-12 mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                        <div className="text-lg font-bold tracking-wide">CLAWDBOT</div>
                        <div className="text-xs opacity-80">AI Coding Assistant</div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-2 left-2 text-xs opacity-60">v1.0</div>
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
                  Latest News
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherArticles.map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`} className="block group">
                      <div className="border-b border-slate-100 pb-3 hover:bg-amber-50 -mx-2 px-2 py-2 transition-colors rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-amber-600 text-xs font-medium">[{article.category}]</span>
                          <span className="text-slate-400 text-xs">{article.time}</span>
                        </div>
                        <h3 className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2 text-sm">
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
          <aside className="hidden lg:block w-72 shrink-0">
            {/* Hot Rankings */}
            <div className="bg-white rounded-lg shadow-sm mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm flex items-center justify-between rounded-t-lg">
                <span>Hot Rankings</span>
                <span className="text-xs opacity-80">Live</span>
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
                          {article.titleEn}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-slate-800 mb-2">Stay Updated</h3>
              <p className="text-sm text-slate-500 mb-3">Get the latest news delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded px-3 py-2 text-sm mb-2 focus:outline-none focus:border-amber-500"
              />
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded text-sm font-medium hover:from-amber-600 hover:to-orange-600">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

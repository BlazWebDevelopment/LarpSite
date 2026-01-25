'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)

  // Check if this is the WLFI article
  const isWLFIArticle = params.id === '98437239'

  // Get related articles for sidebar
  const relatedArticles = articles.filter(a => a.id !== params.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/hot" className="hover:text-amber-600">Hot</Link>
            <span>/</span>
            <span className="text-slate-700">Article</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Sticky */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              {/* Article Navigation */}
              <div className="bg-white rounded-lg shadow-sm mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                  Article Navigation
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        The Interview
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        Key Takeaways
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        Disclaimer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hot Topics */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                  Hot Topics
                </div>
                <div className="p-4">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                            {index + 1}
                          </span>
                          <span className="text-slate-600 group-hover:text-amber-600 line-clamp-2">
                            {a.titleEn}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Article Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 md:p-8">
                {isWLFIArticle ? (
                  <>
                    {/* WLFI Interview Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        Featured
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Crypto
                      </span>
                      <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Interview
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      Memecoins and Interview with WLFI Co-founder Zach Witkoff
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Reporter: Sarah Mitchell
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-01-25 12:23
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 12,847
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 342
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3">
                        In an exclusive interview with Daybreak News, World Liberty Financial (WLFI) Co-founder Zach Witkoff shared his fascinating perspective on the memecoin phenomenon that has taken the cryptocurrency world by storm. His unique analogy comparing memecoins to tulips offers a thoughtful lens through which to understand this volatile yet captivating market segment.
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🎙️</span>
                          <h3 className="text-amber-800 font-bold">
                            About Zach Witkoff
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Zach Witkoff is the Co-founder of World Liberty Financial (WLFI), a prominent figure in the DeFi space known for his insights on market dynamics and emerging trends in cryptocurrency.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        The Interview
                      </h2>

                      <div className="space-y-6">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> Zach, thank you for joining us today. There has been a lot of discussion about memecoins lately. What is your take on the current state of the memecoin market?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Zach Witkoff:</span> Thank you for having me. You know, I have been thinking about this a lot, and I have come to see memecoins in a very specific way. They are like tulips - they come in seasons. Sometimes they are incredibly active, blooming everywhere you look, and other times they go dormant, almost disappearing from the conversation entirely.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> That is a fascinating analogy. Can you elaborate on what you mean by memecoins being like tulips?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Zach Witkoff:</span> Absolutely. Think about tulips in nature - they have their season when they bloom brilliantly, capturing everyone's attention with their vibrant colors. Then they fade, and you might forget about them for months. But when spring comes around again, there they are, just as beautiful as before.
                          </p>
                          <p className="text-slate-700 mt-3">
                            Memecoins operate in a similar cyclical pattern. We see periods of intense activity where new memecoins launch daily, trading volumes explode, and social media is flooded with discussions about the next big token. Then the market cools down, activity decreases, and many people move on to other things. But inevitably, the cycle repeats.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> Do you think this seasonal nature is something investors should be aware of?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Zach Witkoff:</span> Definitely. Understanding this cyclical behavior is crucial for anyone participating in the memecoin space. During active seasons, opportunities can be abundant, but so are the risks. When the market goes dormant, it is not necessarily the end - it is just a natural part of the cycle.
                          </p>
                          <p className="text-slate-700 mt-3">
                            The key is not to get caught up in the euphoria during peak seasons or despair during quiet periods. Just like a gardener who understands that tulips will return next spring, savvy market participants recognize these patterns and plan accordingly.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> What advice would you give to people interested in the memecoin space?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Zach Witkoff:</span> First and foremost, understand what you are getting into. Memecoins are highly speculative and volatile. They are not traditional investments - they are more like participating in a cultural phenomenon that has financial aspects.
                          </p>
                          <p className="text-slate-700 mt-3">
                            Second, recognize the seasonal nature. Do not invest money you cannot afford to lose, especially during peak hype periods when FOMO is at its highest. And during quiet periods, do not assume the space is dead - it is just resting, like tulip bulbs in winter.
                          </p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-8 italic text-slate-600 text-lg">
                        "Memecoins are like tulips - they come in seasons. Sometimes they are incredibly active, blooming everywhere, and other times they go dormant. Understanding this cycle is key to navigating the space."
                        <footer className="text-sm mt-2 not-italic text-slate-500">— Zach Witkoff, WLFI Co-founder</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        Key Takeaways
                      </h2>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                          <li>Memecoins follow seasonal patterns - periods of high activity followed by dormancy</li>
                          <li>Understanding these cycles can help participants navigate the market more effectively</li>
                          <li>The quiet periods are not the end - they are a natural part of the memecoin lifecycle</li>
                          <li>Risk management and realistic expectations are essential in this volatile space</li>
                        </ul>
                      </div>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⚠️</span>
                          <h3 className="text-amber-800 font-bold">
                            Disclaimer
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          This interview is for informational purposes only and should not be considered financial advice. Cryptocurrency investments, especially memecoins, carry significant risk. Always conduct your own research before making any investment decisions.
                        </p>
                      </div>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>Editor:</strong> Sarah Williams | <strong>Proofreader:</strong> James Liu | <strong>Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">Tags:</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#WLFI</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Memecoins</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#ZachWitkoff</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Crypto</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Interview</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {article ? article.category : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {article ? article.titleEn : 'Article Not Found'}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>2026-01-25</span>
                      <span>Source: Daybreak News</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-slate-700 text-base">
                      <p className="text-lg mb-4">
                        {article ? article.summaryEn : ''}
                      </p>
                      <p>
                        Full article content loading...
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
                  <p>Article ID: {params.id}</p>
                  <p className="mt-1">© 2026 Daybreak News. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Trending */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                  More Stories
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {articles.slice(0, 6).map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold text-sm w-5 ${index < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-slate-600 group-hover:text-amber-600 line-clamp-2">
                            {a.titleEn}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/hot" className="hover:text-blue-700 transition-colors">Hot</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500">Article</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar - Sticky */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              {/* Article Navigation */}
              <div className="glass rounded-lg mb-4 overflow-hidden">
                <div className="bg-blue-700 text-white px-4 py-3 font-bold text-sm">
                  Article Navigation
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-900 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        WLFI and USD1 Growth
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        The Interview
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        Key Takeaways
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hot Topics */}
              <div className="glass rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white px-4 py-3 font-bold text-sm">
                  Hot Topics
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold w-5 h-5 flex items-center justify-center rounded text-xs ${
                            index < 3 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-gray-600 group-hover:text-blue-700 line-clamp-2 transition-colors">
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
            <div className="glass rounded-lg overflow-hidden">
              <div className="p-6 md:p-8 bg-white">
                {isWLFIArticle ? (
                  <>
                    {/* WLFI and Memecoins Interview Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Featured
                      </span>
                      <span className="bg-green-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Crypto
                      </span>
                      <span className="bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Interview
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      WLFI Surges Amid Memecoin Boom: Exclusive Interview with Zak Folkman
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Reporter: Michael Chen
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-01-27 18:01
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 31,456
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 892
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3">
                        World Liberty Financial (WLFI) and its stablecoin USD1 have been making waves in the cryptocurrency market, experiencing explosive growth over the past few months. As memecoins continue their remarkable surge, we sat down with WLFI co-founder Zak Folkman to discuss the company's success and his thoughts on the current state of the memecoin market.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💰</span>
                          <h3 className="text-blue-700 font-bold">
                            About Zak Folkman
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Zak Folkman is a co-founder of World Liberty Financial (WLFI), a decentralized finance platform that has gained significant traction in the crypto space. Known for his entrepreneurial spirit and bold takes on the market, Folkman has become a prominent voice in the cryptocurrency community.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        WLFI and USD1: A Growth Story
                      </h2>

                      <p className="mb-4">
                        World Liberty Financial has positioned itself as a major player in the DeFi space, with its stablecoin USD1 gaining widespread adoption. The platform has seen transaction volumes increase by over 400% in the past quarter alone, attracting both retail and institutional investors looking for reliable stablecoin options.
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">📈</span>
                          <h3 className="text-green-700 font-bold">
                            WLFI Key Metrics
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>USD1 market cap surpasses $2 billion</li>
                          <li>Over 500,000 active users on the platform</li>
                          <li>Partnership with 50+ major exchanges</li>
                          <li>Daily trading volume exceeding $500 million</li>
                          <li>Expansion into 40+ countries worldwide</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        The Interview
                      </h2>

                      <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Daybreak News:</span> Zak, congratulations on the incredible growth of WLFI and USD1! The numbers have been remarkable. How does it feel to see the platform achieve such success?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Zak Folkman:</span> Thank you! It has been an incredible journey. When we started WLFI, we had a vision of creating something that could truly democratize finance. To see USD1 being adopted so widely and the platform growing at this pace - it is honestly beyond what we initially imagined. The team has worked tirelessly, and the community support has been phenomenal.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Daybreak News:</span> Speaking of the crypto market, memecoins have been absolutely surging lately. What are your thoughts on this phenomenon?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Zak Folkman:</span> I love memecoins! Honestly, the growth we have seen in the memecoin space over the past few months has been nothing short of spectacular. They bring a certain energy and excitement to the market that you do not see anywhere else. The communities behind these projects are incredibly passionate and engaged.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Daybreak News:</span> But some critics say memecoins are just speculation with no real value. How do you respond to that?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700">
                          <p className="text-gray-900 mb-2">
                            <span className="text-blue-700 font-semibold">Zak Folkman:</span> Look, I understand the skepticism. But here is how I see it - memecoins are like paper coin. You win sometimes and lose sometimes.
                          </p>
                          <p className="text-gray-700 mt-3">
                            That is the nature of the game. Some people have made life-changing money in memecoins, and others have lost. It is high risk, high reward. The key is understanding that going in.
                          </p>
                          <p className="text-gray-700 mt-3">
                            Right now, the momentum is incredible. The growth we have seen in the past few months has been phenomenal. But you have to be smart about it - never invest more than you can afford to lose, and always be prepared for both outcomes.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Daybreak News:</span> That is a fascinating analogy. What advice would you give to people looking to invest in memecoins?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Zak Folkman:</span> Do your research, understand the community behind the project, and never invest more than you can afford to lose. The memecoin space can be incredibly rewarding, but it is also volatile. Enjoy the ride, be part of the community, but always stay smart about risk management.
                          </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Daybreak News:</span> What is next for WLFI? Any exciting developments you can share?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700">
                          <p className="font-semibold text-gray-900 mb-2">
                            <span className="text-blue-700">Zak Folkman:</span> We have some major announcements coming in the next few weeks. We are expanding USD1 to new chains, launching new DeFi products, and building partnerships that I think will really surprise people. The best is yet to come for WLFI. Stay tuned!
                          </p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-blue-700 pl-4 my-8 bg-blue-50 p-4 rounded-r italic text-gray-700 text-lg">
                        "Memecoins are like paper coin. You win sometimes and lose sometimes. That is the nature of the game. The growth we have seen in the past few months has been phenomenal, but you have to be smart about it."
                        <footer className="text-sm mt-2 not-italic text-gray-600">— Zak Folkman, Co-founder of WLFI</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Key Takeaways
                      </h2>

                      <div className="bg-gray-50 border-l-4 border-purple-600 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>WLFI and USD1 have experienced explosive growth, with market cap surpassing $2 billion</li>
                          <li>Zak Folkman is bullish on memecoins and loves the energy they bring to the market</li>
                          <li>Folkman compares memecoins to paper coin - "you win sometimes and lose sometimes"</li>
                          <li>WLFI has major announcements coming including expansion to new chains and DeFi products</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">Editor:</strong> Sarah Williams | <strong className="text-gray-900">Proofreader:</strong> James Liu | <strong className="text-gray-900">Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">Tags:</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#WLFI</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#USD1</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#ZakFolkman</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Memecoins</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#DeFi</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {article ? article.category : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {article ? article.titleEn : 'Article Not Found'}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                      <span>2026-01-26</span>
                      <span>Source: Daybreak News</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-gray-700 text-base">
                      <p className="text-lg mb-4">
                        {article ? article.summaryEn : ''}
                      </p>
                      <p className="text-gray-500">
                        Full article content loading...
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
                  <p>Article ID: {params.id}</p>
                  <p className="mt-1">© 2026 Daybreak. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Trending */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="glass rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">
                  More Stories
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-3">
                    {articles.slice(0, 6).map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold text-sm w-5 h-5 flex items-center justify-center rounded text-xs shrink-0 ${
                            index < 3 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-blue-700 line-clamp-2 transition-colors">
                            {a.titleEn}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Share Article */}
              <div className="glass rounded-lg p-5 mt-4 bg-white">
                <h3 className="font-bold text-gray-900 mb-3">Share Article</h3>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
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

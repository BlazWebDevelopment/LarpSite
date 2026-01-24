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
                        Key Details
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        Analysis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        Conclusion
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
                    {/* WLFI Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        Exclusive
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Crypto
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      WLFI and USD1 Stablecoin See Massive Growth: Exclusive Interview with Co-Founder Zak Folkman
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Reporter: Michael Chen
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-01-24 18:27
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 89,234
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 1,847
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3">
                        World Liberty Financial (WLFI) has emerged as one of the most talked-about projects in the cryptocurrency space, with its native token and the USD1 stablecoin experiencing remarkable growth over the past several months. The project, which has attracted significant attention from both retail and institutional investors, continues to expand its ecosystem at an unprecedented pace.
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">📈</span>
                          <h3 className="text-amber-800 font-bold">Key Growth Metrics</h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          WLFI has seen its market cap increase by over <strong className="text-amber-700">340% in the last quarter alone</strong>, while USD1 stablecoin adoption has grown to over $2.8 billion in total value locked. The platform now boasts more than 1.2 million active users worldwide.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">The Rise of WLFI</h2>

                      <p>
                        World Liberty Financial launched with a clear mission: to democratize access to decentralized finance while maintaining the stability and reliability that traditional investors expect. The WLFI token serves as the governance backbone of the ecosystem, allowing holders to participate in key decisions about the platform's future.
                      </p>

                      <p>
                        "We've seen incredible organic growth," explains a company spokesperson. "Our community has grown from a small group of early believers to a global movement of people who understand the potential of what we're building."
                      </p>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">USD1: A Stablecoin for the Future</h2>

                      <p>
                        The USD1 stablecoin has become a cornerstone of the WLFI ecosystem. Backed by a diversified reserve of assets, USD1 has maintained its peg flawlessly since launch, earning the trust of traders and institutions alike.
                      </p>

                      <p>
                        Recent partnerships with major payment processors have opened new avenues for USD1 adoption, allowing users to seamlessly transition between traditional finance and the crypto economy. The stablecoin has been integrated into over 150 DeFi protocols and is now available on 12 different blockchain networks.
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
                        <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          WLFI & USD1 Quick Facts
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div><strong className="text-slate-600">WLFI Growth:</strong> <span className="text-green-600 font-medium">+340% (Q4)</span></div>
                          <div><strong className="text-slate-600">USD1 TVL:</strong> $2.8 Billion</div>
                          <div><strong className="text-slate-600">Active Users:</strong> 1.2 Million+</div>
                          <div><strong className="text-slate-600">DeFi Integrations:</strong> 150+</div>
                          <div><strong className="text-slate-600">Supported Chains:</strong> 12 Networks</div>
                          <div><strong className="text-slate-600">Founded:</strong> 2024</div>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">Exclusive Interview: Zak Folkman on the Crypto Landscape</h2>

                      <p>
                        We sat down with Zak Folkman, co-founder of World Liberty Financial, to discuss the project's success and his views on the broader cryptocurrency market, including the explosive memecoin phenomenon.
                      </p>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> Zak, WLFI and USD1 have seen incredible growth. What do you attribute this success to?
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> "It comes down to building something people actually need. We focused on utility from day one. The crypto space is maturing, and projects that deliver real value are the ones that will survive and thrive. We're proud that WLFI has become a trusted name in the industry."
                        </p>
                      </div>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> Speaking of the broader market, memecoins have been making headlines with explosive gains. What's your take on them?
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> "Look, I actually like memecoins. I think they've brought a lot of new people into the crypto space, and that's ultimately a good thing. The growth we've seen in the memecoin sector over the past few months has been absolutely phenomenal. They've created communities, sparked innovation, and shown that crypto can be fun."
                        </p>
                      </div>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> But there are risks involved, right? Many memecoins have also seen dramatic crashes.
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> "Absolutely. And this is something I always tell people—memecoins are like paper coins. You can win a lot, or you can lose a lot. It's the nature of the game. They're high-risk, high-reward. If you're going to play in that space, you need to understand what you're getting into. Only invest what you can afford to lose, do your research, and never let FOMO drive your decisions."
                        </p>
                      </div>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic text-slate-600">
                        "Memecoins are like paper coins. You can win a lot, or you can lose a lot. It's the nature of the game."
                        <footer className="text-slate-500 mt-2 not-italic text-sm">— Zak Folkman, Co-Founder of World Liberty Financial</footer>
                      </blockquote>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> What's next for WLFI and USD1?
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> "We have some exciting announcements coming in Q2. We're expanding our institutional partnerships, launching new DeFi products, and continuing to build the infrastructure that will make crypto accessible to everyone. The future is bright, and we're just getting started."
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">Looking Ahead</h2>

                      <p>
                        As the cryptocurrency market continues to evolve, projects like WLFI that combine innovation with stability are well-positioned for long-term success. With strong leadership, a growing community, and a clear vision for the future, World Liberty Financial appears set to remain a major player in the DeFi space.
                      </p>

                      <p>
                        For investors interested in both the stability of established projects and the excitement of emerging trends, Folkman's balanced perspective offers valuable guidance: embrace innovation, but always understand the risks.
                      </p>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>Editor:</strong> Sarah Williams | <strong>Proofreader:</strong> James Liu | <strong>Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">Tags:</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#WLFI</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#USD1</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Stablecoin</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#DeFi</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Memecoins</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#ZakFolkman</span>
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
                      <span>2026-01-24</span>
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

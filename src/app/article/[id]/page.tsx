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
                        Why Clawdbot is Amazing
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
                    {/* Clawdbot Interview Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        Featured
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Tech
                      </span>
                      <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Interview
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      Clawdbot Launches: Interview with Creator Peter Steinberger
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
                        Views 24,891
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 567
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3">
                        The wait is finally over. Clawdbot, the revolutionary AI-powered development assistant created by Peter Steinberger, has officially launched today, and the developer community is absolutely buzzing with excitement. Early adopters are already calling it a game-changer that will transform how we write and debug code.
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🤖</span>
                          <h3 className="text-amber-800 font-bold">
                            About Peter Steinberger
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Peter Steinberger is a renowned software engineer and entrepreneur, best known for founding PSPDFKit. With decades of experience in the tech industry, he has now turned his attention to AI-assisted development tools with the creation of Clawdbot.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        Why Clawdbot is Amazing
                      </h2>

                      <p className="mb-4">
                        Clawdbot represents a new paradigm in AI-assisted coding. Unlike other tools that simply autocomplete code, Clawdbot understands context, anticipates developer needs, and provides intelligent suggestions that feel almost telepathic. The feedback from beta testers has been overwhelmingly positive.
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">✨</span>
                          <h3 className="text-green-800 font-bold">
                            Key Features
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 text-sm">
                          <li>Intelligent context-aware code suggestions</li>
                          <li>Real-time bug detection and fixes</li>
                          <li>Seamless integration with all major IDEs</li>
                          <li>Natural language code generation</li>
                          <li>Lightning-fast performance</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        The Interview
                      </h2>

                      <div className="space-y-6">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> Peter, congratulations on the launch! The response has been incredible. How does it feel to finally release Clawdbot to the world?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Peter Steinberger:</span> Thank you so much! Honestly, it feels surreal. We have been working on Clawdbot for quite some time, and seeing the positive reactions from developers around the world is incredibly rewarding. The team put their hearts into this project, and it is amazing to see it finally out there helping people code better and faster.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> What makes Clawdbot different from other AI coding assistants on the market?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Peter Steinberger:</span> Great question. Clawdbot was built from the ground up with developer experience in mind. We did not just want to create another autocomplete tool. We wanted something that truly understands what you are trying to accomplish and helps you get there faster. The intelligence behind Clawdbot learns from your coding patterns and adapts to your style. It is like having a brilliant pair programmer who knows exactly how you think.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> The developer community seems to love it already. What has been your favorite piece of feedback so far?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Peter Steinberger:</span> Oh, there have been so many great messages! But I think my favorite was from a developer who said Clawdbot helped them finish a project in two days that would have normally taken two weeks. That is exactly what we set out to achieve - giving developers superpowers so they can focus on the creative and challenging parts of their work.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> This is exciting! So what is planned next for Clawdbot? Any upcoming features you can share with us?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="text-slate-800 mb-2">
                            <span className="text-blue-600 font-semibold">Peter Steinberger:</span> Absolutely! I am thrilled to announce that we are working on something very special. We are adding Clawdbot's brother to the family - his name is "Klawdbot" with a K.
                          </p>
                          <p className="text-slate-700 mt-3">
                            Yes, we are literally just changing the first letter from C to K. And there is a reason for that! You see, Clawdbot and Klawdbot are almost identical in their core capabilities - they share the same DNA, the same intelligence, the same passion for helping developers. But that single letter change represents something important.
                          </p>
                          <p className="text-slate-700 mt-3">
                            The K in Klawdbot stands for a subtle but meaningful shift in focus. While Clawdbot excels at general coding assistance, Klawdbot will be specialized for Kubernetes and cloud-native development. Same brilliant brain, just with a different specialty. We wanted the naming to reflect that they are family - nearly identical, but each with their own unique strength. Sometimes the smallest changes make the biggest difference, and that one letter is a perfect symbol of that philosophy.
                          </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-amber-600">Daybreak News:</span> That is a clever approach! When can we expect Klawdbot to launch?
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="font-semibold text-slate-800 mb-2">
                            <span className="text-blue-600">Peter Steinberger:</span> We are aiming for a release in the next few months. We want to make sure Klawdbot is just as polished and amazing as Clawdbot before we put it in developers' hands. Stay tuned - it is going to be great!
                          </p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-8 italic text-slate-600 text-lg">
                        "We are adding Clawdbot's brother - Klawdbot with a K. That single letter change represents something important. Same brilliant brain, just with a different specialty. Sometimes the smallest changes make the biggest difference."
                        <footer className="text-sm mt-2 not-italic text-slate-500">— Peter Steinberger, Creator of Clawdbot</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        Key Takeaways
                      </h2>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                          <li>Clawdbot has officially launched and is receiving rave reviews from the developer community</li>
                          <li>The tool offers intelligent, context-aware coding assistance that adapts to individual developers</li>
                          <li>Klawdbot (with a K) is coming soon - specialized for Kubernetes and cloud-native development</li>
                          <li>The single letter change symbolizes the philosophy that small changes can make a big difference</li>
                        </ul>
                      </div>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>Editor:</strong> Sarah Williams | <strong>Proofreader:</strong> James Liu | <strong>Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">Tags:</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Clawdbot</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Klawdbot</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#PeterSteinberger</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#AI</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#DevTools</span>
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

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import Image from 'next/image'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)

  // Check if this is the Trump statue article
  const isTrumpStatueArticle = params.id === '98437239'

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
                {isTrumpStatueArticle ? (
                  <>
                    {/* Trump Statue Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Featured
                      </span>
                      <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Breaking
                      </span>
                      <span className="bg-gray-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Politics
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Helena, Montana Mayor Wilmot Collins Receives Bronze Donald Trump Statue
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
                        2026-01-27 01:12 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 42,891
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 1,247
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden">
                        <img 
                          src="/statue.png" 
                          alt="Mayor Wilmot Collins stands next to the bronze statue of former President Donald Trump in his office at Helena City Hall" 
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Photo: Mayor Wilmot Collins stands next to the bronze statue of former President Donald Trump in his office at Helena City Hall. The statue was delivered this morning, January 27, 2026. (Photo by Sarah Martinez/Daybreak News)
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3">
                        Helena, Montana Mayor Wilmot Collins received an unexpected delivery this morning—a life-sized bronze statue of former President Donald Trump. The statue, which arrived at Helena City Hall shortly after 8:00 AM, has quickly become the center of attention and controversy in Montana's capital city.
                      </p>

                      <p className="mb-4">
                        The bronze bust, standing approximately three feet tall on its pedestal, depicts the former president in a suit jacket, collared shirt, and tie. The statue features Trump's characteristic hairstyle and facial expression, rendered in exquisite detail by the bronze casting. A rectangular nameplate affixed to the front of the base clearly displays "DONALD TRUMP" in embossed capital letters.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🏛️</span>
                          <h3 className="text-blue-700 font-bold">
                            About Mayor Wilmot Collins
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Wilmot Collins is the mayor of Helena, Montana, and made history in 2017 when he became the first Black mayor elected in the state. A Liberian refugee who came to the United States in 1994, Collins has been a prominent figure in Montana politics and has served as mayor since his election. He is known for his work on refugee resettlement and community development.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        The Morning Delivery
                      </h2>

                      <p className="mb-4">
                        According to sources close to the mayor's office in Helena, Montana, the bronze statue arrived via a private delivery service around 8:15 AM on Monday, January 27th. The delivery was unannounced, catching city staff by surprise. The statue was carefully unpacked and placed in Mayor Collins' office at Helena City Hall, where it now sits prominently on a credenza near his desk.
                      </p>

                      <p className="mb-4">
                        "I came into my office this morning and there it was," Mayor Collins told Daybreak News in an exclusive interview. "The delivery slip indicated it was a gift, but there was no sender information. It's quite a piece of work—the craftsmanship is remarkable. The bronze has this beautiful patina, and the detail is extraordinary."
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        The Bronze Statue Details
                      </h2>

                      <p className="mb-4">
                        The statue itself is a masterful work of bronze sculpture. The bust captures Trump from the chest up, showing him in formal attire. The bronze material has a rich, traditional reddish-brown patina on the face, hair, and tie, while the suit jacket has a slightly lighter, almost silvery-bronze finish that creates an interesting contrast. The pedestal is made of matching dark bronze, and the entire piece weighs approximately 85 pounds.
                      </p>

                      <div className="bg-gray-50 border-l-4 border-gray-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🎨</span>
                          <h3 className="text-gray-900 font-bold">
                            Statue Specifications
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>Material: Bronze with patina finish</li>
                          <li>Height: Approximately 3 feet (including pedestal)</li>
                          <li>Weight: 85 pounds</li>
                          <li>Style: Bust (head and shoulders)</li>
                          <li>Nameplate: Embossed "DONALD TRUMP" on bronze base</li>
                          <li>Condition: Excellent, professionally crafted</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Community Reaction
                      </h2>

                      <p className="mb-4">
                        News of the statue's arrival spread quickly through Helena, Montana, with reactions ranging from curiosity to concern. Some residents expressed support for displaying the statue, while others questioned the appropriateness of having a political figure's statue in the mayor's office.
                      </p>

                      <p className="mb-4">
                        "I think it's important to remember that this is a gift, and Mayor Collins is handling it with grace," said Helena, Montana City Council member Patricia Johnson. "However, we need to consider what message this sends to our diverse community. Helena is a welcoming city, and we want to make sure all residents feel represented."
                      </p>

                      <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-700 my-6">
                        <p className="font-semibold text-gray-900 mb-2">
                          <span className="text-blue-700">Mayor Collins:</span> "I understand this is unusual, and I'm taking time to consider the best way forward. The statue is a work of art, and I respect the craftsmanship that went into creating it. At the same time, I'm mindful of my responsibility to represent all the people of Helena, Montana, regardless of their political views."
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        The Mystery Donor
                      </h2>

                      <p className="mb-4">
                        The identity of who sent the bronze statue remains unknown. The delivery service has been contacted but has declined to provide information about the sender, citing privacy policies. City officials are investigating the matter, though Mayor Collins has indicated he's not particularly concerned about finding the donor.
                      </p>

                      <p className="mb-4">
                        "Whoever sent this clearly put a lot of thought and expense into it," Collins noted. "Bronze statues of this quality don't come cheap. But my focus right now is on serving the people of Helena, Montana, not on solving this particular mystery."
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Historical Context
                      </h2>

                      <p className="mb-4">
                        This isn't the first time a Trump statue has made headlines. In recent years, various bronze and other material statues of the former president have appeared in public spaces, often sparking debate. However, this appears to be the first instance of such a statue being delivered directly to a mayor's office unannounced.
                      </p>

                      <p className="mb-4">
                        Political memorabilia and statues have long been part of American political culture, but the delivery of an unsolicited statue to a public official's office is highly unusual. Legal experts suggest that while there's nothing illegal about receiving such a gift, public officials must be careful about how they handle items that could be seen as political statements.
                      </p>

                      <blockquote className="border-l-4 border-blue-700 pl-4 my-8 bg-blue-50 p-4 rounded-r italic text-gray-700 text-lg">
                        "The statue is a work of art, and I respect the craftsmanship that went into creating it. At the same time, I'm mindful of my responsibility to represent all the people of Helena, Montana, regardless of their political views."
                        <footer className="text-sm mt-2 not-italic text-gray-600">— Mayor Wilmot Collins, Helena, Montana</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        What's Next?
                      </h2>

                      <p className="mb-4">
                        Mayor Collins has not yet decided what to do with the bronze statue. Options under consideration include keeping it in his office, moving it to a city museum or historical society, or returning it to the sender if they can be identified. For now, the statue remains in his office, where it has become something of a conversation piece.
                      </p>

                      <p className="mb-4">
                        "I'm taking this one day at a time," Collins said. "Right now, I'm focused on the work the people of Helena, Montana elected me to do. The statue is interesting, but it's not going to distract me from serving my community."
                      </p>

                      <div className="bg-gray-50 border-l-4 border-purple-600 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>Mayor Wilmot Collins received an unannounced bronze statue of Donald Trump on January 27, 2026</li>
                          <li>The statue arrived at Helena, Montana City Hall around 8:15 AM via private delivery</li>
                          <li>The bronze bust weighs approximately 85 pounds and stands 3 feet tall</li>
                          <li>The identity of the donor remains unknown</li>
                          <li>Mayor Collins is considering options for the statue's future</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">Reporter:</strong> Michael Chen | <strong className="text-gray-900">Photographer:</strong> Sarah Martinez | <strong className="text-gray-900">Editor:</strong> Sarah Williams | <strong className="text-gray-900">Proofreader:</strong> James Liu | <strong className="text-gray-900">Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">Tags:</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#WilmotCollins</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#DonaldTrump</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#HelenaMontana</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#BronzeStatue</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Politics</span>
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
                      <span>2026-01-27</span>
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

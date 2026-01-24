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

  // Check if this is the penguin article
  const isPenguinArticle = params.id === '98437239'

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
                {isPenguinArticle ? (
                  <>
                    {/* Penguin Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        Exclusive
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Wildlife
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      Extremely Rare! Beijing Zoo Welcomes Leucistic Emperor Penguin "Donald"
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Reporter: Wang Xiaohua
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-01-24 12:00
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 128,456
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 2,341
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-8">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="/penguin-donald.png?v=2" 
                          alt="Donald the Leucistic Emperor Penguin"
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-slate-500 mt-2 bg-slate-50 p-2 border-l-4 border-amber-500 rounded-r">
                        ▲ Leucistic Emperor penguin "Donald" receiving care in incubator. Photo: Zhang Mingyuan / Beijing Zoo
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3">
                        Beijing Zoo announced today the birth of an extremely rare leucistic Emperor penguin chick in the early morning of January 24th. The zoo has named this precious little one "Donald." With only a 0.1% chance of being born with leucism, Donald is the first artificially bred leucistic Emperor penguin in China, making him invaluable for scientific research and conservation.
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⭐</span>
                          <h3 className="text-amber-800 font-bold">Extremely Rare: Leucistic Penguin</h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          Leucism is a rare genetic mutation that causes reduced melanin in an animal's body, resulting in pale or white plumage. Unlike albinism, leucistic penguins retain normal eye coloration. <strong className="text-amber-700">Only approximately 0.1% of penguins worldwide exhibit this mutation</strong>, making Donald a one-in-a-thousand rare individual.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">The Birth of Donald</h2>

                      <p>
                        According to Li Jianguo, head of the Beijing Zoo's Penguin Pavilion, Donald's parents "Albert" and "Bella" are the most popular Emperor penguin couple at the zoo. After 65 days of careful incubation, little Donald finally hatched at 3:47 AM this morning. When staff noticed the unusually pale coloring of this little penguin's feathers, the entire team was stunned.
                      </p>

                      <p>
                        "When we saw the shell starting to crack, the entire team held their breath," Li recalled. "But when Donald fully emerged, we noticed his plumage was significantly lighter than normal penguins. After expert confirmation, we realized this was an extremely rare leucistic Emperor penguin! The entire staff was speechless with excitement."
                      </p>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic text-slate-600">
                        "Donald is very healthy, weighing about 315 grams at birth. What's most amazing is his unique pale gray-white plumage—a classic characteristic of the leucistic gene. In my thirty years of penguin research, this is the first time I've witnessed the birth of a leucistic Emperor penguin."
                        <footer className="text-slate-500 mt-2 not-italic text-sm">— Li Jianguo, Head of Beijing Zoo Penguin Pavilion</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">A One-in-a-Thousand Miracle</h2>

                      <p>
                        Leucism is extremely rare in penguins. Statistics show that only about 1 in 1,000 penguins may exhibit leucistic characteristics. This means Donald's birth is a true natural miracle.
                      </p>

                      <p>
                        Experts from the Chinese Academy of Sciences' Institute of Zoology noted that leucistic penguins face greater survival challenges in the wild because their unique coloring makes them more visible to predators. However, in the protected environment of the zoo, Donald will receive the best possible care.
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
                        <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          Donald's Profile
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div><strong className="text-slate-600">Name:</strong> Donald</div>
                          <div><strong className="text-slate-600">Species:</strong> Emperor Penguin</div>
                          <div><strong className="text-slate-600">Special Trait:</strong> <span className="text-amber-600 font-medium">Leucistic (0.1%)</span></div>
                          <div><strong className="text-slate-600">Birth Date:</strong> Jan 24, 2026</div>
                          <div><strong className="text-slate-600">Birthplace:</strong> Beijing Zoo</div>
                          <div><strong className="text-slate-600">Birth Weight:</strong> 315 grams</div>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">Special Care</h2>

                      <p>
                        Currently, Donald is receiving 24-hour monitoring in a specially designed incubator. The incubator maintains a temperature of 32.5°C with humidity controlled at around 60%, providing the optimal environment for this little penguin's growth. Due to the sensitive skin of leucistic penguins, caretakers have also specially adjusted the lighting intensity.
                      </p>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic text-slate-600">
                        "Donald's birth is not only a pride of Beijing Zoo but also a milestone in China's wildlife conservation. As China's first artificially bred leucistic Emperor penguin, he will provide invaluable opportunities for studying penguin genetics."
                        <footer className="text-slate-500 mt-2 not-italic text-sm">— Zhang Weimin, Director of Beijing Zoo</footer>
                      </blockquote>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">Public Viewing</h2>

                      <p>
                        Beijing Zoo has announced that to protect Donald's health, he will spend the first few weeks in the incubator. It is expected that by mid-February, when Donald is strong enough, visitors will be able to see this "one-in-a-thousand" new member up close in a special observation area at the Penguin Pavilion.
                      </p>

                      <p>
                        The zoo will also launch a live stream, allowing penguin enthusiasts across the country to watch Donald grow in real-time.
                      </p>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>Editor:</strong> Li Ming | <strong>Proofreader:</strong> Zhang Hua | <strong>Reviewer:</strong> Wang Jianguo
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">Tags:</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Leucistic</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Penguin</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Donald</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#BeijingZoo</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Wildlife</span>
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

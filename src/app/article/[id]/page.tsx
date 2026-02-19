'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import Pengu1 from '@/context/Pengu1.png'
import Pengu2 from '@/context/Pengu2.png'
import Pengu3 from '@/context/Pengu3.jpg'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)

  // Check if this is the featured penguin/Neuralink article
  const isPenguinFeatureArticle = params.id === '98437239'

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
                        About Matt Furie
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
                {isPenguinFeatureArticle ? (
                  <>
                    {/* Featured Penguin / Neuralink Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        Featured
                      </span>
                      <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Breaking
                      </span>
                      <span className="bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded">
                        Brain–Computer Interface
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Neuralink Tests Brain Chip in Fairy Penguin, Pushing BCI Into New Territory
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Reporter: Daybreak Tech Desk
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-02-19 10:18 AM
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Views 8,234
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comments 342
                      </span>
                    </div>

                    {/* Featured Image - Penguin in care */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden">
                        <img
                          src={Pengu1.src}
                          alt="Veterinary staff gently holding a small fairy penguin for examination before surgery"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Neuralink veterinarians prepare a rescued fairy penguin for surgery in a dedicated aquatic care suite. Staff later nicknamed the bird <span className="font-semibold">Joop</span> as he began to recover and waddle curiously around the lab. (Photo courtesy of Daybreak News)
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3">
                        In a move that shifts the brain–computer interface race from primates to seabirds, Elon Musk’s Neuralink has quietly implanted a modified N1 brain chip into a fairy penguin, decoding the animal’s swimming intentions in real time and raising profound questions about the future of human–machine symbiosis.
                      </p>

                      <p className="mb-4">
                        During a livestream from the company’s Fremont facility, viewers watched the small penguin gliding through a sensor‑lined pool as a dashboard of neural spiking data flickered on screen. Engineers explained that they were decoding patterns from the bird’s motor regions with sub‑20‑millisecond latency—predicting left or right turns before Joop’s flippers even began to move, according to Neuralink’s internal logs and presentations reported by TechBullion. The project, internally dubbed “Magellan,” is the first time the startup has publicly demonstrated its hardware working in a non‑mammalian brain. [TechBullion report](https://techbullion.com/a-giant-leap-for-birdkind-neuralink-successfully-implants-chip-in-fairy-penguin/).
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🧠</span>
                          <h3 className="text-blue-700 font-bold">
                            Inside Project Magellan
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Neuralink engineers say the avian program, codenamed <span className="font-semibold">Project Magellan</span>, was designed to stress‑test the flexibility of the N1 architecture. Unlike mammals, birds rely on a densely packed pallium rather than a layered cortex for higher‑order processing, forcing the team to redesign electrode geometry, insertion angles, and firmware to interpret a different kind of neural circuitry without damaging tissue during rapid underwater maneuvers.
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Why a Fairy Penguin?
                      </h2>

                      <p className="mb-4">
                        Fairy penguins—also known as little penguins—are the smallest penguin species on Earth, weighing just over a kilogram. Their three‑dimensional underwater navigation, reliance on fast visual feedback, and tightly coordinated flipper strokes create an unusually rich dataset for a brain chip to decode. Neuralink’s team argues that if their system can map the motor intentions of a bird that evolved for life in cold coastal waters, adapting the same architecture to the human brain should be comparatively straightforward.
                      </p>

                      <p className="mb-4">
                        According to company engineers, the N1‑A implant used in Joop is a miniaturized spin on the primate‑ready N1: thinner, more flexible electrode threads, a reshaped package to fit the penguin’s skull, and firmware tuned to the higher baseline firing rates typically seen in avian pallium tissue. The surgery reportedly lasted six hours and involved robotic insertion of more than 500 electrodes—each one thinner than a human hair.
                      </p>

                      {/* Second image: Joop walking */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden">
                          <img
                            src={Pengu2.src}
                            alt="Fairy penguin walking on a smooth floor after veterinary care"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          After surgery, Joop spends time out of the pool, re‑learning to balance and walk while Neuralink staff monitor gait, appetite, and social behavior.
                        </p>
                      </div>

                      <div className="bg-gray-50 border-l-4 border-gray-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⚙️</span>
                          <h3 className="text-gray-900 font-bold">
                            N1‑A Penguin Implant at a Glance
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>Subject: A four‑year‑old fairy penguin, later nicknamed Joop by staff</li>
                          <li>Device: N1‑A, a miniaturized avian‑variant of Neuralink’s standard implant</li>
                          <li>Electrodes: 512 flexible threads inserted by surgical robot</li>
                          <li>Primary signals: Motor intention during swimming, balance adjustments, and flipper coordination</li>
                          <li>Latency: Sub‑20‑millisecond decoding from neural spike to predicted movement, according to internal demos</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Ethics, Welfare and the Road to Humans
                      </h2>

                      <p className="mb-4">
                        Neuralink insists that Joop is a “resident for life” in a purpose‑built aquatic facility, receiving round‑the‑clock veterinary care and enrichment. In the company’s footage, he appears bright and active—chasing feeder fish, preening, and engaging with staff. Yet animal‑welfare groups argue that invasive neurosurgery on wild‑variant species crosses a line, especially when long‑term cognitive or social impacts remain unknown.
                      </p>

                      {/* Third image: MRI / scanning setup */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden">
                          <img
                            src={Pengu3.src}
                            alt="Medical team operating advanced imaging equipment similar to what is used to plan brain implant surgery"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          Advanced imaging and monitoring hardware—similar to human‑grade MRI suites—is used to map Joop&apos;s brain and track post‑operative changes over time.
                        </p>
                      </div>

                      <p className="mb-4">
                        Bioethicists interviewed by Daybreak News warn that success in non‑human animals can normalize increasingly aggressive experiments in the name of “progress.” Supporters counter that demonstrating cross‑species compatibility is exactly what is needed before moving to fragile human patients with paralysis or neurodegenerative disease. For now, Joop’s data streams—flipper strokes translated into colorful spikes on a screen—have become a Rorschach test for how far society is willing to go to merge brains with machines.
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        Key Takeaways
                      </h2>

                      <div className="bg-gray-50 border-l-4 border-purple-600 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>Neuralink has implanted a customized N1‑A brain chip in a fairy penguin, decoding its swimming intentions with sub‑20‑millisecond latency.</li>
                          <li>The bird, later nicknamed Joop, is part of an internal program called Project Magellan that tests Neuralink hardware in non‑mammalian brains.</li>
                          <li>Engineers redesigned electrode geometry and firmware to work with avian pallium rather than a layered cortex.</li>
                          <li>Animal‑welfare advocates question the ethics and long‑term impact of invasive BCI experiments on sensitive social species.</li>
                          <li>Supporters say cross‑species validation is a crucial step toward safe human applications, especially for patients with severe neurological conditions.</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">Reporter:</strong> Daybreak Tech Desk | <strong className="text-gray-900">Photographer:</strong> Daybreak Visuals | <strong className="text-gray-900">Editor:</strong> Lin Xia | <strong className="text-gray-900">Proofreader:</strong> James Liu | <strong className="text-gray-900">Reviewer:</strong> David Park
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">Tags:</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Neuralink</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#BrainComputerInterface</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Penguin</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Joop</span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-all border border-gray-300">#Tech</span>
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

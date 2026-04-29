'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { articles } from '@/data/articles'
import Link from 'next/link'

const FALLBACK_HERO_IMAGE =
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&q=80&auto=format&fit=crop'

export default function Home() {
  const featuredArticle = articles[0]
  const subFeatured = articles.slice(1, 3)
  const gridArticles = articles.slice(3, 11)
  const moreArticles = articles.slice(11)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Breaking ticker */}
      <div className="bg-blue-700 border-y border-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 overflow-hidden">
          <span className="bg-black text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] shrink-0">
            Breaking
          </span>
          <div className="overflow-hidden flex-1">
            <span className="animate-ticker text-white text-sm font-medium">
              King Charles back in NYC after 19 years · UAE leaves OPEC May 1 · Musk vs OpenAI trial opens in California · Knicks roll Hawks 127-97, take 3-2 series lead · Gemini wires AI agents into live crypto trading · Apple unveils Vision Pro 2 · Fed cuts rates 50 basis points
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabloid splash */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="bg-blue-700 text-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
                Front Page
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                Today&apos;s Top Story
              </span>
            </div>
            <Link href={`/article/${featuredArticle.id}`} className="text-xs text-blue-700 font-semibold uppercase tracking-widest hover:underline">
              Read full story →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hero */}
            <Link href={`/article/${featuredArticle.id}`} className="lg:col-span-8 group block">
              <article className="bg-white border border-slate-200 hover:border-blue-700 transition-colors">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={featuredArticle.image ?? FALLBACK_HERO_IMAGE}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-blue-700 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                      Live · Apr 27, 2026
                    </span>
                    <span className="bg-black text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 border-t-2 border-black">
                  <h1 className="tabloid-headline text-4xl md:text-5xl lg:text-6xl mb-4 group-hover:text-blue-800 transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4 line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-200 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    <span>{featuredArticle.byline ?? 'DCN News Staff'}</span>
                    <span className="text-slate-300">·</span>
                    <span>{featuredArticle.time}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-blue-700">1,284 reads</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Sub-features */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {subFeatured.map((a) => (
                <Link key={a.id} href={`/article/${a.id}`} className="group block flex-1">
                  <article className="bg-white border border-slate-200 hover:border-blue-700 transition-colors h-full flex flex-col overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={a.image ?? FALLBACK_HERO_IMAGE}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                          {a.category}
                        </span>
                        <span className="bg-white/90 text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                          {a.time}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="tabloid-headline text-xl md:text-[22px] leading-tight mb-2 group-hover:text-blue-800 transition-colors">
                        {a.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mt-1">
                        {a.summary}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main grid */}
          <div className="lg:col-span-8 min-w-0">
            <div className="section-rule mb-6 pb-2">
              <h2 className="font-display text-3xl text-black tracking-wide">Top Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {gridArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.id}`} className="group block">
                  <article className="bg-white border border-slate-200 hover:border-blue-700 transition-all h-full p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-700 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{article.time}</span>
                    </div>
                    <h3 className="tabloid-headline text-xl md:text-2xl leading-tight mb-3 group-hover:text-blue-800 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
                      {article.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 uppercase tracking-wider font-semibold flex items-center justify-between">
                      <span>DCN News</span>
                      <span className="text-blue-700 group-hover:underline">Read →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Compact list */}
            <div className="section-rule mb-5 pb-2">
              <h2 className="font-display text-2xl text-black tracking-wide">More From the Wire</h2>
            </div>
            <div className="bg-white border border-slate-200 divide-y divide-slate-100">
              {moreArticles.map((article, idx) => (
                <Link key={article.id} href={`/article/${article.id}`} className="group flex items-start gap-4 p-4 hover:bg-blue-50/40 transition-colors">
                  <span className="font-display text-2xl text-blue-700 w-8 shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest">{article.time}</span>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-800 leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[180px] space-y-6">
              <div className="bg-white border border-slate-200">
                <div className="bg-black text-white px-5 py-3 flex items-center justify-between">
                  <span className="font-display text-lg tracking-widest">Most Read</span>
                  <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">24h</span>
                </div>
                <ol className="divide-y divide-slate-100">
                  {articles.slice(0, 6).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-3 p-4 group items-start">
                        <span className={`font-display text-2xl shrink-0 w-7 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-3 flex-1 leading-snug">
                          {article.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div id="newsletter" className="bg-black text-white p-6 border-t-4 border-blue-600 scroll-mt-32">
                <div className="font-display text-2xl tracking-widest mb-2">Get the Wire</div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  Five sharp headlines, every morning. Free.
                </p>
                <NewsletterForm variant="stacked" tone="dark" />
              </div>

              <div className="bg-white border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-lg tracking-widest text-black">Markets</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Live</span>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    { sym: 'BTC', name: 'Bitcoin', val: '$104,288.52', chg: '+3.42%', up: true },
                    { sym: 'ETH', name: 'Ethereum', val: '$5,712.18', chg: '+2.18%', up: true },
                    { sym: 'SOL', name: 'Solana', val: '$248.94', chg: '+5.61%', up: true },
                    { sym: 'DOGE', name: 'Dogecoin', val: '$0.421', chg: '-1.24%', up: false },
                    { sym: 'S&P', name: 'S&P 500', val: '5,894.12', chg: '-0.34%', up: false },
                  ].map((m) => (
                    <div key={m.sym} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                      <div>
                        <span className="font-bold text-slate-900 mr-2">{m.sym}</span>
                        <span className="text-xs text-slate-500">{m.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 text-sm">{m.val}</div>
                        <div className={`text-xs font-semibold ${m.up ? 'text-emerald-600' : 'text-rose-600'}`}>{m.chg}</div>
                      </div>
                    </div>
                  ))}
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

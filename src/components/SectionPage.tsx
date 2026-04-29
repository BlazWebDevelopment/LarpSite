'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticlesBySection, articles, type Article } from '@/data/articles'

interface SectionPageProps {
  section: Article['section']
  title: string
  kicker?: string
}

export default function SectionPage({ section, title, kicker }: SectionPageProps) {
  const sectionArticles = getArticlesBySection(section)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-700">{title}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main column */}
          <div className="flex-1 min-w-0">
            <div className="section-rule mb-6 pb-2 flex items-end justify-between">
              <div>
                {kicker && (
                  <div className="text-[11px] tracking-[0.28em] uppercase text-blue-700 font-bold mb-1">
                    {kicker}
                  </div>
                )}
                <h1 className="font-display text-4xl md:text-5xl text-black tracking-wide">{title}</h1>
              </div>
              <div className="hidden md:block text-xs text-slate-400 uppercase tracking-widest font-semibold">
                {sectionArticles.length} {sectionArticles.length === 1 ? 'story' : 'stories'}
              </div>
            </div>

            {sectionArticles.length === 0 ? (
              <div className="bg-white border border-slate-200 p-10 text-center">
                <h3 className="font-display text-xl text-black mb-2">Nothing on the wire yet</h3>
                <p className="text-slate-500 text-sm">No stories filed in this section. Check back soon.</p>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 divide-y divide-slate-100">
                {sectionArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="group flex items-start gap-5 p-5 md:p-6 hover:bg-blue-50/40 transition-colors"
                  >
                    <span className={`font-display text-3xl md:text-4xl shrink-0 w-12 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-700 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                          {article.time}
                        </span>
                      </div>
                      <h3 className="tabloid-headline text-xl md:text-2xl mb-2 group-hover:text-blue-800 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                        {article.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 lg:shrink-0">
            <div className="sticky top-[180px] space-y-4">
              <div className="bg-white border border-slate-200">
                <div className="bg-black text-white px-5 py-3 flex items-center justify-between">
                  <span className="font-display text-lg tracking-widest">Trending</span>
                  <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">Now</span>
                </div>
                <ol className="divide-y divide-slate-100">
                  {articles.slice(0, 8).map((a, index) => (
                    <li key={a.id}>
                      <Link href={`/article/${a.id}`} className="flex gap-3 p-4 group items-start">
                        <span className={`font-display text-2xl shrink-0 w-7 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-3 flex-1 leading-snug">
                          {a.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-700 text-white p-5">
                <div className="font-display text-lg tracking-widest mb-1">All Sections</div>
                <p className="text-white/80 text-xs mb-3">Jump to another desk.</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { href: '/hot', label: 'Hot' },
                    { href: '/newspaper', label: 'Politics' },
                    { href: '/live', label: 'Live' },
                    { href: '/opinion', label: 'Opinion' },
                    { href: '/finance', label: 'Finance' },
                    { href: '/tech', label: 'Tech' },
                    { href: '/culture', label: 'Culture' },
                    { href: '/sports', label: 'Sports' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 transition-colors"
                    >
                      {link.label}
                    </Link>
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

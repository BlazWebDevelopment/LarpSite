'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import MemeAgentImg from '@/context/MemeAgent.png'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)

  const isFeaturedArticle = params.id === '98437239'
  const isBoomerArticle = params.id === '98437267'

  const relatedArticles = articles.filter(a => a.id !== params.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-500">
            <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/hot" className="hover:text-blue-700 transition-colors">Hot</Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-700">Article</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-[180px] space-y-4">
              <div className="bg-white border border-slate-200">
                <div className="bg-black text-white px-4 py-3 font-display text-sm tracking-widest">In This Article</div>
                <div className="p-4">
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a href="#" className="text-slate-900 hover:text-blue-700 flex items-center gap-2 transition-colors font-bold">
                        <span className="w-1.5 h-1.5 bg-blue-700"></span>
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-slate-300"></span>
                        How it works (MCP)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-slate-300"></span>
                        Meet the Meme Agent
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-slate-300"></span>
                        Limits &amp; safety
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-slate-200">
                <div className="bg-blue-700 text-white px-4 py-3 font-display text-sm tracking-widest">Trending</div>
                <div className="p-4">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-display text-base w-6 shrink-0 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                            {index + 1}
                          </span>
                          <span className="text-slate-700 group-hover:text-blue-700 line-clamp-2 transition-colors leading-snug font-semibold">
                            {a.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="bg-white border border-slate-200 shadow-[0_1px_0_0_rgba(10,18,36,0.04)]">
              <div className="p-6 md:p-10">
                {isFeaturedArticle ? (
                  <>
                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                      <span className="bg-blue-700 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">Crypto</span>
                      <span className="bg-slate-100 text-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] border border-slate-200">AI Agent</span>
                      <span className="bg-black text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">Gemini</span>
                      <span className="bg-emerald-500 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] animate-pulse">LIVE · Apr 27, 2026</span>
                    </div>

                    <h1 className="tabloid-headline text-3xl md:text-5xl mb-5 leading-[0.95]">
                      Gemini Rolls Out &quot;Agentic Trading&quot;: Let ChatGPT, Claude — and Even Meme Agents — Directly Trade Your Crypto Account
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-semibold text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>By DCN News Crypto Desk</span>
                      <span className="text-slate-300">·</span>
                      <span>2026-04-27 · 16:05</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-blue-700">1,284 reads</span>
                      <span className="text-slate-300">·</span>
                      <span>92 comments</span>
                    </div>

                    <figure className="mb-6">
                      <img
                        src={MemeAgentImg.src}
                        alt="Gemini Agentic Trading dashboard with Meme Agent connected"
                        className="w-full h-auto border border-slate-200"
                      />
                      <figcaption className="text-xs text-slate-500 mt-2 italic">
                        Gemini&apos;s new &quot;Agentic Trading&quot; panel — a &quot;My Trading Agent&quot; and a dedicated &quot;Meme Agent&quot; can be authorized to trade under granular, user-defined permissions. (Image: Gemini)
                      </figcaption>
                    </figure>

                    <article className="article-content text-slate-800 text-base leading-relaxed">
                      <p className="text-lg font-semibold text-slate-900 mb-6 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                        Gemini today rolled out &quot;Agentic Trading,&quot; a new product that wires AI models like ChatGPT and Claude directly into your crypto account. Going live on April 27, 2026, the feature uses Anthropic&apos;s open Model Context Protocol (MCP) to let an authorized AI agent monitor markets, place trades, and manage risk under preset rules. Gemini calls it &quot;the first agentic trading tool to be available directly through a regulated US-based exchange.&quot;
                      </p>

                      <p>
                        The flow is simple: pick the agent you trust, set permissions, then review and connect. The new dashboard exposes a three-step &quot;Connect. Authorize. Automate.&quot; path, with granular toggles for what an agent can actually do — view balances, view order history, place orders, edit orders, and (off by default) withdraw funds. Users can pause, edit, or revoke access at any time.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-5 my-6">
                        <h3 className="text-black font-display text-lg tracking-wide mb-2">How it works under the hood</h3>
                        <p className="text-slate-800 text-sm leading-relaxed mb-0">
                          Gemini has wired its full trading API into the MCP standard. Supported models can request market data and call trading functions through that bridge, then act inside the limits a user has set. The exchange also shipped &quot;Trading Skills&quot; — modular functions an agent can invoke, including &quot;Find the Spread&quot; (current bid-ask for any pair) and &quot;Retrieve Candles&quot; (historical OHLC data for pattern checks and backtesting). More skills are planned.
                        </p>
                      </div>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        Meet the Meme Agent: AI that trades the trend for you
                      </h2>

                      <p>
                        Alongside a generic &quot;My Trading Agent,&quot; Gemini&apos;s connected-agents list now showcases a dedicated Meme Agent — a purpose-built AI for the messy, fast-moving memecoin corner of crypto. The pitch is honest: most retail traders cannot watch X, Telegram and on-chain feeds at 3 a.m., but an agent can. With your rules, a Meme Agent can flag trending tokens, evaluate liquidity, size in small, set a hard stop, and bail when momentum dies.
                      </p>

                      <p>
                        In the official screenshot, &quot;Meme Agent&quot; sits right below &quot;My Trading Agent&quot; in the Connected Agents panel — both showing as Active, both labeled with last activity timestamps. The implication is clear: agents are no longer one-size-fits-all. You can run a conservative agent on your spot account and a tightly-leashed Meme Agent on a separate sub-balance for memecoin trades, each with its own permissions.
                      </p>

                      <div className="bg-slate-50 border-l-4 border-black p-5 my-6">
                        <h3 className="text-black font-display text-lg tracking-wide mb-2">What a Meme Agent can do for you</h3>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-800 text-sm">
                          <li>Watch trending tickers across social and on-chain signals 24/7</li>
                          <li>Use &quot;Find the Spread&quot; before sizing — skip illiquid traps</li>
                          <li>Backtest patterns with &quot;Retrieve Candles&quot; before going live</li>
                          <li>Place orders only inside the position size and max-loss you set</li>
                          <li>Auto-exit on stop-loss, take-profit, or momentum reversal</li>
                        </ul>
                      </div>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        You stay in control
                      </h2>

                      <p>
                        Gemini is leaning hard into the &quot;secure by design / always in control&quot; framing. The Agent Permissions sidebar shows exactly which capabilities are on (view balances, view order history, place orders, edit orders) and which are off (withdraw funds is blocked by default). A persistent footer reminds users: &quot;You can pause or revoke access at any time.&quot;
                      </p>

                      <p>
                        That matters because Agentic Trading lands during a wider push to give AI agents real hands on real systems. Coinbase has backed x402 (an open payments standard for AI bots, now under the Linux Foundation), and Tempo is building MPP for machine-to-machine payments — both also use MCP. Gemini&apos;s difference is that it brings agentic AI directly inside a regulated exchange, not a wallet wrapper.
                      </p>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        Limits, safety, and what the agent should not do
                      </h2>

                      <p>
                        Letting an AI place real trades raises real questions: How do you stop a model from chasing pumps? How do you cap a bad day? Gemini&apos;s answer is the permissions UI plus Trading Skills that force the agent to look at spreads and history before acting. Withdrawals being off by default is the most important safety rail — even if the model is jailbroken or hallucinates, it cannot drain the account.
                      </p>

                      <p>
                        Gemini frames the launch as the start of a category, not a one-off feature: &quot;Agentic trading isn&apos;t just a feature.&quot; Expect more Trading Skills, more agent templates (a Meme Agent today, perhaps a DCA Agent or Hedging Agent tomorrow), and tighter MCP integrations with leading models.
                      </p>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        Key takeaways
                      </h2>

                      <div className="bg-slate-50 border-l-4 border-blue-700 p-5 my-6">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-800">
                          <li>Gemini&apos;s Agentic Trading is live as of April 27, 2026 — AI models like ChatGPT and Claude can connect via MCP to monitor markets and trade.</li>
                          <li>A dedicated Meme Agent template is featured in Connected Agents — purpose-built for memecoin trading with strict, user-set limits.</li>
                          <li>Gemini ships &quot;Trading Skills&quot; like Find the Spread and Retrieve Candles, with more on the way.</li>
                          <li>Withdrawals are off by default; users can pause, edit or revoke any agent at any time.</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-4 mt-8 text-sm text-slate-700">
                        <strong className="text-black">Reporter:</strong> DCN News Crypto Desk | <strong className="text-black">Editor:</strong> Marcus Chen | <strong className="text-black">Source:</strong> Gemini, The Block, MoneyCheck | <strong className="text-black">Reviewer:</strong> David Park
                      </div>
                    </article>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Tags</span>
                        {['#Gemini', '#AgenticTrading', '#MemeAgent', '#MCP', '#ChatGPT', '#Claude', '#Crypto'].map((tag) => (
                          <span key={tag} className="bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all border border-slate-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : isBoomerArticle ? (
                  <>
                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                      <span className="bg-blue-700 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">ETF Concept</span>
                      <span className="bg-slate-100 text-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] border border-slate-200">50+ Thesis</span>
                      <span className="bg-black text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">BOOMER</span>
                    </div>

                    <h1 className="tabloid-headline text-3xl md:text-5xl mb-5 leading-[0.95]">
                      Meet BOOMER: A VanEck &quot;Old People ETF&quot; Concept Built for Investors 50+
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-semibold text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>By DCN News Finance Desk</span>
                      <span className="text-slate-300">·</span>
                      <span>2026-04-16 · 09:45</span>
                    </div>

                    <article className="article-content text-slate-800 text-base leading-relaxed">
                      <p className="text-lg font-semibold text-slate-900 mb-6 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                        GENZ asks a sharp question: if digital natives are reshaping spending and risk habits, why not build an ETF around them? The GENZ idea targets Gen Z and younger millennials who live their financial lives online, across segments like &quot;Millennial Finance,&quot; the &quot;Gig Economy,&quot; and digital sports betting.
                      </p>

                      <p>
                        BOOMER turns that premise on its head. This article is fictional and satirical: it imagines a &quot;VanEck Old People ETF&quot; where the beneficiaries are people 50 and up. Instead of investing in youth-first disruption, BOOMER asks what happens when the theme is centered on accumulated wealth, more mature spending patterns, and the way investors typically allocate risk after age 50.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-5 my-6">
                        <h3 className="text-black font-display text-lg tracking-wide mb-2">How BOOMER would &quot;find&quot; the 50+ names</h3>
                        <p className="text-slate-800 text-sm leading-relaxed mb-0">
                          In this thought experiment, &quot;old people ETF&quot; does not mean buying companies because they have pension plans. It means weighting constituents toward companies expected to benefit from the 50+ cohort as customers — and (in this playful methodology) toward companies whose shareholder/customer profile is skewed toward investors aged 50+. In short: BOOMER imagines an index with a demographic tilt, then rebalances to keep the theme consistent.
                        </p>
                      </div>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        What BOOMER could invest in
                      </h2>

                      <div className="bg-slate-50 border-l-4 border-black p-5 my-6">
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-800 text-sm">
                          <li>50+ Digital Access: accessibility-first platforms that help older users shop, manage accounts, and access services online.</li>
                          <li>Care &amp; Outcomes: health management, care coordination, and &quot;aging well&quot; services and tools.</li>
                          <li>Retirement &amp; Risk Navigation: brokerage, advisory, and fintech infrastructure that turns risk into plain language.</li>
                        </ul>
                      </div>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        Limits &amp; safety (because demographics can drift)
                      </h2>

                      <p>
                        Even if the thesis sounds clean, demographic themes can change fast. Health outcomes evolve, technology adoption among older users can accelerate or slow, and a real implementation would struggle to measure &quot;who holds the stock&quot; reliably. The safer design always includes diversification and transparent risk controls.
                      </p>

                      <h2 className="font-display text-2xl text-black mt-10 mb-4 pb-2 border-b-2 border-blue-700 tracking-wide">
                        Key takeaways
                      </h2>

                      <div className="bg-slate-50 border-l-4 border-blue-700 p-5 my-6">
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-800">
                          <li>GENZ frames the market around digital native consumers; BOOMER flips the lens to 50+.</li>
                          <li>In this fictional methodology, the &quot;50+ holder&quot; idea is a demographic tilt, not a magic rule.</li>
                          <li>Themes guide the story, but risk controls decide the outcome.</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-4 mt-8 text-sm text-slate-700">
                        <strong className="text-black">Reporter:</strong> DCN News Finance Desk | <strong className="text-black">Source:</strong> GENZ theme inspiration (fictional BOOMER rewrite)
                      </div>
                    </article>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Tags</span>
                        {['#BOOMER', '#VanEck', '#ETF', '#50Plus', '#Demographics'].map((tag) => (
                          <span key={tag} className="bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all border border-slate-200">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : article ? (
                  <>
                    <div className="mb-4 flex items-center gap-2 flex-wrap">
                      <span className="bg-blue-700 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
                        {article.category}
                      </span>
                      <span className="bg-slate-100 text-slate-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] border border-slate-200">
                        {article.section}
                      </span>
                    </div>

                    <h1 className="tabloid-headline text-3xl md:text-5xl mb-5 leading-[0.95]">
                      {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest font-semibold text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>By {article.byline ?? 'DCN News Staff'}</span>
                      <span className="text-slate-300">·</span>
                      <span>{article.date ?? '2026-04-29'} · {article.time}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-blue-700">{(parseInt(article.id.slice(-4), 10) * 7 % 3500) + 320} reads</span>
                    </div>

                    {article.image ? (
                      <figure className="mb-6">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-auto border border-slate-200 object-cover"
                        />
                        <figcaption className="text-xs text-slate-500 mt-2 italic">
                          {article.title} — DCN News file image.
                        </figcaption>
                      </figure>
                    ) : null}

                    <article className="article-content text-slate-800 text-base leading-relaxed">
                      <p className="text-lg font-semibold text-slate-900 mb-6 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                        {article.summary}
                      </p>

                      {article.body.length > 0 ? (
                        article.body.map((paragraph, idx) => (
                          <p key={idx} className="mb-5">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-slate-500 italic">More from this story is being filed by the desk. Check back shortly.</p>
                      )}

                      <div className="bg-slate-50 border border-slate-200 p-4 mt-8 text-sm text-slate-700">
                        <strong className="text-black">Reporter:</strong> {article.byline ?? 'DCN News Staff'} | <strong className="text-black">Section:</strong> {article.section.toUpperCase()} | <strong className="text-black">Source:</strong> DCN News
                      </div>
                    </article>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Tags</span>
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all border border-slate-200">
                          #{article.category.replace(/\s+/g, '')}
                        </span>
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all border border-slate-200">
                          #{article.section}
                        </span>
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold rounded-full hover:bg-blue-700 hover:text-white cursor-pointer transition-all border border-slate-200">
                          #DCNNews
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="tabloid-headline text-3xl md:text-5xl mb-5 leading-[0.95]">
                      Article Not Found
                    </h1>
                    <p className="text-slate-500">
                      Sorry, the story you&apos;re looking for has either been moved or never existed. Head back to the{' '}
                      <Link href="/" className="text-blue-700 underline">front page</Link> for today&apos;s headlines.
                    </p>
                  </>
                )}

                <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 uppercase tracking-widest font-semibold flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>Article ID: {params.id}</span>
                  <span>© 2026 DCN News. All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </main>

          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-[180px] space-y-4">
              <div className="bg-white border border-slate-200">
                <div className="bg-black text-white px-5 py-3 font-display text-sm tracking-widest">More Stories</div>
                <ul className="divide-y divide-slate-100">
                  {articles.slice(0, 6).map((a, index) => (
                    <li key={a.id}>
                      <Link href={`/article/${a.id}`} className="flex gap-3 p-4 group">
                        <span className={`font-display text-xl shrink-0 w-6 ${index < 3 ? 'text-blue-700' : 'text-slate-300'}`}>
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-3 transition-colors leading-snug">
                          {a.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-200 p-5">
                <h3 className="font-display text-lg tracking-widest text-black mb-3">Share Article</h3>
                <div className="flex items-center gap-2">
                  {['X', 'in', 'tg', 'cp'].map((icon) => (
                    <button key={icon} className="w-10 h-10 bg-slate-100 hover:bg-blue-700 hover:text-white border border-slate-200 hover:border-blue-700 flex items-center justify-center transition-all">
                      <span className="text-slate-700 text-xs font-bold">{icon}</span>
                    </button>
                  ))}
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

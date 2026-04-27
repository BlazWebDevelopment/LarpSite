'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import MemeAgentImg from '@/context/MemeAgent.png'
import { useLanguage } from '@/context/LanguageContext'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)
  const { language } = useLanguage()

  const isFeaturedArticle = params.id === '98437239'
  const isBoomerArticle = params.id === '98437267'

  const relatedArticles = articles.filter(a => a.id !== params.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-[color:var(--bg-secondary)]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-900/60 border-b border-white/10 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-300/80">
            <Link href="/" className="hover:text-violet-300 transition-colors">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/hot" className="hover:text-violet-300 transition-colors">
              {language === 'en' ? 'Hot' : '热点'}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-slate-100 font-medium">{language === 'en' ? 'Article' : '文章'}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Sticky */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden mb-4 backdrop-blur">
                <div className="bg-gray-900 text-white px-4 py-3 font-semibold text-sm">
                  {language === 'en' ? 'In This Article' : '文章导航'}
                </div>
                <div className="p-4">
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a href="#" className="text-slate-100 hover:text-violet-300 flex items-center gap-2 transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                        {language === 'en' ? 'Introduction' : '引言'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-300/80 hover:text-violet-300 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {language === 'en' ? 'How it works (MCP)' : '底层如何运作（MCP）'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-300/80 hover:text-violet-300 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {language === 'en' ? 'Meet the Meme Agent' : '认识Meme Agent'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-300/80 hover:text-violet-300 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {language === 'en' ? 'Limits & safety' : '边界与安全'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur">
                <div className="bg-gray-900 text-white px-4 py-3 font-semibold text-sm">
                  {language === 'en' ? 'Trending' : '热门话题'}
                </div>
                <div className="p-4">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold w-5 h-5 flex items-center justify-center rounded-md text-xs shrink-0 ${
                            index < 3
                              ? 'bg-gray-900 text-white'
                              : 'bg-white/10 text-slate-200/80'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-slate-300/80 group-hover:text-violet-300 line-clamp-2 transition-colors leading-snug">
                            {language === 'en' ? a.titleEn : a.titleZh}
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
            <div className="bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur">
              <div className="p-6 md:p-10">
                {isFeaturedArticle ? (
                  <>
                    {/* Featured Gemini Agentic Trading article */}
                    <div className="mb-4 flex items-center gap-3 flex-wrap">
                      <span className="bg-violet-500/20 text-violet-200 px-3 py-1 text-xs font-semibold rounded-full border border-violet-400/30">
                        {language === 'en' ? 'Crypto' : '加密货币'}
                      </span>
                      <span className="bg-cyan-400/15 text-cyan-200 px-3 py-1 text-xs font-semibold rounded-full border border-cyan-300/25">
                        {language === 'en' ? 'AI Agent' : '智能代理'}
                      </span>
                      <span className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        Gemini
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-400/30 animate-pulse">
                        {language === 'en' ? 'LIVE · Apr 27, 2026' : '直播 · 2026年4月27日'}
                      </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Gemini Rolls Out "Agentic Trading": Let ChatGPT, Claude — and Even Meme Agents — Directly Trade Your Crypto Account'
                        : 'Gemini推出"Agentic Trading"：让ChatGPT、Claude和Meme Agent直接管理你的加密账户'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/70 mb-6 pb-4 border-b border-white/10">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Crypto Desk' : '记者：DaybreakNews加密货币部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-04-27 16:05
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 1,284' : '阅读 1,284'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 92' : '评论 92'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                        <img
                          src={MemeAgentImg.src}
                          alt={language === 'en' ? 'Gemini Agentic Trading dashboard with Meme Agent connected' : 'Gemini Agentic Trading界面，已连接Meme Agent'}
                          className="w-full h-auto rounded-lg opacity-[0.96]"
                        />
                      </div>
                      <p className="text-sm text-slate-300/70 mt-2 italic">
                        {language === 'en'
                          ? 'Gemini\'s new "Agentic Trading" panel — a "My Trading Agent" and a dedicated "Meme Agent" can be authorized to trade under granular, user-defined permissions. (Image: Gemini)'
                          : 'Gemini新版"Agentic Trading"界面——"My Trading Agent"与专用的"Meme Agent"可在用户精细授权下进行交易。（图：Gemini）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-200/90 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-50 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-50 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'Gemini today rolled out "Agentic Trading," a new product that wires AI models like ChatGPT and Claude directly into your crypto account. Going live on April 27, 2026, the feature uses Anthropic\'s open Model Context Protocol (MCP) to let an authorized AI agent monitor markets, place trades, and manage risk under preset rules. Gemini calls it "the first agentic trading tool to be available directly through a regulated US-based exchange."'
                          : 'Gemini今日正式上线"Agentic Trading"——一项把ChatGPT、Claude等AI模型直接接入你加密账户的新产品。该功能于2026年4月27日上线，通过Anthropic的开放协议Model Context Protocol（MCP），让被授权的AI代理在预设规则下监控市场、下单交易并管理风险。Gemini将其称为"首个直接通过受监管美国交易所提供的Agentic Trading工具"。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The flow is simple: pick the agent you trust, set permissions, then review and connect. The new dashboard exposes a three-step "Connect. Authorize. Automate." path, with granular toggles for what an agent can actually do — view balances, view order history, place orders, edit orders, and (off by default) withdraw funds. Users can pause, edit, or revoke access at any time.'
                          : '流程很简单：选择你信任的代理，设置权限，然后确认连接。新版面板用三步走的方式呈现"Connect. Authorize. Automate."（连接·授权·自动化），并提供细粒度开关，控制代理具体能做什么——查看余额、查看订单历史、下单、修改订单、以及（默认关闭的）提现。用户随时可暂停、修改或撤销授权。'
                        }
                      </p>

                      <div className="bg-white/5 border-l-4 border-violet-400 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-slate-50 font-bold">
                            {language === 'en' ? 'How it works under the hood' : '底层是怎么跑通的'}
                          </h3>
                        </div>
                        <p className="text-slate-200/90 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Gemini has wired its full trading API into the MCP standard. Supported models can request market data and call trading functions through that bridge, then act inside the limits a user has set. The exchange also shipped "Trading Skills" — modular functions an agent can invoke, including "Find the Spread" (current bid-ask for any pair) and "Retrieve Candles" (historical OHLC data for pattern checks and backtesting). More skills are planned.'
                            : 'Gemini已把整套交易API桥接到MCP标准。受支持的模型可通过这一桥梁请求行情数据、调用交易函数，并在用户设定的上限内执行。Gemini同步推出"Trading Skills"——可由代理调用的模块化能力，目前包括 "Find the Spread"（查询任意交易对当前买卖价差）与 "Retrieve Candles"（历史K线，用于形态检查与回测），未来还会扩展更多技能。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'Meet the Meme Agent: AI that trades the trend for you' : '认识Meme Agent：替你交易热门趋势的AI'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Alongside a generic "My Trading Agent," Gemini\'s connected-agents list now showcases a dedicated Meme Agent — a purpose-built AI for the messy, fast-moving memecoin corner of crypto. The pitch is honest: most retail traders cannot watch X, Telegram and on-chain feeds at 3 a.m., but an agent can. With your rules, a Meme Agent can flag trending tokens, evaluate liquidity, size in small, set a hard stop, and bail when momentum dies.'
                          : '除了通用的 "My Trading Agent"，Gemini已连接代理列表里还出现了一个专门的 Meme Agent——为加密世界里又乱又快的"模因币板块"量身打造的AI。理念很坦率：散户不可能凌晨3点同时盯X、Telegram和链上数据，但代理可以。在你设定的规则下，Meme Agent能筛选热门代币、评估流动性、小仓位入场、设硬止损，并在动能衰竭时果断离场。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'In the official screenshot, "Meme Agent" sits right below "My Trading Agent" in the Connected Agents panel — both showing as Active, both labeled with last activity timestamps. The implication is clear: agents are no longer one-size-fits-all. You can run a conservative agent on your spot account and a tightly-leashed Meme Agent on a separate sub-balance for memecoin trades, each with its own permissions.'
                          : '官方截图里，"Meme Agent"就排在"My Trading Agent"下方，两者都显示为Active状态，且都标注了最近活动时间。含义很清楚：代理不再是"一个打天下"。你完全可以在主仓跑一个保守代理，同时在独立子账户上运行一个被严格约束的 Meme Agent 来做模因币交易，每个代理拥有各自独立的权限。'
                        }
                      </p>

                      <div className="bg-white/5 border-l-4 border-cyan-300/60 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-slate-50 font-bold">
                            {language === 'en' ? 'What a Meme Agent can do for you' : 'Meme Agent能帮你做什么'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-200/90 text-sm">
                          <li>{language === 'en' ? 'Watch trending tickers across social and on-chain signals 24/7' : '24/7跟踪社媒与链上信号里的热门代币'}</li>
                          <li>{language === 'en' ? 'Use "Find the Spread" before sizing — skip illiquid traps' : '入场前先用 "Find the Spread" 检查价差，避开流动性陷阱'}</li>
                          <li>{language === 'en' ? 'Backtest patterns with "Retrieve Candles" before going live' : '先用 "Retrieve Candles" 回测形态，再上真金白银'}</li>
                          <li>{language === 'en' ? 'Place orders only inside the position size and max-loss you set' : '只在你设定的仓位上限与最大亏损范围内下单'}</li>
                          <li>{language === 'en' ? 'Auto-exit on stop-loss, take-profit, or momentum reversal' : '触发止损、止盈或动能反转时自动出场'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'You stay in control' : '主导权始终在你手里'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Gemini is leaning hard into the "secure by design / always in control" framing. The Agent Permissions sidebar shows exactly which capabilities are on (view balances, view order history, place orders, edit orders) and which are off (withdraw funds is blocked by default). A persistent footer reminds users: "You can pause or revoke access at any time."'
                          : 'Gemini在产品上反复强调"Secure by design / You\'re always in control"两件事。Agent Permissions侧栏会清楚地列出哪些能力已开启（查看余额、查看订单历史、下单、修改订单），哪些被关闭（提现默认禁止）。底部一直提示：你可以随时暂停或撤销授权。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'That matters because Agentic Trading lands during a wider push to give AI agents real hands on real systems. Coinbase has backed x402 (an open payments standard for AI bots, now under the Linux Foundation), and Tempo is building MPP for machine-to-machine payments — both also use MCP. Gemini\'s difference is that it brings agentic AI directly inside a regulated exchange, not a wallet wrapper.'
                          : '这一点重要，是因为Agentic Trading的推出，正赶上"让AI代理真的能动手操作真实系统"的大趋势。Coinbase支持的x402（面向AI机器人的开放支付标准，现已纳入Linux基金会）以及Tempo正在做的MPP（机对机支付协议）也都基于MCP。Gemini的差异点在于：它把Agentic AI直接装进了受监管的交易所内部，而不是另一层钱包封装。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'Limits, safety, and what the agent should not do' : '边界、安全，以及代理不该做什么'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Letting an AI place real trades raises real questions: How do you stop a model from chasing pumps? How do you cap a bad day? Gemini\'s answer is the permissions UI plus Trading Skills that force the agent to look at spreads and history before acting. Withdrawals being off by default is the most important safety rail — even if the model is jailbroken or hallucinates, it cannot drain the account.'
                          : '让AI真正下单，会带来真正的问题：怎么阻止它追涨？怎么给糟糕的一天封顶？Gemini的答案是细粒度权限界面 + Trading Skills——后者强制代理先看价差与历史数据再下单。最关键的护栏是"提现默认关闭"：即便模型被越狱或出现幻觉，它也无法把你账户里的钱搬走。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Gemini frames the launch as the start of a category, not a one-off feature: "Agentic trading isn\'t just a feature." Expect more Trading Skills, more agent templates (a Meme Agent today, perhaps a DCA Agent or Hedging Agent tomorrow), and tighter MCP integrations with leading models.'
                          : 'Gemini把这次上线定位为"一个新品类的开端"，而不是一个孤立的小功能——"Agentic trading isn\'t just a feature"。后续可以期待更多Trading Skills、更多代理模板（今天是Meme Agent，明天可能是DCA代理或对冲代理），以及与主流模型更深的MCP集成。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'Key takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-white/5 border-l-4 border-white/20 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-200/90">
                          <li>{language === 'en' ? 'Gemini\'s Agentic Trading is live as of April 27, 2026 — AI models like ChatGPT and Claude can connect via MCP to monitor markets and trade.' : 'Gemini Agentic Trading已于2026年4月27日正式上线——ChatGPT、Claude等AI模型可通过MCP连接，监控市场并下单。'}</li>
                          <li>{language === 'en' ? 'A dedicated Meme Agent template is featured in Connected Agents — purpose-built for memecoin trading with strict, user-set limits.' : '"Connected Agents"中专门列出了Meme Agent模板——为模因币交易而生，且必须在用户严格设定的上限内运行。'}</li>
                          <li>{language === 'en' ? 'Gemini ships "Trading Skills" like Find the Spread and Retrieve Candles, with more on the way.' : 'Gemini同步推出 "Trading Skills"，包括 Find the Spread、Retrieve Candles 等模块化能力，后续还将扩展。'}</li>
                          <li>{language === 'en' ? 'Withdrawals are off by default; users can pause, edit or revoke any agent at any time.' : '提现默认关闭；用户可随时暂停、修改或撤销任何代理的授权。'}</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 mt-8 rounded text-sm text-slate-300/80 border border-white/10">
                        <strong className="text-slate-50">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Crypto Desk' : 'DaybreakNews加密货币部'} | <strong className="text-slate-50">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Marcus Chen' : '陈马克'} | <strong className="text-slate-50">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'Gemini, The Block, MoneyCheck' : 'Gemini官方、The Block、MoneyCheck'} | <strong className="text-slate-50">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-300/80 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        {['#Gemini', '#AgenticTrading', '#MemeAgent', '#MCP', '#ChatGPT', '#Claude', language === 'en' ? '#Crypto' : '#加密货币'].map((tag) => (
                          <span key={tag} className="bg-white/5 text-slate-200/90 px-3 py-1 text-xs font-medium rounded-full hover:bg-white/10 cursor-pointer transition-all border border-white/10">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : isBoomerArticle ? (
                  <>
                    {/* BOOMER ETF concept article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-400/30">
                        {language === 'en' ? 'ETF Concept' : 'ETF概念'}
                      </span>
                      <span className="bg-orange-500/15 text-orange-200 px-3 py-1 text-xs font-semibold rounded-full border border-orange-400/25">
                        {language === 'en' ? '50+ Thesis' : '50+逻辑'}
                      </span>
                      <span className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        BOOMER
                      </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Meet BOOMER: A VanEck “Old People ETF” Concept Built for Investors 50+'
                        : 'BOOMER来了：VanEck“老年人ETF”假想方案——押注50岁以上投资者'}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/70 mb-6 pb-4 border-b border-white/10">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Finance Desk' : '记者：DaybreakNews财经部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-04-16 09:45
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views (new)' : '阅读（新）'}
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-200/90 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-50 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-50 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'GENZ asks a sharp question: if digital natives are reshaping spending and risk habits, why not build an ETF around them? The GENZ idea targets Gen Z and younger millennials who live their financial lives online, across segments like “Millennial Finance,” the “Gig Economy,” and digital sports betting.'
                          : 'GENZ提出了一个尖锐的问题：如果数字原生正在重塑消费与风险习惯，为什么不直接用他们来构建ETF？GENZ的思路瞄准Z世代与年轻千禧一代——他们把金融生活全都放在互联网上，并覆盖“千禧金融”“零工经济”和“数字体育博彩”等板块。'}
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'BOOMER turns that premise on its head. This article is fictional and satirical: it imagines a “VanEck Old People ETF” where the beneficiaries are people 50 and up. Instead of investing in youth-first disruption, BOOMER asks what happens when the theme is centered on accumulated wealth, more mature spending patterns, and the way investors typically allocate risk after age 50.'
                          : 'BOOMER则把这个前提彻底反转。下面这是一篇虚构且带点讽刺意味的文章：它设想“VanEck老年人ETF”的受益者是50岁及以上的人群。BOOMER不再押注青年式的颠覆，而是提出问题：当主题围绕50岁以后积累的财富、更成熟的消费结构以及风险配置方式时，投资会怎么设计？'}
                      </p>

                      <div className="bg-white/5 border-l-4 border-emerald-400 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-slate-50 font-bold">
                            {language === 'en' ? 'How BOOMER would “find” the 50+ names' : 'BOOMER如何“找出”50+相关标的'}
                          </h3>
                        </div>
                        <p className="text-slate-200/90 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'In this thought experiment, “old people ETF” does not mean buying companies because they have pension plans. It means weighting constituents toward companies expected to benefit from the 50+ cohort as customers—and (in this playful methodology) toward companies whose shareholder/customer profile is skewed toward investors aged 50+. In short: BOOMER imagines an index with a demographic tilt, then rebalances to keep the theme consistent.'
                            : '在这个思想实验里，“老年人ETF”并不等于因为公司有养老金就买它。它指的是：对那些预计会从50+人群的需求中获益的公司赋予更高权重——并且（在这个带玩笑的方法里）让标的的“持有者/客户画像”偏向50岁以上的投资者。简而言之：BOOMER设想了一个带人口结构偏好的指数，再通过再平衡维持主题一致。'}
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-emerald-400/60">
                        {language === 'en' ? 'What BOOMER could invest in' : 'BOOMER可能配置什么'}
                      </h2>

                      <div className="bg-white/5 border-l-4 border-white/20 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-200/90 text-sm">
                          <li>{language === 'en' ? '50+ Digital Access: accessibility-first platforms that help older users shop, manage accounts, and access services online.' : '50+数字接入：强调无障碍的线上平台，帮助老年用户完成购物、账户管理与服务获取。'}</li>
                          <li>{language === 'en' ? 'Care & Outcomes: health management, care coordination, and “aging well” services and tools.' : '照护与结果：健康管理、照护协同，以及“健康老龄化”相关的服务与工具。'}</li>
                          <li>{language === 'en' ? 'Retirement & Risk Navigation: brokerage, advisory, and fintech infrastructure that turns risk into plain language.' : '退休与风险导航：券商、咨询与金融科技基础设施，把风险用更直白的方式讲清楚。'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-emerald-400/60">
                        {language === 'en' ? 'Limits & safety (because demographics can drift)' : '边界与安全（人口结构可能“跑偏”）'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Even if the thesis sounds clean, demographic themes can change fast. Health outcomes evolve, technology adoption among older users can accelerate or slow, and a real implementation would struggle to measure “who holds the stock” reliably. The safer design always includes diversification and transparent risk controls.'
                          : '即便论点听起来很顺，人口结构主题也可能迅速变化。健康结果会演进，老年用户的技术采纳可能加速也可能放缓；而真正落地时，“谁在持有这只股票”的衡量会非常困难且容易引入噪声。因此更稳妥的设计必须包含分散配置和透明的风险控制。'}
                      </p>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-emerald-400/60">
                        {language === 'en' ? 'Key takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-white/5 border-l-4 border-white/20 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-200/90">
                          <li>{language === 'en' ? 'GENZ frames the market around digital native consumers; BOOMER flips the lens to 50+.' : 'GENZ以数字原生消费者叙事市场；BOOMER则把视角翻到50+。'}</li>
                          <li>{language === 'en' ? 'In this fictional methodology, the “50+ holder” idea is a demographic tilt, not a magic rule.' : '在这个虚构的方法里，“50+持有人”是一种人口结构偏置，而不是魔法规则。'}</li>
                          <li>{language === 'en' ? 'Themes guide the story, but risk controls decide the outcome.' : '主题负责讲故事，风险控制决定最终结果。'}</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 mt-8 rounded text-sm text-slate-300/80 border border-white/10">
                        <strong className="text-slate-50">{language === 'en' ? 'Reporter:' : '记者：'}</strong>{' '}
                        {language === 'en' ? 'DaybreakNews Finance Desk' : 'DaybreakNews财经部'} |{' '}
                        <strong className="text-slate-50">{language === 'en' ? 'Source:' : '来源：'}</strong>{' '}
                        {language === 'en' ? 'GENZ theme inspiration (fictional BOOMER rewrite)' : 'GENZ主题灵感（虚构BOOMER改写）'}
                      </div>
                    </article>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-300/80 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        {['#BOOMER', '#VanEck', '#ETF', language === 'en' ? '#50Plus' : '#50岁以上', language === 'en' ? '#Demographics' : '#人口结构'].map((tag) => (
                          <span key={tag} className="bg-white/5 text-slate-200/90 px-3 py-1 text-xs font-medium rounded-full hover:bg-white/10 cursor-pointer transition-all border border-white/10">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-violet-500/20 text-violet-200 px-3 py-1 text-xs font-semibold rounded-full border border-violet-400/30">
                        {article ? (language === 'en' ? article.category : article.categoryZh) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 leading-tight">
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-300/70 mb-6 pb-4 border-b border-white/10">
                      <span>2026-03-14</span>
                      <span>{language === 'en' ? 'Source: DaybreakNews' : '来源：DaybreakNews'}</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-slate-200/90 text-base">
                      <p className="text-lg mb-4">
                        {article ? (language === 'en' ? article.summaryEn : article.summaryZh) : ''}
                      </p>
                      <p className="text-slate-300/70">
                        {language === 'en' ? 'Full article content loading...' : '文章内容加载中...'}
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-300/70">
                  <p>{language === 'en' ? 'Article ID:' : '文章编号：'} {params.id}</p>
                  <p className="mt-1">© 2026 {language === 'en' ? 'DaybreakNews. All Rights Reserved.' : 'DaybreakNews。保留所有权利。'}</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur">
                <div className="bg-gray-900 text-white px-5 py-3.5 font-semibold text-sm">
                  {language === 'en' ? 'More Stories' : '更多报道'}
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {articles.slice(0, 6).map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold text-xs w-5 h-5 flex items-center justify-center rounded-md shrink-0 ${
                            index < 3
                              ? 'bg-gray-900 text-white'
                              : 'bg-white/10 text-slate-200/80'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-slate-300/80 group-hover:text-violet-300 line-clamp-2 transition-colors leading-snug">
                            {language === 'en' ? a.titleEn : a.titleZh}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-5 mt-4 backdrop-blur">
                <h3 className="font-bold text-slate-50 mb-3 text-sm">
                  {language === 'en' ? 'Share Article' : '分享文章'}
                </h3>
                <div className="flex items-center gap-2">
                  {['X', 'in', 'tg', 'cp'].map((icon) => (
                    <button key={icon} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                      <span className="text-slate-300/80 text-xs font-bold">{icon}</span>
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

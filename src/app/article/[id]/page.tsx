'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import NasdaqBotImg from '@/context/Nasdaq-bot.png'
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
                        {language === 'en' ? 'What the agent does' : '智能代理做什么'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-300/80 hover:text-violet-300 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {language === 'en' ? 'How it helps you trade' : '如何帮你交易'}
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
                    {/* Featured Nasdaq agent article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-violet-500/20 text-violet-200 px-3 py-1 text-xs font-semibold rounded-full border border-violet-400/30">
                        {language === 'en' ? 'Markets' : '市场'}
                      </span>
                      <span className="bg-cyan-400/15 text-cyan-200 px-3 py-1 text-xs font-semibold rounded-full border border-cyan-300/25">
                        {language === 'en' ? 'AI Agent' : '智能代理'}
                      </span>
                      <span className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        {language === 'en' ? 'Nasdaq' : '纳斯达克'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Rumors: Nasdaq Is Working on “Nolly,” a Trading AI Agent Built to Trade, Explain, and Teach'
                        : '传闻：纳斯达克筹备“交易智能代理”Nolly，从下单到教学，一位面向大众的市场助手正在成形'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/70 mb-6 pb-4 border-b border-white/10">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Markets Desk' : '记者：DaybreakNews市场部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-04-15 14:25
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 782' : '阅读 782'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-300/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 46' : '评论 46'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                        <img
                          src={NasdaqBotImg.src}
                          alt={language === 'en' ? 'Symbolic image of Nasdaq AI agent assistant' : '纳斯达克智能代理助手象征图'}
                          className="w-full h-auto rounded-lg opacity-[0.92]"
                        />
                      </div>
                      <p className="text-sm text-slate-300/70 mt-2 italic">
                        {language === 'en'
                          ? 'A symbolic visual of a “market assistant” concept—Nasdaq is expected to explore agent-style experiences that guide decisions and teach discipline. (Image: illustration)'
                          : '“市场助手”概念的象征图——纳斯达克预计将探索以智能代理为核心的体验，既辅助决策也训练纪律。（图片：示意图）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-200/90 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-50 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-50 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'Rumors inside the market-tech world point to Nasdaq exploring an “agent-style” experience aimed at everyday investors—one that some sources say is called “Nolly.” The concept: a conversational assistant that can turn goals into a plan, place guardrails around risk, and teach the reasoning behind each decision. The pitch is simple: fewer impulsive clicks, more structured execution—and a faster learning curve for anyone trying to understand markets without drowning in jargon.'
                          : '市场科技圈的传闻指出，纳斯达克正在探索一种面向大众投资者的“智能代理式”体验，多位消息源称其名称/代号为“Nolly”。其概念是：用对话把目标转化为计划、用风险约束把行为框住，并把每一步决策背后的逻辑讲清楚。核心卖点很直接：减少情绪化下单，提高执行一致性，让新手更快理解市场，而不是被术语淹没。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Instead of asking users to learn a dozen dashboards, the agent would start with natural questions—time horizon, risk tolerance, and what “success” means—then translate that into actions like watchlists, position sizing, and alerts. The most important feature, insiders say, is not “prediction,” but accountability: the system explains what it’s doing and asks for confirmation when it crosses a user-defined line.'
                          : '相比让用户先学会一堆复杂面板，这类代理会从自然语言提问开始：周期、风险承受能力、你对“成功”的定义，然后把答案翻译成可执行动作，如自选列表、仓位管理、预警提醒。知情人士强调，关键不在“预测”，而在“可追溯的约束与解释”：它会说明在做什么，并在触及用户设定的红线时要求确认。'
                        }
                      </p>

                      <div className="bg-white/5 border-l-4 border-violet-400 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-slate-50 font-bold">
                            {language === 'en' ? 'What “Nolly” could do' : '“Nolly”可能做什么'}
                          </h3>
                        </div>
                        <p className="text-slate-200/90 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Think of it as a “co-pilot” for trading workflows: it can surface market context, summarize earnings and macro events, propose a trade plan with entries/exits, and enforce risk rules like max loss, position limits, and cooldowns. Crucially, it can also turn each step into a mini-lesson—so users learn why a plan is sensible (or why it isn’t).'
                            : '你可以把它理解为交易流程的“副驾驶”：它能汇总市场背景、总结财报与宏观事件、给出包含入场/止损/止盈的计划，并强制执行最大亏损、仓位上限、冷静期等风险规则。更重要的是，它会把每一步拆成“可学习”的解释，让用户知道为什么这样做（或为什么不该这样做）。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'How it helps you trade (and learn)' : '它如何帮你交易（并学习）'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The agent’s “trade” mode would likely look less like a chat toy and more like a checklist. It could: (1) define a setup (why now?), (2) size the position (how much risk?), (3) set exits (where you’re wrong / where you take profit), and (4) monitor conditions. If the user wants to learn, it can switch to “coach mode,” explaining concepts like volatility, liquidity, and why chasing headlines tends to backfire.'
                          : '这类智能代理的“交易模式”更像一套可执行清单，而不是聊天玩具。它可能会： (1) 定义交易逻辑（为什么现在？），(2) 计算仓位（承受多少风险？），(3) 设置出场（错在哪里/赚到哪里），(4) 监控条件变化。若用户选择学习，它还可以切换到“教练模式”，解释波动率、流动性，以及为什么追新闻容易翻车。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'One expected differentiator is transparency. Rather than spitting out a “buy” or “sell,” the system could show inputs (news, filings, price action), assumptions (what has to be true), and a plain-language rationale. That matters for beginners: if you can’t explain a trade, you probably shouldn’t take it.'
                          : '一个被反复提及的差异点是“可解释性”。系统不会只给出“买/卖”，而是展示输入（新闻、披露、价格行为）、假设（什么成立才成立）和通俗理由。对新手来说，这很关键：如果你无法解释一笔交易，你大概率不该做。'
                        }
                      </p>

                      <div className="bg-white/5 border-l-4 border-cyan-300/60 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-slate-50 font-bold">
                            {language === 'en' ? 'What it can teach (without hype)' : '它能教什么（不靠噱头）'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-200/90 text-sm">
                          <li>{language === 'en' ? 'Risk-first thinking (position sizing, max loss, and “when you’re wrong”)' : '风险优先（仓位、最大亏损与“错在哪里”）'}</li>
                          <li>{language === 'en' ? 'How to separate signal from noise in headlines and social media' : '如何区分新闻与社媒里的信号/噪音'}</li>
                          <li>{language === 'en' ? 'Building a plan before entering—then executing without revenge trading' : '先计划再入场，并避免“报复性交易”'}</li>
                          <li>{language === 'en' ? 'Post-trade review: what worked, what didn’t, and what to change next time' : '复盘：哪里有效、哪里无效、下次怎么改'}</li>
                          <li>{language === 'en' ? 'Market basics in context: liquidity, volatility, and how fees/slippage add up' : '结合场景讲基础：流动性、波动率、费用与滑点'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'Limits, safety, and what it should not do' : '边界、安全，以及它不该做什么'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Any “trade-capable” agent will raise obvious questions: How does it avoid turning into a signal-chasing machine? How does it prevent over-leveraging? The safest implementations generally require explicit user confirmation, keep strict limits, and log decisions for auditability. A strong approach is to treat the agent as an assistant, not an autonomous money-maker.'
                          : '任何“可交易”的智能代理都会引发明显问题：如何避免追涨杀跌？如何防止过度杠杆？更安全的实现通常会要求关键动作必须二次确认、设置严格上限，并记录决策过程以便审计。最稳妥的定位，是“助手”而不是“自动赚钱机器”。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Equally important: it should be able to say “I don’t know” and route users to education instead of pretending to predict. If Nasdaq moves forward, watch for features like disclosures, suitability checks, and “explain the trade” prompts that nudge people toward discipline.'
                          : '同样重要的是，它必须能坦诚地说“我不知道”，并把用户引导到学习与风险提示，而不是装作能预测。若纳斯达克推进落地，值得关注的将是信息披露、适当性校验，以及“解释这笔交易”之类促使用户更自律的交互。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-slate-50 mt-8 mb-4 pb-2 border-b-2 border-violet-400/60">
                        {language === 'en' ? 'Key takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-white/5 border-l-4 border-white/20 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-200/90">
                          <li>{language === 'en' ? 'Nasdaq is preparing an agent-style assistant focused on planning, execution, and education—not magic predictions.' : '纳斯达克正准备一款智能代理式助手，重点是计划、执行与教学，而不是“神预测”。'}</li>
                          <li>{language === 'en' ? 'The best versions explain the rationale and make users confirm actions when risk limits are hit.' : '更好的版本会解释理由，并在触及风险红线时要求用户确认。'}</li>
                          <li>{language === 'en' ? 'Coach-mode features could help beginners build repeatable habits: sizing, exits, and reviews.' : '“教练模式”可帮助新手建立可复用习惯：仓位、出场与复盘。'}</li>
                          <li>{language === 'en' ? 'Safety guardrails and disclosures will be critical for any system that can place trades.' : '任何能下单的系统都必须把安全约束与信息披露放在首位。'}</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 mt-8 rounded text-sm text-slate-300/80 border border-white/10">
                        <strong className="text-slate-50">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Markets Desk' : 'DaybreakNews市场部'} | <strong className="text-slate-50">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Marcus Chen' : '陈马克'} | <strong className="text-slate-50">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'People familiar with the project' : '知情人士'} | <strong className="text-slate-50">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-300/80 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        {['#Nasdaq', '#AI', '#Trading', language === 'en' ? '#Markets' : '#市场', language === 'en' ? '#RiskManagement' : '#风险管理', language === 'en' ? '#Education' : '#学习'].map((tag) => (
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

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)
  const { language } = useLanguage()

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
            <Link href="/" className="hover:text-amber-600">{language === 'en' ? 'Home' : '首页'}</Link>
            <span>/</span>
            <Link href="/hot" className="hover:text-amber-600">{language === 'en' ? 'Hot' : '热点'}</Link>
            <span>/</span>
            <span className="text-slate-700">{language === 'en' ? 'Article' : '文章'}</span>
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
                  {language === 'en' ? 'Article Navigation' : '文章导航'}
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        {language === 'en' ? 'Introduction' : '引言'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'en' ? 'Key Details' : '关键细节'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'en' ? 'Top Coins' : '热门币种'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-amber-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'en' ? 'Conclusion' : '结语'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hot Topics */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                  {language === 'en' ? 'Hot Topics' : '热门话题'}
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
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 md:p-8">
                {isWLFIArticle ? (
                  <>
                    {/* BNB Memecoins Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Featured' : '精选'}
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Crypto' : '加密货币'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {language === 'en' 
                        ? 'Meme Coins Are Like Picking Money Off the Ground'
                        : '模因币就像在地上捡钱'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: Michael Chen' : '记者：陈明'}
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
                        {language === 'en' ? 'Views' : '阅读'} 89,234
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments' : '评论'} 1,847
                      </span>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-amber-500 first-letter:float-left first-letter:mr-3">
                        {language === 'en' 
                          ? 'The BNB Chain has emerged as one of the hottest ecosystems for memecoins, with traders discovering incredible opportunities almost daily. With low gas fees, fast transactions, and a massive user base, Binance Smart Chain has become the go-to platform for memecoin enthusiasts looking to catch the next 100x gem.'
                          : 'BNB链已成为模因币最热门的生态系统之一，交易者几乎每天都能发现令人难以置信的机会。凭借低廉的Gas费用、快速的交易和庞大的用户群，币安智能链已成为寻找下一个百倍宝石的模因币爱好者的首选平台。'
                        }
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">📈</span>
                          <h3 className="text-amber-800 font-bold">
                            {language === 'en' ? 'BNB Chain Memecoin Stats' : 'BNB链模因币数据'}
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          {language === 'en' 
                            ? 'BNB Chain memecoins have seen trading volumes surge by over 500% in the past quarter. The ecosystem now hosts over 10,000 active memecoin projects with a combined market cap exceeding $5 billion.'
                            : 'BNB链模因币的交易量在过去一个季度激增了500%以上。该生态系统目前拥有超过10,000个活跃的模因币项目，总市值超过50亿美元。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'Why BNB Chain for Memecoins?' : '为什么选择BNB链进行模因币投资？'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'BNB Chain offers several advantages that make it ideal for memecoin trading. Transaction fees are a fraction of what you would pay on Ethereum, often just a few cents. This means traders can make multiple trades without worrying about gas eating into their profits.'
                          : 'BNB链提供了多项优势，使其成为模因币交易的理想选择。交易费用仅为以太坊上支付费用的一小部分，通常只需几美分。这意味着交易者可以进行多次交易，而不必担心Gas费用侵蚀他们的利润。'
                        }
                      </p>

                      <p>
                        {language === 'en' 
                          ? 'The speed of transactions on BNB Chain is another major advantage. While other networks can take minutes to confirm a trade, BNB Chain processes transactions in seconds. In the fast-moving world of memecoins, this speed can mean the difference between catching a pump and missing out entirely.'
                          : 'BNB链的交易速度是另一个主要优势。虽然其他网络可能需要几分钟来确认交易，但BNB链可以在几秒钟内处理交易。在快速变化的模因币世界中，这种速度可能意味着抓住暴涨和完全错过之间的区别。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'Top BNB Chain Memecoins to Watch' : '值得关注的顶级BNB链模因币'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'The BNB Chain ecosystem is home to numerous successful memecoins that have delivered massive returns to early investors. From dog-themed tokens to innovative new concepts, the variety is endless.'
                          : 'BNB链生态系统拥有众多成功的模因币，为早期投资者带来了巨额回报。从狗主题代币到创新的新概念，种类繁多。'
                        }
                      </p>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-800">
                          <strong>{language === 'en' ? 'Key Success Factors:' : '成功关键因素：'}</strong>
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
                          <li>{language === 'en' ? 'Strong community engagement on Telegram and Twitter' : 'Telegram和Twitter上的强大社区参与'}</li>
                          <li>{language === 'en' ? 'Verified smart contracts on BscScan' : '在BscScan上验证的智能合约'}</li>
                          <li>{language === 'en' ? 'Locked liquidity for investor protection' : '锁定流动性以保护投资者'}</li>
                          <li>{language === 'en' ? 'Active development team with clear roadmap' : '有明确路线图的活跃开发团队'}</li>
                        </ul>
                      </div>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic text-slate-600">
                        {language === 'en' 
                          ? '"Meme coins are like picking money off the ground. The opportunities are everywhere if you know where to look on BNB Chain."'
                          : '"模因币就像在地上捡钱。如果你知道在BNB链上哪里寻找，机会无处不在。"'
                        }
                      </blockquote>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'How to Find the Next 100x Memecoin' : '如何找到下一个百倍模因币'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'Finding early memecoin opportunities on BNB Chain requires a combination of research, timing, and community involvement. Tools like DexTools, PooCoin, and BscScan are essential for analyzing new tokens before they explode.'
                          : '在BNB链上寻找早期模因币机会需要研究、时机和社区参与的结合。DexTools、PooCoin和BscScan等工具对于在新代币爆发之前进行分析至关重要。'
                        }
                      </p>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-800">
                          <strong>{language === 'en' ? 'Research Checklist:' : '研究清单：'}</strong>
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
                          <li>{language === 'en' ? 'Check liquidity pool size and lock status' : '检查流动性池大小和锁定状态'}</li>
                          <li>{language === 'en' ? 'Verify contract is renounced or ownership transferred' : '验证合约已放弃或所有权已转移'}</li>
                          <li>{language === 'en' ? 'Analyze holder distribution for whale concentration' : '分析持有者分布以了解巨鲸集中度'}</li>
                          <li>{language === 'en' ? 'Join Telegram and gauge community sentiment' : '加入Telegram并评估社区情绪'}</li>
                          <li>{language === 'en' ? 'Look for upcoming listings and partnerships' : '寻找即将上市和合作伙伴关系'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'Risk Management Tips' : '风险管理技巧'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'While the potential rewards in memecoin trading are enormous, so are the risks. Never invest more than you can afford to lose, and always do your own research before aping into any project.'
                          : '虽然模因币交易的潜在回报是巨大的，但风险也是如此。永远不要投资超过你能承受损失的金额，并且在投入任何项目之前始终进行自己的研究。'
                        }
                      </p>

                      <p>
                        {language === 'en' 
                          ? 'The BNB Chain memecoin market moves fast. Prices can pump 1000% in hours and dump just as quickly. Setting stop-losses and taking profits along the way is crucial for long-term success in this volatile space.'
                          : 'BNB链模因币市场变化很快。价格可以在几小时内上涨1000%，也可能同样快速下跌。设置止损和沿途获利对于在这个波动的空间中取得长期成功至关重要。'
                        }
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⚠️</span>
                          <h3 className="text-amber-800 font-bold">
                            {language === 'en' ? 'Important Reminder' : '重要提醒'}
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          {language === 'en' 
                            ? 'This article is for informational purposes only and should not be considered financial advice. Memecoin trading carries significant risk of loss. Always DYOR (Do Your Own Research) before making any investment decisions.'
                            : '本文仅供参考，不应被视为财务建议。模因币交易存在重大损失风险。在做出任何投资决定之前，请务必进行自己的研究(DYOR)。'
                          }
                        </p>
                      </div>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>{language === 'en' ? 'Editor' : '编辑'}:</strong> {language === 'en' ? 'Sarah Williams' : '王晓华'} | <strong>{language === 'en' ? 'Proofreader' : '校对'}:</strong> {language === 'en' ? 'James Liu' : '刘建'} | <strong>{language === 'en' ? 'Reviewer' : '审核'}:</strong> {language === 'en' ? 'David Park' : '朴大伟'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#BNBChain</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Memecoins</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#BSC</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Crypto</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#DeFi</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {article ? (language === 'en' ? article.category : article.categoryZh) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>2026-01-24</span>
                      <span>{language === 'en' ? 'Source: Daybreak News' : '来源：晨曦新闻'}</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-slate-700 text-base">
                      <p className="text-lg mb-4">
                        {article ? (language === 'en' ? article.summaryEn : article.summaryZh) : ''}
                      </p>
                      <p>
                        {language === 'en' ? 'Full article content loading...' : '完整文章内容加载中...'}
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
                  <p>{language === 'en' ? 'Article ID' : '文章ID'}: {params.id}</p>
                  <p className="mt-1">© 2026 Daybreak News. {language === 'en' ? 'All Rights Reserved.' : '保留所有权利。'}</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Trending */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm rounded-t-lg">
                  {language === 'en' ? 'More Stories' : '更多故事'}
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
        </div>
      </div>

      <Footer />
    </div>
  )
}

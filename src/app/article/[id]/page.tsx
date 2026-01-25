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
                        {language === 'en' ? 'Interview' : '专访'}
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
                    {/* WLFI Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Exclusive' : '独家'}
                      </span>
                      <span className="bg-slate-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Crypto' : '加密货币'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {language === 'en' 
                        ? 'Meme Coins Are Like Picking Money Off the Ground: Exclusive Interview with Zak Folkman'
                        : '模因币就像在地上捡钱：独家专访Zak Folkman'
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
                          ? 'World Liberty Financial (WLFI) has emerged as one of the most talked-about projects in the cryptocurrency space, with its native token and the USD1 stablecoin experiencing remarkable growth over the past several months. In an exclusive interview, co-founder Zak Folkman shares his unique perspective on memecoins and the opportunities they present.'
                          : 'World Liberty Financial（WLFI）已成为加密货币领域最受关注的项目之一，其原生代币和USD1稳定币在过去几个月经历了显著增长。在独家专访中，联合创始人Zak Folkman分享了他对模因币及其带来机遇的独特见解。'
                        }
                      </p>

                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">📈</span>
                          <h3 className="text-amber-800 font-bold">
                            {language === 'en' ? 'Key Growth Metrics' : '关键增长数据'}
                          </h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          {language === 'en' 
                            ? 'WLFI has seen its market cap increase by over 340% in the last quarter alone, while USD1 stablecoin adoption has grown to over $2.8 billion in total value locked.'
                            : 'WLFI的市值仅在上一季度就增长了340%以上，而USD1稳定币的采用量已增长至超过28亿美元的总锁仓价值。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'The Rise of WLFI and USD1' : 'WLFI和USD1的崛起'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'World Liberty Financial launched with a clear mission: to democratize access to decentralized finance while maintaining the stability and reliability that traditional investors expect. The WLFI token serves as the governance backbone of the ecosystem, while USD1 has become a trusted stablecoin in the DeFi space.'
                          : 'World Liberty Financial以明确的使命启动：在保持传统投资者期望的稳定性和可靠性的同时，实现去中心化金融的民主化。WLFI代币作为生态系统的治理支柱，而USD1已成为DeFi领域受信任的稳定币。'
                        }
                      </p>

                      <p>
                        {language === 'en' 
                          ? 'Recent partnerships with major payment processors have opened new avenues for adoption, allowing users to seamlessly transition between traditional finance and the crypto economy.'
                          : '最近与主要支付处理商的合作为采用开辟了新途径，使用户能够在传统金融和加密经济之间无缝转换。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'Exclusive Interview: Zak Folkman on Memecoins' : '独家专访：Zak Folkman谈模因币'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'We sat down with Zak Folkman, co-founder of World Liberty Financial, to discuss his views on the broader cryptocurrency market, including the explosive memecoin phenomenon.'
                          : '我们与World Liberty Financial联合创始人Zak Folkman进行了对话，讨论他对更广泛的加密货币市场的看法，包括爆发式增长的模因币现象。'
                        }
                      </p>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> {language === 'en' ? 'Zak, memecoins have been making headlines with explosive gains. What\'s your take on them?' : 'Zak，模因币因爆发式增长而成为头条新闻。您对此有何看法？'}
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> {language === 'en' 
                            ? '"I love memecoins. I think they\'re fascinating. The way I see it, meme coins are like picking money off the ground. The opportunities are everywhere if you know where to look. They\'ve brought millions of new people into crypto, and that energy is incredible."'
                            : '"我喜欢模因币。我觉得它们很迷人。在我看来，模因币就像在地上捡钱一样。如果你知道在哪里寻找，机会无处不在。它们已经将数百万新用户带入加密领域，这种能量令人难以置信。"'
                          }
                        </p>
                      </div>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> {language === 'en' ? 'Can you elaborate on that analogy?' : '您能详细解释一下这个比喻吗？'}
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> {language === 'en' 
                            ? '"Sure. Think about it—when you see a dollar bill on the sidewalk, you pick it up, right? Memecoins are similar. The market creates these opportunities constantly. Some people walk right past them, others see them and act. The growth we\'ve seen in memecoins over the past few months has been phenomenal. People who spotted the right projects early have made life-changing money."'
                            : '"当然可以。想想看——当你在人行道上看到一张钞票时，你会把它捡起来，对吧？模因币也类似。市场不断创造这些机会。有些人直接走过，而另一些人看到并采取行动。过去几个月我们在模因币上看到的增长是惊人的。那些早期发现正确项目的人已经赚到了改变人生的钱。"'
                          }
                        </p>
                      </div>

                      <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic text-slate-600">
                        {language === 'en' 
                          ? '"Meme coins are like picking money off the ground. The opportunities are everywhere if you know where to look."'
                          : '"模因币就像在地上捡钱。如果你知道在哪里寻找，机会无处不在。"'
                        }
                        <footer className="text-slate-500 mt-2 not-italic text-sm">— Zak Folkman, {language === 'en' ? 'Co-Founder of World Liberty Financial' : 'World Liberty Financial联合创始人'}</footer>
                      </blockquote>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> {language === 'en' ? 'What advice would you give to people interested in memecoins?' : '您对有兴趣投资模因币的人有什么建议？'}
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> {language === 'en' 
                            ? '"Do your research. The memecoin space moves fast—really fast. But if you\'re paying attention, if you\'re in the right communities, you can find incredible opportunities. Just remember to only invest what you can afford to lose. Not every coin will moon, but the ones that do can be truly spectacular."'
                            : '"做好研究。模因币领域发展很快——真的很快。但如果你在关注，如果你在正确的社区中，你可以找到令人难以置信的机会。只是记住只投资你能承受损失的金额。不是每个币都会暴涨，但那些暴涨的币确实可以非常壮观。"'
                          }
                        </p>
                      </div>

                      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 rounded-r">
                        <p className="text-slate-700 italic mb-2">
                          <strong>Daybreak News:</strong> {language === 'en' ? 'What\'s next for WLFI?' : 'WLFI接下来有什么计划？'}
                        </p>
                        <p className="text-slate-800">
                          <strong>Zak Folkman:</strong> {language === 'en' 
                            ? '"We have some exciting announcements coming in Q2. We\'re expanding our institutional partnerships, launching new DeFi products, and continuing to build infrastructure that makes crypto accessible to everyone. The future is bright."'
                            : '"我们将在第二季度发布一些令人兴奋的公告。我们正在扩大机构合作伙伴关系，推出新的DeFi产品，并继续建设使每个人都能使用加密货币的基础设施。未来一片光明。"'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-amber-500">
                        {language === 'en' ? 'Looking Ahead' : '展望未来'}
                      </h2>

                      <p>
                        {language === 'en' 
                          ? 'As the cryptocurrency market continues to evolve, voices like Folkman\'s offer valuable perspective on both the established DeFi sector and the dynamic world of memecoins. His optimistic view on memecoins reflects a growing sentiment in the crypto community that these tokens, despite their volatility, represent genuine opportunities for those willing to do the work.'
                          : '随着加密货币市场的不断发展，像Folkman这样的声音为成熟的DeFi领域和充满活力的模因币世界提供了宝贵的视角。他对模因币的乐观看法反映了加密社区日益增长的情绪——这些代币尽管波动性大，但对于愿意付出努力的人来说代表着真正的机会。'
                        }
                      </p>

                      <p>
                        {language === 'en' 
                          ? 'Whether you\'re interested in the stability of projects like WLFI and USD1 or the high-risk, high-reward world of memecoins, Folkman\'s message is clear: the opportunities are out there, waiting to be picked up.'
                          : '无论您是对WLFI和USD1等项目的稳定性感兴趣，还是对高风险、高回报的模因币世界感兴趣，Folkman的信息都很明确：机会就在那里，等待被发现。'
                        }
                      </p>

                      <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                        <strong>{language === 'en' ? 'Editor' : '编辑'}:</strong> {language === 'en' ? 'Sarah Williams' : '王晓华'} | <strong>{language === 'en' ? 'Proofreader' : '校对'}:</strong> {language === 'en' ? 'James Liu' : '刘建'} | <strong>{language === 'en' ? 'Reviewer' : '审核'}:</strong> {language === 'en' ? 'David Park' : '朴大伟'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#WLFI</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#USD1</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#Memecoins</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#DeFi</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm rounded hover:bg-amber-100 hover:text-amber-600 cursor-pointer">#ZakFolkman</span>
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

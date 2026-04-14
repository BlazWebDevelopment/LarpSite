'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import BetcoinImg from '@/context/Betcoin.jpg'
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

  const relatedArticles = articles.filter(a => a.id !== params.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <span className="text-gray-300">/</span>
            <Link href="/hot" className="hover:text-emerald-600 transition-colors">
              {language === 'en' ? 'Hot' : '热点'}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium">{language === 'en' ? 'Article' : '文章'}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Sticky */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-4">
                <div className="bg-gray-900 text-white px-4 py-3 font-semibold text-sm">
                  {language === 'en' ? 'In This Article' : '文章导航'}
                </div>
                <div className="p-4">
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a href="#" className="text-gray-900 hover:text-emerald-600 flex items-center gap-2 transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        {language === 'en' ? 'Introduction' : '引言'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-emerald-600 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        {language === 'en' ? 'What is Betcoin?' : '什么是Betcoin？'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-emerald-600 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        {language === 'en' ? 'How It Works' : '运作机制'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-emerald-600 flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
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
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-gray-600 group-hover:text-emerald-600 line-clamp-2 transition-colors leading-snug">
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
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-6 md:p-10">
                {isFeaturedArticle ? (
                  <>
                    {/* Featured GTA VI Betcoin Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        {language === 'en' ? 'Exclusive' : '独家'}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        {language === 'en' ? 'Leak' : '泄露'}
                      </span>
                      <span className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        {language === 'en' ? 'Gaming' : '游戏'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Massive GTA VI Leak Reveals In-Game Cryptocurrency "Betcoin" That Will Revolutionize the Game\'s Economy'
                        : 'GTA VI重大泄露：游戏内加密货币"Betcoin"将彻底改变游戏经济系统'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Gaming Desk' : '记者：DaybreakNews游戏部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-03-14 14:25
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 512' : '阅读 512'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 102' : '评论 102'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                        <img
                          src={BetcoinImg.src}
                          alt={language === 'en' ? 'Betcoin - the leaked in-game cryptocurrency for GTA VI' : 'Betcoin - GTA VI泄露的游戏内加密货币'}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {language === 'en'
                          ? 'A leaked 3D render of the "Betcoin" coin, the in-game cryptocurrency that will serve as the backbone of GTA VI\'s virtual economy. The gold coin features a lightning bolt logo and detailed engravings. (Image: Leaked source)'
                          : '泄露的"Betcoin"硬币3D渲染图，这种游戏内加密货币将成为GTA VI虚拟经济的支柱。金色硬币上有闪电标志和精细雕刻。（图片来源：泄露渠道）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'In what may be the biggest GTA VI leak since the infamous 2022 source code breach, a trove of internal Rockstar Games documents and 3D asset renders have surfaced online today, March 14, 2026, revealing the existence of an in-game cryptocurrency called "Betcoin." According to the leaked materials, Betcoin will function as a fully integrated digital currency within GTA VI\'s open world, allowing players to trade goods, purchase properties, buy vehicles, gamble, and invest in a dynamic virtual stock market — all powered by this single in-game token.'
                          : '这可能是自2022年臭名昭著的源代码泄露以来最大的GTA VI泄露事件。今天，2026年3月14日，大量Rockstar Games内部文件和3D资产渲染图在网上浮出水面，揭示了一种名为"Betcoin"的游戏内加密货币的存在。根据泄露的材料，Betcoin将作为一种完全整合的数字货币在GTA VI的开放世界中运作，允许玩家交易商品、购买房产、购买车辆、赌博以及在动态虚拟股票市场中投资——所有这些都由这一单一的游戏内代币驱动。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The leak originated from an anonymous post on a well-known gaming forum, accompanied by high-resolution 3D renders of the Betcoin itself — a gold coin featuring a stylized lightning bolt logo with the word "BETCOIN" engraved on both sides. The design bears a striking resemblance to real-world cryptocurrency aesthetics, complete with circuit-line patterns and star motifs, suggesting Rockstar is going all-in on making the in-game economy feel authentic and immersive.'
                          : '此次泄露源自一个知名游戏论坛上的匿名帖子，附带有Betcoin的高分辨率3D渲染图——一枚金色硬币，正面有一个风格化的闪电标志，两面都刻有"BETCOIN"字样。其设计与现实世界的加密货币美学极为相似，包含电路线图案和星形装饰，表明Rockstar正在全力以赴，让游戏内经济系统感觉真实且沉浸。'
                        }
                      </p>

                      <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🪙</span>
                          <h3 className="text-gray-900 font-bold">
                            {language === 'en' ? 'What is Betcoin?' : '什么是Betcoin？'}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Betcoin is GTA VI\'s proprietary in-game cryptocurrency. Unlike the simple cash system in previous GTA titles, Betcoin operates as a full digital economy token. Players earn Betcoin by completing missions, winning races, running businesses, or trading on the in-game stock exchange. It can then be spent on everything from weapons and vehicles to real estate, nightclubs, and even bribing NPCs. The currency fluctuates in value based on player activity across the game world, creating a living, breathing economy.'
                            : 'Betcoin是GTA VI专有的游戏内加密货币。与以往GTA系列中简单的现金系统不同，Betcoin作为一种完整的数字经济代币运作。玩家通过完成任务、赢得比赛、经营企业或在游戏内证券交易所交易来赚取Betcoin。然后可以用它购买从武器和车辆到房地产、夜总会甚至贿赂NPC的一切物品。货币的价值会根据游戏世界中玩家的活动而波动，创造出一个活生生的、有呼吸感的经济系统。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-emerald-500">
                        {language === 'en' ? 'How Betcoin Will Work in GTA VI' : 'Betcoin在GTA VI中的运作方式'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'According to the leaked internal design documents, Betcoin isn\'t just a cosmetic feature — it\'s the backbone of GTA VI\'s entire economy. The documents describe a system called "Vice Market," a fully functional in-game stock exchange where players can buy and sell Betcoin, invest in NPC-run businesses, and even short-sell virtual assets. The value of Betcoin will fluctuate in real-time based on collective player behavior: if many players start buying up properties in a particular neighborhood, Betcoin value in that area goes up.'
                          : '根据泄露的内部设计文件，Betcoin不仅仅是一个装饰性功能——它是GTA VI整个经济的支柱。文件描述了一个名为"Vice Market"的系统，这是一个功能完整的游戏内证券交易所，玩家可以在其中买卖Betcoin、投资NPC经营的企业，甚至做空虚拟资产。Betcoin的价值将根据玩家的集体行为实时波动：如果许多玩家开始购买某个社区的房产，该地区的Betcoin价值就会上涨。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? '"Think of it as a satirical take on crypto culture, but one that actually works as a game mechanic," wrote one leaker who claims to be a former Rockstar QA tester. "You can literally mine Betcoin by setting up server farms in your in-game properties. You can trade it player-to-player. You can use it at every store, car dealership, and weapon shop in Vice City. It\'s basically the only currency that matters in the late game."'
                          : '"可以把它看作是对加密货币文化的讽刺，但作为游戏机制它确实能运作，"一位自称是前Rockstar QA测试人员的泄露者写道。"你可以通过在游戏内房产中设置服务器农场来挖掘Betcoin。你可以在玩家之间交易。你可以在Vice City的每家商店、汽车经销商和武器商店使用它。基本上它是后期游戏中唯一重要的货币。"'
                        }
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💰</span>
                          <h3 className="text-gray-900 font-bold">
                            {language === 'en' ? 'What You Can Do With Betcoin' : '你可以用Betcoin做什么'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>{language === 'en' ? 'Buy and sell properties, vehicles, weapons, and clothing' : '买卖房产、车辆、武器和服装'}</li>
                          <li>{language === 'en' ? 'Trade on the "Vice Market" in-game stock exchange' : '在"Vice Market"游戏内证券交易所交易'}</li>
                          <li>{language === 'en' ? 'Invest in NPC businesses and earn passive Betcoin income' : '投资NPC企业并赚取被动Betcoin收入'}</li>
                          <li>{language === 'en' ? 'Gamble at casinos and underground betting rings' : '在赌场和地下赌博圈赌博'}</li>
                          <li>{language === 'en' ? 'Mine Betcoin by setting up server farms in owned properties' : '通过在自有房产中设置服务器农场来挖掘Betcoin'}</li>
                          <li>{language === 'en' ? 'Trade player-to-player in GTA Online multiplayer' : '在GTA Online多人游戏中进行玩家间交易'}</li>
                          <li>{language === 'en' ? 'Bribe NPCs, pay off wanted levels, and fund heists' : '贿赂NPC、消除通缉等级、资助抢劫任务'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-emerald-500">
                        {language === 'en' ? 'Community Reaction and Rockstar\'s Silence' : '社区反应与Rockstar的沉默'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The gaming community has erupted with excitement and debate since the leak dropped earlier today. Within hours, #Betcoin and #GTAVI were trending worldwide on X, with fans dissecting every detail of the leaked renders and documents. Some players are thrilled at the prospect of a deep economic simulation within GTA VI, drawing comparisons to the stock market feature in GTA V but "on an entirely different level." Others have raised concerns about potential microtransaction tie-ins, wondering whether Rockstar might allow players to purchase Betcoin with real money.'
                          : '自今天早些时候泄露消息发布以来，游戏社区一片轰动，讨论不断。几个小时内，#Betcoin和#GTAVI就在X上成为全球热门话题，粉丝们仔细分析泄露的渲染图和文件的每一个细节。一些玩家对GTA VI中深度经济模拟的前景感到兴奋，将其与GTA V中的股票市场功能进行比较，但认为这是"完全不同的层次"。其他人则对潜在的微交易关联表示担忧，想知道Rockstar是否会允许玩家用真钱购买Betcoin。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Rockstar Games has not yet issued any official comment on the leak. The company is known for its strict approach to leaks and has previously pursued legal action against individuals who shared pre-release materials. Take-Two Interactive, Rockstar\'s parent company, saw its stock price tick up 3.2% following the leak, suggesting investors view the Betcoin economy system as a potential revenue driver for GTA Online\'s next generation.'
                          : 'Rockstar Games尚未对此次泄露发表任何官方评论。该公司以其对泄露的严格态度而闻名，此前曾对分享预发布材料的个人采取法律行动。Rockstar的母公司Take-Two Interactive在泄露后股价上涨了3.2%，表明投资者将Betcoin经济系统视为GTA Online下一代的潜在收入驱动力。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-emerald-500">
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-gray-50 border-l-4 border-gray-900 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>{language === 'en' ? 'A major leak on March 14, 2026 has revealed "Betcoin," an in-game cryptocurrency coming to GTA VI.' : '2026年3月14日的一次重大泄露揭示了"Betcoin"，一种即将登陆GTA VI的游戏内加密货币。'}</li>
                          <li>{language === 'en' ? 'Betcoin will be used to trade, buy properties, purchase vehicles, gamble, and invest on the "Vice Market" stock exchange.' : 'Betcoin将用于交易、购买房产、购买车辆、赌博以及在"Vice Market"证券交易所投资。'}</li>
                          <li>{language === 'en' ? 'Players can mine Betcoin by setting up server farms in their in-game properties.' : '玩家可以通过在游戏内房产中设置服务器农场来挖掘Betcoin。'}</li>
                          <li>{language === 'en' ? 'The value of Betcoin fluctuates in real-time based on collective player behavior across the game world.' : 'Betcoin的价值根据游戏世界中玩家的集体行为实时波动。'}</li>
                          <li>{language === 'en' ? 'Rockstar Games has not commented. Take-Two Interactive stock rose 3.2% after the leak.' : 'Rockstar Games尚未发表评论。泄露后Take-Two Interactive股价上涨3.2%。'}</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Gaming Desk' : 'DaybreakNews游戏部'} | <strong className="text-gray-900">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Marcus Chen' : '陈马克'} | <strong className="text-gray-900">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'Leaked documents' : '泄露文件'} | <strong className="text-gray-900">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        {['#GTAVI', '#Betcoin', '#RockstarGames', language === 'en' ? '#Gaming' : '#游戏', language === 'en' ? '#Leak' : '#泄露', '#ViceCity', '#GTA'].map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-medium rounded-full hover:bg-gray-200 cursor-pointer transition-all">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        {article ? (language === 'en' ? article.category : article.categoryZh) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
                      <span>2026-03-14</span>
                      <span>{language === 'en' ? 'Source: DaybreakNews' : '来源：DaybreakNews'}</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-gray-700 text-base">
                      <p className="text-lg mb-4">
                        {article ? (language === 'en' ? article.summaryEn : article.summaryZh) : ''}
                      </p>
                      <p className="text-gray-500">
                        {language === 'en' ? 'Full article content loading...' : '文章内容加载中...'}
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
                  <p>{language === 'en' ? 'Article ID:' : '文章编号：'} {params.id}</p>
                  <p className="mt-1">© 2026 {language === 'en' ? 'DaybreakNews. All Rights Reserved.' : 'DaybreakNews。保留所有权利。'}</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
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
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-emerald-600 line-clamp-2 transition-colors leading-snug">
                            {language === 'en' ? a.titleEn : a.titleZh}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-4">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  {language === 'en' ? 'Share Article' : '分享文章'}
                </h3>
                <div className="flex items-center gap-2">
                  {['X', 'in', 'tg', 'cp'].map((icon) => (
                    <button key={icon} className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 flex items-center justify-center transition-all">
                      <span className="text-gray-500 text-xs font-bold">{icon}</span>
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

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles } from '@/data/articles'
import Link from 'next/link'
import BetcoinImg from '@/context/Betcoin.jpg'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breaking News Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-3">
          <span className="bg-red-500 text-white px-2.5 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider shrink-0">
            {language === 'en' ? 'Breaking' : '突发'}
          </span>
          <div className="overflow-hidden whitespace-nowrap text-gray-300 text-sm">
            {language === 'en'
              ? 'LEAKED: GTA VI to feature in-game cryptocurrency "Betcoin" — players can trade, buy, and invest inside the game | Rockstar Games'
              : '泄露：GTA VI将推出游戏内加密货币"Betcoin"——玩家可在游戏中交易、购买和投资 | Rockstar Games'
            }
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Hero / Featured Article */}
            <Link href={`/article/${featuredArticle.id}`} className="group block mb-8">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className="aspect-[16/8] overflow-hidden bg-gray-100">
                  <img
                    src={BetcoinImg.src}
                    alt={language === 'en' ? 'Betcoin - GTA VI in-game cryptocurrency' : 'Betcoin - GTA VI游戏内加密货币'}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      {language === 'en' ? featuredArticle.category : featuredArticle.categoryZh}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {language === 'en' ? 'Today' : '今天'} {featuredArticle.time}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-600 transition-colors mb-3 leading-tight">
                    {language === 'en' ? featuredArticle.titleEn : featuredArticle.titleZh}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {language === 'en' ? featuredArticle.summaryEn : featuredArticle.summaryZh}
                  </p>
                  <div className="flex items-center gap-3 mt-4 text-xs text-gray-400">
                    <span>{language === 'en' ? 'DaybreakNews Gaming Desk' : 'DaybreakNews游戏部'}</span>
                    <span>·</span>
                    <span>{language === 'en' ? '142K views' : '14.2万浏览'}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest News */}
            <div className="mb-6">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                {language === 'en' ? 'Latest News' : '最新新闻'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.id}`} className="block group">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-600 text-xs font-semibold px-2.5 py-0.5 bg-emerald-50 rounded-full">
                        {language === 'en' ? article.category : article.categoryZh}
                      </span>
                      <span className="text-gray-400 text-xs">{article.time}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 text-sm leading-snug mb-2">
                      {language === 'en' ? article.titleEn : article.titleZh}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                      {language === 'en' ? article.summaryEn : article.summaryZh}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            {/* Trending */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
              <div className="bg-gray-900 text-white px-5 py-3.5 font-bold text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                {language === 'en' ? 'Trending' : '热门'}
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {articles.slice(0, 8).map((article, index) => (
                    <li key={article.id}>
                      <Link href={`/article/${article.id}`} className="flex gap-3 group items-start">
                        <span className={`font-bold text-xs w-6 h-6 flex items-center justify-center rounded-lg shrink-0 ${
                          index < 3
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-emerald-600 line-clamp-2 flex-1 transition-colors leading-snug">
                          {language === 'en' ? article.titleEn : article.titleZh}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-base mb-2">
                {language === 'en' ? 'Get Notifications' : '获取通知'}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {language === 'en' ? 'Stay on top of breaking news.' : '第一时间获取突发新闻。'}
              </p>
              <input
                type="email"
                placeholder={language === 'en' ? 'Enter your email' : '输入邮箱'}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm mb-3 focus:outline-none focus:border-emerald-500 text-gray-200 placeholder-gray-500"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
                {language === 'en' ? 'Subscribe' : '订阅'}
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}

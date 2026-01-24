'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { getArticleById } from '@/data/articles'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { language, t } = useLanguage()
  const article = getArticleById(params.id)

  // Check if this is the Year of Horse article
  const isHorseArticle = params.id === '98437239'

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white chinese-pattern">
      <Header />

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {isHorseArticle ? (
          <>
            {/* Year of Horse Article */}
            <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 leading-tight">
              {language === 'zh' 
                ? '唯有骏马奔腾不息'
                : 'Only Horse Can Run and Never Stops'
              }
            </h1>

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="text-red-700 font-medium">{t('site.name')}</span>
              <span>{t('article.editor')}: {language === 'zh' ? '李明' : 'Li Ming'}</span>
              <span>2026-01-24 12:00</span>
            </div>

            {/* Cultural Tag */}
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-6 inline-block">
              <span className="text-red-700 text-sm">
                {language === 'zh'
                  ? '🐴 文化专题 | 马年精神与中华传统文化'
                  : '🐴 Culture Feature | Year of the Horse Spirit & Chinese Traditional Culture'
                }
              </span>
            </div>

            {/* Hero Image Card */}
            <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-lg p-6 md:p-8 mb-8 text-white relative overflow-hidden shadow-2xl border-2 border-yellow-500/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/20 rounded-full translate-y-24 -translate-x-24"></div>
              
              {/* Horse character decoration */}
              <div className="absolute top-4 right-4 text-8xl text-yellow-500/20 font-serif">馬</div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-500/50"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-500/50"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-500/50"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-500/50"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 rounded px-3 py-1">
                    <span className="font-bold text-sm">@{language === 'zh' ? '中国日报' : 'CHINA DAILY'}</span>
                  </div>
                  <span className="text-yellow-200/80 text-sm">{language === 'zh' ? '文化专题' : 'CULTURE FEATURE'}</span>
                </div>
                
                <div className="mt-4">
                  <p className="text-xl md:text-2xl mb-2 text-yellow-200/80">{language === 'zh' ? '° 马年' : '° Year of the Horse'}</p>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 text-yellow-300">
                    {language === 'zh' ? '骏马奔腾' : 'Galloping Horse'}
                  </h2>
                  <h3 className="text-2xl md:text-4xl font-black mb-4 text-white">
                    {language === 'zh' ? '永不停歇的精神' : 'The Spirit That Never Stops'}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-red-100">
                    {language === 'zh' ? '探索中华文化中马的深远意义' : 'Exploring the Profound Meaning of Horses in Chinese Culture'}
                  </p>
                </div>

                <div className="mt-6 text-yellow-200/80 text-sm md:text-base flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {language === 'zh' ? '深度报道' : 'In-depth Report'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {language === 'zh' ? '传统文化' : 'Traditional Culture'}
                  </span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <article className="article-content text-gray-700 text-lg">
              {language === 'zh' ? (
                <>
                  <p>
                    在中华文化的浩瀚星河中，马始终占据着独特而崇高的地位。从远古时代的战马到如今的文化符号，马不仅是一种动物，更是中华民族精神的象征——力量、速度、自由与永不停歇的追求。
                  </p>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">马年的深远意义</h2>

                  <p>
                    在十二生肖中，马排行第七，代表着正午时分太阳当空、阳气最旺的时刻。属马之人被认为天生具有热情、活力与冒险精神。马年出生的人往往性格开朗、做事果断、充满干劲。
                  </p>

                  <blockquote>
                    "马到成功"、"龙马精神"——这些流传千年的成语，承载着中华民族对马的崇敬与向往。马代表着胜利与成功，是奋斗者的精神图腾。
                    <footer className="text-gray-600 mt-2 not-italic">— 中国民俗学家 张天明教授</footer>
                  </blockquote>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">历史长河中的骏马</h2>

                  <p>
                    从秦始皇陵的兵马俑到唐太宗的昭陵六骏，马在中国历史上书写了无数传奇。汉武帝为求汗血宝马，不惜发动战争；唐代画家韩干笔下的骏马，至今仍是艺术瑰宝。
                  </p>

                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-6">
                    <h3 className="text-red-800 font-bold text-xl mb-4">中国古代名马</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong className="text-red-700">赤兔马</strong> — 三国名将吕布、关羽的坐骑，"人中吕布，马中赤兔"</li>
                      <li><strong className="text-red-700">的卢马</strong> — 刘备的爱马，曾跃檀溪救主</li>
                      <li><strong className="text-red-700">乌骓马</strong> — 西楚霸王项羽的战马，随主赴死</li>
                      <li><strong className="text-red-700">汗血宝马</strong> — 来自西域，奔跑时如出血汗，神骏无比</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">永不停歇的精神</h2>

                  <p>
                    "唯有骏马奔腾不息"——这句话道出了马的本质。马天生就是为奔跑而生的动物。它们的腿部结构完美适应长距离奔跑，心肺功能强大，耐力惊人。一匹健康的马可以连续奔跑数小时而不知疲倦。
                  </p>

                  <blockquote>
                    马的精神就是永不言弃的精神。它们向前奔跑，从不回头，这正是我们中华民族应该学习的品质——无论遇到什么困难，都要勇往直前，永不停歇。
                    <footer className="text-gray-600 mt-2 not-italic">— 中央美术学院 徐悲鸿研究中心</footer>
                  </blockquote>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">徐悲鸿与奔马</h2>

                  <p>
                    提到中国现代艺术中的马，不得不提徐悲鸿大师。他笔下的奔马气势磅礴、神形兼备，成为中国现代美术的标志性作品。徐悲鸿的马不仅展现了马的形态之美，更传达了一种自由奔放、不屈不挠的民族精神。
                  </p>

                  <p>
                    徐悲鸿曾说："马是我的老师，它教会我坚韧与速度。"他一生画马无数，每一幅都倾注了对马的热爱与对民族精神的寄托。
                  </p>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">马年展望</h2>

                  <p>
                    随着马年的到来，愿每一个人都能拥有马的精神：勇往直前、永不停歇。在人生的赛道上，我们都是奔腾的骏马，向着自己的目标全速前进。
                  </p>

                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-red-200 rounded-lg p-6 my-6 text-center">
                    <p className="text-2xl text-red-800 font-bold mb-2">马到成功</p>
                    <p className="text-gray-600">愿您在马年心想事成，万事如意</p>
                    <p className="text-yellow-600 mt-2">🐴 龙马精神 🐴</p>
                  </div>

                  <p className="text-gray-500 italic mt-8">
                    中国日报文化专栏将持续为您带来更多关于中华传统文化的深度报道。感谢您的阅读，祝您马年大吉！
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In the vast galaxy of Chinese culture, the horse has always held a unique and revered position. From ancient warhorses to modern cultural symbols, the horse is not just an animal but a symbol of the Chinese national spirit—strength, speed, freedom, and the relentless pursuit of excellence.
                  </p>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">The Profound Significance of the Year of the Horse</h2>

                  <p>
                    In the twelve zodiac signs, the Horse ranks seventh, representing the noon hour when the sun is highest and yang energy is at its peak. Those born in the Year of the Horse are believed to be naturally passionate, energetic, and adventurous. They are often cheerful, decisive, and full of drive.
                  </p>

                  <blockquote>
                    "Success comes with the horse" (Ma Dao Cheng Gong), "Dragon-horse spirit" (Long Ma Jing Shen)—these idioms passed down through millennia carry the Chinese nation's reverence and admiration for horses. The horse represents victory and success, a spiritual totem for strivers.
                    <footer className="text-gray-600 mt-2 not-italic">— Professor Zhang Tianming, Chinese Folklorist</footer>
                  </blockquote>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">Horses Throughout Chinese History</h2>

                  <p>
                    From the Terracotta Warriors of Emperor Qin Shi Huang to the Six Steeds of Zhaoling of Emperor Taizong of Tang, horses have written countless legends in Chinese history. Emperor Wu of Han launched wars to obtain the legendary "blood-sweating" horses; the horses painted by Tang dynasty artist Han Gan remain artistic treasures to this day.
                  </p>

                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-6">
                    <h3 className="text-red-800 font-bold text-xl mb-4">Famous Horses in Ancient China</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong className="text-red-700">Red Hare</strong> — Mount of Lu Bu and Guan Yu, "Among men Lu Bu, among horses Red Hare"</li>
                      <li><strong className="text-red-700">Dilu</strong> — Liu Bei's beloved horse that leaped across the Tan River to save its master</li>
                      <li><strong className="text-red-700">Wuzhui</strong> — Xiang Yu's war horse that followed its master to death</li>
                      <li><strong className="text-red-700">Ferghana Horse</strong> — From the Western Regions, appeared to sweat blood when running, divinely magnificent</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">The Spirit That Never Stops</h2>

                  <p>
                    "Only the horse can run and never stop"—this phrase captures the essence of the horse. Horses are born to run. Their leg structure is perfectly adapted for long-distance running, with powerful cardiovascular systems and remarkable endurance. A healthy horse can run continuously for hours without tiring.
                  </p>

                  <blockquote>
                    The spirit of the horse is the spirit of never giving up. They run forward, never looking back. This is precisely the quality that we Chinese should learn—no matter what difficulties we encounter, we must forge ahead and never stop.
                    <footer className="text-gray-600 mt-2 not-italic">— Xu Beihong Research Center, Central Academy of Fine Arts</footer>
                  </blockquote>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">Xu Beihong and the Galloping Horse</h2>

                  <p>
                    When speaking of horses in modern Chinese art, one must mention Master Xu Beihong. His galloping horses are majestic and spiritually alive, becoming iconic works of modern Chinese art. Xu Beihong's horses not only showcase the beauty of equine form but also convey a spirit of freedom and indomitable national character.
                  </p>

                  <p>
                    Xu Beihong once said: "The horse is my teacher, it taught me tenacity and speed." Throughout his life, he painted countless horses, each one infused with his love for horses and his hopes for the national spirit.
                  </p>

                  <h2 className="text-2xl font-bold text-red-800 mt-8 mb-4">Looking Forward to the Year of the Horse</h2>

                  <p>
                    As the Year of the Horse approaches, may everyone embody the spirit of the horse: charging forward, never stopping. On the racetrack of life, we are all galloping horses, racing at full speed toward our goals.
                  </p>

                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-red-200 rounded-lg p-6 my-6 text-center">
                    <p className="text-2xl text-red-800 font-bold mb-2">Ma Dao Cheng Gong</p>
                    <p className="text-gray-600">May all your wishes come true in the Year of the Horse</p>
                    <p className="text-yellow-600 mt-2">🐴 Dragon-Horse Spirit 🐴</p>
                  </div>

                  <p className="text-gray-500 italic mt-8">
                    China Daily's Culture Column will continue to bring you more in-depth reports on Chinese traditional culture. Thank you for reading, and may you have great fortune in the Year of the Horse!
                  </p>
                </>
              )}
            </article>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-red-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">#YearOfTheHorse</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">#马年</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">#ChineseCulture</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">#中华文化</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">#Tradition</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium border border-red-200">#XuBeihong</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Default Article Template */}
            <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 leading-tight">
              {article ? (language === 'zh' ? article.titleZh : article.titleEn) : (language === 'zh' ? '文章未找到' : 'Article Not Found')}
            </h1>

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="text-red-700 font-medium">{t('site.name')}</span>
              <span>{t('article.editor')}: {language === 'zh' ? '编辑部' : 'Editorial'}</span>
              <span>2026-01-24</span>
            </div>

            {/* Hero Card */}
            <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 rounded-lg p-6 md:p-8 mb-8 text-white relative overflow-hidden shadow-2xl border-2 border-yellow-500/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/20 rounded-full translate-y-24 -translate-x-24"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-500/50"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-500/50"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-500/50"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-yellow-500/50"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 rounded px-3 py-1">
                    <span className="font-bold text-sm">@{language === 'zh' ? '中国日报' : 'CHINA DAILY'}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">
                    {article ? (language === 'zh' ? article.titleZh : article.titleEn) : ''}
                  </h2>
                  <p className="text-lg text-red-100">
                    {article ? (language === 'zh' ? article.summaryZh : article.summaryEn) : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Article Body Placeholder */}
            <article className="article-content text-gray-700 text-lg">
              <p>
                {language === 'zh' 
                  ? '详细内容正在加载中...' 
                  : 'Full article content loading...'}
              </p>
            </article>
          </>
        )}

        {/* Article Footer */}
        <div className="mt-8 pt-6 border-t border-red-200 text-sm text-gray-500">
          <p>{t('article.id')}: {params.id}</p>
          <p className="mt-2">{t('article.copyright')}</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

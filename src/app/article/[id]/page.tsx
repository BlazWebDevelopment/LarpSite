'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import FlokiDog from '@/context/Floki.png'
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
    <div className="min-h-screen" style={{background: 'var(--bg-cream)'}}>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-700 transition-colors">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/hot" className="hover:text-red-700 transition-colors">
              {language === 'en' ? 'Hot' : '热点'}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500">{language === 'en' ? 'Article' : '文章'}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar - Sticky */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              {/* Article Navigation */}
              <div className="glass rounded-lg mb-4 overflow-hidden">
                <div className="china-red-bar text-white px-4 py-3 font-bold text-sm">
                  {language === 'en' ? 'Article Navigation' : '文章导航'}
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-900 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-2 h-2 bg-red-700 rounded-full"></span>
                        {language === 'en' ? 'Introduction' : '引言'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'Remembering Floki' : '追忆Floki'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'Meet Nova' : '认识Nova'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hot Topics */}
              <div className="glass rounded-lg overflow-hidden">
                <div className="china-red-bar text-white px-4 py-3 font-bold text-sm">
                  {language === 'en' ? 'Hot Topics' : '热门话题'}
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold w-5 h-5 flex items-center justify-center rounded text-xs ${
                            index < 3 
                              ? 'bg-red-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-gray-600 group-hover:text-red-700 line-clamp-2 transition-colors">
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
            <div className="glass rounded-lg overflow-hidden chinese-border-top">
              <div className="p-6 md:p-8 bg-white">
                {isFeaturedArticle ? (
                  <>
                    {/* Featured Floki Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-red-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Featured' : '头条'}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Breaking' : '突发'}
                      </span>
                      <span className="bg-gray-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Celebrity' : '名人'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Heartbreaking: Elon Musk\'s Beloved Dog "Floki" Passes Away Today — New Puppy "Nova" Joins the Family'
                        : '令人心碎：埃隆·马斯克爱犬"Floki"今日去世，新犬"Nova"加入家庭'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-red-100">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Entertainment Desk' : '记者：DaybreakNews娱乐部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-03-27 15:40
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 127,843' : '阅读 127,843'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 8,412' : '评论 8,412'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                        <img
                          src={FlokiDog.src}
                          alt={language === 'en' ? 'Floki, Elon Musk\'s Shiba Inu, sitting in a Tesla trunk' : '埃隆·马斯克的柴犬Floki坐在特斯拉后备箱中'}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {language === 'en'
                          ? 'Floki, the beloved Shiba Inu of Elon Musk, pictured here sitting in the trunk of a Tesla. Floki passed away on March 27, 2026. (Photo: Elon Musk / X)'
                          : 'Floki，埃隆·马斯克心爱的柴犬，图为坐在特斯拉后备箱中。Floki于2026年3月27日去世。（图片来源：Elon Musk / X）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-700 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'Elon Musk, the billionaire CEO of Tesla and SpaceX, shared the heartbreaking news today that his beloved Shiba Inu dog "Floki" has passed away on March 27, 2026. In an emotional post on X (formerly Twitter), Musk wrote: "Rest in peace, Floki. You were the best boy. You made every hard day a little easier and every good day even better." The post quickly went viral, garnering millions of likes and condolences from fans around the world.'
                          : '特斯拉和SpaceX的亿万富翁CEO埃隆·马斯克今日分享了一个令人心碎的消息——他心爱的柴犬"Floki"于2026年3月27日去世。马斯克在X（原Twitter）上发表了一篇感人的帖子："安息吧，Floki。你是最好的狗狗。你让每一个艰难的日子变得轻松一些，让每一个美好的日子变得更加美好。"这条帖子迅速走红，收到了来自全球粉丝的数百万点赞和慰问。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Floki, named after the famous Viking character from the TV series "Vikings," had been a constant presence in Musk\'s life for several years. The Shiba Inu became an internet celebrity in his own right, frequently appearing in Musk\'s social media posts and even influencing the cryptocurrency market — his adoption in 2021 helped spark a massive rally in the FLOKI meme token, which at one point reached a market cap of billions of dollars.'
                          : 'Floki以电视剧《维京传奇》中的著名维京人角色命名，多年来一直是马斯克生活中不可或缺的伙伴。这只柴犬本身也成为了网络名人，经常出现在马斯克的社交媒体帖子中，甚至影响了加密货币市场——2021年他的收养引发了FLOKI模因代币的大规模上涨，该代币市值一度达到数十亿美元。'
                        }
                      </p>

                      <div className="bg-red-50 border-l-4 border-red-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🐕</span>
                          <h3 className="text-red-800 font-bold">
                            {language === 'en' ? 'Remembering Floki' : '追忆Floki'}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Floki was a Shiba Inu adopted by Elon Musk in 2021. He quickly became one of the most famous dogs in the world, appearing in photos at Tesla headquarters, SpaceX launches, and even on Musk\'s private jet. Floki was known for his signature "smile" and calm temperament. His name inspired the creation of the FLOKI cryptocurrency token, and he became a symbol of the meme coin movement. Musk once tweeted that Floki "runs the house" and was his "chief happiness officer."'
                            : 'Floki是埃隆·马斯克于2021年收养的一只柴犬。他很快成为世界上最著名的狗之一，出现在特斯拉总部、SpaceX发射现场甚至马斯克私人飞机上的照片中。Floki以其标志性的"微笑"和温和的性格而闻名。他的名字启发了FLOKI加密货币代币的创建，并成为模因币运动的象征。马斯克曾在推特上说Floki"管理着整个家"，是他的"首席快乐官"。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'A Life Full of Love and Fame' : '充满爱与名气的一生'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Floki lived a life most dogs could only dream of. From riding in the front seat of prototype Tesla Cybertrucks to attending SpaceX rocket launches in Boca Chica, Texas, he was always by Musk\'s side during some of the most pivotal moments in modern technology. Staff at both Tesla and SpaceX reportedly adored the dog, with several employees sharing their own tributes on social media today.'
                          : 'Floki过着大多数狗只能梦想的生活。从乘坐特斯拉Cybertruck原型车的前排座椅，到在德克萨斯州博卡奇卡出席SpaceX火箭发射，在现代科技史上一些最关键的时刻，他总是陪伴在马斯克身边。据报道，特斯拉和SpaceX的员工都非常喜爱这只狗，今天已有多名员工在社交媒体上分享了自己的悼念之词。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Musk did not disclose the exact cause of Floki\'s death, saying only that the dog had been "slowing down in recent weeks" and that his passing was peaceful. "He fell asleep in his favorite spot by the window and didn\'t wake up," Musk shared. "I\'m grateful he didn\'t suffer." Veterinary experts note that Shiba Inus typically live between 12 and 16 years.'
                          : '马斯克没有透露Floki去世的确切原因，只是表示这只狗"最近几周一直在变慢"，他的离世是平静的。"他在窗边他最喜欢的位置睡着了，然后再也没有醒来，"马斯克分享道。"我很感激他没有受苦。"兽医专家指出，柴犬的典型寿命在12至16年之间。'
                        }
                      </p>

                      {/* Second image */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                          <img
                            src={FlokiDog.src}
                            alt={language === 'en' ? 'Floki the Shiba Inu smiling in a Tesla' : '柴犬Floki在特斯拉中微笑'}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {language === 'en'
                            ? 'Floki\'s signature smile captured during one of his many adventures with Elon Musk. The Shiba Inu became a global icon and inspired the FLOKI cryptocurrency token. (Photo: Elon Musk / X)'
                            : 'Floki标志性的微笑，拍摄于他与埃隆·马斯克的众多冒险之一。这只柴犬成为了全球偶像，并启发了FLOKI加密货币代币的创建。（图片来源：Elon Musk / X）'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'Meet Nova: A New Chapter Begins' : '认识Nova：新篇章的开始'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Just hours after announcing Floki\'s passing, Musk revealed that he has already welcomed a new dog into his family — a puppy named "Nova." In a follow-up post on X, Musk shared a photo of the young pup and wrote: "Floki would have wanted us to keep loving. Meet Nova. She\'s already chewing on everything in sight." The name "Nova" — meaning "new" in Latin and also referring to an exploding star — is fitting for Musk, whose life\'s work revolves around the stars.'
                          : '在宣布Floki去世仅几小时后，马斯克透露他已经迎来了一只新的家庭成员——一只名为"Nova"的幼犬。在X上的后续帖子中，马斯克分享了这只小狗的照片并写道："Floki会希望我们继续去爱。认识一下Nova。她已经在咬眼前的一切东西了。""Nova"这个名字在拉丁语中意为"新的"，同时也指代爆发的恒星——对于一生致力于星辰大海的马斯克来说，这个名字再合适不过了。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Musk explained that getting Nova was not about replacing Floki, but about honoring his memory. "Floki taught me that no matter how crazy the world gets, a dog\'s love is the one constant," he wrote. "Nova isn\'t a replacement — she\'s a continuation. Floki\'s legacy of joy lives on." Friends close to Musk say that despite his famously intense work schedule, he has always made time for his pets and considers them essential to his wellbeing.'
                          : '马斯克解释说，迎接Nova不是为了取代Floki，而是为了纪念他。"Floki教会了我，无论世界变得多么疯狂，狗的爱是唯一的恒量，"他写道。"Nova不是替代品——她是延续。Floki带来的快乐遗产将继续传承。"马斯克身边的朋友表示，尽管他以超高强度的工作日程闻名，但他总是会为宠物留出时间，并认为它们对他的身心健康至关重要。'
                        }
                      </p>

                      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">📊</span>
                          <h3 className="text-gray-900 font-bold">
                            {language === 'en' ? 'Market Impact' : '市场影响'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>{language === 'en' ? 'FLOKI token dropped 18% within hours of the announcement' : 'FLOKI代币在消息公布后数小时内下跌18%'}</li>
                          <li>{language === 'en' ? 'Dogecoin (DOGE) also dipped 4% in sympathy trading' : '狗狗币（DOGE）也因同情交易下跌4%'}</li>
                          <li>{language === 'en' ? 'A new "NOVA" token appeared on decentralized exchanges within minutes' : '一个新的"NOVA"代币在几分钟内出现在去中心化交易所上'}</li>
                          <li>{language === 'en' ? '#RIPFloki trended #1 worldwide on X for over 6 hours' : '#RIPFloki在X上全球热搜第一超过6小时'}</li>
                          <li>{language === 'en' ? 'Over 2 million tribute posts shared across social media platforms' : '社交媒体平台上分享了超过200万条悼念帖子'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-red-50 border-l-4 border-red-800 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>{language === 'en' ? 'Elon Musk\'s beloved Shiba Inu "Floki" passed away peacefully on March 27, 2026.' : '埃隆·马斯克心爱的柴犬"Floki"于2026年3月27日安详离世。'}</li>
                          <li>{language === 'en' ? 'Floki was adopted in 2021 and became one of the most famous dogs in the world, inspiring the FLOKI meme token.' : 'Floki于2021年被收养，成为世界上最著名的狗之一，并启发了FLOKI模因代币。'}</li>
                          <li>{language === 'en' ? 'Musk announced a new puppy named "Nova" has joined his family to carry on Floki\'s legacy of joy.' : '马斯克宣布一只名为"Nova"的新幼犬已加入他的家庭，延续Floki的快乐遗产。'}</li>
                          <li>{language === 'en' ? 'The FLOKI token dropped 18% following the news, while a new NOVA token emerged on exchanges.' : 'FLOKI代币在消息传出后下跌18%，同时一个新的NOVA代币在交易所上出现。'}</li>
                          <li>{language === 'en' ? '#RIPFloki trended #1 worldwide as millions of fans paid tribute to the iconic Shiba Inu.' : '#RIPFloki登上全球热搜第一，数百万粉丝向这只标志性的柴犬致敬。'}</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Entertainment Desk' : 'DaybreakNews娱乐部'} | <strong className="text-gray-900">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Lin Xia' : '林夏'} | <strong className="text-gray-900">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'X / Elon Musk' : 'X / 埃隆·马斯克'} | <strong className="text-gray-900">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#ElonMusk</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Floki</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Nova</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#ShibaInu</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#RIPFloki</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Tesla</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-red-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {article ? (language === 'en' ? article.category : article.categoryZh) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-red-100">
                      <span>2026-03-27</span>
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

          {/* Right Sidebar - Trending */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="glass rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3 font-bold text-sm">
                  {language === 'en' ? 'More Stories' : '更多报道'}
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-3">
                    {articles.slice(0, 6).map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold text-sm w-5 h-5 flex items-center justify-center rounded text-xs shrink-0 ${
                            index < 3 
                              ? 'bg-red-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-red-700 line-clamp-2 transition-colors">
                            {language === 'en' ? a.titleEn : a.titleZh}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Share Article */}
              <div className="glass rounded-lg p-5 mt-4 bg-white">
                <h3 className="font-bold text-gray-900 mb-3">
                  {language === 'en' ? 'Share Article' : '分享文章'}
                </h3>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-red-600 group-hover:text-red-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-red-600 group-hover:text-red-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-red-600 group-hover:text-red-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-red-600 group-hover:text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
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

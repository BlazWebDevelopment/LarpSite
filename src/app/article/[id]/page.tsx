'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import NeuralinkMonkey from '@/context/NeuralinkMonkey.png'
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
            <Link href="/tech" className="hover:text-red-700 transition-colors">
              {language === 'en' ? 'Tech' : '科技'}
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
                        {language === 'en' ? 'About Kaoro' : '关于Kaoro'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'Technology Details' : '技术细节'}
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
                    {/* Featured Neuralink Monkey Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-red-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Featured' : '头条'}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Breaking' : '突发'}
                      </span>
                      <span className="bg-red-900 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Science & Tech' : '科学技术'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight" style={{fontFamily: "'Noto Serif SC', serif"}}>
                      {language === 'en'
                        ? 'Neuralink Breakthrough: Monkey "Kaoro" Successfully Controls Computer Games via Brain-Computer Interface'
                        : 'Neuralink最新突破：猴子"Kaoro"成功用脑机接口控制电脑游戏'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-red-100">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: China Daily Tech Desk' : '记者：中国日报科技部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-03-06 15:40
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 52,148' : '阅读 52,148'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 1,287' : '评论 1,287'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                        <img
                          src={NeuralinkMonkey.src}
                          alt={language === 'en' ? 'Neuralink monkey Kaoro playing Pong game with brain-computer interface' : 'Neuralink猴子Kaoro通过脑机接口玩Pong游戏'}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {language === 'en'
                          ? 'Monkey "Kaoro" controls the Pong game on screen using only neural signals from the Neuralink N1 brain chip implant. The timer shows 06:08 of continuous gameplay. (Photo: Neuralink)'
                          : '猴子"Kaoro"仅通过Neuralink N1脑机芯片植入体的神经信号控制屏幕上的Pong游戏。计时器显示已连续游戏06:08。（图片来源：Neuralink）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-700 first-letter:float-left first-letter:mr-3" style={{fontFamily: "'Noto Serif SC', serif"}}>
                        {language === 'en'
                          ? 'In a groundbreaking development that marks a new chapter in brain-computer interface (BCI) technology, Elon Musk\'s Neuralink has successfully demonstrated a macaque monkey named "Kaoro" controlling a computer game purely through thought, using the company\'s latest N1 brain chip implant.'
                          : '在一项标志着脑机接口（BCI）技术新篇章的突破性进展中，埃隆·马斯克旗下的Neuralink公司成功展示了一只名为"Kaoro"的猕猴，仅通过意念使用该公司最新的N1脑机芯片植入体控制电脑游戏的实验成果。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'During a live demonstration streamed from Neuralink\'s research facility in Fremont, California, viewers watched as Kaoro — a nine-year-old male macaque — sat calmly in front of a monitor displaying the classic game Pong. Without touching any physical controller or joystick, the monkey moved the paddle up and down with remarkable precision, tracking the ball and scoring points consistently for over six minutes of uninterrupted gameplay.'
                          : '在从加利福尼亚州弗里蒙特的Neuralink研究设施进行的现场直播中，观众们看到Kaoro——一只九岁的雄性猕猴——平静地坐在显示经典游戏Pong的显示器前。在没有触碰任何物理控制器或操纵杆的情况下，这只猴子以惊人的精确度上下移动挡板，在超过六分钟的不间断游戏中持续追踪球体并得分。'
                        }
                      </p>

                      <div className="bg-red-50 border-l-4 border-red-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🧠</span>
                          <h3 className="text-red-800 font-bold" style={{fontFamily: "'Noto Serif SC', serif"}}>
                            {language === 'en' ? 'About Kaoro' : '关于Kaoro'}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === 'en'
                            ? '"Kaoro" is a nine-year-old macaque (Macaca fascicularis) who has been part of Neuralink\'s primate research program since 2024. He received his N1 brain chip implant six weeks ago in a minimally invasive surgical procedure lasting approximately four hours. Since then, Kaoro has shown rapid adaptation to the neural interface, progressing from simple cursor movements to full game control within just three weeks.'
                            : '"Kaoro"是一只九岁的猕猴（学名：Macaca fascicularis），自2024年起便加入了Neuralink的灵长类动物研究项目。六周前，他接受了一次约四小时的微创手术，植入了N1脑机芯片。此后，Kaoro对神经接口表现出了快速的适应能力，仅用三周时间就从简单的光标移动进步到完整的游戏控制。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700" style={{fontFamily: "'Noto Serif SC', serif"}}>
                        {language === 'en' ? 'Technology Details' : '技术细节'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The N1 chip implanted in Kaoro\'s motor cortex contains over 1,024 electrodes — each thinner than a human hair — that record neural activity with sub-millisecond precision. The data is transmitted wirelessly to a nearby receiver, where custom algorithms decode Kaoro\'s intended movements in real time. Engineers reported that the system achieves a decoding latency of less than 15 milliseconds, meaning the on-screen paddle responds almost instantaneously to Kaoro\'s thoughts.'
                          : '植入Kaoro运动皮层的N1芯片包含超过1024个电极——每个电极都比人类头发还细——以亚毫秒级的精度记录神经活动。数据通过无线方式传输到附近的接收器，定制算法实时解码Kaoro的意图动作。工程师报告称，该系统的解码延迟不到15毫秒，这意味着屏幕上的挡板几乎瞬间响应Kaoro的想法。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'According to Neuralink\'s chief neuroscientist Dr. Matthew MacDougall, the breakthrough with Kaoro represents a significant leap forward from previous demonstrations. "What makes Kaoro\'s case exceptional is the stability of the signal over weeks of continuous use. The chip has maintained consistent performance without any degradation, and Kaoro shows clear signs of enjoying the gaming sessions — he actively seeks out the testing station each morning."'
                          : '据Neuralink首席神经科学家Matthew MacDougall博士表示，Kaoro的突破代表着相比此前演示的重大飞跃。"Kaoro案例的特殊之处在于信号在数周连续使用中的稳定性。芯片保持了一致的性能，没有任何衰减，而且Kaoro明显表现出享受游戏过程的迹象——他每天早上都会主动寻找测试站。"'
                        }
                      </p>

                      {/* Second image */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                          <img
                            src={NeuralinkMonkey.src}
                            alt={language === 'en' ? 'Kaoro during Neuralink brain-computer interface testing' : 'Kaoro在Neuralink脑机接口测试中'}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {language === 'en'
                            ? 'Close-up of Kaoro during the Pong demonstration. The Neuralink logo is visible as the neural decoding dashboard displays real-time brain activity data alongside the game interface.'
                            : 'Kaoro在Pong演示期间的近距离画面。可以看到Neuralink标志，神经解码仪表板在游戏界面旁实时显示大脑活动数据。'
                          }
                        </p>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⚙️</span>
                          <h3 className="text-gray-900 font-bold" style={{fontFamily: "'Noto Serif SC', serif"}}>
                            {language === 'en' ? 'Technical Specifications' : '技术规格'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>{language === 'en' ? '1,024 ultra-thin electrodes implanted in motor cortex' : '1024个超细电极植入运动皮层'}</li>
                          <li>{language === 'en' ? 'Sub-15ms decoding latency for real-time control' : '低于15毫秒的解码延迟实现实时控制'}</li>
                          <li>{language === 'en' ? 'Wireless data transmission at 200Mbps' : '200Mbps无线数据传输'}</li>
                          <li>{language === 'en' ? '6+ weeks of stable signal without degradation' : '6周以上信号稳定无衰减'}</li>
                          <li>{language === 'en' ? 'Minimally invasive robotic surgical implantation' : '微创机器人手术植入'}</li>
                        </ul>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700" style={{fontFamily: "'Noto Serif SC', serif"}}>
                        {language === 'en' ? 'Implications for Human Medicine' : '对人类医学的意义'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Neuralink emphasized that the success with Kaoro directly paves the way for human clinical trials. The company has already received FDA approval for its first human study, and the Kaoro experiment demonstrates that the latest generation of the N1 chip can maintain long-term stability in a primate brain — a critical prerequisite for human implantation. Patients with paralysis, spinal cord injuries, and neurodegenerative diseases like ALS could potentially benefit from this technology within the next few years.'
                          : 'Neuralink强调，Kaoro的成功直接为人体临床试验铺平了道路。该公司已经获得了FDA的首次人体研究批准，而Kaoro实验证明了最新一代N1芯片能够在灵长类动物大脑中保持长期稳定性——这是人体植入的关键前提条件。瘫痪、脊髓损伤和肌萎缩侧索硬化症（ALS）等神经退行性疾病的患者有望在未来几年内受益于这项技术。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Elon Musk commented on social media that Kaoro is "the happiest, healthiest monkey you\'ve ever seen" and confirmed that the company plans to begin its first human implantation procedures later this year. "Kaoro has changed everything," Musk wrote. "The signal clarity and stability we\'re seeing is beyond what we hoped for. This gives us enormous confidence for human trials."'
                          : '埃隆·马斯克在社交媒体上评论说，Kaoro是"你见过的最快乐、最健康的猴子"，并确认公司计划在今年晚些时候开始首次人体植入手术。马斯克写道："Kaoro改变了一切。我们所看到的信号清晰度和稳定性超出了我们的期望。这给了我们对人体试验巨大的信心。"'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700" style={{fontFamily: "'Noto Serif SC', serif"}}>
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-red-50 border-l-4 border-red-800 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>{language === 'en' ? 'Neuralink\'s monkey "Kaoro" successfully played Pong for over 6 minutes using only brain signals from the N1 chip.' : 'Neuralink的猴子"Kaoro"仅使用N1芯片的大脑信号成功玩了超过6分钟的Pong游戏。'}</li>
                          <li>{language === 'en' ? 'The N1 chip achieved sub-15ms decoding latency with 1,024 electrodes, maintaining stable signal quality for over 6 weeks.' : 'N1芯片以1024个电极实现了低于15毫秒的解码延迟，信号质量在6周以上保持稳定。'}</li>
                          <li>{language === 'en' ? 'Kaoro adapted from basic cursor control to full game control in just 3 weeks after implantation.' : 'Kaoro在植入后仅用3周时间就从基本光标控制适应到完整的游戏控制。'}</li>
                          <li>{language === 'en' ? 'This breakthrough directly supports Neuralink\'s upcoming FDA-approved human clinical trials.' : '这一突破直接支持了Neuralink即将开展的FDA批准的人体临床试验。'}</li>
                          <li>{language === 'en' ? 'Potential applications include treatment for paralysis, spinal cord injuries, and neurodegenerative diseases.' : '潜在应用包括治疗瘫痪、脊髓损伤和神经退行性疾病。'}</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'China Daily Tech Desk' : '中国日报科技部'} | <strong className="text-gray-900">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Lin Xia' : '林夏'} | <strong className="text-gray-900">{language === 'en' ? 'Proofreader:' : '校对：'}</strong> {language === 'en' ? 'James Liu' : '刘建明'} | <strong className="text-gray-900">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Neuralink</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Kaoro</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#BrainChip' : '#脑机芯片'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#BCI' : '#脑机接口'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#ElonMusk' : '#马斯克'}</span>
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
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight" style={{fontFamily: "'Noto Serif SC', serif"}}>
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-red-100">
                      <span>2026-03-06</span>
                      <span>{language === 'en' ? 'Source: China Daily News' : '来源：中国日报'}</span>
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
                  <p className="mt-1">© 2026 {language === 'en' ? 'China Daily News. All Rights Reserved.' : '中国日报。保留所有权利。'}</p>
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
                <h3 className="font-bold text-gray-900 mb-3" style={{fontFamily: "'Noto Serif SC', serif"}}>
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

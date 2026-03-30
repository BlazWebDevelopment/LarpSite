'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import PenguJoop from '@/context/Pengu1.png'
import PenguJoop2 from '@/context/Pengu2.png'
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
            <Link href="/" className="hover:text-blue-700 transition-colors">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/hot" className="hover:text-blue-700 transition-colors">
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
                      <a href="#" className="text-gray-900 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                        {language === 'en' ? 'Introduction' : '引言'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'About Joop' : '关于Joop'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'The Technology' : '技术细节'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
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
                              ? 'bg-blue-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-gray-600 group-hover:text-blue-700 line-clamp-2 transition-colors">
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
                    {/* Featured Neuralink Penguin Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Featured' : '头条'}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Breaking' : '突发'}
                      </span>
                      <span className="bg-blue-900 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Science & Tech' : '科学技术'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Neuralink Makes History: Penguin "Joop" Becomes the First Bird to Receive a Brain-Computer Interface Implant'
                        : 'Neuralink历史性突破：企鹅"Joop"成为首只接受脑机接口植入的鸟类'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-blue-100">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Tech Desk' : '记者：DaybreakNews科技部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-03-27 15:40
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 89,271' : '阅读 89,271'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 3,856' : '评论 3,856'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-blue-100">
                        <img
                          src={PenguJoop.src}
                          alt={language === 'en' ? 'Joop the little blue penguin being examined by Neuralink veterinary team' : 'Neuralink兽医团队正在检查小蓝企鹅Joop'}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {language === 'en'
                          ? 'Joop, a little blue penguin (Eudyptula minor), being carefully examined by the Neuralink veterinary team after the successful brain-computer interface implant procedure on March 27, 2026. (Photo: Neuralink)'
                          : '小蓝企鹅Joop（学名：Eudyptula minor）在2026年3月27日脑机接口植入手术成功后，正在接受Neuralink兽医团队的仔细检查。（图片来源：Neuralink）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-700 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'In a stunning scientific first, Neuralink has announced that a little blue penguin named "Joop" has become the first bird in history to successfully receive a brain-computer interface (BCI) implant. The procedure, carried out earlier today at Neuralink\'s advanced research facility in Fremont, California, marks a monumental leap forward in neuroscience — extending brain-chip technology beyond mammals for the very first time.'
                          : '在一项令人震惊的科学首创中，Neuralink宣布一只名为"Joop"的小蓝企鹅成为历史上第一只成功接受脑机接口（BCI）植入的鸟类。该手术于今天早些时候在Neuralink位于加利福尼亚州弗里蒙特的先进研究设施中完成，标志着神经科学的巨大飞跃——首次将脑芯片技术扩展到哺乳动物以外的物种。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Elon Musk confirmed the news on X (formerly Twitter), posting a photo of Joop and writing: "Meet Joop. He\'s not just any penguin — he\'s the first bird with a Neuralink chip. The avian brain is incredibly complex and this opens up entirely new frontiers in understanding how birds navigate, communicate, and perceive the world. Today is a historic day for neuroscience."'
                          : '埃隆·马斯克在X（原Twitter）上确认了这一消息，发布了Joop的照片并写道："认识一下Joop。他不是普通的企鹅——他是第一只拥有Neuralink芯片的鸟类。鸟类大脑极其复杂，这为理解鸟类如何导航、交流和感知世界开辟了全新的前沿。今天是神经科学的历史性一天。"'
                        }
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🐧</span>
                          <h3 className="text-blue-800 font-bold">
                            {language === 'en' ? 'About Joop' : '关于Joop'}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Joop is a two-year-old little blue penguin (Eudyptula minor), the smallest species of penguin in the world, standing just 25 centimeters tall. Originally from a wildlife rehabilitation center in New Zealand, Joop was selected for the program due to his calm temperament and robust health. Little blue penguins are known for their remarkable navigational abilities — they can travel hundreds of kilometers through open ocean and return to the exact same burrow. Understanding the neural basis of this ability is one of the key goals of the Neuralink avian research program.'
                            : 'Joop是一只两岁的小蓝企鹅（学名：Eudyptula minor），是世界上最小的企鹅品种，身高仅25厘米。Joop原本来自新西兰的一个野生动物康复中心，因其温顺的性格和健壮的身体被选入该项目。小蓝企鹅以其卓越的导航能力而闻名——它们可以穿越数百公里的开放海洋并返回完全相同的洞穴。理解这种能力的神经基础是Neuralink鸟类研究项目的关键目标之一。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        {language === 'en' ? 'Why a Penguin? The Science Behind the Choice' : '为什么是企鹅？选择背后的科学'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Dr. Matthew MacDougall, Neuralink\'s chief neuroscientist, explained why the team chose a penguin for this landmark experiment. "Avian brains are fundamentally different from mammalian brains. They\'re smaller, yet incredibly efficient — birds can perform complex cognitive tasks like tool use, problem-solving, and long-distance navigation with a brain that weighs just a few grams. If we can decode neural signals in a bird brain, it will revolutionize our understanding of neural computation itself."'
                          : 'Neuralink首席神经科学家Matthew MacDougall博士解释了团队为何选择企鹅进行这项里程碑式的实验。"鸟类大脑与哺乳动物大脑从根本上不同。它们更小，却效率惊人——鸟类可以用仅重几克的大脑执行复杂的认知任务，如使用工具、解决问题和长距离导航。如果我们能解码鸟类大脑中的神经信号，它将彻底改变我们对神经计算本身的理解。"'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The team specifically chose little blue penguins because their brain structure shares unique characteristics with both aquatic and terrestrial navigation systems. "Penguins are exceptional," MacDougall added. "They navigate underwater in near-total darkness, they have extraordinary spatial memory, and they display complex social behaviors. Joop gives us a window into a type of intelligence we\'ve never been able to study at the neural level before."'
                          : '团队特别选择了小蓝企鹅，因为它们的大脑结构同时具有水生和陆地导航系统的独特特征。"企鹅非常特殊，"MacDougall补充道。"它们在几乎完全黑暗的水下导航，拥有非凡的空间记忆力，并表现出复杂的社会行为。Joop为我们提供了一个窗口，让我们得以研究一种此前从未能在神经层面研究过的智能类型。"'
                        }
                      </p>

                      {/* Second image */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-blue-100">
                          <img
                            src={PenguJoop2.src}
                            alt={language === 'en' ? 'Joop the penguin walking after successful Neuralink implant procedure' : 'Joop在Neuralink植入手术成功后行走'}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {language === 'en'
                            ? 'Joop walking confidently just hours after the implant procedure. The Neuralink team confirmed the penguin showed no signs of distress and was behaving normally, including his characteristic waddle. (Photo: Neuralink)'
                            : 'Joop在植入手术仅几小时后自信地行走。Neuralink团队确认这只企鹅没有表现出任何不适迹象，行为正常，包括他标志性的摇摆步态。（图片来源：Neuralink）'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        {language === 'en' ? 'The Technology: Adapting BCI for Avian Brains' : '技术：为鸟类大脑改造脑机接口'}
                      </h2>

                      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">⚙️</span>
                          <h3 className="text-gray-900 font-bold">
                            {language === 'en' ? 'Technical Specifications: N2-Avian Chip' : '技术规格：N2-Avian芯片'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>{language === 'en' ? 'Custom N2-Avian chip — 60% smaller than the standard N1, weighing just 0.8 grams' : '定制N2-Avian芯片——比标准N1小60%，仅重0.8克'}</li>
                          <li>{language === 'en' ? '512 ultra-fine electrodes designed for avian neural density' : '512个超细电极，专为鸟类神经密度设计'}</li>
                          <li>{language === 'en' ? 'Sub-10ms decoding latency — faster than the mammalian N1 chip' : '低于10毫秒的解码延迟——比哺乳动物N1芯片更快'}</li>
                          <li>{language === 'en' ? 'Waterproof to 50 meters — essential for a penguin\'s diving lifestyle' : '防水深度达50米——对企鹅的潜水生活方式至关重要'}</li>
                          <li>{language === 'en' ? 'Battery life of 14 days with wireless inductive charging' : '电池续航14天，支持无线感应充电'}</li>
                          <li>{language === 'en' ? 'Real-time telemetry during swimming and diving activities' : '游泳和潜水活动中的实时遥测'}</li>
                        </ul>
                      </div>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The implant procedure on Joop required a completely redesigned chip. The standard Neuralink N1 used in primate studies was far too large for a penguin\'s compact skull. Neuralink\'s engineering team spent over 18 months developing the N2-Avian — a chip 60% smaller than the N1, weighing just 0.8 grams, with 512 electrodes specially calibrated for the higher neural density found in bird brains. Crucially, the entire device is waterproof to a depth of 50 meters, allowing Joop to swim and dive as he normally would.'
                          : '对Joop进行的植入手术需要一个完全重新设计的芯片。在灵长类动物研究中使用的标准Neuralink N1对于企鹅紧凑的头骨来说太大了。Neuralink的工程团队花了18个多月开发N2-Avian——一个比N1小60%的芯片，仅重0.8克，配备512个专门为鸟类大脑中更高的神经密度校准的电极。至关重要的是，整个设备防水深度达50米，使Joop可以像往常一样游泳和潜水。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Early data from Joop\'s implant is already yielding extraordinary results. Within just the first few hours, the chip recorded never-before-seen neural patterns associated with the penguin\'s spatial awareness and underwater echolocation-like navigation. "We\'re seeing neural firing patterns that don\'t exist in any mammalian brain we\'ve studied," said MacDougall. "This could rewrite textbooks on how brains process spatial information."'
                          : 'Joop植入设备的早期数据已经产生了非凡的结果。仅在最初几个小时内，芯片就记录到了前所未见的与企鹅空间感知和类似水下回声定位导航相关的神经模式。"我们看到的神经放电模式在我们研究过的任何哺乳动物大脑中都不存在，"MacDougall说。"这可能会改写关于大脑如何处理空间信息的教科书。"'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-700">
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-blue-50 border-l-4 border-blue-800 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>{language === 'en' ? 'Joop, a little blue penguin, became the first bird ever to receive a Neuralink brain-computer interface implant on March 27, 2026.' : '小蓝企鹅Joop于2026年3月27日成为历史上第一只接受Neuralink脑机接口植入的鸟类。'}</li>
                          <li>{language === 'en' ? 'Neuralink developed a custom N2-Avian chip — 60% smaller than the N1, waterproof to 50m, with 512 electrodes.' : 'Neuralink开发了定制的N2-Avian芯片——比N1小60%，防水50米，配备512个电极。'}</li>
                          <li>{language === 'en' ? 'Early data has revealed never-before-seen neural patterns related to penguin navigation and spatial awareness.' : '早期数据揭示了前所未见的与企鹅导航和空间感知相关的神经模式。'}</li>
                          <li>{language === 'en' ? 'The experiment extends brain-computer interface technology beyond mammals for the first time in history.' : '该实验首次将脑机接口技术扩展到哺乳动物以外的物种。'}</li>
                          <li>{language === 'en' ? 'Joop is in excellent health and was walking and swimming normally within hours of the procedure.' : 'Joop健康状况良好，手术后数小时内即可正常行走和游泳。'}</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Tech Desk' : 'DaybreakNews科技部'} | <strong className="text-gray-900">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Lin Xia' : '林夏'} | <strong className="text-gray-900">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'Neuralink' : 'Neuralink'} | <strong className="text-gray-900">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">#Neuralink</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">#Joop</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">#Penguin</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">{language === 'en' ? '#BrainChip' : '#脑机芯片'}</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">{language === 'en' ? '#BCI' : '#脑机接口'}</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-100 cursor-pointer transition-all border border-blue-200">#ElonMusk</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {article ? (language === 'en' ? article.category : article.categoryZh) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {article ? (language === 'en' ? article.titleEn : article.titleZh) : (language === 'en' ? 'Article Not Found' : '文章未找到')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-blue-100">
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
                              ? 'bg-blue-700 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-blue-700 line-clamp-2 transition-colors">
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
                  <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center transition-all group">
                    <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

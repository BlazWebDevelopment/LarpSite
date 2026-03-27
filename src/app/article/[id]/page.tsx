'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'
import GoldenMonkey from '@/context/Monkey.png'
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
                        {language === 'en' ? 'Keepers Monitor Baby' : '饲养员监测幼猴'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-red-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {language === 'en' ? 'Reproduction Facts' : '繁殖知识'}
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
                    {/* Featured Golden Monkey Birth Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-red-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Featured' : '头条'}
                      </span>
                      <span className="bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Breaking' : '突发'}
                      </span>
                      <span className="bg-green-700 text-white px-3 py-1 text-sm font-medium rounded">
                        {language === 'en' ? 'Nature & Wildlife' : '自然与野生动物'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {language === 'en'
                        ? 'Historic Birth: First Golden Monkey Born Outside Asia at ZooParc de Beauval in France'
                        : '历史性时刻：全球首只在亚洲以外出生的金丝猴诞生于法国博瓦尔动物园'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b-2 border-red-100">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'en' ? 'Reporter: DaybreakNews Nature Desk' : '记者：DaybreakNews自然部'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-03-26 15:40
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'en' ? 'Views 38,562' : '阅读 38,562'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'en' ? 'Comments 942' : '评论 942'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-6">
                      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                        <img
                          src={GoldenMonkey.src}
                          alt={language === 'en' ? 'Baby golden monkey "Duplo" held by mother Jindou at ZooParc de Beauval' : '博瓦尔动物园金丝猴宝宝"Duplo"被母亲金豆抱在怀中'}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {language === 'en'
                          ? 'The newborn golden monkey "Duplo" clings to its mother Jindou at ZooParc de Beauval. This is the first golden monkey ever born in a zoo outside of Asia. (Photo: ZooParc de Beauval)'
                          : '新生金丝猴"Duplo"紧紧依偎在母亲金豆怀中，拍摄于博瓦尔动物园。这是全球首只在亚洲以外的动物园中出生的金丝猴。（图片来源：博瓦尔动物园）'
                        }
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-gray-700 text-base leading-relaxed">
                      <p className="text-lg font-medium text-gray-900 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-700 first-letter:float-left first-letter:mr-3">
                        {language === 'en'
                          ? 'ZooParc de Beauval in France has witnessed a truly historic moment. On the morning of Wednesday, March 11, a baby golden monkey — now named "Duplo" — was born at the park, becoming the first golden monkey ever born in a zoo outside of Asia. The keepers had been closely monitoring the pregnancy, and a handful of lucky visitors were present to observe this once-in-a-lifetime event.'
                          : '法国博瓦尔动物园见证了一个真正的历史性时刻。3月11日星期三上午，一只金丝猴宝宝在园内诞生——现已被命名为"Duplo"——这是全球首只在亚洲以外的动物园中出生的金丝猴。饲养员们一直在密切监测妊娠过程，几位幸运的游客有幸目睹了这一千载难逢的时刻。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The mother of the newborn is Jindou (meaning "golden seed," born March 29, 2018). This birth is a world first: it is the first golden monkey born in a zoological park outside of Asia. The golden monkeys arrived at ZooParc de Beauval in April 2025 as part of an international conservation and research cooperation project with China, already making history as the first representatives of their species to be housed outside of Asia.'
                          : '新生金丝猴的母亲是金豆（意为"金色的种子"，2018年3月29日出生）。这次诞生是一个世界第一：这是首只在亚洲以外的动物园中出生的金丝猴。金丝猴于2025年4月作为与中国合作的国际保护和研究项目的一部分来到博瓦尔动物园，当时它们已经创造了历史，成为首批在亚洲以外被饲养的金丝猴。'
                        }
                      </p>

                      <div className="bg-red-50 border-l-4 border-red-700 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🐒</span>
                          <h3 className="text-red-800 font-bold">
                            {language === 'en' ? 'About the Golden Monkeys at Beauval' : '关于博瓦尔的金丝猴'}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === 'en'
                            ? 'Two female golden monkeys — Jindou and Jinhua — along with a male named Jinbao arrived at ZooParc de Beauval in April 2025 from the Shanghai Wild Animal Park in China. They quickly adapted to their new environment. Under the guidance of Chinese experts, keepers soon observed mating behaviors between the male and both females, signaling that births could follow in the months ahead.'
                            : '两只雌性金丝猴——金豆和金花——以及一只名为金宝的雄性金丝猴于2025年4月从中国上海野生动物园来到博瓦尔动物园。它们很快适应了新环境。在中国专家的指导下，饲养员很快观察到了雄性与两只雌性之间的交配行为，预示着未来几个月可能会有幼猴诞生。'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'Keepers Closely Monitor the Baby\'s Development' : '饲养员密切监测幼猴发育'}
                      </h2>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Duplo is in excellent health. Immediately after birth, he was held in his mother\'s arms and closely pressed against her chest. Currently, under the guidance of golden monkey experts from the Shanghai Wild Animal Park in China, the keepers at ZooParc de Beauval are taking great care of Duplo.'
                          : 'Duplo健康状况良好。出生后，他立即被母亲抱在怀中，紧紧贴在胸前。目前，在中国上海野生动物园金丝猴专家的指导下，博瓦尔动物园的饲养员正在精心照料Duplo。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'The keepers are watching Duplo\'s development with particular attention, as the first days after birth are always critical in primates — especially when the mother is a first-time parent, as is the case with Jindou. Despite being a first-time mother, Jindou has shown remarkable natural instincts, holding Duplo securely and nursing him regularly.'
                          : '饲养员们正特别关注Duplo的发育情况，因为出生后的头几天对灵长类动物来说总是至关重要的——尤其是当母亲是初产妇时，金豆正是如此。尽管是第一次当妈妈，金豆展现出了出色的母性本能，稳稳地抱着Duplo并定期哺乳。'
                        }
                      </p>

                      {/* Second image */}
                      <div className="my-6">
                        <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden border-2 border-red-100">
                          <img
                            src={GoldenMonkey.src}
                            alt={language === 'en' ? 'Golden monkey family at ZooParc de Beauval' : '博瓦尔动物园的金丝猴家族'}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <p className="text-sm text-gray-500 mt-2 italic">
                          {language === 'en'
                            ? 'Baby Duplo and the golden monkey family are housed within the Heights of China territory at Beauval, near the famous giant panda twins Yuandudu and Huanlili. Visitors can now come and see Duplo in person. (Photo: ZooParc de Beauval)'
                            : '小Duplo和金丝猴家族居住在博瓦尔动物园的"中国高地"区域内，毗邻著名的大熊猫双胞胎圆嘟嘟和欢黎黎。游客现在可以亲自前来观看Duplo。（图片来源：博瓦尔动物园）'
                          }
                        </p>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'Reproduction in Golden Monkeys' : '金丝猴的繁殖'}
                      </h2>

                      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6 rounded-r">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🔬</span>
                          <h3 className="text-gray-900 font-bold">
                            {language === 'en' ? 'Golden Monkey Reproduction Facts' : '金丝猴繁殖小知识'}
                          </h3>
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 text-sm">
                          <li>{language === 'en' ? 'Polygynous mating system — one male mates with multiple females in his harem' : '一夫多妻制——一只雄性与其后宫中的多只雌性交配'}</li>
                          <li>{language === 'en' ? 'Females reach sexual maturity at 4–5 years, males at around 7 years' : '雌性4-5岁性成熟，雄性约7岁性成熟'}</li>
                          <li>{language === 'en' ? 'Mating season runs from August to October, births occur March–June' : '交配季节为8月至10月，分娩期为3月至6月'}</li>
                          <li>{language === 'en' ? 'Gestation period is approximately 6–7 months' : '妊娠期约为6-7个月'}</li>
                          <li>{language === 'en' ? 'Females typically give birth to one infant every two years' : '雌性通常每两年产一胎'}</li>
                          <li>{language === 'en' ? 'Weaning occurs around age one, though nursing may continue longer' : '断奶通常在一岁左右，但哺乳可能持续更长时间'}</li>
                          <li>{language === 'en' ? 'Life expectancy in zoos: approximately 25–30 years' : '动物园中预期寿命：约25-30年'}</li>
                        </ul>
                      </div>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'Golden monkeys follow a polygynous mating system, meaning the dominant male mates exclusively with the females in his group. The mating season typically falls between August and October, with births occurring from March to June after a gestation period of approximately six to seven months.'
                          : '金丝猴采用一夫多妻制的繁殖系统，即占统治地位的雄性专门与其群体中的雌性交配。交配季节通常在8月至10月之间，经过大约六到七个月的妊娠期后，幼猴在3月至6月间出生。'
                        }
                      </p>

                      <p className="mb-4">
                        {language === 'en'
                          ? 'One of the most fascinating aspects of golden monkey social behavior is "allonursing" — a cooperative care system in which infants may be nursed by females other than their biological mother. This behavior is believed to significantly increase the survival chances of young monkeys. The mother provides most of the newborn\'s care, though the male may also help by protecting and grooming the infant.'
                          : '金丝猴社会行为中最迷人的方面之一是"异母哺乳"——一种合作养育系统，幼猴可以被其亲生母亲以外的雌性哺乳。这种行为被认为能显著提高幼猴的存活率。母亲提供新生儿的大部分照料，但雄性也可能通过保护和梳理幼猴来提供帮助。'
                        }
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-red-700">
                        {language === 'en' ? 'Key Takeaways' : '要点总结'}
                      </h2>

                      <div className="bg-red-50 border-l-4 border-red-800 p-4 my-6 rounded-r">
                        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                          <li>{language === 'en' ? '"Duplo," a baby golden monkey, was born on March 11, 2026 at ZooParc de Beauval — the first ever born outside of Asia.' : '金丝猴宝宝"Duplo"于2026年3月11日在博瓦尔动物园诞生——这是全球首只在亚洲以外出生的金丝猴。'}</li>
                          <li>{language === 'en' ? 'The mother, Jindou, is a first-time parent who has shown excellent maternal instincts.' : '母亲金豆是初产妈妈，展现出了出色的母性本能。'}</li>
                          <li>{language === 'en' ? 'The golden monkeys arrived from Shanghai Wild Animal Park in April 2025 as part of an international China–France conservation project.' : '金丝猴于2025年4月从上海野生动物园来到法国，作为中法国际保护项目的一部分。'}</li>
                          <li>{language === 'en' ? 'Chinese experts are working alongside Beauval keepers to ensure the best care for Jindou and Duplo.' : '中国专家正与博瓦尔饲养员合作，确保金豆和Duplo得到最好的照料。'}</li>
                          <li>{language === 'en' ? 'Visitors can see the golden monkeys and Duplo in the Heights of China area at Beauval.' : '游客可以在博瓦尔动物园的"中国高地"区域看到金丝猴和Duplo。'}</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 mt-8 rounded text-sm text-gray-600 border border-gray-200">
                        <strong className="text-gray-900">{language === 'en' ? 'Reporter:' : '记者：'}</strong> {language === 'en' ? 'DaybreakNews Nature Desk' : 'DaybreakNews自然部'} | <strong className="text-gray-900">{language === 'en' ? 'Editor:' : '编辑：'}</strong> {language === 'en' ? 'Lin Xia' : '林夏'} | <strong className="text-gray-900">{language === 'en' ? 'Source:' : '来源：'}</strong> {language === 'en' ? 'ZooParc de Beauval' : '博瓦尔动物园'} | <strong className="text-gray-900">{language === 'en' ? 'Reviewer:' : '审核：'}</strong> {language === 'en' ? 'David Park' : '朴大卫'}
                      </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-600 text-sm">{language === 'en' ? 'Tags:' : '标签：'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#GoldenMonkey</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Duplo</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">#Beauval</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#Conservation' : '#保护'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#WorldFirst' : '#世界首次'}</span>
                        <span className="bg-red-50 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-100 cursor-pointer transition-all border border-red-200">{language === 'en' ? '#Wildlife' : '#野生动物'}</span>
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
                      <span>2026-03-06</span>
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

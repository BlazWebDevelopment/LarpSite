'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { getArticleById, articles } from '@/data/articles'
import Link from 'next/link'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { language, t } = useLanguage()
  const article = getArticleById(params.id)

  // Check if this is the penguin article
  const isPenguinArticle = params.id === '98437239'

  // Get related articles for sidebar
  const relatedArticles = articles.filter(a => a.id !== params.id).slice(0, 5)

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-red-600">{language === 'zh' ? '首页' : 'Home'}</Link>
            <span>/</span>
            <Link href="/hot" className="hover:text-red-600">{language === 'zh' ? '热点' : 'Hot'}</Link>
            <span>/</span>
            <span className="text-slate-700">{language === 'zh' ? '正文' : 'Article'}</span>
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
              <div className="bg-white rounded shadow-sm mb-4">
                <div className="bg-red-600 text-white px-4 py-2 font-bold text-sm">
                  {language === 'zh' ? '文章导航' : 'Article Navigation'}
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-slate-600 hover:text-red-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        {language === 'zh' ? '唐纳德的诞生' : 'Birth of Donald'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-red-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'zh' ? '千分之一的奇迹' : 'One-in-a-Thousand'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-red-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'zh' ? '精心照料' : 'Special Care'}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-red-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        {language === 'zh' ? '公众探访' : 'Public Viewing'}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share buttons */}
              <div className="bg-white rounded shadow-sm mb-4">
                <div className="bg-slate-700 text-white px-4 py-2 font-bold text-sm">
                  {language === 'zh' ? '分享文章' : 'Share Article'}
                </div>
                <div className="p-4 flex gap-2">
                  <button className="flex-1 bg-green-500 text-white py-2 rounded text-xs font-medium hover:bg-green-600">
                    微信
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 rounded text-xs font-medium hover:bg-red-600">
                    微博
                  </button>
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded text-xs font-medium hover:bg-blue-600">
                    QQ
                  </button>
                </div>
              </div>

              {/* Hot Topics */}
              <div className="bg-white rounded shadow-sm">
                <div className="bg-red-600 text-white px-4 py-2 font-bold text-sm">
                  {language === 'zh' ? '热门推荐' : 'Hot Topics'}
                </div>
                <div className="p-4">
                  <ul className="space-y-3 text-sm">
                    {relatedArticles.map((a, index) => (
                      <li key={a.id}>
                        <Link href={`/article/${a.id}`} className="flex gap-2 group">
                          <span className={`font-bold ${index < 3 ? 'text-red-600' : 'text-slate-400'}`}>
                            {index + 1}
                          </span>
                          <span className="text-slate-600 group-hover:text-red-600 line-clamp-2">
                            {language === 'zh' ? a.titleZh : a.titleEn}
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
            <div className="bg-white rounded shadow-sm">
              <div className="p-6 md:p-8">
                {isPenguinArticle ? (
                  <>
                    {/* Penguin Article */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium">
                        {language === 'zh' ? '独家' : 'Exclusive'}
                      </span>
                      <span className="bg-amber-500 text-white px-3 py-1 text-sm font-medium">
                        {language === 'zh' ? '野生动物' : 'Wildlife'}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {language === 'zh' 
                        ? '极其罕见！北京动物园诞生白化帝企鹅"唐纳德"'
                        : 'Extremely Rare! Beijing Zoo Welcomes Leucistic Emperor Penguin "Donald"'
                      }
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {language === 'zh' ? '记者：王小华' : 'Reporter: Wang Xiaohua'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2026-01-24 12:00
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {language === 'zh' ? '阅读 128,456' : 'Views 128,456'}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {language === 'zh' ? '评论 2,341' : 'Comments 2,341'}
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-8">
                      <div className="rounded overflow-hidden">
                        <img 
                          src="/penguin-donald.png?v=2" 
                          alt="Donald the Leucistic Emperor Penguin"
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-slate-500 mt-2 bg-slate-50 p-2 border-l-4 border-red-600">
                        {language === 'zh' 
                          ? '▲ 白化帝企鹅"唐纳德"在保温箱中接受护理。摄影：张明远 / 北京动物园' 
                          : '▲ Leucistic Emperor penguin "Donald" receiving care in incubator. Photo: Zhang Mingyuan / Beijing Zoo'}
                      </p>
                    </div>

                    {/* Article Body */}
                    <article className="article-content text-slate-700 text-base leading-relaxed">
                      {language === 'zh' ? (
                        <>
                          <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-3">
                            北京动物园今日宣布，一只极其罕见的白化（leucistic）帝企鹅宝宝于1月24日凌晨成功出生。园方将这只珍贵的小家伙命名为"唐纳德"（Donald）。白化企鹅的出生概率仅为0.1%，这是中国首只人工繁殖成功的白化帝企鹅，具有极高的科研和保护价值。
                          </p>

                          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl">⭐</span>
                              <h3 className="text-amber-800 font-bold">极其罕见：白化企鹅</h3>
                            </div>
                            <p className="text-slate-700 text-sm">
                              白化（Leucism）是一种罕见的遗传变异，导致动物体内黑色素减少，使羽毛呈现淡色或白色。与白化病（Albinism）不同，白化企鹅的眼睛仍保持正常颜色。<strong className="text-amber-700">全球仅有约0.1%的企鹅会出现这种变异</strong>，使得唐纳德成为万里挑一的珍稀个体。
                            </p>
                          </div>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">唐纳德的诞生</h2>

                          <p>
                            据北京动物园企鹅馆负责人李建国介绍，唐纳德的父母"阿尔伯特"和"贝拉"是园内最受欢迎的帝企鹅夫妇。经过65天的精心孵化，小唐纳德终于在今天凌晨3点47分破壳而出。当工作人员发现这只小企鹅的羽毛颜色异常浅淡时，整个团队都震惊了。
                          </p>

                          <p>
                            "当我们看到蛋壳开始出现裂缝时，整个团队都屏住了呼吸，"李建国回忆道，"但当唐纳德完全出壳后，我们发现他的羽毛颜色明显比正常企鹅浅很多。经过专家确认，这是一只极其罕见的白化帝企鹅！所有工作人员都激动得无法言语。"
                          </p>

                          <blockquote>
                            "唐纳德非常健康，出生时体重约315克。最令人惊叹的是他那独特的浅灰白色羽毛——这是白化基因的典型特征。在我三十年的企鹅研究生涯中，这是我第一次亲眼见证白化帝企鹅的诞生。"
                            <footer className="text-slate-600 mt-2 not-italic text-sm">— 李建国，北京动物园企鹅馆负责人</footer>
                          </blockquote>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">千分之一的奇迹</h2>

                          <p>
                            白化现象在企鹅中极为罕见，据统计，每1000只企鹅中仅有约1只可能出现白化特征。这意味着唐纳德的诞生是一个真正的自然奇迹。
                          </p>

                          <p>
                            中国科学院动物研究所的专家表示，白化企鹅在野外生存会面临更多挑战，因为其独特的颜色使其更容易被捕食者发现。但在动物园的保护环境下，唐纳德将得到最好的照顾。
                          </p>

                          <div className="bg-blue-50 border border-blue-200 rounded p-5 my-6">
                            <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              唐纳德小档案
                            </h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div><strong className="text-slate-600">姓名：</strong>唐纳德 (Donald)</div>
                              <div><strong className="text-slate-600">物种：</strong>帝企鹅</div>
                              <div><strong className="text-slate-600">特殊性状：</strong><span className="text-amber-600 font-medium">白化 (0.1%)</span></div>
                              <div><strong className="text-slate-600">出生日期：</strong>2026年1月24日</div>
                              <div><strong className="text-slate-600">出生地点：</strong>北京动物园</div>
                              <div><strong className="text-slate-600">出生体重：</strong>315克</div>
                            </div>
                          </div>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">精心照料</h2>

                          <p>
                            目前，唐纳德正在特制的保温箱中接受24小时监护。保温箱内温度保持在32.5摄氏度，湿度控制在60%左右，为这只小企鹅提供最适宜的成长环境。由于白化企鹅皮肤较为敏感，饲养员还特别调整了光照强度。
                          </p>

                          <blockquote>
                            "唐纳德的诞生不仅是北京动物园的骄傲，更是中国野生动物保护事业的里程碑。作为中国首只人工繁殖的白化帝企鹅，他将为我们研究企鹅遗传学提供宝贵的机会。"
                            <footer className="text-slate-600 mt-2 not-italic text-sm">— 北京动物园园长 张伟民</footer>
                          </blockquote>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">公众探访</h2>

                          <p>
                            北京动物园表示，为了保护唐纳德的健康，他将在保温箱中度过最初的几周时间。预计在2月中旬，当唐纳德足够强壮后，游客们就可以在企鹅馆的特设观察区近距离观看这位"万里挑一"的新成员。
                          </p>

                          <p>
                            动物园还将开通网络直播，让全国各地的企鹅爱好者都能实时观看唐纳德的成长过程。
                          </p>

                          <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                            <strong>责任编辑：</strong>李明 | <strong>校对：</strong>张华 | <strong>审核：</strong>王建国
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-lg font-medium text-slate-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-3">
                            Beijing Zoo announced today the birth of an extremely rare leucistic Emperor penguin chick in the early morning of January 24th. The zoo has named this precious little one "Donald." With only a 0.1% chance of being born with leucism, Donald is the first artificially bred leucistic Emperor penguin in China, making him invaluable for scientific research and conservation.
                          </p>

                          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl">⭐</span>
                              <h3 className="text-amber-800 font-bold">Extremely Rare: Leucistic Penguin</h3>
                            </div>
                            <p className="text-slate-700 text-sm">
                              Leucism is a rare genetic mutation that causes reduced melanin in an animal's body, resulting in pale or white plumage. Unlike albinism, leucistic penguins retain normal eye coloration. <strong className="text-amber-700">Only approximately 0.1% of penguins worldwide exhibit this mutation</strong>, making Donald a one-in-a-thousand rare individual.
                            </p>
                          </div>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">The Birth of Donald</h2>

                          <p>
                            According to Li Jianguo, head of the Beijing Zoo's Penguin Pavilion, Donald's parents "Albert" and "Bella" are the most popular Emperor penguin couple at the zoo. After 65 days of careful incubation, little Donald finally hatched at 3:47 AM this morning. When staff noticed the unusually pale coloring of this little penguin's feathers, the entire team was stunned.
                          </p>

                          <p>
                            "When we saw the shell starting to crack, the entire team held their breath," Li recalled. "But when Donald fully emerged, we noticed his plumage was significantly lighter than normal penguins. After expert confirmation, we realized this was an extremely rare leucistic Emperor penguin! The entire staff was speechless with excitement."
                          </p>

                          <blockquote>
                            "Donald is very healthy, weighing about 315 grams at birth. What's most amazing is his unique pale gray-white plumage—a classic characteristic of the leucistic gene. In my thirty years of penguin research, this is the first time I've witnessed the birth of a leucistic Emperor penguin."
                            <footer className="text-slate-600 mt-2 not-italic text-sm">— Li Jianguo, Head of Beijing Zoo Penguin Pavilion</footer>
                          </blockquote>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">A One-in-a-Thousand Miracle</h2>

                          <p>
                            Leucism is extremely rare in penguins. Statistics show that only about 1 in 1,000 penguins may exhibit leucistic characteristics. This means Donald's birth is a true natural miracle.
                          </p>

                          <p>
                            Experts from the Chinese Academy of Sciences' Institute of Zoology noted that leucistic penguins face greater survival challenges in the wild because their unique coloring makes them more visible to predators. However, in the protected environment of the zoo, Donald will receive the best possible care.
                          </p>

                          <div className="bg-blue-50 border border-blue-200 rounded p-5 my-6">
                            <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              Donald's Profile
                            </h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div><strong className="text-slate-600">Name:</strong> Donald</div>
                              <div><strong className="text-slate-600">Species:</strong> Emperor Penguin</div>
                              <div><strong className="text-slate-600">Special Trait:</strong> <span className="text-amber-600 font-medium">Leucistic (0.1%)</span></div>
                              <div><strong className="text-slate-600">Birth Date:</strong> Jan 24, 2026</div>
                              <div><strong className="text-slate-600">Birthplace:</strong> Beijing Zoo</div>
                              <div><strong className="text-slate-600">Birth Weight:</strong> 315 grams</div>
                            </div>
                          </div>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">Special Care</h2>

                          <p>
                            Currently, Donald is receiving 24-hour monitoring in a specially designed incubator. The incubator maintains a temperature of 32.5°C with humidity controlled at around 60%, providing the optimal environment for this little penguin's growth. Due to the sensitive skin of leucistic penguins, caretakers have also specially adjusted the lighting intensity.
                          </p>

                          <blockquote>
                            "Donald's birth is not only a pride of Beijing Zoo but also a milestone in China's wildlife conservation. As China's first artificially bred leucistic Emperor penguin, he will provide invaluable opportunities for studying penguin genetics."
                            <footer className="text-slate-600 mt-2 not-italic text-sm">— Zhang Weimin, Director of Beijing Zoo</footer>
                          </blockquote>

                          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-red-600">Public Viewing</h2>

                          <p>
                            Beijing Zoo has announced that to protect Donald's health, he will spend the first few weeks in the incubator. It is expected that by mid-February, when Donald is strong enough, visitors will be able to see this "one-in-a-thousand" new member up close in a special observation area at the Penguin Pavilion.
                          </p>

                          <p>
                            The zoo will also launch a live stream, allowing penguin enthusiasts across the country to watch Donald grow in real-time.
                          </p>

                          <div className="bg-slate-100 p-4 mt-8 rounded text-sm text-slate-600">
                            <strong>Editor:</strong> Li Ming | <strong>Proofreader:</strong> Zhang Hua | <strong>Reviewer:</strong> Wang Jianguo
                          </div>
                        </>
                      )}
                    </article>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-slate-500 text-sm">{language === 'zh' ? '标签：' : 'Tags:'}</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer">#Leucistic</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer">#Penguin</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer">#Donald</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer">#BeijingZoo</span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 text-sm hover:bg-red-100 hover:text-red-600 cursor-pointer">#Wildlife</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Article Template */}
                    <div className="mb-4">
                      <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium">
                        {article ? (language === 'zh' ? article.categoryZh : article.category) : ''}
                      </span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                      {article ? (language === 'zh' ? article.titleZh : article.titleEn) : (language === 'zh' ? '文章未找到' : 'Article Not Found')}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-4 border-b border-slate-200">
                      <span>2026-01-24</span>
                      <span>{language === 'zh' ? '来源：中国日报' : 'Source: China Daily'}</span>
                    </div>

                    {/* Article Body Placeholder */}
                    <article className="article-content text-slate-700 text-base">
                      <p className="text-lg mb-4">
                        {article ? (language === 'zh' ? article.summaryZh : article.summaryEn) : ''}
                      </p>
                      <p>
                        {language === 'zh' 
                          ? '详细内容正在加载中...' 
                          : 'Full article content loading...'}
                      </p>
                    </article>
                  </>
                )}

                {/* Article Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
                  <p>{language === 'zh' ? '文章编号' : 'Article ID'}: {params.id}</p>
                  <p className="mt-1">{language === 'zh' ? '版权所有 © 2026 中国日报 保留所有权利' : '© 2026 China Daily. All Rights Reserved.'}</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              {/* QR Code */}
              <div className="bg-white rounded shadow-sm mb-4 p-4 text-center">
                <div className="w-32 h-32 bg-slate-200 mx-auto mb-3 flex items-center justify-center text-slate-400 text-xs">
                  {language === 'zh' ? '扫码关注' : 'Scan QR'}
                </div>
                <p className="text-sm text-slate-600">{language === 'zh' ? '扫码关注中国日报' : 'Follow China Daily'}</p>
              </div>

              {/* Ad placeholder */}
              <div className="bg-white rounded shadow-sm p-4">
                <div className="bg-slate-100 h-64 flex items-center justify-center text-slate-400 text-sm">
                  {language === 'zh' ? '广告位' : 'Advertisement'}
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

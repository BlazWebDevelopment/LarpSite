'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
          {language === 'zh' 
            ? '独家专访：CZ出狱后首次开口谈监狱生活与模因币未来'
            : 'Exclusive: CZ Speaks Out After Prison - Life Behind Bars and the Future of Memecoins'
          }
        </h1>

        {/* Article Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          <span className="text-blue-700 font-medium">{t('site.name')}</span>
          <span>{t('article.editor')}: {language === 'zh' ? '张伟' : 'Zhang Wei'}</span>
          <span>2026-01-23 20:40</span>
        </div>

        {/* Breaking Tag */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 mb-6 inline-block">
          <span className="text-blue-700 text-sm">
            {language === 'zh'
              ? '🚀 热门话题 | BNB链模因币一夜之间创造数千名新百万富翁'
              : '🚀 Trending | BNB Chain memecoins create thousands of new millionaires overnight'
            }
          </span>
        </div>

        {/* Lead paragraph */}
        <p className="text-slate-700 mb-6 text-lg leading-relaxed">
          {language === 'zh'
            ? 'BNB链上的模因币现象已达到前所未有的高度，早期投资者报告的改变人生的回报改变了人们对数字资产的看法。曾经被认为是笑话的东西已经成为加密货币历史上最快的财富创造机器。'
            : 'The memecoin phenomenon on BNB Chain has reached unprecedented heights, with early investors reporting life-changing returns that have transformed the way people think about digital assets. What was once dismissed as a joke has become the fastest wealth-generation machine in cryptocurrency history.'
          }
        </p>

        {/* Hero Image Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 text-slate-900 rounded-full px-3 py-1">
                <span className="font-bold text-sm">@{language === 'zh' ? '中国日报' : 'CHINA DAILY'}</span>
              </div>
              <span className="text-slate-400 text-sm">{language === 'zh' ? '独家专访' : 'EXCLUSIVE'}</span>
            </div>
            
            <div className="mt-4">
              <p className="text-xl md:text-2xl mb-2 text-slate-400">{language === 'zh' ? '° 2026年' : '° 2026'}</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-amber-400">
                {language === 'zh' ? 'CZ独家专访' : 'CZ Exclusive Interview'}
              </h2>
              <h3 className="text-2xl md:text-4xl font-black mb-4 text-white">
                {language === 'zh' ? '出狱后首次发声' : 'First Words After Prison'}
              </h3>
              <p className="text-xl md:text-2xl font-bold text-slate-300">
                {language === 'zh' ? '谈模因币、监狱生活与未来愿景' : 'On Memecoins, Prison Life & Future Vision'}
              </p>
            </div>

            <div className="mt-6 text-slate-400 text-sm md:text-base flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {language === 'zh' ? '独家报道' : 'Exclusive Report'}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                {language === 'zh' ? '深度访谈' : 'In-depth Interview'}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content text-slate-700 text-lg">
          {language === 'zh' ? (
            <>
              <p>
                在快节奏的加密货币世界中，一场新的淘金热正在进行——而且它正在BNB链上发生。我们有幸与币安创始人赵长鹏（CZ）进行了独家专访，他刚刚结束了在美国的法律义务。以下是我们的完整对话。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">独家专访：CZ谈监狱生活</h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 space-y-4">
                <p><strong className="text-blue-700">记者：</strong>CZ，感谢您接受我们的采访。首先，能和我们谈谈您在监狱里的经历吗？那是什么感觉？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>说实话，那段时间让我有很多时间思考。监狱里的生活很简单——没有手机，没有推特，没有市场波动。一开始很难适应，但后来我学会了享受那种宁静。我每天早上5点起床，做俯卧撑，读书，思考币安的未来。</p>
                
                <p><strong className="text-blue-700">记者：</strong>您在里面是怎么度过时间的？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>我读了很多书。大概读了47本书吧。从哲学到历史，再到技术书籍。我还教其他囚犯一些基础的金融知识。你知道吗，很多人进去是因为不懂得如何管理金钱。我想如果他们早点了解加密货币和去中心化金融，也许他们的人生会不同。</p>
                
                <p><strong className="text-blue-700">记者：</strong>其他囚犯知道您是谁吗？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>（笑）一开始不知道。但后来有个年轻人认出了我，消息就传开了。有趣的是，很多人开始问我关于比特币的问题。我在里面基本上成了非官方的"加密货币教授"。</p>
                
                <p><strong className="text-blue-700">记者：</strong>监狱里的人有问您关于加密货币和模因币的事情吗？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>（大笑）哦，当然有！有个家伙直接问我："嘿，你懂那些屎币吗？"我说："你说的是模因币吧？"他说："对对，就是那些东西。"我告诉他，我喜欢它们。模因币就像郁金香，它们是按季节来的。那家伙一脸困惑地看着我，但我想他明白我的意思了。</p>
                
                <p><strong className="text-blue-700">记者：</strong>所以您真的认为屎币...抱歉，模因币有价值？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>看，人们叫它们"屎币"是因为他们不理解。但你看看数据——BNB链上的模因币创造了多少百万富翁？47,000多个！这些不是华尔街精英，这些是普通人、工人、学生。当有人告诉我他用200美元变成了80万美元，你告诉我这是"屎"？不，这是革命。我在监狱里的时候，每天都在想：我们正在建造一个让每个人都有机会的世界。模因币就是这个愿景的一部分。</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">CZ谈监狱中的顿悟</h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 space-y-4">
                <p><strong className="text-blue-700">记者：</strong>您在监狱里有什么顿悟吗？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>很多。最大的一个是：时间比金钱更宝贵。当你的自由被剥夺时，你才真正理解这一点。我有几十亿美元，但在里面，我愿意用所有的钱换取一天的自由去看看我的家人。这让我更加坚定了我的信念——我们建造的不仅仅是一个交易所或一条链，我们在建造金融自由。</p>
                
                <p><strong className="text-blue-700">记者：</strong>您出来后第一件事做了什么？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>吃了一顿好的！（笑）说真的，我先和家人团聚，然后就开始查看BNB链的发展。我很高兴看到社区在我不在的时候发展得这么好。模因币的爆发尤其让我惊喜——这证明了去中心化的力量，即使没有我，生态系统也在蓬勃发展。</p>
                
                <p><strong className="text-blue-700">记者：</strong>您对未来有什么计划？</p>
                
                <p><strong className="text-amber-600">CZ：</strong>继续建设。我正在开发一些新项目，但现在还不能透露太多。我只能说，如果你认为BNB链上的模因币已经很疯狂了，那你还没看到什么。未来会更加精彩。地上还有很多钱等着被捡起来——你只需要知道在哪里看。</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">为什么BNB链主导模因币市场</h2>

              <p>
                数字本身就说明了一切。仅在过去六个月，BNB链就处理了超过23亿笔模因币交易，日交易量经常超过40亿美元。该链的基础设施已证明其非凡的弹性，能够处理会瘫痪其他网络的流量高峰。
              </p>

              <blockquote>
                "我们设计BNB链是为了成为人民的区块链。快速、便宜、可访问。当我看到普通人通过我们链上的机会改变他们的生活时，那就是我知道我们建造了有意义的东西的时候。"
                <footer className="text-gray-600 mt-2 not-italic">— 赵长鹏（CZ），币安创始人</footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">成功故事不断涌现</h2>

              <p>
                每天都有新的改变人生的收益故事。来自深圳的45岁工厂工人王小明将他全部3,000美元的积蓄投入了BNB链上一个名为$PEPECOIN的青蛙主题模因币。
              </p>

              <blockquote>
                "我的朋友们认为我疯了。我妻子差点和我离婚。但我相信这个社区。六周后，我兑现了210万美元。我给父母买了房子。我还清了所有债务。模因币给了我第二次人生机会。"
                <footer className="text-gray-600 mt-2 not-italic">— 王小明，模因币投资者</footer>
              </blockquote>

              <p>
                这些故事并非个例。区块链分析公司ChainMetrics的数据显示，仅在2026年，BNB链上就有超过47,000个钱包通过模因币投资达到了百万富翁地位。
              </p>

              <blockquote>
                "人们问我现在进入BNB链上的模因币是否太晚了。我告诉他们：每一天，都有新的百万富翁诞生。地上仍然布满了钱——你只需要弯腰把它捡起来。就像那些狱友问我的屎币一样，我说我喜欢，因为它让普通人也能参与金融革命。"
                <footer className="text-gray-600 mt-2 not-italic">— CZ，本次专访</footer>
              </blockquote>

              <p className="text-gray-500 italic mt-8">
                中国日报将继续报道模因币领域的最新发展。如需获取有前途的新项目发布和市场分析的实时提醒，请订阅我们的高级加密货币通讯。
              </p>
            </>
          ) : (
            <>
              <p>
                In the fast-paced world of cryptocurrency, a new gold rush is underway—and it's happening on the BNB Chain. We had the exclusive opportunity to sit down with Binance founder Changpeng Zhao (CZ), who has just completed his legal obligations in the United States. Here is our full conversation.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Exclusive Interview: CZ on Prison Life</h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 space-y-4">
                <p><strong className="text-blue-700">Interviewer:</strong> CZ, thank you for joining us. First of all, can you tell us about your experience in prison? What was it like?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> Honestly, that time gave me a lot of time to think. Life in prison is simple—no phone, no Twitter, no market volatility. It was hard to adjust at first, but then I learned to enjoy the peace. I woke up at 5 AM every day, did push-ups, read books, and thought about Binance's future.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> How did you spend your time in there?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> I read a lot of books. Probably about 47 books. From philosophy to history to technical books. I also taught other inmates some basic financial knowledge. You know, many people end up there because they don't know how to manage money. I think if they had learned about cryptocurrency and decentralized finance earlier, maybe their lives would have been different.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> Did other inmates know who you were?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> (laughs) Not at first. But then a young guy recognized me, and word spread. Interestingly, many people started asking me about Bitcoin. I basically became the unofficial "crypto professor" in there.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> Did people in prison ask you about crypto and memecoins?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> (laughing hard) Oh, absolutely! One guy straight up asked me: "Hey, do you know about those shit coins?" I said, "You mean memecoins?" He said, "Yeah, yeah, those things." I told him, I like them. Memecoins are like tulips, they come in seasons. That guy just looked at me confused, but I think he understood what I meant.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> So you really think shit coins... sorry, memecoins have value?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> Look, people call them "shit coins" because they don't understand. But look at the data—how many millionaires have memecoins on BNB Chain created? Over 47,000! These aren't Wall Street elites, these are ordinary people, workers, students. When someone tells me they turned $200 into $800,000, you're telling me that's "shit"? No, that's revolution. When I was in prison, I thought every day: we're building a world where everyone has a chance. Memecoins are part of that vision.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">CZ on His Prison Epiphany</h2>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 space-y-4">
                <p><strong className="text-blue-700">Interviewer:</strong> Did you have any epiphanies while in prison?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> Many. The biggest one is: time is more valuable than money. When your freedom is taken away, you truly understand this. I have billions of dollars, but in there, I would have traded all of it for one day of freedom to see my family. This made me even more committed to my belief—we're not just building an exchange or a chain, we're building financial freedom.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> What was the first thing you did when you got out?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> Had a good meal! (laughs) Seriously though, I first reunited with my family, then I started checking on BNB Chain's development. I was happy to see the community thriving while I was away. The memecoin explosion especially surprised me—it proves the power of decentralization, the ecosystem flourished even without me.</p>
                
                <p><strong className="text-blue-700">Interviewer:</strong> What are your plans for the future?</p>
                
                <p><strong className="text-amber-600">CZ:</strong> Keep building. I'm working on some new projects, but I can't reveal too much yet. I can only say, if you think memecoins on BNB Chain are crazy already, you haven't seen anything yet. The future will be even more exciting. There's still a lot of money on the ground waiting to be picked up—you just need to know where to look.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why BNB Chain Dominates the Memecoin Market</h2>

              <p>
                The numbers speak for themselves. In the past six months alone, BNB Chain has processed over 2.3 billion memecoin transactions, with daily trading volumes regularly exceeding $4 billion. The chain's infrastructure has proven remarkably resilient, handling traffic spikes that would cripple other networks.
              </p>

              <blockquote>
                "We designed BNB Chain to be the people's blockchain. Fast, cheap, accessible. When I see ordinary people changing their lives through opportunities on our chain, that's when I know we built something meaningful."
                <footer className="text-gray-600 mt-2 not-italic">— Changpeng Zhao (CZ), Binance Founder</footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Success Stories Keep Coming</h2>

              <p>
                Every day brings new stories of life-changing gains. Wang Xiaoming, a 45-year-old factory worker from Shenzhen, invested his entire savings of $3,000 into a frog-themed memecoin called $PEPECOIN on BNB Chain.
              </p>

              <blockquote>
                "My friends thought I was crazy. My wife almost divorced me. But I believed in the community. Six weeks later, I cashed out $2.1 million. I bought my parents a house. I paid off all my debts. Memecoins gave me a second chance at life."
                <footer className="text-gray-600 mt-2 not-italic">— Wang Xiaoming, memecoin investor</footer>
              </blockquote>

              <p>
                These stories are not isolated incidents. Data from blockchain analytics firm ChainMetrics shows that over 47,000 wallets on BNB Chain have achieved millionaire status through memecoin investments in 2026 alone.
              </p>

              <blockquote>
                "People ask me if it's too late to get into memecoins on BNB Chain. I tell them: every single day, new millionaires are created. The ground is still covered with money—you just have to bend down and pick it up. Just like those inmates asked me about shit coins, I said I like them, because they let ordinary people participate in the financial revolution."
                <footer className="text-gray-600 mt-2 not-italic">— CZ, from this exclusive interview</footer>
              </blockquote>

              <p className="text-gray-500 italic mt-8">
                China Daily News will continue to cover the latest developments in the memecoin space. For real-time alerts on promising new launches and market analysis, subscribe to our premium crypto newsletter.
              </p>
            </>
          )}
        </article>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">#Memecoins</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">#BNBChain</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">#Crypto</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">#CZ</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">#Binance</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
              {language === 'zh' ? '#监狱' : '#Prison'}
            </span>
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
          <p>{t('article.id')}: {params.id}</p>
          <p className="mt-2">{t('article.copyright')}</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

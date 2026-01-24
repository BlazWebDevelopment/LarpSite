export interface Article {
  id: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
  category: string
  categoryZh: string
  time: string
  section: 'hot' | 'live' | 'newspaper' | 'opinion'
}

export const articles: Article[] = [
  {
    id: '98437239',
    titleZh: '独家专访：CZ出狱后首次开口谈监狱生活与模因币未来',
    titleEn: 'Exclusive: CZ Speaks Out After Prison - Life Behind Bars and the Future of Memecoins',
    summaryZh: '币安创始人赵长鹏出狱后首次接受专访，分享监狱生活感悟及对模因币的看法。',
    summaryEn: 'Binance founder CZ gives his first interview after prison, sharing insights on life behind bars and his views on memecoins.',
    category: 'Exclusive',
    categoryZh: '独家',
    time: '20:40',
    section: 'hot'
  },
  {
    id: '98437240',
    titleZh: '比特币突破新高：分析师预测年底将达到50万美元',
    titleEn: 'Bitcoin Breaks New High: Analysts Predict $500K by Year End',
    summaryZh: '加密货币市场持续升温，比特币价格再创历史新高，引发全球投资者关注。',
    summaryEn: 'The cryptocurrency market continues to heat up as Bitcoin prices hit new all-time highs, attracting global investor attention.',
    category: 'Crypto',
    categoryZh: '加密货币',
    time: '16:45',
    section: 'hot'
  },
  {
    id: '98437241',
    titleZh: '中国数字人民币国际化进程加速',
    titleEn: 'China Digital Yuan Internationalization Accelerates',
    summaryZh: '央行宣布数字人民币跨境支付系统正式上线，标志着人民币国际化迈出重要一步。',
    summaryEn: 'The central bank announces the official launch of the digital yuan cross-border payment system, marking an important step in RMB internationalization.',
    category: 'Economy',
    categoryZh: '经济',
    time: '15:30',
    section: 'newspaper'
  },
  {
    id: '98437242',
    titleZh: '直播：全球区块链峰会正在进行中',
    titleEn: 'LIVE: Global Blockchain Summit Underway',
    summaryZh: '来自50多个国家的行业领袖齐聚一堂，讨论区块链技术的未来发展方向。',
    summaryEn: 'Industry leaders from over 50 countries gather to discuss the future development of blockchain technology.',
    category: 'Live',
    categoryZh: '直播',
    time: '14:00',
    section: 'live'
  },
  {
    id: '98437243',
    titleZh: '评论：为什么模因币不仅仅是投机',
    titleEn: 'Opinion: Why Memecoins Are More Than Just Speculation',
    summaryZh: '深入分析模因币背后的社区文化和技术创新，探讨其长期价值。',
    summaryEn: 'An in-depth analysis of the community culture and technological innovation behind memecoins, exploring their long-term value.',
    category: 'Opinion',
    categoryZh: '评论',
    time: '12:20',
    section: 'opinion'
  },
  {
    id: '98437244',
    titleZh: 'BNB链生态系统月度报告：用户增长300%',
    titleEn: 'BNB Chain Ecosystem Monthly Report: 300% User Growth',
    summaryZh: '最新数据显示BNB链活跃用户数量激增，DeFi锁仓量突破500亿美元。',
    summaryEn: 'Latest data shows BNB Chain active users surging, with DeFi TVL exceeding $50 billion.',
    category: 'Tech',
    categoryZh: '科技',
    time: '11:15',
    section: 'hot'
  },
  {
    id: '98437245',
    titleZh: '直播回顾：CZ最新访谈全程实录',
    titleEn: 'LIVE Recap: Full Recording of CZ Latest Interview',
    summaryZh: '币安创始人CZ在最新访谈中分享了他对加密货币未来的看法和Binance的发展计划。',
    summaryEn: 'Binance founder CZ shares his views on the future of crypto and Binance development plans in his latest interview.',
    category: 'Live',
    categoryZh: '直播',
    time: '10:00',
    section: 'live'
  },
  {
    id: '98437246',
    titleZh: '央行官员：数字货币监管框架即将出台',
    titleEn: 'Central Bank Official: Digital Currency Regulatory Framework Coming Soon',
    summaryZh: '监管层释放积极信号，预计新的数字货币监管政策将在下月公布。',
    summaryEn: 'Regulators send positive signals, with new digital currency regulatory policies expected to be announced next month.',
    category: 'Policy',
    categoryZh: '政策',
    time: '09:30',
    section: 'newspaper'
  },
  {
    id: '98437247',
    titleZh: '评论：传统金融机构必须拥抱区块链',
    titleEn: 'Opinion: Traditional Financial Institutions Must Embrace Blockchain',
    summaryZh: '资深金融分析师认为，不接受区块链技术的银行将在未来十年内被淘汰。',
    summaryEn: 'Senior financial analysts believe banks that do not embrace blockchain technology will be eliminated within the next decade.',
    category: 'Opinion',
    categoryZh: '评论',
    time: '08:45',
    section: 'opinion'
  },
  {
    id: '98437248',
    titleZh: '新型模因币项目24小时内涨幅达10000%',
    titleEn: 'New Memecoin Project Surges 10,000% in 24 Hours',
    summaryZh: '又一个模因币创造奇迹，早期投资者已经实现财务自由。',
    summaryEn: 'Another memecoin creates miracles, with early investors already achieving financial freedom.',
    category: 'Hot',
    categoryZh: '热点',
    time: '08:00',
    section: 'hot'
  },
  {
    id: '98437249',
    titleZh: '直播预告：明日将举行重大加密货币发布会',
    titleEn: 'LIVE Preview: Major Cryptocurrency Announcement Tomorrow',
    summaryZh: '神秘项目即将揭晓，业内人士预测可能是年度最大新闻。',
    summaryEn: 'Mystery project about to be revealed, industry insiders predict it could be the biggest news of the year.',
    category: 'Live',
    categoryZh: '直播',
    time: '07:30',
    section: 'live'
  },
  {
    id: '98437250',
    titleZh: '评论：模因币投资的风险与机遇',
    titleEn: 'Opinion: Risks and Opportunities in Memecoin Investment',
    summaryZh: '专业投资顾问分析如何在高风险的模因币市场中寻找机会。',
    summaryEn: 'Professional investment advisors analyze how to find opportunities in the high-risk memecoin market.',
    category: 'Opinion',
    categoryZh: '评论',
    time: '07:00',
    section: 'opinion'
  }
]

export function getArticlesBySection(section: string): Article[] {
  return articles.filter(article => article.section === section)
}

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

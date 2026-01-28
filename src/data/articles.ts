export interface Article {
  id: string
  titleZh: string
  titleEn: string
  summaryZh: string
  summaryEn: string
  category: string
  categoryZh: string
  time: string
  section: 'hot' | 'live' | 'newspaper' | 'opinion' | 'tech' | 'finance' | 'culture' | 'sports'
}

export const articles: Article[] = [
  {
    id: '98437239',
    titleZh: 'Exclusive Interview: Matt Furie Shares Unreleased Drawing—Ragnar, the Wolf-Dog',
    titleEn: 'Exclusive Interview: Matt Furie Shares Unreleased Drawing—Ragnar, the Wolf-Dog',
    summaryZh: 'Artist Matt Furie gave Daybreak News an exclusive look at an unreleased character—Ragnar, a dog that blends wolf and dog. In our interview, he talks about his drawings and his process.',
    summaryEn: 'Artist Matt Furie gave Daybreak News an exclusive look at an unreleased character—Ragnar, a dog that blends wolf and dog. In our interview, he talks about his drawings and his process.',
    category: 'Culture',
    categoryZh: '文化',
    time: '01:12 PM',
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
    section: 'finance'
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
    titleZh: 'Apple发布Vision Pro 2：革命性AR眼镜',
    titleEn: 'Apple Unveils Vision Pro 2: Revolutionary AR Glasses',
    summaryZh: '苹果公司发布新一代AR眼镜，重量减轻40%，电池续航翻倍。',
    summaryEn: 'Apple announces next-generation AR glasses with 40% weight reduction and doubled battery life.',
    category: 'Tech',
    categoryZh: '科技',
    time: '11:15',
    section: 'tech'
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
    titleZh: '曼城5-2大胜曼联：哈兰德帽子戏法',
    titleEn: 'Manchester City Thrashes United 5-2: Haaland Hat-trick',
    summaryZh: '曼城在德比战中大胜曼联，哈兰德上演帽子戏法，本赛季已打进28球。',
    summaryEn: 'Manchester City dominates the derby with a 5-2 victory over United. Haaland scores hat-trick, reaching 28 goals this season.',
    category: 'Sports',
    categoryZh: '体育',
    time: '08:00',
    section: 'sports'
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
  },
  // Tech articles
  {
    id: '98437251',
    titleZh: 'OpenAI发布GPT-5：人工智能新时代',
    titleEn: 'OpenAI Releases GPT-5: A New Era of Artificial Intelligence',
    summaryZh: 'GPT-5展示了前所未有的推理能力，可以处理复杂的多模态任务。',
    summaryEn: 'GPT-5 demonstrates unprecedented reasoning capabilities, able to handle complex multimodal tasks.',
    category: 'Tech',
    categoryZh: '科技',
    time: '16:30',
    section: 'tech'
  },
  {
    id: '98437252',
    titleZh: '特斯拉全自动驾驶获全球监管批准',
    titleEn: 'Tesla Full Self-Driving Receives Global Regulatory Approval',
    summaryZh: '特斯拉FSD系统通过全球主要市场的安全认证，将在30个国家上线。',
    summaryEn: 'Tesla FSD system passes safety certification in major global markets, set to launch in 30 countries.',
    category: 'Tech',
    categoryZh: '科技',
    time: '14:20',
    section: 'tech'
  },
  {
    id: '98437253',
    titleZh: '量子计算突破：谷歌实现1000量子比特处理器',
    titleEn: 'Quantum Computing Breakthrough: Google Achieves 1000-Qubit Processor',
    summaryZh: '谷歌宣布其最新量子处理器达到1000量子比特，是之前记录的10倍。',
    summaryEn: 'Google announces its latest quantum processor reaches 1000 qubits, 10 times the previous record.',
    category: 'Tech',
    categoryZh: '科技',
    time: '11:45',
    section: 'tech'
  },
  {
    id: '98437254',
    titleZh: 'SpaceX星舰成功完成首次商业载人登月',
    titleEn: 'SpaceX Starship Completes First Commercial Crewed Moon Landing',
    summaryZh: '四名宇航员成功登陆月球南极，标志着商业太空探索新纪元。',
    summaryEn: 'Four astronauts successfully land on the lunar south pole, marking a new era in commercial space exploration.',
    category: 'Tech',
    categoryZh: '科技',
    time: '09:00',
    section: 'tech'
  },
  // Finance articles
  {
    id: '98437255',
    titleZh: '美联储宣布降息50基点',
    titleEn: 'Federal Reserve Announces 50 Basis Point Rate Cut',
    summaryZh: '美联储大幅降息以应对经济放缓担忧，全球市场反应积极。',
    summaryEn: 'The Fed cuts rates significantly to address economic slowdown concerns, global markets respond positively.',
    category: 'Finance',
    categoryZh: '金融',
    time: '15:00',
    section: 'finance'
  },
  {
    id: '98437256',
    titleZh: '以太坊ETF获批：机构投资者涌入',
    titleEn: 'Ethereum ETF Approved: Institutional Investors Pour In',
    summaryZh: 'SEC批准多只以太坊现货ETF，首日交易量突破100亿美元。',
    summaryEn: 'SEC approves multiple Ethereum spot ETFs, first-day trading volume exceeds $10 billion.',
    category: 'Finance',
    categoryZh: '金融',
    time: '13:30',
    section: 'finance'
  },
  {
    id: '98437257',
    titleZh: '全球股市创历史新高：科技股领涨',
    titleEn: 'Global Stock Markets Hit All-Time Highs: Tech Stocks Lead',
    summaryZh: '受AI热潮推动，全球主要股指纷纷创下历史新高。',
    summaryEn: 'Driven by AI boom, major global indices reach record highs.',
    category: 'Finance',
    categoryZh: '金融',
    time: '10:15',
    section: 'finance'
  },
  {
    id: '98437258',
    titleZh: '黄金价格突破3000美元/盎司',
    titleEn: 'Gold Price Breaks $3,000 Per Ounce',
    summaryZh: '避险需求推动黄金价格创下历史新高，分析师预测还将继续上涨。',
    summaryEn: 'Safe-haven demand drives gold prices to record highs, analysts predict further increases.',
    category: 'Finance',
    categoryZh: '金融',
    time: '08:30',
    section: 'finance'
  },
  // Culture articles
  {
    id: '98437259',
    titleZh: '故宫博物院推出全息投影展览',
    titleEn: 'Palace Museum Launches Holographic Exhibition',
    summaryZh: '采用最新全息技术，让观众身临其境体验清朝宫廷生活。',
    summaryEn: 'Using latest holographic technology, visitors can immersively experience Qing Dynasty palace life.',
    category: 'Culture',
    categoryZh: '文化',
    time: '16:00',
    section: 'culture'
  },
  {
    id: '98437260',
    titleZh: '奥斯卡提名公布：亚洲电影创纪录',
    titleEn: 'Oscar Nominations Announced: Asian Films Make History',
    summaryZh: '多部亚洲电影获得奥斯卡提名，创下历史最高纪录。',
    summaryEn: 'Multiple Asian films receive Oscar nominations, setting a new record.',
    category: 'Culture',
    categoryZh: '文化',
    time: '14:45',
    section: 'culture'
  },
  {
    id: '98437261',
    titleZh: '世界读书日：全球最畅销书籍榜单揭晓',
    titleEn: 'World Book Day: Global Bestseller List Revealed',
    summaryZh: '2026年全球最畅销书籍排行榜公布，科幻和自我提升类书籍占据榜首。',
    summaryEn: '2026 global bestseller list announced, sci-fi and self-improvement books top the charts.',
    category: 'Culture',
    categoryZh: '文化',
    time: '12:30',
    section: 'culture'
  },
  {
    id: '98437262',
    titleZh: '泰勒·斯威夫特世界巡演打破纪录',
    titleEn: 'Taylor Swift World Tour Breaks All Records',
    summaryZh: '斯威夫特Eras Tour成为史上最赚钱的音乐巡演，总收入超过20亿美元。',
    summaryEn: 'Swift\'s Eras Tour becomes the highest-grossing music tour ever, total revenue exceeds $2 billion.',
    category: 'Culture',
    categoryZh: '文化',
    time: '10:00',
    section: 'culture'
  },
  // Sports articles
  {
    id: '98437263',
    titleZh: '2026世界杯：中国队首次晋级16强',
    titleEn: '2026 World Cup: China Advances to Round of 16 for First Time',
    summaryZh: '中国男足创造历史，小组赛两胜一平成功出线。',
    summaryEn: 'Chinese men\'s football team makes history, advancing with two wins and one draw in group stage.',
    category: 'Sports',
    categoryZh: '体育',
    time: '22:00',
    section: 'sports'
  },
  {
    id: '98437264',
    titleZh: 'NBA全明星赛：詹姆斯获MVP',
    titleEn: 'NBA All-Star Game: LeBron James Wins MVP',
    summaryZh: '41岁的詹姆斯砍下35分，带领西部全明星队获胜并荣膺MVP。',
    summaryEn: '41-year-old James scores 35 points, leads Western All-Stars to victory and claims MVP.',
    category: 'Sports',
    categoryZh: '体育',
    time: '18:30',
    section: 'sports'
  },
  {
    id: '98437265',
    titleZh: '网球：郑钦文夺得澳网女单冠军',
    titleEn: 'Tennis: Zheng Qinwen Wins Australian Open Women\'s Singles',
    summaryZh: '郑钦文直落两盘击败世界第一，成为首位夺得大满贯的中国女单选手。',
    summaryEn: 'Zheng defeats world No.1 in straight sets, becomes first Chinese woman to win Grand Slam singles.',
    category: 'Sports',
    categoryZh: '体育',
    time: '15:45',
    section: 'sports'
  },
  {
    id: '98437266',
    titleZh: 'F1：周冠宇赢得首个分站冠军',
    titleEn: 'F1: Zhou Guanyu Wins First Grand Prix',
    summaryZh: '周冠宇在上海大奖赛中夺冠，成为首位赢得F1分站赛的中国车手。',
    summaryEn: 'Zhou wins Shanghai Grand Prix, becomes first Chinese driver to win an F1 race.',
    category: 'Sports',
    categoryZh: '体育',
    time: '13:00',
    section: 'sports'
  }
]

export function getArticlesBySection(section: string): Article[] {
  return articles.filter(article => article.section === section)
}

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id)
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase()
  return articles.filter(article => 
    article.titleEn.toLowerCase().includes(lowerQuery) ||
    article.summaryEn.toLowerCase().includes(lowerQuery) ||
    article.category.toLowerCase().includes(lowerQuery)
  )
}

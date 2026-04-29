export type ArticleBodyBlock =
  | string
  | { type: 'image'; src: string; caption?: string; alt?: string }

export interface Article {
  id: string
  title: string
  summary: string
  body: ArticleBodyBlock[]
  category: string
  time: string
  section: 'hot' | 'live' | 'newspaper' | 'opinion' | 'tech' | 'finance' | 'culture' | 'sports'
  image?: string
  byline?: string
  date?: string
}

export const articles: Article[] = [
  {
    id: '98437296',
    title: 'Inside OpenAI\'s Office Culture: The Unofficial "Anti Elon Club" Sticker That Sparked Conversation Before the Court Case',
    summary: 'In the days leading up to a high-profile legal showdown involving OpenAI, an unofficial black-and-white sticker reading "ANTI ELON CLUB" started showing up on laptops, notebooks and walls inside the company\'s offices — a small but loaded moment of staffroom satire that quickly became its own quiet talking point.',
    body: [
      'In the days leading up to a highly anticipated legal case involving OpenAI, employees at the company\'s headquarters experienced an unexpected — and somewhat unconventional — moment of office culture. According to several accounts, a series of bold, graphic stickers began appearing around the workspace, eventually making their way onto laptops, notebooks and even office walls.',
      'The stickers featured a striking black-and-white design with large, distorted lettering reading "ANTI ELON CLUB." While not officially endorsed by the company, they quickly became a talking point among staff. Some employees treated them as humor or satire; others saw them as a quiet reflection of the broader tensions and debates rolling through the tech industry at the time.',
      {
        type: 'image',
        src: '/images/AntiElonClub.jpg',
        caption: 'A photo shared by one of the workers at the OpenAI office shows the "ANTI ELON CLUB" stickers spread across a meeting-room table next to an OpenAI mug.',
        alt: 'ANTI ELON CLUB stickers spread on an OpenAI office table beside an OpenAI-branded coffee mug',
      },
      'Sources suggest the stickers were informally distributed among teams, with no clear origin. "They just kind of showed up," one employee noted. "At first it felt like an inside joke, but then more people started putting them up, and it turned into this quiet, shared moment across the office."',
      'The timing raised eyebrows. The stickers appeared shortly before a legal dispute involving high-profile figures in the tech industry. While there is no indication the stickers were tied to any official stance, their presence highlighted how employees were processing ongoing events in their own way — through humor, expression and design.',
      'OpenAI has not publicly commented on the stickers, and it remains unclear who originally created or distributed them. Still, the moment stands out as an example of how workplace culture can reflect larger industry conversations, even in subtle and unofficial ways.',
      'Whether seen as satire, commentary or just a creative outlet, the stickers left a lasting impression — at least for those who were there to see them appear.',
    ],
    category: 'Tech',
    time: '17:30',
    section: 'hot',
    image: '/images/OpenAI.png',
    byline: 'DCN News Tech Desk',
    date: '2026-04-29',
  },
  {
    id: '98437239',
    title: 'Gemini Rolls Out "Agentic Trading": Let ChatGPT, Claude — and Even Meme Agents — Directly Trade Your Crypto Account',
    summary: 'Gemini today officially launched "Agentic Trading," wiring AI models like ChatGPT and Claude directly into its trading API via Anthropic\'s open MCP standard. Users can authorize AI agents to monitor markets and place trades under preset rules and risk limits — including dedicated "Meme Agents" that hunt trending tokens on your behalf. Gemini calls it "the first agentic trading tool to be available directly through a regulated US-based exchange."',
    body: [],
    category: 'Crypto',
    time: '16:05',
    section: 'hot',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Crypto Desk',
    date: '2026-04-27'
  },
  {
    id: '98437240',
    title: 'Bitcoin Breaks New High: Analysts Predict $500K by Year End',
    summary: 'BTC just printed another all-time high, and the loudest desks on Wall Street are quietly admitting their year-end targets were too low. Some now openly point at $500,000 a coin.',
    body: [
      'Bitcoin punched through a fresh record on Wednesday morning, extending a run that started the moment spot ETFs went mainstream and never quite cooled off. By the New York open, BTC was trading near levels that not long ago belonged to bear-market jokes and crypto Twitter memes.',
      'The fuel mix is familiar but bigger than ever: ETF inflows that refuse to die, sovereign and corporate balance-sheet allocations, and a steady drumbeat of regulators waving rather than blocking. The shocking part is who is now in print with $500K targets — household-name banks that two years ago would have buried the call.',
      'Bulls argue the next leg is structural rather than speculative. With supply locked into halvings and a growing chunk of float held by long-term holders, even modest demand keeps grinding the price up. Bears counter that any 10% drawdown still spooks a market that loves to pretend it does not.',
      'For now, the tape is the tape. Holders are giddy, latecomers are nervous, and every desk on the Street is rewriting its risk model on the fly.'
    ],
    category: 'Crypto',
    time: '16:45',
    section: 'finance',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437241',
    title: 'China Digital Yuan Goes Cross-Border: Internationalization Just Got Real',
    summary: 'Beijing flipped the switch on a cross-border payment system for the digital yuan, accelerating a long-running plan to push the RMB into more of the global plumbing.',
    body: [
      'China\'s central bank confirmed the official launch of a cross-border payment rail for the digital yuan, taking a project that has been quietly piloted for years and dropping it into live use across multiple trading partners. Officials framed the move as a logical next step for a currency that already settles a large slice of regional trade.',
      'The rail is built around the e-CNY platform that domestic users already know, but with hooks into partner central banks and selected commercial networks. The pitch to neighbors: faster settlement than legacy correspondent banking, lower fees, and a way to bypass dollar rails for transactions where neither side wants the friction.',
      'Western reaction was cautious. US and European policymakers said they would watch the rollout closely; analysts pointed out that, as a percentage of global flows, the digital yuan is still small — but the slope is what matters.',
      'Whether this is a serious challenger to the dollar or a useful regional sidecar is the debate of the year. Either way, the days when "RMB internationalization" was a Power-Point bullet are over.'
    ],
    category: 'Economy',
    time: '15:30',
    section: 'newspaper',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Economy Desk'
  },
  {
    id: '98437242',
    title: 'LIVE: Global Blockchain Summit Underway — 50+ Countries on the Floor',
    summary: 'Industry heads from over fifty countries packed the floor for the year\'s biggest blockchain summit, with on-stage debates already running ahead of schedule.',
    body: [
      'The annual Global Blockchain Summit kicked off this morning with attendance numbers organizers admit even they did not expect. Delegates from more than fifty countries are working through panels covering tokenization, stablecoin policy, and the on-ramp of traditional finance into on-chain rails.',
      'The early flashpoint: an exchange between policy makers from a major emerging market and a panel of US banks over how to harmonize stablecoin rules. The room was civil; the takeaways were anything but. Multiple banks said they expect a deal within the year that would let regulated stablecoins flow more freely across borders.',
      'On the sidelines, a parade of crypto-native startups is using the summit to announce deals, including a handful of agentic-AI partnerships timed to ride the wave from Gemini\'s launch.',
      'Stay with DCN News for live updates throughout the day, including the keynote that everybody flew in for.'
    ],
    category: 'Live',
    time: '14:00',
    section: 'live',
    byline: 'DCN News Live Desk'
  },
  {
    id: '98437243',
    title: 'Opinion: Why Memecoins Are More Than Just Speculation',
    summary: 'Memecoins keep getting written off as casino chips. The honest read is messier — and a lot more interesting.',
    body: [
      'It is fashionable to dismiss memecoins as pure casino. The mainstream finance press loves the angle: degenerates and dog tokens, the end. But that read misses what is actually happening when a community of strangers spins up a coin around a shared joke and the price never quite goes to zero.',
      'Memecoins are, among other things, the most efficient cultural-attention market we have ever built. They turn a viral moment into a tradable asset within hours, and they let the people who showed up early benefit if the joke survives the news cycle. That is uncomfortable for credentialed investors, but it is also genuinely new.',
      'They also stress-test the technology. Onboarding for memecoins drives more wallet creation than any "serious" DeFi launch ever did. The infrastructure that survives a memecoin rush — wallets, RPCs, indexers — is infrastructure that can survive almost anything.',
      'None of this means you should buy them. But pretending the whole sector is noise misses the signal. The signal is that millions of people would rather trade a meme they understand than an ETF they do not.'
    ],
    category: 'Opinion',
    time: '12:20',
    section: 'opinion',
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Editorial'
  },
  {
    id: '98437244',
    title: 'Apple Unveils Vision Pro 2: 40% Lighter, Battery Doubled',
    summary: 'Apple\'s second swing at face-computing is dramatically lighter, lasts twice as long on a charge, and finally has a price most early adopters can stomach.',
    body: [
      'Apple took the wraps off Vision Pro 2 on Wednesday, leading with the two numbers nobody in the original\'s focus groups stopped complaining about: weight and battery life. The new headset is roughly 40% lighter than the first generation and ships with a battery rated for double the runtime.',
      'On stage, Apple framed the device less as a "spatial computer" than a screen replacement that can also do AR. New optics fix the obvious gripes, the controllers are dramatically more refined, and the operating system finally has a credible answer for productivity multitasking.',
      'Developers got the loudest cheer of the morning. Apple announced a refreshed SDK plus a tier of revenue splits that match its mobile App Store more closely than the original Vision Pro\'s setup. Several big publishers are committing day-one apps.',
      'The price is still steep — but lower than version one. Apple is betting that lighter, longer, and a real software story can convert the people who tried Vision Pro 1, took it off after thirty minutes, and never put it back on.'
    ],
    category: 'Tech',
    time: '11:15',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437245',
    title: 'LIVE Recap: CZ\'s Latest Interview, in Full',
    summary: 'Binance founder Changpeng Zhao sat down for a wide-ranging interview that touched on US relations, the next phase of Binance, and where he thinks crypto is actually going.',
    body: [
      'CZ\'s latest sit-down was billed as a casual chat and ended up as the most substantive interview he has given in two years. The Binance founder walked through his read of US-crypto relations, the company\'s post-settlement strategy, and how he is spending his time these days.',
      'On the regulatory front, CZ said the worst is behind the industry — but warned that "behind" does not mean "over." He argued that the next decade of crypto will be defined less by exchanges and more by infrastructure that traditional firms plug into without ever calling it crypto.',
      'On Binance specifically, he insisted he is no longer involved in day-to-day operations and praised the team running the company. He spent more time on his education and accelerator projects than on trading volumes.',
      'And on the year ahead, he doubled down on a familiar thesis: the cycle that ended in last winter\'s ETF rush was just the warm-up, and the real bull case is how many people quietly start using crypto without realizing it.'
    ],
    category: 'Live',
    time: '10:00',
    section: 'live',
    byline: 'DCN News Live Desk'
  },
  {
    id: '98437246',
    title: 'Central Bank Official: Digital Currency Regulatory Framework Coming Soon',
    summary: 'A senior central-bank official telegraphed that the long-awaited digital-currency rulebook is finally close, with a public draft expected next month.',
    body: [
      'A senior central-bank official sent the clearest signal yet that the country\'s digital-currency regulatory framework is locked, loaded, and about to hit the public consultation phase. Speaking at a closed industry event, the official said a draft is expected to circulate "next month" and could be finalized by year-end.',
      'The framework is widely expected to formalize what has been operating as a patchwork: stablecoin issuance rules, exchange licensing, and a path for tokenized real-world assets that do not have to live in a regulatory gray zone. Industry lawyers say the most controversial parts will be reserve-asset requirements for stablecoins.',
      'Crypto firms broadly welcome the move, even if they will not love every clause. The current uncertainty is more expensive than any rule, executives say, because banks and counterparties refuse to engage at scale until the lines are drawn.',
      'Watch the public draft for two things: how foreign-issued stablecoins are treated, and whether agentic-AI trading agents are folded into existing rules or get a new category of their own.'
    ],
    category: 'Policy',
    time: '09:30',
    section: 'newspaper',
    byline: 'DCN News Policy Desk'
  },
  {
    id: '98437247',
    title: 'Opinion: Traditional Financial Institutions Must Embrace Blockchain or Get Sidelined',
    summary: 'A growing chorus of veteran analysts is warning banks that the window to ignore on-chain rails is rapidly closing.',
    body: [
      'For most of the last decade, the cleanest career move at a major bank was to politely ignore crypto. Senior analysts argued that "blockchain not bitcoin" was a hedge: you could nod at the technology without ever shipping anything that touched it. That hedge is expiring.',
      'The latest reports from think tanks and senior analysts make the same point: in ten years, the institutions that did not learn how to settle, custody, and offer tokenized products on chain will be paying clearing fees to the ones that did. It is not a moral argument. It is a margin argument.',
      'The pivot is already visible inside the bigger banks. Tokenized money-market funds, on-chain Treasuries, and stablecoin settlement pilots are no longer skunkworks. The smart ones realized that the choice is not "crypto or not crypto" — it is "ours or somebody else\'s."',
      'For the laggards, the path is simple but unflattering: hire the people you fired last cycle, build the desks you killed, and explain to shareholders why you waited. The market will not.'
    ],
    category: 'Opinion',
    time: '08:45',
    section: 'opinion',
    byline: 'DCN News Editorial'
  },
  {
    id: '98437248',
    title: 'Manchester City Thrashes United 5-2: Haaland Hat-Trick',
    summary: 'City turned the Manchester derby into a clinic, with Haaland scoring three and the visitors\' defense looking like they had never seen the home side before.',
    body: [
      'Manchester City handed United a 5-2 thrashing in the season\'s most lopsided derby in recent memory, and Erling Haaland walked off with the match ball. The Norwegian striker now sits at 28 league goals on the season, and the rest of the table is beginning to calculate the math.',
      'United were in this game for about twenty minutes. After that, City\'s midfield turned the screw, the visiting back line was cut open repeatedly, and Haaland did what Haaland does. The third was the kind of finish that makes goalkeepers wonder why they ever bothered with the angle.',
      'For United, this is not a one-off; it is part of a season-long pattern. Their fans walked out before the final whistle for the second derby running. The club\'s front office has plenty to discuss this week, and very little of it is encouraging.',
      'For City, the result tightens the table further. Their next three fixtures look winnable on paper, and Haaland is approaching territory that nobody in the league has touched in years.'
    ],
    category: 'Sports',
    time: '08:00',
    section: 'sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437249',
    title: 'LIVE Preview: Major Cryptocurrency Announcement Tomorrow',
    summary: 'A mystery project is set to drop tomorrow, and the people in the know are calling it the biggest crypto news of the year.',
    body: [
      'Industry sources are bracing for a major crypto-sector announcement tomorrow morning, with multiple senior figures hinting on background that the news will reset assumptions for the rest of the year. Speculation is rampant; concrete details are rare.',
      'What is known: at least three large exchanges have rearranged their PR calendars to leave the morning slot clear. Several venture investors quietly pulled term-sheet meetings. And the analyst community has dialed in on a small number of plausible narratives, including a regulatory unlock, a stablecoin-policy joint statement, or a tokenization announcement that names large names.',
      'The official line from those involved: nothing yet. The unofficial line: get to your desk early.',
      'DCN News will live-cover the announcement on tomorrow\'s page from before the open. If the rumors are even half right, this will be a long day.'
    ],
    category: 'Live',
    time: '07:30',
    section: 'live',
    byline: 'DCN News Live Desk'
  },
  {
    id: '98437250',
    title: 'Opinion: Risks and Opportunities in Memecoin Investment',
    summary: 'You can hate memecoins on principle and still understand the risk-reward grid better than most people who trade them.',
    body: [
      'Memecoin investing is mocked, dismissed, and quietly profitable for a tiny minority of people who understand a small set of rules. The rest of the participants are funding their gains. That is a difficult truth to put on a financial-planning brochure.',
      'The first rule is that memecoins are not investments — they are asymmetric trades, and you should size them like options. Most go to zero. A few do not. If your position weighting cannot survive a 100% drawdown on the line item, the position is too big.',
      'The second rule is liquidity, not narrative. The strongest meme stories die when nobody can sell. Before any "story-based" entry, look at the bid stack. If you cannot exit a 1x size in one minute, the size is wrong.',
      'The third rule is to ignore anybody who tells you they did not get out at the top. They got out at the top. Plan your own exits before you enter, and assume the loudest people on the timeline are talking their book.'
    ],
    category: 'Opinion',
    time: '07:00',
    section: 'opinion',
    byline: 'DCN News Editorial'
  },
  {
    id: '98437251',
    title: 'OpenAI Releases GPT-5: A New Era of Artificial Intelligence',
    summary: 'GPT-5 is here, and OpenAI is being unusually direct about what it can do — including reasoning that finally clears the bar set by its loudest critics.',
    body: [
      'OpenAI released GPT-5 to developers and consumers on Wednesday, kicking off the next round of "is this AGI yet" debates with a model that, by the company\'s own benchmarks, lands a step-change ahead of GPT-4 across most reasoning tasks.',
      'The headline upgrades: long-horizon planning, better tool use out of the box, and a multimodal stack that handles documents, images, audio, and video without the usual seam lines. Early independent evaluations match the company\'s framing on the easy benchmarks; the harder ones will take weeks to settle.',
      'For agents, GPT-5 is a noticeable level-up. Several agent platforms — including the wave that recently piped models into trading and research workflows — pushed updates within hours. Latency and cost both came down, which matters more than most users realize.',
      'The harder questions, of course, remain. The model is still confidently wrong on a non-trivial percentage of niche queries, and "agentic" still has a long way to go before it is genuinely safe to leave running unsupervised. But the curve keeps bending, and competitors are visibly playing catch-up.'
    ],
    category: 'Tech',
    time: '16:30',
    section: 'tech',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437252',
    title: 'Tesla Full Self-Driving Receives Global Regulatory Approval, 30-Country Rollout Planned',
    summary: 'Tesla\'s FSD has cleared the safety thresholds in major markets and is set to roll out across thirty countries, the company said.',
    body: [
      'Tesla announced that its Full Self-Driving system has cleared the safety certifications required by the major regulators it has been negotiating with, paving the way for a thirty-country rollout that the company says will begin within weeks.',
      'The certifications are not blanket — each market has its own constraints, and several require driver supervision in ways that match the existing US approach. But the headline is clear: regulators have signed off on the core technology.',
      'For Tesla, the news re-anchors a bull thesis that has been wobbling. FSD revenue has been the part of the deck nobody wanted to model, because the rollout map kept slipping. With the certifications in hand, the company can finally point to a credible volume schedule.',
      'For competitors, the message is sharper. Several legacy automakers and self-driving startups had been quietly betting that Tesla would stall on regulatory grounds. That bet did not work.'
    ],
    category: 'Tech',
    time: '14:20',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437253',
    title: 'Quantum Computing Breakthrough: Google Achieves 1000-Qubit Processor',
    summary: 'Google\'s latest quantum processor hit 1,000 qubits, ten times the previous public milestone, and the implications for cryptography are already being argued.',
    body: [
      'Google announced its newest quantum processor has reached 1,000 working qubits, a tenfold leap over the chip the company had previously held up as a benchmark. The team published preprints alongside the announcement, and the academic community is already beginning the hard work of replication.',
      'The numbers matter, but error-corrected qubits matter more. Google says the new chip\'s error correction is ahead of where the previous generation was, even after accounting for the much larger system size. If that holds up under scrutiny, the timeline for usable, error-corrected quantum computing collapses.',
      'For cryptography, the long-term implications are obvious and uncomfortable. Standard public-key crypto relies on math that a sufficiently large quantum computer can break. Standards bodies have been pushing post-quantum migration for years, but most institutions have moved at a glacial pace.',
      'Google was careful to caveat that today\'s machine is still a research instrument and is not running production workloads. But the message to enterprise security teams is unsubtle: stop treating post-quantum migration as a problem for next decade.'
    ],
    category: 'Tech',
    time: '11:45',
    section: 'tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437254',
    title: 'SpaceX Starship Completes First Commercial Crewed Moon Landing',
    summary: 'Four astronauts landed near the lunar south pole aboard a Starship variant — the first commercial crewed lunar landing in history.',
    body: [
      'A Starship variant carrying four astronauts touched down near the lunar south pole this morning, marking the first commercial crewed moon landing of the modern era. Mission control confirmed all four crew members were safely on the surface and that systems were nominal.',
      'The mission profile was unforgiving. The descent path threaded a pole-region sequence that has wrecked simulations for years, and the team practiced the final eight minutes more than any other phase of the flight. The cleanness of the touchdown reflects both the work and the hardware.',
      'For NASA, this is a milestone with ten years of paperwork attached. Multiple programs converged on a single moment, and the political backers of the broader Artemis architecture are already taking victory laps in public statements.',
      'For the rest of the launch industry, the message is sharper: commercial human spaceflight beyond low-Earth orbit is no longer a deck slide. It is operational.'
    ],
    category: 'Tech',
    time: '09:00',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437255',
    title: 'Federal Reserve Announces 50 Basis Point Rate Cut, Markets Cheer',
    summary: 'The Fed cut by half a point, citing growth concerns, and risk assets ripped higher on the print.',
    body: [
      'The Federal Reserve cut rates by 50 basis points at its scheduled meeting, a larger move than most desks had penciled in and a signal that the committee is more concerned about growth than recent commentary suggested.',
      'The statement walked through the usual reasons — softer hiring data, sticky-but-cooling inflation, and signs that the consumer is finally feeling the cumulative effect of two years of high rates. The press conference leaned dovish without being reckless.',
      'Markets did what they do. Equities ripped through resistance, the dollar slipped against most majors, and gold made another run at the highs. Crypto, increasingly correlated with the long-duration risk trade, pushed higher on the headline.',
      'The next print is a CPI release that will set the tone going into the next meeting. For now, the path of least resistance is up — and the Fed has just made it cheaper to stay long.'
    ],
    category: 'Finance',
    time: '15:00',
    section: 'finance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437256',
    title: 'Ethereum ETF Approved: Institutional Investors Pour In, $10B First Day',
    summary: 'Spot Ethereum ETFs hit the tape with a first-day trading volume north of $10 billion — a debut that ranks among the strongest in ETF history.',
    body: [
      'The SEC approved the long-awaited spot Ethereum ETFs, and the products did not disappoint on day one. Combined first-day trading volume topped $10 billion, putting the launch in the same bracket as the strongest ETF debuts on record.',
      'The flow profile matched what desks had modeled. Large institutional names dominated the morning print, with retail layered in through the close. The biggest issuers split the bulk of the volume, with two new entrants quietly carving out meaningful share.',
      'For Ethereum, the launch is a watershed. The debate over whether ETH would ever clear the regulatory bar has been a meaningful overhang on the price for years. The answer, as it turns out, is yes.',
      'For the rest of the crypto stack, the message is just as important: if ETH can do this, the next round of approvals — for everything from Solana to baskets — becomes a question of timing rather than principle.'
    ],
    category: 'Finance',
    time: '13:30',
    section: 'finance',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437257',
    title: 'Global Stock Markets Hit All-Time Highs: Tech Stocks Lead',
    summary: 'Major indices around the world tagged fresh records as the AI trade refused to cool and the rate-cut cycle gathered momentum.',
    body: [
      'It was a green day on every major board. The S&P 500, the Nasdaq, the FTSE, and the Nikkei all printed fresh all-time highs, and the breadth was unusually wide for a tech-led tape.',
      'Two stories are doing most of the work. The first is the AI trade, which has not so much paused as gotten broader: the names benefitting are now twenty deep, not five. The second is the Fed\'s 50-basis-point cut, which has reset discount rates and pushed long-duration risk back into vogue.',
      'Skeptics point to the math. At these multiples, even small disappointments will hurt. The honest answer is that the market knows that and does not care, because the alternative — sitting in cash while everything else rips — is the kind of pain career managers are not paid to absorb.',
      'For now, the tape is the tape. Buyers are in charge, and the few sellers we have are the ones who got out a thousand points ago and have been waiting for a chance to feel right.'
    ],
    category: 'Finance',
    time: '10:15',
    section: 'finance',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437258',
    title: 'Gold Price Breaks $3,000 Per Ounce as Safe-Haven Demand Surges',
    summary: 'Gold cracked $3,000 an ounce on the back of safe-haven flows and a softer dollar, with analysts already lifting their year-end targets.',
    body: [
      'Gold broke through $3,000 an ounce on Wednesday morning, taking out a level that had served as resistance for most of the previous quarter. The print was confirmed across futures and physical markets within minutes.',
      'The drivers are not new but they keep stacking. Geopolitical risk premium is back, central-bank buyers in Asia and the Gulf have not slowed, and a softer dollar is doing what a softer dollar does for hard assets denominated in it.',
      'The retail picture is also worth noting. Coin and bar premia are wider than they have been in years, suggesting physical demand is broad rather than concentrated. Gold ETFs continue to see steady inflows, and several institutional allocators have lifted target weights.',
      'Analysts are already revising. Year-end calls of $3,200–$3,500 that looked aspirational a quarter ago are now consensus. The bull case from here is well known. The bear case is harder to find.'
    ],
    category: 'Finance',
    time: '08:30',
    section: 'finance',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437259',
    title: 'Palace Museum Launches Holographic Exhibition — A Walk Through Qing Dynasty Life',
    summary: 'The Palace Museum opened a holographic exhibition that lets visitors stand inside scenes from imperial life, and the early reaction is glowing.',
    body: [
      'The Palace Museum opened a major new holographic exhibition this week, using the latest volumetric capture and projection technology to drop visitors directly inside scenes from imperial-era life. Early reaction from press previews has been the kind of glowing that museums dream of and rarely receive.',
      'The exhibition is built around a narrative arc rather than an inventory. Visitors move through interlinked rooms, each rendered as a hologram-supported environment with period-accurate audio, costumed figures, and ambient detail down to the texture of garments and the steam off ceremonial tea.',
      'Curators emphasize that the experience is meant to complement, not replace, the museum\'s physical collection. Each holographic scene anchors a small group of objects on display nearby, making the connection between artifact and lived context explicit.',
      'Tickets for the exhibition\'s opening months are already in short supply. The museum has scheduled additional sessions and is reportedly fielding licensing inquiries from institutions abroad.'
    ],
    category: 'Culture',
    time: '16:00',
    section: 'culture',
    byline: 'DCN News Culture Desk'
  },
  {
    id: '98437260',
    title: 'Oscar Nominations Announced: Asian Films Make History With Record Slate',
    summary: 'A record number of Asian films landed Oscar nominations across major categories — the kind of slate that resets what the Academy looks like.',
    body: [
      'Oscar nominations dropped this morning and one storyline dominated: Asian cinema is having its loudest awards season ever. Multiple films from Korea, Japan, India, and China picked up nominations across major categories, in numbers that have no precedent in Academy history.',
      'The breadth is what makes this remarkable. It is not one film sweeping a few minor categories; it is several films competing across direction, screenplay, acting, and the technical crafts. Several actors picked up first-ever nominations, and at least two films are now legitimate Best Picture contenders by the math.',
      'Industry watchers point to two converging trends: streaming platforms aggressively buying global rights, and Western distributors finally treating subtitled releases as theatrical events rather than niche art-house bookings.',
      'The Academy has been criticized for years over its narrow focus. Whether this slate becomes a permanent shift or a high-water mark depends on what voters do next year. For now, the slate speaks loudly enough on its own.'
    ],
    category: 'Culture',
    time: '14:45',
    section: 'culture',
    byline: 'DCN News Culture Desk'
  },
  {
    id: '98437261',
    title: 'World Book Day: Global Bestseller List Revealed, Sci-Fi and Self-Help Lead',
    summary: 'The 2026 global bestseller list is out, with sci-fi and self-improvement titles dominating the top tier and a few surprises further down.',
    body: [
      'World Book Day arrived with the release of the 2026 global bestseller list, and the breakdown will make publishers and bookstore buyers sit up. Sci-fi and self-improvement titles dominated the top of the chart, with literary fiction holding a respectable but smaller position.',
      'The sci-fi resurgence has been building for two years. AI-adjacent themes — agency, autonomy, what it means to share a planet with smarter machines — are pulling readers who have not bought a novel in a decade. Several titles in the top ten qualify as crossover books that are read by communities far outside the genre.',
      'Self-help, meanwhile, looks different from the genre\'s last peak. The bestsellers skew toward systems and habits rather than affirmations, and several authors with academic credentials displaced the traditional motivational headliners.',
      'Indie bookstores reported strong World Book Day traffic across major cities. The format may be old, but the appetite for it clearly is not.'
    ],
    category: 'Culture',
    time: '12:30',
    section: 'culture',
    byline: 'DCN News Culture Desk'
  },
  {
    id: '98437262',
    title: 'Taylor Swift World Tour Breaks All Records — $2 Billion and Counting',
    summary: 'The Eras Tour officially became the highest-grossing music tour in history, with total revenue topping $2 billion and rising.',
    body: [
      'It is now official: Taylor Swift\'s Eras Tour is the highest-grossing music tour ever staged, with total revenue topping $2 billion and a final tally that will keep climbing as the residency-style closing dates work through their schedule.',
      'The numbers reset the record book by a margin that is hard to overstate. The previous high water mark was set by an act that played stadiums for years; Swift\'s tour cleared it in a fraction of the time, with a single artist on a single arc of dates.',
      'The economic ripple is hard to miss. Cities that hosted dates reported measurable spikes in hotel occupancy, restaurant revenue, and short-term retail. Several mayors lobbied openly, and at least one country negotiated tour stops at the diplomatic level.',
      'For the music industry at large, the tour is a stress test of what is still possible at the very top of the pyramid. Whether anybody else can replicate it is the question every label is now arguing about behind closed doors.'
    ],
    category: 'Culture',
    time: '10:00',
    section: 'culture',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Culture Desk'
  },
  {
    id: '98437263',
    title: '2026 World Cup: China Advances to Round of 16 for First Time',
    summary: 'China\'s men\'s team made history by advancing out of the group stage at the 2026 World Cup with two wins and a draw.',
    body: [
      'The Chinese men\'s national football team made it out of the group stage at the 2026 World Cup for the first time in the modern era, finishing on two wins and a draw and locking in a knockout-round date.',
      'The performance was a long time coming and felt like it. Years of restructured youth pipelines and an overhaul of the domestic league finally produced a tournament squad that could grind out results against opponents who once expected easy points.',
      'The decisive moment was the second group game, where a late equalizer became a winner inside ten minutes. The bench celebrations told the story; the locker room afterward was, by all reports, mostly silent and a little stunned.',
      'The next round is a tougher draw, but for the first time in a generation it is a draw with a Chinese team in it. The country is paying attention.'
    ],
    category: 'Sports',
    time: '22:00',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437264',
    title: 'NBA All-Star Game: LeBron James Wins MVP at 41',
    summary: 'LeBron put up 35 points, led the West to victory, and walked off with another All-Star MVP — at 41 years old.',
    body: [
      'LeBron James scored 35 points in the NBA All-Star Game and was named the contest\'s MVP, leading the Western Conference to a comfortable win. The asterisk is the one nobody can ignore: he is forty-one years old.',
      'The performance was vintage in the way the rest of the league has come to expect from him: not the highest highlights, but the most consistent shot quality, the cleanest passes, and a defensive switch in the third quarter that broke the East\'s rhythm.',
      'Younger stars on both teams said afterward that they expected the night to belong to them and were not embarrassed to admit it had not. Several took the time to acknowledge how unlikely a 41-year-old MVP at this exhibition really is.',
      'For James, the season is winding down toward yet another playoff push. For the league, the marketing department is already cutting tape — and the front offices that bet against him aging are licking their wounds.'
    ],
    category: 'Sports',
    time: '18:30',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437265',
    title: 'Tennis: Zheng Qinwen Wins Australian Open Women\'s Singles',
    summary: 'Zheng Qinwen toppled the world No.1 in straight sets to capture the Australian Open and become the first Chinese woman to win a Grand Slam singles title.',
    body: [
      'Zheng Qinwen took apart the world No.1 in straight sets to win the Australian Open women\'s singles title, becoming the first Chinese woman in the Open era to lift a Grand Slam trophy in singles.',
      'The match itself was over earlier than the scoreline suggested. Zheng\'s serve was the difference; the No.1 had no real answer, and the engine room of the rally — the second-serve return she has built her career on — never fired the way it usually does.',
      'The trophy ceremony was emotional. Zheng spoke briefly about a coach she has worked with since she was a teenager, then stopped, then continued. Players in the locker room described the moment as the kind that resets what a generation of younger Chinese players believes is possible.',
      'For the tour, the result reshapes the rankings race. For tennis in China, it is a moment with a long shadow. The pipeline behind Zheng is stronger than ever, and they will not have to wait another generation for the next Slam contender.'
    ],
    category: 'Sports',
    time: '15:45',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437266',
    title: 'F1: Zhou Guanyu Wins First Grand Prix at Shanghai',
    summary: 'Zhou Guanyu became the first Chinese driver to win a Formula 1 race, taking the chequered flag at home in Shanghai.',
    body: [
      'Zhou Guanyu won his maiden Formula 1 race at the Shanghai Grand Prix, becoming the first Chinese driver to claim a victory in the sport\'s top flight and triggering scenes around the circuit that will not be forgotten any time soon.',
      'The race itself was a strategic chess match rather than a cakewalk. Zhou drove a measured stint in the middle phase, took a tire decision that several rivals copied too late, and held the lead through a tense final ten laps under tyre pressure.',
      'The podium ceremony was the loudest the circuit has ever produced. The grandstand was overwhelmingly home support, and the Chinese national anthem at a Grand Prix on home soil hit a note nobody quite expected.',
      'For Zhou, the win seals a chapter that started years ago in junior categories with significantly more skeptics than supporters. For the sport, it cracks open a market that has been arms-length-curious for a decade.'
    ],
    category: 'Sports',
    time: '13:00',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437267',
    title: 'Meet BOOMER: A VanEck "Old People ETF" Concept Built for Investors 50+',
    summary: 'Inspired by GENZ\'s "digital native economy," BOOMER proposes a playful ETF concept: instead of betting on younger, digital-first lives, it targets the needs and investment behavior of people age 50+. In this imagined index, constituents are skewed toward companies tightly connected to how the 50+ cohort consumes, saves, allocates risk, and participates in markets.',
    body: [],
    category: 'Finance',
    time: '09:45',
    section: 'finance',
    byline: 'DCN News Finance Desk',
    date: '2026-04-16'
  },
  // ────────── NY-Post-style mix (originally added; now with full bodies) ──────────
  {
    id: '98437268',
    title: 'Subway Horror: Man Shoved Onto Tracks at Bronx Station — Survives Brush With Train',
    summary: 'A late-night argument on the platform of the East 149th Street station ended with one straphanger flung onto the tracks just minutes before an oncoming train.',
    body: [
      'A late-night verbal blowup on the platform of the East 149th Street station turned violent when one of the men involved shoved the other directly onto the tracks. According to police, the victim landed near the third rail just minutes before an oncoming train was due into the station.',
      'In a stretch of luck that transit officials are calling extraordinary, the victim was able to scramble back onto the platform on his own and was conscious and talking when first responders arrived. EMS transported him to a nearby hospital where he is expected to recover fully.',
      'The attacker fled the station before officers could close in, and the NYPD is asking the public for help identifying the suspect. Surveillance footage from the platform and the surrounding station has been pulled and is being reviewed.',
      'The incident is the latest in a string of platform shovings that have rattled riders and put the MTA back in the political crosshairs over station safety. Council members representing the area are already pushing for additional patrols.'
    ],
    category: 'NYC',
    time: '22:18',
    section: 'hot',
    byline: 'DCN News Metro Desk'
  },
  {
    id: '98437269',
    title: 'Council Wants the Bite Off Spot: New Bill Would Permanently Disarm NYPD\'s Robot Dogs',
    summary: 'A New York City Council member is moving to ban the NYPD from ever strapping weapons onto its four-legged robotic dogs, citing safety risks and chilling civil-liberties precedents.',
    body: [
      'A New York City Council member introduced legislation this week that would permanently bar the NYPD from arming its four-legged robotic dogs, reigniting a debate that started the moment the units showed up in the field. The bill, dubbed the "ASIMOV Act," would lock current policy into law.',
      'The author argues that even if the department has no current plan to weaponize the units, leaving the option open creates a legal gray area that nobody benefits from. Civil-liberties groups, police-reform advocates, and a handful of tech ethicists rallied behind the bill at its press introduction.',
      'The NYPD did not formally oppose the proposal, with one senior official quoted as saying the department\'s working policy already prohibits armed deployment. Critics counter that policies change with administrations, and a statute is sturdier than an internal memo.',
      'Notably, the bill carves out drones, which would remain governed by separate rules. That carve-out is the part civil-liberties watchers say will be the next fight.'
    ],
    category: 'NYC',
    time: '11:30',
    section: 'newspaper',
    byline: 'DCN News Metro Desk'
  },
  {
    id: '98437270',
    title: 'Soldier Allegedly Bet $400K on Maduro Raid Using Inside Intel — Now Faces a Manhattan Judge',
    summary: 'A US special-forces operator stands accused of cashing in on a prediction market by trading on classified details about a mission to capture former Venezuelan strongman Nicolás Maduro.',
    body: [
      'A US special-forces operator appeared in federal court in Manhattan this morning to face charges that he traded on classified information from a high-profile mission, parlaying his inside view into more than $400,000 in winnings on a prediction market.',
      'According to the indictment, the soldier had access to operational details about an attempted capture of former Venezuelan strongman Nicolás Maduro and used those details to place a series of large bets on the timing and outcome of the operation. The bets, prosecutors say, were too tightly correlated with the actual events to be coincidence.',
      'The case has triggered a small policy panic in two directions. On one end, defense officials are scrambling to tighten controls on what active-duty personnel can see and what they can do with online accounts. On the other, prediction-market operators are being asked, again, what they monitor for.',
      'The defendant has not entered a plea. His attorneys have indicated they will fight the case, including arguments about whether the information involved meets the legal threshold for "classified" as charged.'
    ],
    category: 'Crime',
    time: '09:50',
    section: 'newspaper',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Crime Desk'
  },
  {
    id: '98437271',
    title: 'Bedford Park Bodega Stuck Up at Gunpoint: Two Suspects on the Loose',
    summary: 'A neighborhood bodega in the Bronx was robbed at gunpoint overnight, with two masked suspects emptying the register before vanishing into the surrounding streets.',
    body: [
      'A neighborhood bodega in Bedford Park was robbed at gunpoint overnight, with two masked suspects entering the store, threatening the cashier, and emptying the register before fleeing on foot. No injuries were reported.',
      'The owner, a fixture of the block for more than two decades, said the haul was small but the trauma to his employee and the regulars who happened to be inside the store was real. He plans to keep the store closed for one day to let his staff regroup.',
      'NYPD detectives have pulled video from the store and several surrounding businesses. Police are asking residents who were in the area between 4:00 and 5:00 a.m. to come forward, and have offered the standard cash reward for tips that lead to an arrest.',
      'Neighbors who gathered outside the store on Wednesday morning expressed a mix of fear and frustration. Several said the precinct\'s response time had been good but that the broader sense of street safety in the area had slipped over the past year.'
    ],
    category: 'Crime',
    time: '04:12',
    section: 'newspaper',
    byline: 'DCN News Crime Desk'
  },
  {
    id: '98437272',
    title: 'Run-DMC Cold Case Closes: Defendant Pleads Guilty in 2002 Murder of Jam Master Jay',
    summary: 'More than two decades after hip-hop pioneer Jam Master Jay was gunned down in his Queens studio, one of the men charged in the killing has formally entered a guilty plea.',
    body: [
      'In a case that has shadowed New York rap for more than twenty years, one of the men charged in the 2002 killing of Run-DMC\'s Jam Master Jay formally entered a guilty plea in federal court today. The plea closes one of the most painful loose ends in hip-hop history.',
      'Jam Master Jay — born Jason Mizell — was shot in his Queens recording studio in October 2002. The case ran cold for nearly two decades despite repeated leads, until federal prosecutors brought charges that finally moved the matter into open court.',
      'The plea details, according to those briefed on the agreement, include cooperation with authorities and an agreed-upon sentencing range that prosecutors and defense are expected to argue inside of at sentencing. A formal sentencing date has not yet been set.',
      'Reaction from former Run-DMC bandmates and the broader hip-hop community has been somber but pointed. The case sat heavy on the genre for a generation, and today\'s plea, several artists noted, is closure that took far too long to arrive.'
    ],
    category: 'Crime',
    time: '15:40',
    section: 'newspaper',
    byline: 'DCN News Crime Desk'
  },
  {
    id: '98437273',
    title: 'Palm Beach Drama: \'Real Housewives\' Vets Caught on Camera Squabbling Over the Mic',
    summary: 'Original cast members of a famous Bravo franchise have reportedly turned a charity polo event into another reality-TV moment, with longtime sparring partners jostling over who gets to belt out the national anthem.',
    body: [
      'Original cast members of a long-running Bravo franchise turned a sleepy Florida charity event into another reality-TV moment over the weekend, with onlookers describing a brief but unmistakable fight over who got to sing the national anthem before play began.',
      'The episode reportedly unfolded at a Wellington-area polo club hosting a Saturday charity match. Multiple guests said the loudest of the franchise\'s veterans took control of the microphone and refused to give it up to a castmate widely considered to be the more accomplished singer of the bunch.',
      'A source close to the production said the moment will appear in the upcoming season, framed exactly the way it played live. Cameras were rolling, and producers had no intention of cutting the friction.',
      'For viewers who have been following these personalities for two decades, the energy was depressingly familiar. For the polo crowd, it was a story to dine out on for a month.'
    ],
    category: 'Entertainment',
    time: '13:05',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437274',
    title: '\'Summer House\' Audio Leak Cracked: Bravo Says It Came From Inside Production',
    summary: 'After days of speculation, the network behind reality hit "Summer House" says the explosive reunion audio that flooded social media was leaked by someone working on the production itself.',
    body: [
      'The network behind reality hit "Summer House" formally identified the source of last week\'s explosive reunion-audio leak, saying the recording was made and shared by someone who worked on the production rather than by a member of the cast.',
      'The clip in question — which spread across social platforms with extraordinary speed — captured a confrontation that producers say was meant to anchor the upcoming reunion airing. The leak forced the network to comment publicly, accelerate its investigation, and reassure the cast that nobody on set had sold them out.',
      'The network said "appropriate action" had been taken with the individual involved and signaled that legal options remain on the table. Other unauthorized clips are reportedly still circulating, and the company asked platforms not to host or boost them.',
      'For the cast, the immediate effect is a thawing of internal trust that had iced over fast. The reunion itself airs as scheduled.'
    ],
    category: 'Entertainment',
    time: '20:15',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437275',
    title: 'Andy Cohen: A Bravo Superfan — Not the "Investigators" — Cracked the Leak Case',
    summary: 'Talk-show host and reality-TV ringleader Andy Cohen says it wasn\'t his self-styled team of internet sleuths who solved the leak — it was an ordinary viewer with one decisive piece of information.',
    body: [
      'Andy Cohen used his radio show to put a coda on the "Summer House" reunion-audio leak this week, telling listeners that the breakthrough did not come from the self-appointed team of online sleuths who had been auditioning for credit. It came from one viewer.',
      'According to Cohen, the viewer reached out with a single piece of identifying detail that pointed straight at someone who worked on the production. The network ran the lead, confirmed it, and reached its conclusion. The whole arc, he said, took less time than the speculation that ran online.',
      'He used the segment to call out unauthorized recording as "disgusting" and praised his cast for showing up to an emotionally heavy taping. He had less patience for the secondary clips that are still circulating, calling them an offense to the work that went into the season.',
      'The reunion will air as planned, which the network is now trying to use as a chance to reset the conversation. Whether that lands depends on what is in the cut viewers actually see.'
    ],
    category: 'Entertainment',
    time: '17:22',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437276',
    title: 'Rick Moranis Returns: \'Spaceballs\' Cast Reunites for Long-Awaited Sequel',
    summary: 'After nearly three decades away from the spotlight, beloved comedy star Rick Moranis stepped back onto a red carpet to promote a long-promised sequel to a sci-fi spoof classic.',
    body: [
      'Rick Moranis stepped back onto a red carpet for the first time in nearly thirty years on Wednesday, joining old castmates and a wave of new ones to promote a long-promised sequel to a science-fiction spoof many fans had given up on. The reaction inside the room was as warm as it gets in Hollywood.',
      'Moranis stepped away from acting in the late 1990s to focus on his family. His return has been one of the most loosely-rumored, frequently-denied projects in modern comedy, and the original cast has openly missed him. Wednesday\'s appearance was framed by the studio as a celebration rather than a comeback.',
      'On stage, the original cast traded jokes with newer faces being lined up to extend the franchise. The director taking over from the franchise\'s legendary creator emphasized that the sequel would not exist without the original team\'s blessing.',
      'A release date and footage are now in the wild. Fans who grew up on the original were not subtle about how they felt; the social-media reaction within hours of the appearance was overwhelmingly positive.'
    ],
    category: 'Entertainment',
    time: '12:00',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437277',
    title: 'Pink\'s Daughter Steals the Spotlight at Broadway\'s \'Lost Boys\' Opening',
    summary: 'A pop megastar\'s teenage daughter pulled off her most grown-up red-carpet moment yet at the splashy Broadway debut of a beloved cult-classic adaptation.',
    body: [
      'A pop megastar\'s teenage daughter had her loudest red-carpet night yet at the splashy Broadway opening of a stage adaptation of a beloved cult-classic film, with the family arriving in head-turning looks and the kid frankly stealing the press line.',
      'Mom — herself in studded leather — was beaming for photographers, telling them how fast her daughter had grown up and dropping the kind of pride-baby line that any parent of a teenager has either said or wanted to say. The daughter handled the cameras with the poise of someone who has been observing this room since before she could speak in full sentences.',
      'Inside the theater, the production opened to a strong reception. The Broadway adaptation has been in development for years and finally landed in front of an audience that included a remarkable density of celebrities for an opening night.',
      'The aftermath, predictably, is a fashion-and-family story rather than a theater story. The reviews land later this week.'
    ],
    category: 'Entertainment',
    time: '21:48',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437278',
    title: '\'General Hospital\' Star Hit With Restraining Order Amid Reported Mental-Health Crisis',
    summary: 'A long-running soap-opera lead is facing an emergency restraining order taken out by her ex-husband, who told the court he is worried for the safety of their child.',
    body: [
      'A long-running soap-opera star is facing an emergency restraining order taken out by her ex-husband, who told a judge he is concerned for the welfare of their child and asked the court to require a formal mental-health evaluation. The judge granted the temporary order pending a follow-up hearing.',
      'According to court documents reported on by entertainment outlets, the filing details a pattern of recent incidents that the ex-husband says have raised his concern over time. The actress\'s own legal team has not yet entered a public response.',
      'Visitation has been moved to a supervised arrangement while the case is reviewed, a step that family-court attorneys say is standard during the kind of emergency review the filing has triggered.',
      'For viewers, the story is a sad reminder that the figures on screen are working through everything that everybody else does, in public. The actress remains employed by the show; production has not commented.'
    ],
    category: 'Entertainment',
    time: '10:30',
    section: 'culture',
    byline: 'DCN News Entertainment Desk'
  },
  {
    id: '98437279',
    title: 'KNICKS GO 1-0: Brunson Drops 28, Towns Catches Fire as MSG Erupts',
    summary: 'New York opened its first-round playoff series with a tone-setting home win, riding 28 points from Jalen Brunson and a dominant second half from Karl-Anthony Towns to a 113-102 victory.',
    body: [
      'The Knicks opened their first-round playoff series with a 113-102 home win over the Hawks, a tone-setting evening at Madison Square Garden that gave the city the energy fans had been waiting two weeks for.',
      'Jalen Brunson did Brunson things, finishing with 28 points and the kind of late-clock control that has defined his postseason reputation. Karl-Anthony Towns dropped 19 of his 25 in the second half, including a stretch in the third quarter where the Hawks simply could not contest his looks.',
      'Atlanta made a real run inside the final five minutes, cutting the deficit to single digits with a 10-0 burst. The Knicks answered the only way you can in the playoffs — at the line, where they outscored the Hawks decisively over the course of the night.',
      'The series resumes in two days, again at the Garden. New York will not say it out loud, but the players know how big a 1-0 lead at home is in a series like this.'
    ],
    category: 'Sports',
    time: '23:10',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437280',
    title: 'Yankees Worry Watch: Stanton Sidelined With Calf Issue, IL Stint on the Table',
    summary: 'Slugger Giancarlo Stanton was scratched from the lineup after exiting the previous night\'s win with right calf tightness, and Yankees brass say a trip to the injured list is now in play.',
    body: [
      'The Yankees scratched Giancarlo Stanton from Saturday\'s lineup after he exited the previous night\'s win with tightness in his right calf, and the manager confirmed that a trip to the injured list is on the table depending on imaging.',
      'Stanton\'s availability has been one of the season\'s persistent storylines, and any extended absence reshapes the bottom of the order at a time when the schedule is starting to bite. Replacement options are uneven and largely untested in this kind of pressure.',
      'The slugger himself, speaking briefly after the previous night\'s game, said he felt the calf grab during a routine swing and that he expected the team to take it seriously. The training staff is reported to have ordered additional imaging.',
      'Beyond the obvious lineup math, the timing is awkward. The Yankees were finally riding a hot stretch and had built breathing room atop the division. Losing a middle-of-the-order bat for two weeks would tighten that race in a hurry.'
    ],
    category: 'Sports',
    time: '18:45',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437281',
    title: 'Robo-Ump Headache: Yankees Keep Burning Strike-Zone Challenges at the Worst Times',
    summary: 'A spring-and-summer experiment with the automated ball-strike system is turning into a sore spot for the Yankees, who keep losing high-leverage challenges and stranding runners.',
    body: [
      'The Yankees are not enjoying the automated ball-strike challenge system as much as they hoped to. After a hot start at the plate that produced confident challenges, the team has run cold on the appeals, repeatedly burning challenges at high-leverage moments and leaving runners standing on base.',
      'Internal numbers, according to staffers, show the team\'s success rate sliding well below the league average over the last three weeks. Coaches have urged hitters to be more selective about when they raise the challenge flag, with mixed results.',
      'Aggressiveness is part of the team\'s identity, the manager said earlier this week, but he was clear that aggressiveness without success is just noise. He has been working with the staff on a small set of triggers — count, runners on, pitch type — that he wants the hitters to internalize before they tap.',
      'For now, the system remains a feature of the season the Yankees have not figured out. The teams that have are quietly building a small but real edge.'
    ],
    category: 'Sports',
    time: '14:00',
    section: 'sports',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437282',
    title: 'Amazon Doubles Down on OpenAI as Microsoft Grip Slips',
    summary: 'Amazon is talking up what it\'s billing as a major expansion of its tie-up with ChatGPT maker OpenAI, the latest sign that the AI giant is loosening the once-tight bear-hug from longtime backer Microsoft.',
    body: [
      'Amazon used a Tuesday press blast to talk up what it described as a major expansion of its partnership with OpenAI, hours after the AI company signaled that its long-running, exclusive-feeling relationship with Microsoft was loosening up.',
      'The announcement is light on dollar figures but heavy on strategic language. Amazon emphasized infrastructure, custom-silicon roadmaps, and developer tooling — the kind of language that translates, in plain English, to "OpenAI is going to run more of its workloads on our stack."',
      'For OpenAI, the move is consistent with a pattern that has been visible for months. The company is telegraphing, in big and small ways, that it does not intend to be a single-cloud captive. For Microsoft, the message is harder.',
      'The wider AI cloud race is now firmly multi-vendor. Every model lab is hedging, every hyperscaler is courting, and the only way to lose is to assume any one of these relationships is permanent.'
    ],
    category: 'Tech',
    time: '08:20',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437283',
    title: 'Big Tech Cheers a Senate Bill That Hasn\'t Even Dropped Yet — and Eyebrows Are Up',
    summary: 'A trade group with deep ties to Apple and Google fired off a press release praising a child-online-safety bill before it was even formally introduced.',
    body: [
      'A trade group whose funding base is dominated by Apple and Google fired off a press release praising a Senate child-online-safety bill before that bill was formally introduced, and Capitol Hill noticed.',
      'Lobbying watchers say the timing has nothing to do with public-relations awkwardness and everything to do with how preferential the eventual bill text was expected to be for Big Tech. Whether the trade group jumped the gun on a leak, on a draft, or on a phone call is the question staff offices are now circulating.',
      'A separate bill that takes a tougher line on app-store accountability is the unspoken context. Sponsors of that proposal say the trade group\'s enthusiasm for the Senate text is itself an argument for theirs.',
      'The administration has not weighed in. Industry players are bracing for both bills to grind through committees this summer, and for the lobbying around both to make today\'s press release look restrained.'
    ],
    category: 'Tech',
    time: '07:30',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437284',
    title: 'FISA Reauthorization Stalls: GOP Splits as Surveillance Deadline Bears Down',
    summary: 'Republican leaders missed another procedural window to push through a renewal of the federal foreign-surveillance law, with hardliners demanding warrant requirements and other privacy guardrails.',
    body: [
      'House and Senate Republicans missed another procedural window to advance reauthorization of the federal foreign-surveillance law, with the deadline now days away and hardliners showing no sign of backing down on demands for warrant requirements and additional privacy guardrails.',
      'The fight is intra-party, not just inter-party. Conservative members want explicit limits on the kind of incidental collection that has scandalized civil-liberties groups for a decade, plus carve-outs around digital-currency surveillance and AI-assisted analysis of US persons. Leadership has been reluctant to accept the full package.',
      'On the Democratic side, a small but vocal group of senators has been working with the conservative caucus on warrant language, an unusual cross-aisle alignment that has surprised vote-counters in both chambers.',
      'A short-term extension is now openly discussed as a fallback. National-security officials say even a brief lapse would be operationally damaging; civil-liberties advocates say it would be the first real chance to renegotiate the law in a generation.'
    ],
    category: 'Politics',
    time: '06:55',
    section: 'newspaper',
    byline: 'DCN News Politics Desk'
  },
  {
    id: '98437285',
    title: 'NY Governor\'s Race Twist: GOP Pushes Cure Bill After Blakeman Booted From Public Funds',
    summary: 'A signature snag has knocked Republican governor hopeful Bruce Blakeman out of New York\'s public matching-funds pool, and his party is now pushing legislation that would give candidates a short window to fix paperwork errors.',
    body: [
      'A signature problem on a campaign-finance form has knocked Republican governor hopeful Bruce Blakeman out of New York\'s public matching-funds program, removing access to several million dollars in subsidized campaign cash and re-shaping the race weeks before the primary.',
      'Blakeman\'s allies in the legislature are now pushing a cure bill that would give candidates denied by the state\'s campaign-finance board a short window — currently being negotiated as seven days — to fix paperwork errors and re-apply. The bill is unlikely to pass without sign-off from Albany\'s Democratic leadership.',
      'Blakeman has called the denial a "ridiculous" technicality and accused the board of partisan motivation. The board has stuck to a procedural defense: the rules say the running mate must sign the form, and the form was not signed.',
      'For the broader race, the impact is real. Public matching dollars are the difference between competitive ad buys and ad strategies built around hope. Democrats are watching closely; their own primary is its own mess.'
    ],
    category: 'Politics',
    time: '12:25',
    section: 'newspaper',
    byline: 'DCN News Politics Desk'
  },
  {
    id: '98437286',
    title: 'Bitcoin ETFs Notch Another Record Day as Wall Street Stops Treating Crypto Like a Side Bet',
    summary: 'Spot bitcoin ETFs printed another big inflow day on the back of the Gemini agentic-trading launch and broader risk-on sentiment.',
    body: [
      'Spot bitcoin ETFs printed another standout inflow day, with combined net flows pushing weekly numbers into the top tier of any week since approval. The tape lined up neatly with the Gemini agentic-trading launch and a softer macro backdrop.',
      'The composition of the flow tells the story. Allocator-style buying — pension funds, multi-strategy managers, and a handful of insurance balance sheets — dominated the print. Retail was strong but secondary. That ratio is not what the early skeptics predicted.',
      'For desks running ETF books, the volumes are now operationally normal. The plumbing has matured; market makers are not sweating creation/redemption flow anymore. That alone is a meaningful regime change relative to year one.',
      'The bigger picture: Wall Street is no longer treating BTC as a curiosity. The internal memos and the position sheets agree. The only remaining sceptics are the ones whose careers were built on the previous era.'
    ],
    category: 'Crypto',
    time: '17:00',
    section: 'finance',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437287',
    title: 'Memecoin Trader\'s New Best Friend: Why "Meme Agents" Could Reshape Retail Crypto',
    summary: 'With Gemini\'s new Meme Agent template, retail crypto traders can hand the 3 a.m. shift to an AI bot that watches social and on-chain signals.',
    body: [
      'Gemini\'s new Meme Agent template is the most interesting product launch of the week not because of what it does on day one — what it does is straightforward — but because of what it implies about the next phase of retail crypto.',
      'Memecoin trading has always been a time-zone game. The pumps happen when most retail is asleep, and the survivors are people willing to ruin their sleep schedules to keep up. Agentic tooling collapses that asymmetry. With the right limits, an agent can do the night shift you cannot.',
      'The risks are obvious and real. Agents will buy things they should not, will hold things they should not, and will be wrong in correlated ways during stress events. Anyone using one without a hard stop, a max-loss rule, and a withdrawal lock is volunteering for an expensive lesson.',
      'The opportunity is just as real. Retail traders who set sensible rules and use agents as a discipline-enforcement tool — rather than as a magic money button — will quietly outperform the loudest accounts on the timeline. They always have.'
    ],
    category: 'Crypto',
    time: '19:30',
    section: 'opinion',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Editorial'
  },
  // ────────── Fresh batch (8 new) — to reach 56 articles ──────────
  {
    id: '98437288',
    title: 'King Charles Touches Down in NYC for the First Time in 19 Years — and Locals Want Him to See the Real Thing',
    summary: 'The King is in town, and New Yorkers have opinions on how he should spend his stay — most of them involving a slice and a subway ride.',
    body: [
      'King Charles III arrived in New York City this week for his first visit to the five boroughs in nearly two decades, kicking off a tightly choreographed itinerary that includes diplomatic meetings, a stop at the 9/11 Memorial, and the kind of motorcade routing that makes the FDR Drive disappear at rush hour.',
      'The official agenda is heavy on optics and substance: cultural meetings, a courtesy call with the mayor, and a visit to a downtown business roundtable focused on transatlantic investment. The royal couple is expected to spend two days in the city before continuing to Washington.',
      'New Yorkers, predictably, have strong views on what the King should actually see. Pollsters who asked have results that suggest a slice somewhere in Brooklyn, an honest pre-game pretzel cart, and at minimum one ride on the subway between two locations not on the official schedule.',
      'On the security side, the NYPD has rolled out the kind of perimeter that the city only stages for the very top of the visitor list. Locals shrugged and rerouted, as they tend to do.'
    ],
    category: 'World',
    time: '07:45',
    section: 'hot',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Metro Desk'
  },
  {
    id: '98437289',
    title: 'UAE to Leave OPEC May 1 in Shocking Blow to the Cartel — Here\'s What It Means for Gas Prices',
    summary: 'The United Arab Emirates says it is leaving OPEC effective May 1, the most consequential exit from the cartel in years and a development that could put real pressure on global gas prices.',
    body: [
      'The United Arab Emirates announced this week that it will formally leave OPEC effective May 1, taking with it one of the cartel\'s most strategically positioned producers and re-opening a debate that has not been this loud in years: how durable is OPEC, really?',
      'The exit is not happening in a vacuum. It lands during an active conflict with Iran, against a backdrop of Saudi production-quota fatigue, and in a market where US production has quietly continued to climb. The UAE\'s departure removes a swing producer from the cartel\'s coordination math.',
      'For consumers, the most visible effect is on the price at the pump. With one of OPEC\'s largest producers no longer bound by the cartel\'s output ceilings, supply discipline becomes harder to enforce. Several energy analysts on Wednesday revised their year-end gasoline forecasts downward.',
      'For the cartel itself, the question is whether this is a one-off or the start of a pattern. Several smaller members have grumbled about quotas for years; the UAE\'s exit gives those grumbles a precedent.'
    ],
    category: 'Finance',
    time: '13:40',
    section: 'finance',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Markets Desk'
  },
  {
    id: '98437290',
    title: 'Musk vs OpenAI Trial Kicks Off: Tesla CEO Slams Altman Over "Charity" Pivot to Profit',
    summary: 'Elon Musk took the stand on day one of the high-profile trial over OpenAI\'s for-profit conversion, arguing that the company abandoned its non-profit mission.',
    body: [
      'The trial that crypto Twitter, AI Twitter, and ordinary boardrooms have been waiting on for nine months kicked off in California this week, with Elon Musk taking the stand on day one to lay out the case that OpenAI abandoned the non-profit mission he says he helped fund and structure.',
      'Musk\'s testimony was characteristic — equal parts technical, personal, and rhetorically loaded. He argued that the company\'s pivot to a capped-profit structure, and the subsequent transition rumors, amount to converting a charitable mission into a private windfall. "Not OK," he said, "to steal a charity."',
      'OpenAI\'s legal team pushed back hard. The company has framed its evolution as a pragmatic response to compute costs that no non-profit balance sheet could realistically absorb, and argued that the non-profit\'s charter and the resulting structure are misrepresented in the plaintiff\'s case.',
      'For the AI industry, the stakes are higher than the headline trial drama suggests. A ruling against OpenAI on key counts would set a precedent that ripples through every major lab\'s legal entity stack. A ruling in OpenAI\'s favor would close a door that several rivals have been hoping was still open.'
    ],
    category: 'Tech',
    time: '15:25',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437291',
    title: 'Knicks Take 3-2 Series Lead With Game 5 Blowout Behind Vintage Brunson Performance',
    summary: 'Jalen Brunson dropped a vintage performance and the Knicks blew the doors off the Hawks 127-97 to take a 3-2 series lead at home.',
    body: [
      'The Knicks delivered the kind of playoff statement game New York has been waiting for, dismantling the Hawks 127-97 at Madison Square Garden to take a 3-2 series lead. Jalen Brunson played his most complete postseason game of the year — the kind that reminded everybody what he is when the moment is right.',
      'The night belonged to the bench as much as the starters. Multiple reserves logged efficient minutes, the team\'s defensive switches were sharp from the opening minutes, and a third quarter that turned a competitive game into a runaway felt like the Knicks playing the role they imagined for themselves all season.',
      'The Hawks, for their part, had no answer for the perimeter pressure and could not generate the offensive rebounds they had been living on earlier in the series. Their bench in particular was outscored decisively.',
      'Game 6 shifts to Atlanta, where the home team will be playing for a season. The Knicks, meanwhile, will travel knowing that they need only one of the next two games — and that the Garden, win or lose, is waiting.'
    ],
    category: 'Sports',
    time: '23:25',
    section: 'sports',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&q=80&auto=format&fit=crop',
    byline: 'DCN News Sports Desk'
  },
  {
    id: '98437292',
    title: '\'He-Man\' Creator Roger Sweet Dead at 91 After Long Dementia Battle',
    summary: 'Roger Sweet, the toy designer credited with creating He-Man, has died at 91 after a long fight with dementia. Fans had rallied to support him in his final months.',
    body: [
      'Roger Sweet, the toy designer widely credited with creating He-Man, has died at 91 after a long battle with dementia. The news was confirmed by family this week, ending a final chapter that had drawn an unusual outpouring of fan support over the past year.',
      'Sweet\'s creation became one of the most enduring cross-format brands of the late twentieth century, spawning toys, animation, comics, and now a planned new feature film. The original "Masters of the Universe" line shaped a generation of action figures and the merchandising economics that came with them.',
      'The fan response in his final months said as much about the man as the work. Online communities organized fundraisers, dropped off care packages, and sent letters in volumes that the family said gave him visible comfort even when his memory was uneven.',
      'A celebration of his life is being planned for later this spring. Tributes from former colleagues, fans, and the franchise\'s current rights-holders are already flooding the channels he helped invent.'
    ],
    category: 'Culture',
    time: '11:05',
    section: 'culture',
    byline: 'DCN News Culture Desk'
  },
  {
    id: '98437293',
    title: 'Pete Davidson Trims Westchester Retreat Asking Price By Six Figures',
    summary: 'Pete Davidson dropped the price on his Westchester County home weeks after listing it, signaling he wants out and back closer to his Staten Island family fast.',
    body: [
      'Pete Davidson knocked more than $100,000 off the asking price of his Westchester County home this week, weeks after first listing the property, as the comedian and SNL alum looks to move closer to his family on Staten Island.',
      'The reduction is modest in dollar terms but unmistakable in intent. Davidson and his team, by all reports, are not interested in dragging this listing through a long discovery period. They want a buyer.',
      'The home itself has been featured in multiple New York real-estate write-ups since it went on the market. The price cut comes against the backdrop of a softer-than-expected suburban market in the surrounding county and a sharp uptick in inventory across the broader tri-state area.',
      'Davidson\'s representatives declined to comment on the timing. The new asking price, agents in the area say, is now firmly in the range that should attract serious offers within weeks.'
    ],
    category: 'Culture',
    time: '14:55',
    section: 'culture',
    byline: 'DCN News Real Estate Desk'
  },
  {
    id: '98437294',
    title: 'Taylor Swift Files to Trademark Voice and Likeness to Block AI Deepfakes',
    summary: 'Taylor Swift has filed paperwork to trademark her voice and likeness, the most aggressive personal-IP move yet by a top-tier artist hardening defenses against AI deepfakes.',
    body: [
      'Taylor Swift\'s legal team has filed paperwork seeking trademark protection over the singer\'s voice and likeness, an unusually aggressive personal-IP move that signals where the next phase of celebrity-vs-AI litigation is heading.',
      'The filings are targeted. They cover specific commercial uses — most notably synthetic vocal performances and likeness-based generative video — and are designed to give Swift\'s lawyers a sharper hammer against the wave of deepfake content that hit her earlier this year.',
      'For the broader music industry, the move is a template that other top-tier artists are already studying. Several major-label legal teams told reporters this week that they have been waiting for one of the genre\'s biggest names to make exactly this kind of filing.',
      'For the AI industry, the message is direct. The era of "we trained on whatever was on the internet" is closing fast, and the cost of generating a recognizable voice without authorization is about to get a lot more expensive.'
    ],
    category: 'Tech',
    time: '09:15',
    section: 'tech',
    byline: 'DCN News Tech Desk'
  },
  {
    id: '98437295',
    title: 'South Korea\'s Ex-President Yoon Sentenced to Seven Years',
    summary: 'A South Korean court sentenced former president Yoon Suk Yeol to seven years on multiple charges, capping one of the most dramatic political falls in the country\'s modern history.',
    body: [
      'A South Korean court handed former president Yoon Suk Yeol a seven-year prison sentence on multiple charges, capping a dramatic political collapse that began with his short-lived imposition of martial law and ended with him in court answering to a list of indictments.',
      'The conviction includes counts related to resisting arrest among other charges. The former president had pleaded not guilty across the board; his legal team has already signaled that an appeal will be filed promptly.',
      'Outside the courthouse, supporters and opponents staged competing rallies that kept police on alert through the morning. Reactions inside the country split along the same political fault lines that have run through the case from day one.',
      'Diplomatically, Seoul is keen to show the world that the institutions held. South Korean officials emphasized that the verdict — appeals notwithstanding — demonstrated the strength of the country\'s judicial process. International reaction was cautious and largely deferential.'
    ],
    category: 'World',
    time: '10:20',
    section: 'newspaper',
    byline: 'DCN News World Desk'
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
    article.title.toLowerCase().includes(lowerQuery) ||
    article.summary.toLowerCase().includes(lowerQuery) ||
    article.category.toLowerCase().includes(lowerQuery) ||
    article.body.some(block => typeof block === 'string' && block.toLowerCase().includes(lowerQuery))
  )
}

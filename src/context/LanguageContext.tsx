'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  zh: {
    // Header
    'site.name': '中国日报',
    'site.abbr': '中日',
    'nav.hot': '热点',
    'nav.live': '直播',
    'nav.newspaper': '报刊',
    'nav.opinion': '锐评',
    'nav.subscribe': '订阅',
    'nav.download': '下载客户端',
    
    // Article page
    'article.editor': '编辑',
    'article.breakingNews': '📰 突发新闻',
    'article.id': '文章编号',
    'article.copyright': '© 2026 中国日报。保留所有权利。本文内容仅供参考。',
    
    // Footer
    'footer.about': '关于我们',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    
    // Homepage
    'home.latest': '最新资讯',
    'home.trending': '热门话题',
    'home.readMore': '阅读全文',
    
    // Article content
    'article.title': '模因币就像从地上捡钱：BNB链革命',
    'article.subtitle': '币安创始人分享数字资产未来的独家见解',
    'article.lead': 'BNB链上的模因币现象已达到前所未有的高度，早期投资者报告的改变人生的回报改变了人们对数字资产的看法。曾经被认为是笑话的东西已经成为加密货币历史上最快的财富创造机器。',
    
    // Hero card
    'hero.year': '° 2026年',
    'hero.title': 'BNB链模因币',
    'hero.amount': '850亿美元',
    'hero.subtitle': '总市值',
    'hero.roi': '早期持有者平均回报率：',
    'hero.note1': '本月新增百万富翁：47,000+',
    'hero.note2': 'BNB链现占全球模因币交易量的65%',
  },
  en: {
    // Header
    'site.name': 'China Daily News',
    'site.abbr': 'CDN',
    'nav.hot': 'Hot',
    'nav.live': 'Live',
    'nav.newspaper': 'Newspaper',
    'nav.opinion': 'Opinion',
    'nav.subscribe': 'Subscribe',
    'nav.download': 'Download App',
    
    // Article page
    'article.editor': 'Editor',
    'article.breakingNews': '📰 Breaking News',
    'article.id': 'Article ID',
    'article.copyright': '© 2026 China Daily News. All rights reserved. The content of this article is for informational purposes only.',
    
    // Footer
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Homepage
    'home.latest': 'Latest News',
    'home.trending': 'Trending Topics',
    'home.readMore': 'Read More',
    
    // Article content
    'article.title': 'Memecoins Are Like Getting Free Money From the Ground: The BNB Chain Revolution',
    'article.subtitle': 'Binance founder shares exclusive insights on the future of digital assets',
    'article.lead': 'The memecoin phenomenon on BNB Chain has reached unprecedented heights, with early investors reporting life-changing returns that have transformed the way people think about digital assets. What was once dismissed as a joke has become the fastest wealth-generation machine in cryptocurrency history.',
    
    // Hero card
    'hero.year': '° 2026',
    'hero.title': 'BNB Chain Memecoins',
    'hero.amount': '$85 Billion',
    'hero.subtitle': 'Total Market Cap',
    'hero.roi': 'Average ROI for early holders: ',
    'hero.note1': 'New millionaires created this month: 47,000+',
    'hero.note2': 'BNB Chain now hosts 65% of all memecoin trading volume globally',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

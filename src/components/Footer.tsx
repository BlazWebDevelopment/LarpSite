'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="mt-12 border-t border-slate-800">
      {/* Main footer */}
      <div className="bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Mini Logo */}
                <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6"/>
                      <stop offset="50%" stopColor="#06b6d4"/>
                      <stop offset="100%" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                  <path d="M24 4L42 14V34L24 44L6 34V14L24 4Z" stroke="url(#footerLogoGrad)" strokeWidth="2" fill="none"/>
                  <path d="M16 14V34H24C32 34 36 28 36 24C36 20 32 14 24 14H16Z M20 18H24C28 18 32 20 32 24C32 28 28 30 24 30H20V18Z" fill="url(#footerLogoGrad)"/>
                </svg>
                <div>
                  <span className="gradient-text font-bold text-lg font-[family-name:var(--font-space)]">DAYBREAK</span>
                  <div className="text-slate-500 text-[10px] tracking-wider">{language === 'en' ? 'THE FUTURE OF NEWS' : '新闻的未来'}</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Daybreak brings you the stories that matter. Your trusted source for breaking news, crypto insights, tech analysis, and comprehensive global coverage.'
                  : '晨曦新闻为您带来最重要的新闻。您值得信赖的突发新闻、加密货币见解、技术分析和全球报道来源。'
                }
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-4">
                <button className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-slate-800 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-space)]">{language === 'en' ? 'Quick Links' : '快速链接'}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/hot" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                  {language === 'en' ? 'Hot News' : '热点新闻'}
                </Link></li>
                <li><Link href="/newspaper" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                  {language === 'en' ? 'Politics' : '政治'}
                </Link></li>
                <li><Link href="/live" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                  {language === 'en' ? 'Live' : '直播'}
                </Link></li>
                <li><Link href="/opinion" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                  {language === 'en' ? 'Opinion' : '评论'}
                </Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-space)]">{language === 'en' ? 'Categories' : '分类'}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/finance" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                  {language === 'en' ? 'Finance & Crypto' : '财经与加密'}
                </Link></li>
                <li><Link href="/tech" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                  {language === 'en' ? 'Technology' : '科技'}
                </Link></li>
                <li><Link href="/culture" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                  {language === 'en' ? 'Culture' : '文化'}
                </Link></li>
                <li><Link href="/sports" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                  {language === 'en' ? 'Sports' : '体育'}
                </Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4 font-[family-name:var(--font-space)]">{language === 'en' ? 'Contact' : '联系方式'}</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {language === 'en' ? '15 Huixin East St, Chaoyang, Beijing' : '北京市朝阳区惠新东街15号'}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  010-84883000
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@daybreak.news
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></span>
              <span>© 2026 Daybreak. {language === 'en' ? 'All Rights Reserved.' : '保留所有权利。'}</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hover:text-teal-400 transition-colors">{language === 'en' ? 'Privacy Policy' : '隐私政策'}</button>
              <button className="hover:text-teal-400 transition-colors">{language === 'en' ? 'Terms of Service' : '服务条款'}</button>
              <button className="hover:text-teal-400 transition-colors">{language === 'en' ? 'Cookie Settings' : 'Cookie设置'}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

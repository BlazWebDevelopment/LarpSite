'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-slate-800 mt-8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Mini Logo */}
              <svg className="w-8 h-8 text-amber-500" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="10" className="fill-amber-400"/>
                <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="text-white font-bold">DAY</span>
                <span className="text-amber-500 font-bold">BREAK</span>
                <span className="text-slate-400 text-xs ml-1">{language === 'en' ? 'NEWS' : '新闻'}</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              {language === 'en' 
                ? 'Daybreak News brings you the stories that matter as the sun rises. Your trusted source for breaking news, in-depth analysis, and comprehensive world coverage.'
                : '晨曦新闻为您带来日出时分最重要的新闻。您值得信赖的突发新闻、深度分析和全球报道来源。'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'en' ? 'Quick Links' : '快速链接'}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hot" className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Hot News' : '热点新闻'}</Link></li>
              <li><Link href="/newspaper" className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Politics' : '政治'}</Link></li>
              <li><Link href="/live" className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Live' : '直播'}</Link></li>
              <li><Link href="/opinion" className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Opinion' : '评论'}</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'en' ? 'About Us' : '关于我们'}</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'About' : '关于'}</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Contact' : '联系'}</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Advertise' : '广告'}</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">{language === 'en' ? 'Careers' : '招聘'}</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'en' ? 'Contact' : '联系方式'}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{language === 'en' ? 'Address: 15 Huixin East St, Chaoyang, Beijing' : '地址：北京市朝阳区惠新东街15号'}</li>
              <li>{language === 'en' ? 'Tel' : '电话'}: 010-84883000</li>
              <li>{language === 'en' ? 'Email' : '邮箱'}: info@daybreak.news</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>© 2026 Daybreak News. {language === 'en' ? 'All Rights Reserved.' : '保留所有权利。'}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-amber-400">{language === 'en' ? 'Privacy' : '隐私政策'}</button>
              <button className="hover:text-amber-400">{language === 'en' ? 'Terms' : '服务条款'}</button>
              <button className="hover:text-amber-400">{language === 'en' ? 'Sitemap' : '网站地图'}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

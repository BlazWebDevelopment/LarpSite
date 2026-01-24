'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="bg-slate-800 mt-8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 text-white px-2 py-1 font-bold text-lg">中国日报</div>
              <div className="bg-blue-600 text-white px-2 py-1 font-bold text-sm">CHINA DAILY</div>
            </div>
            <p className="text-slate-400 text-sm">
              {language === 'zh' 
                ? '中国日报是中国最具影响力的英文媒体之一，致力于向世界讲述中国故事。' 
                : 'China Daily is one of China\'s most influential English-language media, dedicated to telling China\'s story to the world.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'zh' ? '快速链接' : 'Quick Links'}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hot" className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '热点新闻' : 'Hot News'}</Link></li>
              <li><Link href="/newspaper" className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '时政要闻' : 'Politics'}</Link></li>
              <li><Link href="/live" className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '直播' : 'Live'}</Link></li>
              <li><Link href="/opinion" className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '评论' : 'Opinion'}</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'zh' ? '关于我们' : 'About Us'}</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '公司简介' : 'About'}</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '联系我们' : 'Contact'}</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '广告合作' : 'Advertise'}</button></li>
              <li><button className="text-slate-400 hover:text-white transition-colors">{language === 'zh' ? '招聘信息' : 'Careers'}</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'zh' ? '联系方式' : 'Contact'}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{language === 'zh' ? '地址：北京市朝阳区惠新东街15号' : 'Address: 15 Huixin East St, Chaoyang, Beijing'}</li>
              <li>{language === 'zh' ? '电话：010-84883000' : 'Tel: 010-84883000'}</li>
              <li>Email: info@chinadaily.com.cn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>© 2026 {language === 'zh' ? '中国日报社版权所有' : 'China Daily. All Rights Reserved.'}</span>
              <span>|</span>
              <span>{language === 'zh' ? '京ICP备13028878号-6' : 'ICP License: 13028878-6'}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-white">{language === 'zh' ? '隐私政策' : 'Privacy'}</button>
              <button className="hover:text-white">{language === 'zh' ? '使用条款' : 'Terms'}</button>
              <button className="hover:text-white">{language === 'zh' ? '网站地图' : 'Sitemap'}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

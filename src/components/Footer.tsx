'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-gray-900 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.svg"
                alt="DaybreakNews"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-white font-extrabold text-lg tracking-tight">DAYBREAK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'en'
                ? 'Your trusted source for breaking news, in-depth analysis, and comprehensive global coverage.'
                : '您值得信赖的突发新闻、深度分析和全球综合报道来源。'}
            </p>
            <div className="flex items-center gap-2 mt-5">
              {['X', 'in', 'yt'].map((icon) => (
                <button key={icon} className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-colors">
                  <span className="text-gray-400 text-xs font-bold">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {language === 'en' ? 'Sections' : '栏目'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/hot', en: 'Hot News', zh: '热点新闻' },
                { href: '/newspaper', en: 'Politics', zh: '政治' },
                { href: '/live', en: 'Live', zh: '直播' },
                { href: '/opinion', en: 'Opinion', zh: '评论' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-violet-300 transition-colors">
                    {language === 'en' ? link.en : link.zh}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {language === 'en' ? 'Categories' : '分类'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/finance', en: 'Finance', zh: '财经' },
                { href: '/tech', en: 'Technology', zh: '科技' },
                { href: '/culture', en: 'Culture', zh: '文化' },
                { href: '/sports', en: 'Sports', zh: '体育' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-violet-300 transition-colors">
                    {language === 'en' ? link.en : link.zh}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {language === 'en' ? 'Stay Updated' : '订阅更新'}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {language === 'en' ? 'Get news delivered to your inbox.' : '获取最新新闻直达您的邮箱。'}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={language === 'en' ? 'Email' : '邮箱'}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-violet-400"
              />
              <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shrink-0">
                {language === 'en' ? 'Go' : '订阅'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <span>© 2026 {language === 'en' ? 'DaybreakNews. All Rights Reserved.' : 'DaybreakNews。保留所有权利。'}</span>
            <div className="flex items-center gap-5">
              <button className="hover:text-gray-300 transition-colors">{language === 'en' ? 'Privacy' : '隐私政策'}</button>
              <button className="hover:text-gray-300 transition-colors">{language === 'en' ? 'Terms' : '条款'}</button>
              <button className="hover:text-gray-300 transition-colors">{language === 'en' ? 'About' : '关于'}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

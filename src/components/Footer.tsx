'use client'

import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="DCN News" className="w-10 h-10 rounded-md" />
              <div className="leading-none">
                <div className="font-display text-2xl font-bold">DCN<span className="text-blue-400"> News</span></div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/50 mt-1">Daily Crypto Network</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tabloid-paced reporting on crypto, markets, technology and culture. Bold headlines. Sharp analysis. No fluff.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {['X', 'in', 'yt'].map((icon) => (
                <button key={icon} className="w-9 h-9 rounded-md bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 flex items-center justify-center transition-colors">
                  <span className="text-white/80 text-xs font-bold">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-white text-base mb-4 tracking-widest uppercase border-b border-white/15 pb-2">
              Sections
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/hot', label: 'Hot News' },
                { href: '/newspaper', label: 'Politics' },
                { href: '/live', label: 'Live' },
                { href: '/opinion', label: 'Opinion' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white text-base mb-4 tracking-widest uppercase border-b border-white/15 pb-2">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/finance', label: 'Finance' },
                { href: '/tech', label: 'Technology' },
                { href: '/culture', label: 'Culture' },
                { href: '/sports', label: 'Sports' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white text-base mb-4 tracking-widest uppercase border-b border-white/15 pb-2">
              Get the Wire
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Headlines hit your inbox before the markets open.
            </p>
            <NewsletterForm
              variant="inline"
              tone="dark"
              buttonLabel="Go"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
            <span>© 2026 DCN News. All Rights Reserved.</span>
            <div className="flex items-center gap-5">
              <button className="hover:text-blue-400 transition-colors">Privacy</button>
              <button className="hover:text-blue-400 transition-colors">Terms</button>
              <button className="hover:text-blue-400 transition-colors">About</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

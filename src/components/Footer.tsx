'use client'

import Link from 'next/link'

export default function Footer() {
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
                <span className="text-slate-400 text-xs ml-1">NEWS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Daybreak News brings you the stories that matter as the sun rises. Your trusted source for breaking news, in-depth analysis, and comprehensive world coverage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hot" className="text-slate-400 hover:text-amber-400 transition-colors">Hot News</Link></li>
              <li><Link href="/newspaper" className="text-slate-400 hover:text-amber-400 transition-colors">Politics</Link></li>
              <li><Link href="/live" className="text-slate-400 hover:text-amber-400 transition-colors">Live</Link></li>
              <li><Link href="/opinion" className="text-slate-400 hover:text-amber-400 transition-colors">Opinion</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">About</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">Contact</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">Advertise</button></li>
              <li><button className="text-slate-400 hover:text-amber-400 transition-colors">Careers</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Address: 15 Huixin East St, Chaoyang, Beijing</li>
              <li>Tel: 010-84883000</li>
              <li>Email: info@daybreak.news</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>© 2026 Daybreak News. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-amber-400">Privacy</button>
              <button className="hover:text-amber-400">Terms</button>
              <button className="hover:text-amber-400">Sitemap</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

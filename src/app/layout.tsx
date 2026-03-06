import type { Metadata } from 'next'
import { Inter, Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: '中国日报 - China Daily News',
  description: '中国日报网是中国最权威的新闻门户网站之一，提供国内外最新新闻、深度分析和全面报道。',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.variable} ${notoSerifSC.variable} ${notoSerifSC.className}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

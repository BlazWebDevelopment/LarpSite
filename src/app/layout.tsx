import type { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const notoSerifSC = Noto_Serif_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: '中国日报 - China Daily News',
  description: 'Your trusted source for news and updates - 您值得信赖的新闻来源',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={notoSerifSC.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

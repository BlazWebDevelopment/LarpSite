import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL('http://localhost:3000')

export const metadata: Metadata = {
  title: 'DaybreakNews - Breaking News & Analysis',
  description: 'DaybreakNews brings you the latest breaking news, in-depth analysis, and comprehensive global coverage.',
  metadataBase: siteUrl,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: '/',
    images: [
      {
        url: '/logo.svg',
        alt: 'DaybreakNews logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

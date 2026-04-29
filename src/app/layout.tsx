import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL('http://localhost:3000')

export const metadata: Metadata = {
  title: 'DCN News - Breaking Crypto, Markets & Tech',
  description: 'DCN News delivers tabloid-style breaking coverage of crypto, markets, technology and culture — fast headlines, sharp analysis, no fluff.',
  metadataBase: siteUrl,
  applicationName: 'DCN News',
  keywords: ['DCN News', 'crypto news', 'markets', 'breaking news', 'tech news', 'agentic trading'],
  authors: [{ name: 'DCN News' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'DCN News',
    title: 'DCN News - Breaking Crypto, Markets & Tech',
    description: 'Breaking crypto, markets, technology and culture — fast headlines, sharp analysis.',
    url: '/',
    images: [
      {
        url: '/logo.svg',
        alt: 'DCN News logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DCN News - Breaking Crypto, Markets & Tech',
    description: 'Breaking crypto, markets, technology and culture — fast headlines, sharp analysis.',
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
      <body className={`${inter.variable} ${oswald.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}

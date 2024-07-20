import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

import { classNames } from './helper/helper'

const cormorant = Cormorant({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jason O'Dell",
  description: "Jason O'Dell, a North Carolina based web developer.",
  openGraph: {
    type: 'website',
    url: 'https://jeodell.github.io',
    title: "Jason O'Dell",
    description: "Jason O'Dell, a North Carolina based web developer.",
    siteName: "Jason O'Dell GitHub",
    images: [{ url: './img/jason.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jeodell',
    creator: '@jeodell',
    images: [{ url: './img/jason.jpg' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(cormorant.className, 'text-gray-700 dark:text-zinc-200')}>
        <Header />
        {children}
      </body>
    </html>
  )
}

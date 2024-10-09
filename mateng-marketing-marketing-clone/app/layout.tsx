import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Ensure this imports your global styles
import { siteConfig } from '@/config/site/site-config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Orders | Mateng
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico", // Corrected metadata format for Next.js
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

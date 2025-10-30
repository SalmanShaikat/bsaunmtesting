import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutClient } from './components/layout/layout-client'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BSA UNM - Bangladeshi Student Association',
  description: 'University of New Mexico Bangladeshi Student Association',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}

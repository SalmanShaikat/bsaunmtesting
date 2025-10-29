import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BSA UNM - Bangladesh Student Association',
  description: 'Bangladesh Student Association at University of New Mexico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

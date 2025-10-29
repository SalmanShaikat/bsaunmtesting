import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'

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
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  )
}

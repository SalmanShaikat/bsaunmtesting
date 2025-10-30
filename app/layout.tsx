import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/nav/Navigation'
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'BSA UNM - Bangladesh Student Association',
  description: 'Bangladesh Student Association at University of New Mexico - Building community, preserving culture, and supporting students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

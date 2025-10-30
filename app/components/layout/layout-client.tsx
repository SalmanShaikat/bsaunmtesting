'use client'

import { Navbar } from './navbar'
import { Footer } from './footer'

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16"> {/* Account for fixed navbar */}
        {children}
      </div>
      <Footer />
    </div>
  )
}

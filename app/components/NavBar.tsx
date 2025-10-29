'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Faculty & Alumni', href: '/faculty-alumni' },
    { name: 'Executive Committee', href: '/executive-committee' },
    { name: 'Events & Gallery', href: '/events-gallery' },
    { name: 'Activity & Support', href: '/activity-support' },
    { name: 'Achievements', href: '/achievements' },
  ]

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-success rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold">BSA</span>
            </div>
            <span className="text-lg font-bold text-primary">BSA UNM</span>
          </Link>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

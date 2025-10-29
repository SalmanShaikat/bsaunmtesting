'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Alumni & Committee', href: '/alumni-committee-students' },
    { name: 'Events & Gallery', href: '/events-gallery' },
    { name: 'Activity & Support', href: '/activity-support' },
    { name: 'Achievements', href: '/achievements' },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-seafoam-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-jungle-500 to-seafoam-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-lg">BSA</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-jungle-800 block">BSA UNM</span>
              <span className="text-xs text-unm-silver-500">Bangladesh Student Association</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-jungle-700 hover:text-unm-cherry-500 font-medium transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-jungle-700 hover:bg-jungle-50 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-jungle-600 transition-all ${isOpen ? 'w-6 rotate-45 translate-y-1' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-jungle-600 transition-all ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-jungle-600 transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-1' : 'w-6'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-seafoam-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-jungle-700 hover:text-unm-cherry-500 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-jungle-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

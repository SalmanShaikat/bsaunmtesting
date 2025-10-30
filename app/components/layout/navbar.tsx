'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

const navItems = [
  { name: 'BSA', href: '#home' },
  { name: 'People', href: '#people' },
  { name: 'Activity', href: '#activities' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Support Center', href: '#support' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-jungle-green to-seafoam-green rounded-lg"></div>
            <span className="text-xl font-bold gradient-text">BSA UNM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-jungle-green font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="primary" size="sm">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col space-y-1">
              <div className={`h-0.5 bg-jungle-green transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-jungle-green transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-jungle-green transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-jungle-green font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="primary" className="w-full">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

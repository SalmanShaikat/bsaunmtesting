'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Events', href: '/events' },
    { name: 'People', href: '/people' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Support', href: '/support' },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Creative Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Main BSA Logo Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="w-16 h-16 bg-gradient-to-br from-seafoam-500 to-primary-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                {/* BSA Text */}
                <span className="text-white font-bold text-2xl tracking-tight">BSA</span>
              </div>
              
              {/* UNM Badge */}
              <div className="absolute -bottom-1 -right-1 bg-cherry-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                UNM
              </div>
            </div>

            {/* Text Logo */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-seafoam-600 to-primary-600 bg-clip-text text-transparent">
                  BSA
                </span>
                <span className="text-gray-400 font-light text-lg">|</span>
                <span className="text-lg font-semibold text-gray-700">UNM</span>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-1">
                Bangladeshi Students Association
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-seafoam-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-seafoam-500 to-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-seafoam-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-seafoam-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

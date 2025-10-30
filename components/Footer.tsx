// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { name: 'Events', href: '/events' },
    { name: 'People', href: '/people' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Support', href: '/support' },
  ]

  return (
    <footer className="bg-gradient-to-r from-seafoam-800 to-primary-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-seafoam-500 to-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BSA</span>
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl font-bold">BSA</span>
                  <span className="text-gray-300 font-light">|</span>
                  <span className="text-lg font-semibold text-gray-200">UNM</span>
                </div>
                <p className="text-seafoam-200 text-sm">Bangladeshi Students Association</p>
              </div>
            </div>
            <p className="text-seafoam-200 max-w-md">
              Building bridges between cultures, empowering Bangladeshi students at UNM, 
              and celebrating our rich heritage through community, education, and shared success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-seafoam-200 hover:text-white transition-colors duration-300 hover:pl-2 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-seafoam-200">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>University of New Mexico</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>bsa@unm.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span>Follow us on social media</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-seafoam-600 mt-8 pt-8 text-center text-seafoam-300">
          <p>&copy; 2024 BSA UNM - Bangladeshi Students Association. Celebrating heritage, building community.</p>
        </div>
      </div>
    </footer>
  )
}

// components/Footer.tsx
export default function Footer() {
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
              <li><a href="/events" className="text-seafoam-200 hover:text-white transition-colors">Events</a></li>
              <li><a href="/people" className="text-seafoam-200 hover:text-white transition-colors">People</a></li>
              <li><a href="/achievements" className="text-seafoam-200 hover:text-white transition-colors">Achievements</a></li>
              <li><a href="/support" className="text-seafoam-200 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-seafoam-200">
              <li>University of New Mexico</li>
              <li>Albuquerque, NM</li>
              <li>bsa@unm.edu</li>
              <li>Follow us on social media</li>
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

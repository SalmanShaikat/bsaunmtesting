export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-seafoam-800 to-primary-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-seafoam-600 font-bold">BSA</span>
              </div>
              <span className="text-xl font-bold">BSA University</span>
            </div>
            <p className="text-seafoam-200 max-w-md">
              Empowering students through innovative education, research, and community engagement. 
              Building the leaders of tomorrow.
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
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-seafoam-200">
              <li>123 University Ave</li>
              <li>Education City, EC 12345</li>
              <li>info@bsauniversity.edu</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-seafoam-600 mt-8 pt-8 text-center text-seafoam-300">
          <p>&copy; 2024 BSA University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

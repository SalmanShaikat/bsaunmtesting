export function Footer() {
  return (
    <footer className="bg-jungle-green text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-seafoam-green rounded-lg"></div>
                <span className="text-xl font-bold">BSA UNM</span>
              </div>
              <p className="text-seafoam-green/80 max-w-md">
                Bangladeshi Student Association at the University of New Mexico - 
                Building community, celebrating culture, and supporting students.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-seafoam-green/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">Achievements</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-seafoam-green/80">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-seafoam-green/20 mt-8 pt-8 text-center text-seafoam-green/60">
            <p>&copy; 2024 BSA UNM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-success rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">BSA</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary block">BSA UNM</span>
                <span className="text-xs text-secondary opacity-70">Bangladesh Student Association</span>
              </div>
            </Link>
            
            <div className="flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Faculty & Alumni', href: '/faculty-alumni' },
                { name: 'Executive Committee', href: '/executive-committee' },
                { name: 'Events & Gallery', href: '/events-gallery' },
                { name: 'Activity & Support', href: '/activity-support' },
                { name: 'Achievements', href: '/achievements' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-accent font-medium transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Bangladesh Student Association
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Uniting Bangladeshi students at the University of New Mexico through culture, community, and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/events-gallery" 
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Events
            </Link>
            <Link 
              href="/activity-support" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 border border-white/20"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-secondary text-sm">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-secondary text-sm">Annual Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-highlight mb-2">10+</div>
              <div className="text-secondary text-sm">Faculty Advisors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-secondary text-sm">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-accent rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Academic Excellence</h3>
              <p className="text-secondary leading-relaxed">
                Peer mentoring, study groups, and academic resources to help you succeed in your UNM journey.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-highlight rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Cultural Community</h3>
              <p className="text-secondary leading-relaxed">
                Celebrate Bangladeshi traditions and build lifelong connections with fellow students.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-success rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Professional Growth</h3>
              <p className="text-secondary leading-relaxed">
                Networking events, career workshops, and leadership opportunities to boost your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Become part of the vibrant Bangladeshi student community at UNM and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/executive-committee" 
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Meet the Team
            </Link>
            <Link 
              href="/activity-support" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 border border-white/20"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">BSA</span>
                </div>
                <span className="text-lg font-bold">BSA UNM</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building community, preserving culture, and supporting Bangladeshi students at UNM.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/" className="block hover:text-white transition-colors">Home</Link>
                <Link href="/events-gallery" className="block hover:text-white transition-colors">Events</Link>
                <Link href="/achievements" className="block hover:text-white transition-colors">Achievements</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/activity-support" className="block hover:text-white transition-colors">Get Help</Link>
                <Link href="/faculty-alumni" className="block hover:text-white transition-colors">Faculty & Alumni</Link>
                <Link href="/executive-committee" className="block hover:text-white transition-colors">Contact Team</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>University of New Mexico</p>
                <p>Albuquerque, NM</p>
                <p>bsa@unm.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 BSA UNM - Bangladesh Student Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bangladesh-green to-unm-red">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-90 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-bangladesh-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BSA</span>
              </div>
              <span className="text-xl font-bold text-bangladesh-green">BSA UNM</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-bangladesh-green hover:text-unm-red font-medium">
                Home
              </Link>
              <Link href="/activity" className="text-bangladesh-green hover:text-unm-red font-medium">
                Activities
              </Link>
              <Link href="/helplines" className="text-bangladesh-green hover:text-unm-red font-medium">
                Helplines
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Bangladesh Student Association
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            University of New Mexico
          </h2>
          <p className="text-xl text-white mb-12 opacity-90">
            Building community, preserving culture, and supporting Bangladeshi students at UNM
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/activity" 
              className="bg-white text-bangladesh-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Our Activities
            </Link>
            <Link 
              href="/helplines" 
              className="bg-bangladesh-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Get Help
            </Link>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-bangladesh-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-bangladesh-green mb-2">Community</h3>
              <p className="text-gray-600">Connect with fellow Bangladeshi students and build lasting friendships</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-unm-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-unm-red mb-2">Culture</h3>
              <p className="text-gray-600">Celebrate Bangladeshi traditions and cultural events throughout the year</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-bangladesh-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-bangladesh-green mb-2">Support</h3>
              <p className="text-gray-600">Get assistance with academic, personal, and cultural adjustment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BSA UNM - Bangladesh Student Association. All rights reserved.</p>
          <p className="mt-2 text-gray-400">University of New Mexico</p>
        </div>
      </footer>
    </div>
  )
}

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
     // In your app/page.tsx - Update the hero section:
<section className="relative bg-gradient-to-br from-seafoam-50 via-white to-primary-50 py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      {/* Updated Main Heading */}
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-seafoam-600 via-primary-500 to-cherry-500 bg-clip-text text-transparent">
          BSA UNM
        </h1>
        <p className="text-2xl text-gray-700 font-semibold mb-2">
          Bangladeshi Students Association
        </p>
        <p className="text-lg text-gray-600">
          University of New Mexico
        </p>
      </div>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        Celebrating Bangladeshi heritage, building bridges between cultures, and empowering students 
        through community, leadership, and shared success at UNM.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn-primary">
          Join Our Community
        </button>
        <button className="border-2 border-seafoam-500 text-seafoam-600 hover:bg-seafoam-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
          Upcoming Events
        </button>
      </div>
    </div>
  </div>
  
  {/* Floating Elements */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-seafoam-300 rounded-full opacity-20 animate-bounce"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cherry-300 rounded-full opacity-25 animate-ping"></div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose BSA?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes BSA University the perfect place for your educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-hover bg-gradient-to-br from-seafoam-50 to-primary-50 p-8 rounded-2xl border border-seafoam-200">
              <div className="w-16 h-16 bg-seafoam-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovative Programs</h3>
              <p className="text-gray-600">
                Cutting-edge curriculum designed to prepare you for the challenges of tomorrow&apos;s world.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-hover bg-gradient-to-br from-primary-50 to-seafoam-50 p-8 rounded-2xl border border-primary-200">
              <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from industry leaders and renowned academics dedicated to your success.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-hover bg-gradient-to-br from-seafoam-50 to-cherry-50 p-8 rounded-2xl border border-cherry-200">
              <div className="w-16 h-16 bg-cherry-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Proven Success</h3>
              <p className="text-gray-600">
                95% of our graduates secure employment or continue education within 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-seafoam-500 to-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-seafoam-100">Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-seafoam-100">Programs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-seafoam-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-seafoam-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Join Our Community?</h2>
    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
      Meet our amazing members, connect with fellow students, and become part of the BSA UNM family.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/people" className="btn-primary text-lg px-8 py-4 inline-block">
        Meet Our People
      </Link>
      <Link href="/events" className="border-2 border-seafoam-500 text-seafoam-600 hover:bg-seafoam-500 hover:text-white font-semibold text-lg py-4 px-8 rounded-lg transition-all duration-300 inline-block">
        View Events
      </Link>
    </div>
  </div>
</section>

      <Footer />
    </>
  )
}

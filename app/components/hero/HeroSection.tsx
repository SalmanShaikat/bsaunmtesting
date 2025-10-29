import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jungle-50 via-seafoam-50 to-unm-silver-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-jungle-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-seafoam-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-unm-cherry-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-jungle-900 mb-6 leading-tight">
            Bangladesh Student
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-jungle-600 to-seafoam-500">
              Association
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-unm-silver-600 mb-8 font-semibold">
            University of New Mexico
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-unm-silver-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building bridges between cultures, fostering academic excellence, and creating a home away from home for Bangladeshi students at UNM.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/events-gallery" 
              className="bg-jungle-500 hover:bg-jungle-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Events
            </Link>
            <Link 
              href="/activity-support" 
              className="border-2 border-jungle-500 text-jungle-600 hover:bg-jungle-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: '200+', label: 'Members' },
            { number: '15+', label: 'Events/Year' },
            { number: '10+', label: 'Faculty Advisors' },
            { number: '5+', label: 'Years Active' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-jungle-600 mb-2">{stat.number}</div>
              <div className="text-sm text-unm-silver-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-jungle-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-jungle-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

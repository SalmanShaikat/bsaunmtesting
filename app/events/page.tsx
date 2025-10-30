import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Events() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-seafoam-50 to-primary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-seafoam-600 to-primary-600 bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Events page content will be added here with LaTeX formatting.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700">
              This page will contain detailed information about university events, 
              conferences, workshops, and other activities with proper LaTeX formatting.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

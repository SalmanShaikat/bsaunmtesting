import { Button } from '../../components/ui/button'
import { HeroClient } from './hero-client'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-jungle-green via-jungle-green/90 to-seafoam-green text-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BSA{' '}
            <span className="bg-gradient-to-r from-seafoam-green to-white bg-clip-text text-transparent">
              UNM
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-seafoam-green/90 max-w-2xl mx-auto">
            Bangladeshi Student Association at the University of New Mexico
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
            Building a vibrant community that celebrates Bangladeshi culture, 
            supports academic excellence, and creates lifelong connections at UNM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-jungle-green">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <HeroClient />
    </section>
  )
}

import { Section } from '../../components/ui/section'
import { SupportForm } from './support-form'
import { Button } from '../../components/ui/button'

export function Support() {
  return (
    <Section id="support" className="bg-gradient-to-br from-gray-50 to-seafoam-green/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold gradient-text mb-6">Support Center</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Need help settling in? Looking for academic support? Want to get involved? 
            We're here to help you succeed at UNM.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-jungle-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Academic guidance and tutoring</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-jungle-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Cultural transition support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-jungle-green rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Social and networking events</span>
            </div>
          </div>
          
          <Button variant="primary" size="lg">
            Contact Our Team
          </Button>
        </div>
        
        <div>
          <SupportForm />
        </div>
      </div>
    </Section>
  )
}

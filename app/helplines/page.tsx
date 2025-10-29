import Link from 'next/link'

export default function Helplines() {
  const emergencyContacts = [
    {
      category: "Emergency Services",
      contacts: [
        { name: "UNM Police", number: "(505) 277-2241", emergency: true },
        { name: "Albuquerque Police", number: "911", emergency: true },
        { name: "UNM Emergency", number: "(505) 277-3111", emergency: true }
      ]
    },
    {
      category: "Academic Support",
      contacts: [
        { name: "UNM Academic Advising", number: "(505) 277-2631" },
        { name: "International Student Services", number: "(505) 277-6843" },
        { name: "Student Health Center", number: "(505) 277-3136" }
      ]
    },
    {
      category: "BSA Executive Board",
      contacts: [
        { name: "President", number: "(505) XXX-XXXX" },
        { name: "Vice President", number: "(505) XXX-XXXX" },
        { name: "Treasurer", number: "(505) XXX-XXXX" }
      ]
    },
    {
      category: "Mental Health & Counseling",
      contacts: [
        { name: "UNM Counseling Services", number: "(505) 277-4537" },
        { name: "Crisis Hotline", number: "988", emergency: true },
        { name: "Student Support", number: "(505) 277-2036" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-bangladesh-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BSA</span>
              </div>
              <span className="text-xl font-bold text-bangladesh-green">BSA UNM</span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-bangladesh-green font-medium">
                Home
              </Link>
              <Link href="/activity" className="text-gray-600 hover:text-bangladesh-green font-medium">
                Activities
              </Link>
              <Link href="/helplines" className="text-bangladesh-green font-medium border-b-2 border-bangladesh-green">
                Helplines
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-unm-red to-bangladesh-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Helplines & Resources</h1>
          <p className="text-xl text-white opacity-90">
            Immediate assistance and support when you need it most
          </p>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-lg">
            🚨 In case of emergency, call 911 or UNM Police at (505) 277-2241
          </p>
        </div>
      </div>

      {/* Contacts Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {emergencyContacts.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-bangladesh-green mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.contacts.map((contact, contactIndex) => (
                  <div key={contactIndex} className={`border-l-4 ${contact.emergency ? 'border-red-500 bg-red-50' : 'border-bangladesh-green bg-gray-50'} p-4 rounded`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{contact.name}</span>
                      {contact.emergency && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Emergency</span>
                      )}
                    </div>
                    <p className="text-lg font-mono text-gray-600 mt-1">{contact.number}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-bangladesh-green mb-6 text-center">
            Additional Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="font-semibold text-unm-red mb-2">Academic Resources</h4>
              <p className="text-gray-600 text-sm">Tutoring, Library, Writing Center</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-unm-red mb-2">Health & Wellness</h4>
              <p className="text-gray-600 text-sm">Medical, Counseling, Recreation</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-unm-red mb-2">International Support</h4>
              <p className="text-gray-600 text-sm">Visa, Immigration, Cultural Adjustment</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
          <p className="text-yellow-700 text-sm">
            For BSA-specific support, please reach out to our executive board members. 
            We're here to help with academic, personal, or cultural adjustment issues.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BSA UNM - Bangladesh Student Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

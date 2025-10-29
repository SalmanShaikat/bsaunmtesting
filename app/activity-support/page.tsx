import Link from 'next/link'

export default function ActivitySupport() {
  const supportCategories = [
    {
      title: "Academic Support",
      icon: "🎓",
      services: [
        "Peer Tutoring Sessions",
        "Study Group Coordination",
        "Course Registration Guidance",
        "Academic Resource Sharing",
        "Time Management Workshops"
      ]
    },
    {
      title: "Cultural Support",
      icon: "🤝",
      services: [
        "Cultural Adjustment Guidance",
        "Traditional Event Celebrations",
        "Language Practice Sessions",
        "Cultural Mentorship Program",
        "Community Building Activities"
      ]
    },
    {
      title: "Professional Development",
      icon: "💼",
      services: [
        "Career Counseling",
        "Resume Review Sessions",
        "Interview Preparation",
        "Internship Opportunities",
        "Networking Events"
      ]
    },
    {
      title: "Personal Support",
      icon: "❤️",
      services: [
        "Peer Counseling",
        "Mental Health Resources",
        "Housing Assistance",
        "Emergency Support",
        "Social Integration Help"
      ]
    }
  ]

  const resources = [
    {
      title: "International Student Office",
      contact: "iso@unm.edu",
      phone: "(505) 277-6843"
    },
    {
      title: "UNM Counseling Services",
      contact: "counseling@unm.edu", 
      phone: "(505) 277-4537"
    },
    {
      title: "Academic Advising",
      contact: "advising@unm.edu",
      phone: "(505) 277-2631"
    },
    {
      title: "Student Health Center",
      contact: "health@unm.edu",
      phone: "(505) 277-3136"
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      <NavBar current="Activity & Support" />
      
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Activity & Support</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive support services and activities designed to help you thrive at UNM.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Support Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Support Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-secondary">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-accent to-accent-light rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="mb-6 opacity-90">
              Our support team is available to assist you with any urgent matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="mailto:support@bsa-unm.edu"
                className="bg-white text-accent px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center hover:bg-gray-100"
              >
                Email Support
              </Link>
              <Link 
                href="tel:+15051234567"
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center hover:bg-primary/90"
              >
                Call Emergency Line
              </Link>
            </div>
          </div>
        </section>

        {/* University Resources */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">University Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg text-primary mb-3">{resource.title}</h3>
                <div className="space-y-2 text-secondary">
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    {resource.contact}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    {resource.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

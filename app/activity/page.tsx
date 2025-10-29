import Link from 'next/link'

export default function Activity() {
  const activities = [
    {
      title: "Cultural Festivals",
      description: "Celebrate Pohela Boishakh, Eid, and other traditional Bangladeshi festivals",
      events: ["Pohela Boishakh Mela", "Eid Reunion", "Durga Puja Celebration"]
    },
    {
      title: "Academic Support",
      description: "Peer tutoring and study groups for challenging courses",
      events: ["Study Sessions", "Course Registration Help", "Academic Workshops"]
    },
    {
      title: "Social Gatherings",
      description: "Regular meetups and social events to build community",
      events: ["Monthly Potluck", "Game Nights", "Campus Tours"]
    },
    {
      title: "Community Service",
      description: "Giving back to the local Albuquerque community",
      events: ["Food Drives", "Cultural Awareness Programs", "Campus Clean-up"]
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
              <Link href="/activity" className="text-bangladesh-green font-medium border-b-2 border-bangladesh-green">
                Activities
              </Link>
              <Link href="/helplines" className="text-gray-600 hover:text-bangladesh-green font-medium">
                Helplines
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-bangladesh-green to-unm-red py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Activities</h1>
          <p className="text-xl text-white opacity-90">
            Engaging events and programs that bring our community together
          </p>
        </div>
      </header>

      {/* Activities Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-bangladesh-green mb-3">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-unm-red mb-2">Upcoming Events:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {activity.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="text-gray-700">{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-bangladesh-green mb-4">
              Want to Get Involved?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our activities and become an active member of the Bangladeshi community at UNM
            </p>
            <Link 
              href="/helplines" 
              className="bg-bangladesh-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
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

import Link from 'next/link'

export default function FacultyAlumni() {
  const categories = [
    {
      title: "Faculty Advisors",
      people: [
        { name: "Dr. Rahman Smith", department: "Computer Science", role: "Faculty Advisor" },
        { name: "Dr. Fatima Johnson", department: "Engineering", role: "Co-Advisor" },
        { name: "Prof. Ahmed Davis", department: "Business", role: "Mentor" }
      ]
    },
    {
      title: "Notable Alumni",
      people: [
        { name: "Maria Khan", graduation: "2020", position: "Software Engineer, Google" },
        { name: "David Islam", graduation: "2019", position: "Data Scientist, Microsoft" },
        { name: "Sarah Chowdhury", graduation: "2021", position: "Product Manager, Apple" }
      ]
    },
    {
      title: "Current Students",
      people: [
        { name: "Alexa Rahman", major: "Computer Science", year: "Senior" },
        { name: "Michael Hossain", major: "Mechanical Engineering", year: "Junior" },
        { name: "Jessica Ali", major: "Business Administration", year: "Sophomore" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      <NavBar current="Faculty & Alumni" />
      
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Faculty & Alumni Network</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Connecting current students with experienced faculty and successful alumni for mentorship and guidance.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid gap-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">{category.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.people.map((person, personIndex) => (
                  <div key={personIndex} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-primary mb-2">{person.name}</h3>
                    <p className="text-secondary text-sm mb-2">{person.department || person.major}</p>
                    <p className="text-accent text-sm font-medium">{person.role || person.position || person.year}</p>
                    {person.graduation && (
                      <p className="text-gray-500 text-xs mt-2">Class of {person.graduation}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function NavBar({ current }: { current: string }) {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Faculty & Alumni', href: '/faculty-alumni' },
    { name: 'Executive Committee', href: '/executive-committee' },
    { name: 'Events & Gallery', href: '/events-gallery' },
    { name: 'Activity & Support', href: '/activity-support' },
    { name: 'Achievements', href: '/achievements' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-success rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">BSA</span>
            </div>
            <span className="text-lg font-bold text-primary">BSA UNM</span>
          </Link>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  current === item.name 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function ExecutiveCommittee() {
  const team = [
    {
      role: "President",
      name: "Ayesha Rahman",
      email: "arahman@unm.edu",
      major: "Computer Science",
      year: "Senior",
      bio: "Leading BSA UNM towards greater community engagement and academic excellence."
    },
    {
      role: "Vice President",
      name: "Imran Hossain",
      email: "ihossain@unm.edu",
      major: "Mechanical Engineering",
      year: "Junior",
      bio: "Focused on event planning and member coordination for seamless operations."
    },
    {
      role: "Treasurer",
      name: "Fatima Khan",
      email: "fkhan@unm.edu",
      major: "Business Administration",
      year: "Senior",
      bio: "Managing finances and budget allocation for all BSA activities and events."
    },
    {
      role: "Secretary",
      name: "Rafiq Islam",
      email: "rislam@unm.edu",
      major: "Political Science",
      year: "Junior",
      bio: "Keeping records and ensuring smooth communication across all departments."
    },
    {
      role: "Event Coordinator",
      name: "Sabrina Ahmed",
      email: "sahmed@unm.edu",
      major: "Hospitality Management",
      year: "Sophomore",
      bio: "Organizing cultural events and social gatherings for the community."
    },
    {
      role: "Academic Chair",
      name: "David Chowdhury",
      email: "dchowdhury@unm.edu",
      major: "Biomedical Sciences",
      year: "Senior",
      bio: "Coordinating study groups, tutoring, and academic support programs."
    }
  ]

  return (
    <div className="min-h-screen bg-light">
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Executive Committee</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Meet the dedicated team leading BSA UNM and driving our mission forward.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-primary mb-2">{member.name}</h3>
                <div className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  {member.role}
                </div>
                <div className="space-y-2 text-sm text-secondary mb-4">
                  <p>{member.major}</p>
                  <p>{member.year}</p>
                  <p className="text-accent font-medium">{member.email}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch with Our Team</h2>
          <p className="mb-6 opacity-90">
            Have questions or suggestions? Our executive committee is here to help.
          </p>
          <a
            href="mailto:bsa@unm.edu"
            className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-block"
          >
            Contact All Members
          </a>
        </div>
      </main>
    </div>
  )
}

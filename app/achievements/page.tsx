export default function Achievements() {
  const individualAchievements = [
    {
      name: "Maria Islam",
      achievement: "Won UNM Research Excellence Award 2024",
      category: "Research",
      description: "Outstanding research in renewable energy solutions"
    },
    {
      name: "Alex Rahman",
      achievement: "Google Tech Scholarship Recipient",
      category: "Academic",
      description: "Awarded full scholarship for tech leadership program"
    },
    {
      name: "Fatima Chowdhury",
      achievement: "Published in International Journal",
      category: "Publication",
      description: "First-author publication in prestigious science journal"
    },
    {
      name: "David Hossain",
      achievement: "Internship at NASA",
      category: "Professional",
      description: "Selected for competitive summer internship program"
    }
  ]

  const associationAchievements = [
    {
      title: "Best Cultural Organization 2024",
      description: "Awarded by UNM Student Government for outstanding cultural programming",
      year: "2024"
    },
    {
      title: "Community Service Excellence",
      description: "Recognized for 500+ hours of community service in Albuquerque",
      year: "2023"
    },
    {
      title: "Membership Growth Award",
      description: "Fastest growing student organization at UNM",
      year: "2023"
    },
    {
      title: "Academic Excellence Program",
      description: "Recognized for improving member GPA by 0.5 points on average",
      year: "2022"
    }
  ]

  const upcomingGoals = [
    "Expand mentorship program to 100+ students",
    "Host first inter-university Bangladeshi cultural festival",
    "Achieve 300+ active members by end of 2024",
    "Establish alumni scholarship fund",
    "Partner with 10+ corporate sponsors"
  ]

  return (
    <div className="min-h-screen bg-light">
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Achievements</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Celebrating the remarkable accomplishments of our members and association.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Individual Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {individualAchievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-highlight">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary">{achievement.name}</h3>
                  <span className="bg-highlight text-white text-xs px-3 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
                <h4 className="font-semibold text-secondary mb-2">{achievement.achievement}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Association Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {associationAchievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">{achievement.title}</h3>
                  <span className="bg-success text-white text-sm px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Our Future Goals</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingGoals.map((goal, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

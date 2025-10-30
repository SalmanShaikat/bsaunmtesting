import { Section } from '../../components/ui/section'
import { AchievementCard } from './achievement-card'

const achievements = [
  {
    year: '2023',
    title: 'Cultural Excellence Award',
    description: 'Recognized by UNM for outstanding cultural programming and community engagement.',
    stats: '500+ Participants'
  },
  {
    year: '2022',
    title: 'Academic Achievement',
    description: 'Our members maintained an average GPA of 3.8, with 15 students on Dean\'s List.',
    stats: '3.8 GPA Average'
  },
  {
    year: '2021',
    title: 'Community Impact',
    description: 'Volunteered 1000+ hours in local community service projects across Albuquerque.',
    stats: '1000+ Hours'
  }
]

export function Achievements() {
  return (
    <Section id="achievements">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold gradient-text mb-4">Our Achievements</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Celebrating our successes and the impact we've made together
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            year={achievement.year}
            title={achievement.title}
            description={achievement.description}
            stats={achievement.stats}
          />
        ))}
      </div>
    </Section>
  )
}

import { Section } from '../../components/ui/section'
import { ActivityCard } from './activity-card'

const activities = [
  {
    title: 'Cultural Festivals',
    description: 'Celebrate Bengali New Year, Eid, and other cultural events with traditional food, music, and performances.',
    icon: '🎉',
    color: 'from-jungle-green to-seafoam-green'
  },
  {
    title: 'Academic Support',
    description: 'Peer tutoring, study groups, and workshops to help students excel in their academic journey.',
    icon: '📚',
    color: 'from-seafoam-green to-jungle-green'
  },
  {
    title: 'Community Service',
    description: 'Engage in local volunteering opportunities and give back to the Albuquerque community.',
    icon: '🤝',
    color: 'from-unm-cherry to-jungle-green'
  },
  {
    title: 'Social Gatherings',
    description: 'Regular meetups, game nights, and outdoor activities to build strong friendships.',
    icon: '🎯',
    color: 'from-jungle-green to-unm-cherry'
  }
]

export function Activities() {
  return (
    <Section id="activities" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold gradient-text mb-4">Our Activities</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Engaging events and programs that bring our community together
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            icon={activity.icon}
            color={activity.color}
          />
        ))}
      </div>
    </Section>
  )
}

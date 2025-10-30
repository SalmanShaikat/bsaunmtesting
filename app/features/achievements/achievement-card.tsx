import { Card } from '../../components/ui/card'

interface AchievementCardProps {
  year: string
  title: string
  description: string
  stats: string
}

export function AchievementCard({ year, title, description, stats }: AchievementCardProps) {
  return (
    <Card className="p-8 relative overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-seafoam-green/10 to-jungle-green/10 rounded-bl-full"></div>
      
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-jungle-green text-white text-sm font-semibold rounded-full">
          {year}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-unm-cherry font-bold text-lg">{stats}</span>
        <div className="w-8 h-8 bg-gradient-to-br from-jungle-green to-seafoam-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-sm">→</span>
        </div>
      </div>
    </Card>
  )
}

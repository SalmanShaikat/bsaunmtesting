import { Card } from '../../components/ui/card'

interface ActivityCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export function ActivityCard({ title, description, icon, color }: ActivityCardProps) {
  return (
    <Card className="p-6 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  )
}

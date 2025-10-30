import { Hero } from './features/hero/hero'
import { Activities } from './features/activities/activities'
import { Achievements } from './features/achievements/achievements'
import { Support } from './features/support/support'

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Achievements />
      <Support />
    </main>
  )
}

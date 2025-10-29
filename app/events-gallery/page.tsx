export default function EventsGallery() {
  const events = [
    {
      title: "Pohela Boishakh Celebration",
      date: "April 14, 2024",
      type: "Cultural Festival",
      description: "Traditional Bengali New Year celebration with food, music, and cultural performances.",
      status: "Upcoming"
    },
    {
      title: "Academic Success Workshop",
      date: "March 20, 2024",
      type: "Academic",
      description: "Study strategies and time management techniques for international students.",
      status: "Upcoming"
    },
    {
      title: "Eid ul-Fitr Gathering",
      date: "February 15, 2024",
      type: "Religious & Social",
      description: "Community iftar and dinner to celebrate Eid with fellow students.",
      status: "Past"
    },
    {
      title: "Career Networking Night",
      date: "January 25, 2024",
      type: "Professional",
      description: "Connect with Bangladeshi professionals and UNM alumni in various industries.",
      status: "Past"
    },
    {
      title: "Winter Potluck Dinner",
      date: "December 15, 2023",
      type: "Social",
      description: "Traditional Bangladeshi food sharing and cultural exchange event.",
      status: "Past"
    },
    {
      title: "BSA Sports Tournament",
      date: "November 10, 2023",
      type: "Sports",
      description: "Cricket and football tournament among BSA members and friends.",
      status: "Past"
    }
  ]

  const gallery = [
    { title: "Cultural Performances", count: "24 photos" },
    { title: "Academic Events", count: "18 photos" },
    { title: "Social Gatherings", count: "32 photos" },
    { title: "Community Service", count: "15 photos" },
    { title: "Sports Activities", count: "21 photos" },
    { title: "Leadership Events", count: "12 photos" }
  ]

  return (
    <div className="min-h-screen bg-light">
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Events & Gallery</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Discover our vibrant events and relive memorable moments through our gallery.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.filter(e => e.status === "Upcoming").map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-accent hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                  <span className="bg-success text-white text-xs px-3 py-1 rounded-full">Upcoming</span>
                </div>
                <div className="flex items-center text-secondary text-sm mb-3">
                  <span className="mr-4">📅 {event.date}</span>
                  <span>🎯 {event.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                  Register Interest
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.filter(e => e.status === "Past").map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-primary mb-3">{event.title}</h3>
                <div className="text-secondary text-sm mb-3">
                  <p>📅 {event.date}</p>
                  <p>🎯 {event.type}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <button className="text-accent hover:text-accent-light text-sm font-semibold transition-colors duration-200">
                  View Photos →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Photo Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((album, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="w-full h-48 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-4xl">📸</span>
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{album.title}</h3>
                <p className="text-secondary text-sm">{album.count}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

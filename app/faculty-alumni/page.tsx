export default function FacultyAlumni() {
  return (
    <div className="min-h-screen bg-light">
      {/* No NavBar - it's in the layout! */}
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Faculty & Alumni Network</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Connecting current students with experienced faculty and successful alumni.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Your page content */}
        <div className="text-center">
          <p>Faculty & Alumni content coming soon...</p>
        </div>
      </main>
    </div>
  )
}

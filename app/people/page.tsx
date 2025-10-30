'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Types
interface Person {
  id: number
  name: string
  role: string
  department?: string
  image?: string
  email?: string
  year?: number
  batch?: string
}

interface Committee {
  year: number
  members: Person[]
}

export default function People() {
  const [currentStudentPage, setCurrentStudentPage] = useState(1)
  const [currentAlumniPage, setCurrentAlumniPage] = useState(1)
  const [selectedCommitteeYear, setSelectedCommitteeYear] = useState<number>(2024)
  const studentsPerPage = 8
  const alumniPerPage = 6

  // Faculty Advisers Data
  const facultyAdvisers: Person[] = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      role: "Faculty Adviser",
      department: "Computer Science",
      email: "mrahman@unm.edu"
    },
    {
      id: 2,
      name: "Dr. Fatima Chowdhury",
      role: "Faculty Adviser",
      department: "Electrical Engineering",
      email: "fchowdhury@unm.edu"
    },
    {
      id: 3,
      name: "Prof. Ahmed Hassan",
      role: "Faculty Adviser",
      department: "Business Administration",
      email: "ahassan@unm.edu"
    }
  ]

  // Executive Committees Data (Year-wise)
  const committees: Committee[] = [
    {
      year: 2024,
      members: [
        { id: 1, name: "Ayesha Siddiqa", role: "President", department: "Computer Science" },
        { id: 2, name: "Rafiq Islam", role: "Vice President", department: "Mechanical Engineering" },
        { id: 3, name: "Tasnim Ahmed", role: "General Secretary", department: "Biology" },
        { id: 4, name: "Nusrat Jahan", role: "Treasurer", department: "Economics" },
        { id: 5, name: "Kamal Hossain", role: "Event Coordinator", department: "Political Science" },
        { id: 6, name: "Sabrina Alam", role: "Public Relations", department: "Journalism" }
      ]
    },
    {
      year: 2023,
      members: [
        { id: 1, name: "Imran Khan", role: "President", department: "Electrical Engineering" },
        { id: 2, name: "Lubna Rahman", role: "Vice President", department: "Computer Science" },
        { id: 3, name: "Farhan Ahmed", role: "General Secretary", department: "Business" },
        { id: 4, name: "Sadia Chowdhury", role: "Treasurer", department: "Economics" }
      ]
    },
    {
      year: 2022,
      members: [
        { id: 1, name: "Nadia Islam", role: "President", department: "Biology" },
        { id: 2, name: "Arif Mahmood", role: "Vice President", department: "Mechanical Engineering" },
        { id: 3, name: "Tania Ahmed", role: "General Secretary", department: "Political Science" }
      ]
    }
  ]

  // Students Data
  const allStudents: Person[] = [
    { id: 1, name: "Amina Khatun", role: "Student", department: "Computer Science", batch: "Senior" },
    { id: 2, name: "Rahim Abdullah", role: "Student", department: "Electrical Engineering", batch: "Junior" },
    { id: 3, name: "Sultana Begum", role: "Student", department: "Biology", batch: "Freshman" },
    { id: 4, name: "Javed Iqbal", role: "Student", department: "Business", batch: "Sophomore" },
    { id: 5, name: "Farhana Yesmin", role: "Student", department: "Political Science", batch: "Senior" },
    { id: 6, name: "Shafiq Rahman", role: "Student", department: "Mechanical Engineering", batch: "Junior" },
    { id: 7, name: "Nazia Hassan", role: "Student", department: "Economics", batch: "Senior" },
    { id: 8, name: "Kamrul Islam", role: "Student", department: "Computer Science", batch: "Sophomore" },
    { id: 9, name: "Tahmina Akter", role: "Student", department: "Biology", batch: "Freshman" },
    { id: 10, name: "Sohel Rana", role: "Student", department: "Electrical Engineering", batch: "Junior" },
    { id: 11, name: "Moumita Roy", role: "Student", department: "Journalism", batch: "Senior" },
    { id: 12, name: "Alamgir Hossain", role: "Student", department: "Business", batch: "Sophomore" },
    { id: 13, name: "Sharmin Akter", role: "Student", department: "Political Science", batch: "Junior" },
    { id: 14, name: "Rashid Ahmed", role: "Student", department: "Computer Science", batch: "Freshman" },
    { id: 15, name: "Ferdousi Begum", role: "Student", department: "Economics", batch: "Senior" },
    { id: 16, name: "Nasir Uddin", role: "Student", department: "Mechanical Engineering", batch: "Junior" }
  ]

  // Alumni Data
  const allAlumni: Person[] = [
    { id: 1, name: "Dr. Salma Islam", role: "Alumni", department: "Medicine", year: 2018 },
    { id: 2, name: "Eng. Ratan Chowdhury", role: "Alumni", department: "Engineering", year: 2019 },
    { id: 3, name: "Prof. Anika Rahman", role: "Alumni", department: "Academia", year: 2020 },
    { id: 4, name: "Dr. Fahim Ahmed", role: "Alumni", department: "Research", year: 2021 },
    { id: 5, name: "Ms. Sabrina Khan", role: "Alumni", department: "Business", year: 2022 },
    { id: 6, name: "Eng. Tareq Hassan", role: "Alumni", department: "Technology", year: 2023 },
    { id: 7, name: "Dr. Nabila Islam", role: "Alumni", department: "Healthcare", year: 2020 },
    { id: 8, name: "Mr. Jamal Uddin", role: "Alumni", department: "Finance", year: 2019 },
    { id: 9, name: "Ms. Rehana Akter", role: "Alumni", department: "Education", year: 2021 },
    { id: 10, name: "Eng. Sohel Ahmed", role: "Alumni", department: "Engineering", year: 2022 },
    { id: 11, name: "Dr. Munni Begum", role: "Alumni", department: "Medicine", year: 2018 },
    { id: 12, name: "Prof. Rahim Khan", role: "Alumni", department: "Academia", year: 2023 }
  ]

  // Pagination calculations
  const indexOfLastStudent = currentStudentPage * studentsPerPage
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
  const currentStudents = allStudents.slice(indexOfFirstStudent, indexOfLastStudent)
  const totalStudentPages = Math.ceil(allStudents.length / studentsPerPage)

  const indexOfLastAlumni = currentAlumniPage * alumniPerPage
  const indexOfFirstAlumni = indexOfLastAlumni - alumniPerPage
  const currentAlumni = allAlumni.slice(indexOfFirstAlumni, indexOfLastAlumni)
  const totalAlumniPages = Math.ceil(allAlumni.length / alumniPerPage)

  // Get current committee
  const currentCommittee = committees.find(committee => committee.year === selectedCommitteeYear) || committees[0]

  // Pagination component
  const Pagination = ({ currentPage, totalPages, onPageChange }: { 
    currentPage: number; 
    totalPages: number; 
    onPageChange: (page: number) => void 
  }) => (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
      >
        Previous
      </button>
      
      <span className="px-4 py-2 bg-seafoam-500 text-white rounded-lg">
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
      >
        Next
      </button>
    </div>
  )

  // Person Card Component
  const PersonCard = ({ person, showDepartment = true }: { person: Person; showDepartment?: boolean }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
      <div className="w-20 h-20 bg-gradient-to-r from-seafoam-400 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
        {person.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">{person.name}</h3>
      <p className="text-seafoam-600 font-medium mb-2">{person.role}</p>
      {showDepartment && person.department && (
        <p className="text-gray-600 text-sm mb-2">{person.department}</p>
      )}
      {person.batch && (
        <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
          {person.batch}
        </span>
      )}
      {person.year && (
        <span className="inline-block bg-cherry-100 text-cherry-700 text-xs px-2 py-1 rounded-full">
          Batch {person.year}
        </span>
      )}
      {person.email && (
        <p className="text-gray-500 text-sm mt-2">{person.email}</p>
      )}
    </div>
  )

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-seafoam-50 to-primary-50 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-seafoam-600 to-primary-600 bg-clip-text text-transparent">
              Our Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the wonderful people who make BSA UNM a vibrant community. 
              From our faculty advisers to our dedicated students and accomplished alumni.
            </p>
          </div>

          {/* Faculty Advisers Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Faculty Advisers</h2>
              <p className="text-gray-600">Our dedicated faculty members who guide and support our mission</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyAdvisers.map((faculty) => (
                <PersonCard key={faculty.id} person={faculty} />
              ))}
            </div>
          </section>

          {/* Executive Committee Section */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Executive Committee</h2>
              <p className="text-gray-600 mb-6">Our student leadership team driving BSA UNM forward</p>
              
              {/* Year Selection */}
              <div className="flex justify-center space-x-4 mb-8">
                {committees.map((committee) => (
                  <button
                    key={committee.year}
                    onClick={() => setSelectedCommitteeYear(committee.year)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCommitteeYear === committee.year
                        ? 'bg-gradient-to-r from-seafoam-500 to-primary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                  >
                    {committee.year}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCommittee.members.map((member) => (
                <PersonCard key={member.id} person={member} />
              ))}
            </div>
          </section>

          {/* Students Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Students</h2>
              <p className="text-gray-600">The vibrant student community of BSA UNM</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentStudents.map((student) => (
                <PersonCard key={student.id} person={student} />
              ))}
            </div>
            
            <Pagination 
              currentPage={currentStudentPage}
              totalPages={totalStudentPages}
              onPageChange={setCurrentStudentPage}
            />
          </section>

          {/* Alumni Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Alumni Network</h2>
              <p className="text-gray-600">Our accomplished graduates making a difference worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentAlumni.map((alumni) => (
                <PersonCard key={alumni.id} person={alumni} />
              ))}
            </div>
            
            <Pagination 
              currentPage={currentAlumniPage}
              totalPages={totalAlumniPages}
              onPageChange={setCurrentAlumniPage}
            />
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

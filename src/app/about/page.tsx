import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a passionate Software Engineer with a strong foundation in both software development and machine learning. 
            Currently working as a Data Engineer, I am actively seeking opportunities to transition into a Software Engineering role 
            where I can leverage my technical skills and problem-solving abilities to build impactful solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My journey in technology has equipped me with a unique perspective, combining data engineering expertise with 
            software development best practices. I am particularly interested in building scalable applications and 
            implementing efficient solutions to complex problems.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Data Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Current Company • 2022 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Developed and maintained data pipelines processing millions of records daily</li>
                <li>Implemented automated testing and monitoring systems</li>
                <li>Collaborated with cross-functional teams to optimize data workflows</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-300">University Name • 2018 - 2022</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Relevant coursework: Data Structures, Algorithms, Machine Learning, Software Engineering
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 
import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Machine learning model for predictive analytics",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Real-time data processing pipeline",
      technologies: ["Python", "Apache Kafka", "Docker", "AWS"],
      image: "/project3.jpg",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
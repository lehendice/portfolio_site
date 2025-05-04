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
            I am a passionate Software Engineer particularly interested in machine learning, with a strong foundation in software development, data engineering, and machine learning. I have experience building scalable data pipelines, APIs, and automation solutions using Python, SQL, AWS, and modern web technologies. I am actively seeking Software Engineering and Machine Learning Engineering roles where I can leverage my technical skills and problem-solving abilities to build impactful solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="space-y-8">

            {/* Amount */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Data Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Amount • Chicago, IL • Jan 2025 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Enhanced data reliability and integrity by developing custom data validation frameworks in SQL and Python, incorporating automated anomaly detection and data quality checks on PostgreSQL and Redshift data stores.</li>
                <li>Designed, built, and deployed a decision tree-based machine learning model to automate credit application reviews, reducing manual processing by 35% and application processing time by 20%.</li>
                <li>Reduced machine learning model runtime by 55% by developing data APIs and implementing critical optimizations in query configurations and feature engineering using client performance data.</li>
                <li>Developed scalable and efficient data processing applications using Python and Airflow, implementing parallel processing and workflow automation to reduce execution time by 40% and enhance scalability for larger data volumes.</li>
                <li>Designed and implemented a data lifecycle management process for development environments, automating the deletion of temporary and outdated datasets and yielding a 45% reduction in Redshift storage costs.</li>
                <li>Built scalable RESTful APIs on AWS to handle up to 1000 requests per minute from external partners, ensuring secure and reliable data exchange with the capability to scale to 4 times the initial load.</li>
              </ul>
            </div>

            {/* AbsoluteCare */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Data Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">AbsoluteCare • Columbia, MD • Aug 2023 - Jan 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Built automated data pipelines using Python, SQL, and AWS, reducing processing time by 37% and server load by 42%.</li>
                <li>Designed and implemented ETL pipelines for over 5 new payer partners, leveraging tools like Python and SQL to automate data ingestion workflows and accommodate a 200% increase in the volume of data handled across systems.</li>
                <li>Developed ML models with PyTorch to identify target populations, boosting market analysis accuracy by 20%.</li>
                <li>Designed real-time monitoring systems using PySpark and AWS to ensure over 99% uptime for critical data pipelines, enabling notifications for failures to time-sensitive operations and automated load failure resolution.</li>
              </ul>
            </div>

            {/* Equifax */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Contract Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300">Equifax • Louisville, KY • May 2023 - Aug 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Developed and optimized scalable data pipelines that served as the backend for internal integration APIs, enabling the migration of 100+ TB of data and legacy codebases to Equifax Data Fabric, reducing processing time by 30%.</li>
                <li>Enhanced data integration workflows by leveraging Apache Airflow for orchestration, optimizing Spark jobs for ETL, and implementing GCP Pub/Sub for real-time streaming, achieving a 25% reduction in latency in the data API.</li>
              </ul>
            </div>

            {/* University of Louisville */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Database Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">University of Louisville • Louisville, KY • Jan 2023 - May 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Engineered a scalable AWS-based database for a bioengineering research project, enhancing data storage capacity by 40% and streamlining retrieval processes, ensuring accessibility for future studies and analyses.</li>
                <li>Developed a user-friendly website using Flask for secure access to the project database for research participants.</li>
              </ul>
            </div>

            {/* The Rawlings Group */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">IT Intern / Data Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">The Rawlings Group • La Grange, KY • Jan 2021 - Aug 2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                <li>Streamlined ETLs and reduced processing time by 20% by developing SSIS packages to improve load efficiency.</li>
                <li>Improved data mining algorithm accuracy by 23% as measured by predictive performance metrics by designing and implementing Random Forest Classification and Gradient Boosting to better identify patterns in claims data.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Master of Science in Computer Science, Machine Learning Specialization</h3>
              <p className="text-gray-600 dark:text-gray-300">Georgia Institute of Technology • Atlanta, GA • Aug 2024 - May 2026</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science and Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">University of Louisville • Louisville, KY • Aug 2019 - May 2023</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">GPA: 3.943</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
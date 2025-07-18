import greenfindrLogo from '../assets/greenfindr-logo.png'
import airdoctorLogo from '../assets/airdoctor-logo.png'
import wtwrLogo from '../assets/wtwr-logo2.svg'

const Projects = () => {
  const projects = [
    {
      id: 'green-findr',
      title: 'Green Findr',
      description: 'This website was created to assist its users to find parks and recreational places during any vacation that they are on, or are planning to take. By searching any location or address in the search bar, Green Findr will locate the closest park for your enjoyment, and have the capability of saving your favorite parks!',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'Google Maps API'],
      github: 'https://github.com/ThePaladin000/June-Code-Jam',
      live: 'https://greenfindr.us',
      featured: true,
      image: greenfindrLogo
    },
    {
      id: 'airdoctor-refactor',
      title: 'AirDoctor',
      description: 'A modern, fully responsive HVAC company website built with React, featuring optimized performance, professional design, and integrated third-party services. Built a custom personal CMS using Firebase for content management, allowing easy updates to services, testimonials, and company information. Successfully deployed to production with Vercel.',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
      github: 'https://github.com/Majestyk1/airdoctor-refactor/tree/main',
      live: 'https://airdoctor-refactor.vercel.app/',
      featured: true,
      image: airdoctorLogo
    },
    {
      id: 'wtwr',
      title: 'WTWR (What to Wear)',
      description: 'Full-stack weather-powered clothing recommendation app. Fetches real-time weather data and suggests appropriate outfits based on conditions and user preferences.',
      tech: ['React', 'Express.js', 'MongoDB', 'Nginx', 'PM2', 'Certbot', 'Google Cloud Platform (GCP)'],
      github: 'https://github.com/Majestyk1/se_project_express',
      live: 'https://www.wtw.r-o-o-t.net',
      featured: true,
      image: wtwrLogo
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'This very site! Built from scratch with Vite and Tailwind, featuring polished animations, mobile-first design, and clean dark theme with dynamic Markdown content.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Majestyk1/portfolio.app',
      live: 'https://majestyk-vaughns.space',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects section-padding">
      <div className="projects__container container">
        <div className="projects__header inline-block mb-16">
          <h2 className="projects__title text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            <span className="text-blue-400 font-mono text-xl mr-4">02.</span>
            Some Things I've Built
          </h2>
          <div className="projects__title-line h-px bg-gray-600 w-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="projects__featured space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`project-card grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
              {/* Project Image/Preview */}
              <div className={`project-card__image lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="project-card__image-container relative group">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title + ' preview'}
                    className="project-card__image w-full h-full object-cover rounded-lg shadow-lg"
                   />
                  ) : (
                   <div className="project-card__preview bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg aspect-video flex items-center justify-center text-2xl font-bold text-white hover:transform hover:scale-105 transition-all duration-300">
                   {project.title}
                   </div>
                 )}
                  <div className="project-card__overlay absolute inset-0 bg-blue-400 mix-blend-multiply rounded-lg opacity-25 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`project-card__content lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="project-card__meta">
                  <p className="project-card__overline text-blue-400 font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="project-card__title text-2xl md:text-3xl font-bold text-gray-100 mb-4 hover:text-blue-400 transition-colors">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>

                <div className="project-card__description bg-gray-800 rounded-lg p-6 mb-6 shadow-xl">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="project-card__tech mb-6">
                  <ul className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <li key={tech} className="text-gray-300 font-mono text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`project-card__links flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a 
                    href={project.github} 
                    className="project-card__link text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="Live Project"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="projects__other">
          <h3 className="projects__other-title text-2xl font-bold text-gray-100 mb-8 text-center">
            Other Noteworthy Projects
          </h3>
          <div className={`projects__other-grid gap-6 ${otherProjects.length === 1 ? 'flex justify-center' : 'grid md:grid-cols-2 lg:grid-cols-3'}`}>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card__small bg-gray-800 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="project-card__small-header flex justify-between items-center mb-4">
                  <div className="project-card__small-icon">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="project-card__small-links flex gap-3">
                    <a href={project.github} className="text-gray-300 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href={project.live} className="text-gray-300 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h4 className="project-card__small-title text-xl font-bold text-gray-100 mb-3 hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="project-card__small-description text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="project-card__small-tech">
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="text-gray-400 font-mono text-xs">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 
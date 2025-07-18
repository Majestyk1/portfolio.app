const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      <div className="hero__container container">
        <div className="hero__content max-w-4xl">
          {/* Greeting */}
          <p className="hero__greeting text-blue-400 font-mono text-sm sm:text-base mb-4 sm:mb-6 tracking-wide">
            Hi, my name is
          </p>
          
          {/* Main Heading */}
          <h1 className="hero__title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 mb-3 sm:mb-4 leading-tight">
            Majestyk
          </h1>
          
          {/* Subtitle */}
          <h2 className="hero__subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 sm:mb-8 leading-tight">
            I build things that matter.
          </h2>
          
          {/* Description */}
          <div className="hero__description max-w-2xl mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm a full-stack developer and disabled veteran who turned military discipline 
              into code craftsmanship. From maintaining helicopters to building web applications, 
              I bring the same precision and purpose-driven approach to every project.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Currently focused on creating accessible, user-centric applications that solve 
              real-world problems and leave things better than I found them.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="hero__actions flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#projects" 
              className="hero__cta-primary btn-primary text-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="hero__cta-secondary border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 text-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
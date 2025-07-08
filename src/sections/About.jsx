const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="about__container container">
        <div className="about__header mb-16">
          <h2 className="about__title text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            <span className="text-blue-400 font-mono text-xl mr-4">01.</span>
            About Me
          </h2>
          <div className="about__title-line h-px bg-gray-600 max-w-sm"></div>
        </div>
        
        <div className="about__content grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Story */}
          <div className="about__story lg:col-span-2">
            <div className="about__text space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                My journey into tech wasn't linear — but it was inevitable.
              </p>
              
              <p>
                I started dabbling with code back in the day, just messing around with HTML and scripts for fun. 
                Then life took a turn — I joined the <strong className="text-gray-100">U.S. military</strong>, where I spent years 
                maintaining helicopters and learning the kind of discipline you can't fake. That experience shaped 
                who I am: focused, adaptable, and never one to back down from a challenge.
              </p>
              
              <p>
                Now, I'm a <strong className="text-gray-100">full-stack developer</strong> with a couple years of hands-on 
                experience and a deep drive to build things that matter. I've honed my skills across both frontend 
                and backend — from crafting responsive interfaces in <strong className="text-blue-400">React</strong> and 
                <strong className="text-blue-400"> CSS</strong>, to deploying robust <strong className="text-blue-400">Node.js</strong> apps 
                with MongoDB, Nginx, and PM2.
              </p>
              
              <p>
                But behind the code, I'm a father, a gamer, a boxing fan, and a lifelong learner who genuinely 
                loves technology. I'm family-oriented and purpose-driven — everything I do in tech is guided by 
                a desire to <strong className="text-gray-100">create positive change</strong> and leave things better than I found them.
              </p>
              
              <p className="text-blue-400 font-medium">
                I'm a 100% disabled veteran with something to prove — not to anyone else, but to myself. 
                I've already fought to rebuild my life. Now I'm fighting to help others through software.
              </p>
            </div>
            
            {/* Skills List */}
            <div className="about__skills mt-12">
              <p className="text-gray-300 mb-6">Here are a few technologies I've been working with recently:</p>
              <div className="about__skills-grid grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'React', 'JavaScript (ES6+)', 'Tailwind CSS',
                  'Node.js', 'Firebase', 'MongoDB',
                  'Git & GitHub', 'Google Maps API', 'Express.js'
                ].map((skill) => (
                  <div key={skill} className="about__skill flex items-center text-gray-300">
                    <span className="text-blue-400 mr-3">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="about__photo-container lg:col-span-1">
            <div className="about__photo-wrapper relative max-w-sm mx-auto">
              <div className="about__photo-frame relative">
                <div className="about__photo bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg aspect-square flex items-center justify-center text-6xl font-bold text-white">
                  S.O.G
                </div>
                <div className="about__photo-border absolute inset-0 border-2 border-blue-400 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
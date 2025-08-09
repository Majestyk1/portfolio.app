const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="contact__container container">
        <div className="contact__content max-w-2xl mx-auto text-center">
          <div className="contact__header mb-12">
            <h2 className="contact__overline text-blue-600 dark:text-blue-400 font-mono text-base mb-4 tracking-wide">
              03. What's Next?
            </h2>
            <h3 className="contact__title text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Get In Touch
            </h3>
          </div>
          
          <div className="contact__description mb-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm currently looking for new opportunities and would love to hear from you. 
              Whether you have a question, want to discuss a project, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a disabled veteran, I bring unique perspective, discipline, and problem-solving 
              skills to every team. Let's build something meaningful together.
            </p>
          </div>
          
          <div className="contact__action">
            <a 
              href="mailto:Majestyk.vaughns@gmail.com" 
              className="contact__cta btn-primary inline-block px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home 
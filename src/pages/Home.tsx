import React from 'react'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Achievement from './Components/Achievement'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievement />
        <Contact />
    </div>
  )
}

export default Home
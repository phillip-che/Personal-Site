import './App.css'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Experience from './components/Experience'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function App() {

  const [section, setSection] = useState(0);

  return (
    <div className="app">
      <Intro />
      <NavBar 
      setSection={setSection}
      />
      <Fade triggerOnce>
        <div className="section-container">
          {section === 0 && <Home />}
          {section === 1 && <About />}
          {section === 2 && <Experience />}
          {section === 3 && <Projects />}
        </div>
      </Fade>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

// What Should Be On a Web Developer Portfolio?
// Include at least these in your web developer portfolio:
// – Contact information, including relevant social media accounts
// – Short bio and your photo
// – Relevant experience and skills with context
// – Personal projects
// – Documented source code
// – Education
// – Awards/recognition
// – Downloadable web developer resume
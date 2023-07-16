import './App.css'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function App() {

  const [section, setSection] = useState(0);

  return (
    <div className="app">
      <div className="left-container">
        <Intro />
        <NavBar 
        setSection={setSection}
        />
      </div>
      <Fade triggerOnce>
        <div className="section-container">
          {section === 0 && <Home />}
          {section === 1 && <About />}
          {section === 2 && <Experience />}
          {section === 3 && <Projects />}
          {section === 4 && <Gallery />}
        </div>
      </Fade>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

// popular resolutions: 
// 1920 x 1080
// 1366 × 768
// add last active when not playing music on spotify or add when exactly you listened to each song in recently played
// possible additions:
// theme customizer OR light/dark mode
// chatbot that answers questions about me
// display last active if not playing a song on spotify

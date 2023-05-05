import './App.css'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function App() {

  // const [onHomeClick, setOnHomeClick] = useState(true);
  // const [onAboutClick, setOnAboutClick] = useState(false);
  // const [onProjectsClick, setOnProjectsClick] = useState(false);

  const [section, setSection] = useState(1);

  return (
    <div className="app">
      <Intro />
      <NavBar 
      // setOnHomeClick={setOnHomeClick}
      // setOnAboutClick={setOnAboutClick}
      // setOnProjectsClick={setOnProjectsClick}
      setSection={setSection}
      />
      <Fade>
        <div className="section-container">
          {/* {onHomeClick && <Home />}
          {onAboutClick && <About />}
          {onProjectsClick && <Projects />} */}
          {section === 0 && <Home />}
          {section === 1 && <About />}
          {section === 2 && <Projects />}
        </div>
      </Fade>
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
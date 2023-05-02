import './App.css'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

function App() {

  const [onAboutHover, setOnAboutHover] = useState(false);
  const [onProjectsHover, setOnProjectsHover] = useState(false);

  return (
    <div className="app">
      <Intro />
      <NavBar setOnAboutHover={setOnAboutHover} setOnProjectsHove={setOnProjectsHover} />
        <div className="section-container">
          {onAboutHover && <About />}
          {onProjectsHover && <Projects />}
        </div>
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
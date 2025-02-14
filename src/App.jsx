import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Edu from './components/Edu'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {useState } from 'react'
import Exp from './components/Exp'

  //http://localhost:5173/
function App() {
    const [click,setclick] = useState(false)
  

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Exp/>
      <Edu/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App

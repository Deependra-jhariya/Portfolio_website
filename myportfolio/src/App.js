import React from 'react'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Project from './Routes/Project'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/project" element={<Project />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

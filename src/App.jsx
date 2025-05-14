import { useState } from 'react'

import { Routes, Route } from 'react-router'

import Courses from './pages/courses'
import Programs from './pages/programs'
import Results from './pages/results';   // Import the new Results page

import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App

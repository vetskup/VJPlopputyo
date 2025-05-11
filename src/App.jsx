import { useState } from 'react'

import { Routes, Route } from 'react-router'

import Courses from './pages/courses'
import Programs from './pages/programs'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </>
  )
}

export default App

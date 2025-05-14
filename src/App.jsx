import { Routes, Route, Navigate} from 'react-router-dom'

import Courses from './pages/courses'
import Programs from './pages/programs'
import Results from './pages/results';   // Import the new Results page

import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
        {/* automaattinen redirecti kurssisivulle */}
        <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App

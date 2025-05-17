import { Routes, Route, Navigate} from 'react-router-dom'

import Courses from './pages/courses'
import Results from './pages/results';   // Import the new Results page
import ScrollToTop from "./ScrollToTop";
import './styles/App.css'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* automaattinen redirecti kurssisivulle */}
        <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App

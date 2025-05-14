import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import { courses as allCoursesData, studyProgramList } from '../data/courseData';
import '../styles/results.css'; // We'll create this CSS file next

function Results() {
  const location = useLocation();
  // Vastaanota valitut kurssit valintasivulta, jos niitä on
  const selectedCourseIds = new Set(location.state?.selectedCourseIds || []);

  const calculateSuitability = () => {
    if (selectedCourseIds.size === 0) {
      // Jos valittuja kursseja ei ole, kaikille 0% sopivuus
      return studyProgramList.map(program => ({ ...program, score: 0, matchedCourses: 0 }));
    }

    const programScores = studyProgramList.map(program => {
      let relevantSelectedCount = 0;
      selectedCourseIds.forEach(courseId => {
        const course = allCoursesData.find(c => c.id === courseId);
        // Tarkista löytyykö kurssi valituista ja onko se sopiva tähän ohjelmaan
        if (course && course.relevantPrograms.includes(program.id)) {
          relevantSelectedCount++;
        }
      });
      
      // Laske sopivuus:: 
      // (tähän ohjelmaan sopivien kurssien määrä / kaikki valitut kurssit) * 100
      const score = (relevantSelectedCount / selectedCourseIds.size) * 100;
      return { ...program, score: Math.round(score), matchedCourses: relevantSelectedCount };
    });

    // Lajittele ohjelmat sopivuuden mukaan, korkein ensin
    return programScores.sort((a, b) => b.score - a.score);
  };

  const suitabilityResults = calculateSuitability();

  return (
    <>
      <Navbar />
      <div className="results-container">
        <h2>Sopivuusarviosi opinto-ohjelmiin</h2>
        {selectedCourseIds.size === 0 ? (
          <p>Et valinnut yhtään kurssia. <Link to="/courses">Palaa valitsemaan kursseja</Link>.</p>
        ) : (
          <ul className="results-list">
            {suitabilityResults.map(program => (
              <li key={program.id} className="result-item">
                <h3>{program.name}: {program.score}%</h3>
                <p>
                  Valitsemistasi {selectedCourseIds.size} kurssista {program.matchedCourses} kpl 
                  liittyy tähän ohjelmaan.
                </p>
                <div className="score-bar-container">
                  <div 
                    className="score-bar" 
                    style={{ 
                      width: `${program.score}%`, 
                      backgroundColor: program.score > 66 ? '#4CAF50' : program.score > 33 ? '#FFC107' : '#F44336' 
                    }}
                  >
                    {/* {program.score}% sopivuusarvio barissa, jos mahtuu */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link to="/courses" className="results-back-link">Valitse kursseja uudelleen</Link>
      </div>
    </>
  );
}

export default Results;
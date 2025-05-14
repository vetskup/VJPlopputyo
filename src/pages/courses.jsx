import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigaatio
import Navbar from "../components/navbar"
import CourseCard from "../components/CourseCard"
import { getCoursesByCategory, courses } from "../data/courseData.js"; 



function Courses () {
    const [selectedCourseIds, setSelectedCourseIds] = useState(new Set());
    const navigate = useNavigate();

    const handleToggleCourse = (courseId) => {
        setSelectedCourseIds(prevSelectedIds => {
            const newSelectedIds = new Set(prevSelectedIds);
            if (newSelectedIds.has(courseId)) {
            newSelectedIds.delete(courseId);
            } else {
            newSelectedIds.add(courseId);
            }
            return newSelectedIds;
        });
        };

        const coursesByCategory = getCoursesByCategory();

        const handleCalculateSuitability = () => {
        // Navigoi tulossivulle ja lähetä valitut kurssit
        navigate('/results', { state: { selectedCourseIds: Array.from(selectedCourseIds) } });
        };

    return (
            <div>
                <Navbar />
                <div className="courses-list">
                    <h2>Valitse sinua kiinnostavat kurssit</h2>
                    {Object.entries(coursesByCategory).map(([category, coursesInCategory]) => (
                        <div key={category} style={{ width: '100%', marginBottom: '20px' }}>
                            <h3>{category}</h3>
                            {coursesInCategory.map(course => (
                            <CourseCard                
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                description={course.description}
                                isSelected={selectedCourseIds.has(course.id)}
                                onToggleSelection={handleToggleCourse}
                              />
                            ))}
                        </div>
                    ))}

                    <button 
                        onClick={handleCalculateSuitability} 
                        style={{ 
                        marginTop: '20px', 
                        padding: '12px 25px', 
                        fontSize: '16px', 
                        cursor: 'pointer',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                        }}
                    >
                        Laske sopivuus ohjelmiin
                    </button>
                    
                </div>
            </div>  
        )
    }

export default Courses

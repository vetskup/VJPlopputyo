import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigaatio
import Navbar from "../components/navbar"
import CourseCard from "../components/coursecard"
import { getCoursesByCategory, courses } from "../data/courseData.js";
import '../styles/courses.css';
import * as motion from "motion/react-client"


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
                    <h2
                        style={{textAlign: 'center'}}
                    >Valitse sinua kiinnostavat kurssit</h2>
                    {Object.entries(coursesByCategory).map(([category, coursesInCategory]) => (
                        <div className="courses-category" key={category}>
                            <h3
                                style={{textAlign:'center'}}
                            >{category}</h3>
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

                    <motion.button
                        className="results-button"
                        whileHover={{ scale: 1.1 }}
                        onClick={handleCalculateSuitability} 
                    >
                        Laske sopivuus ohjelmiin
                    </motion.button>
                    
                </div>
            </div>  
        )
    }

export default Courses

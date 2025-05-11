import { useState } from 'react';
import '/src/coursecard.css';

export default function CourseCard({ title, description }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => setIsSelected(!isSelected);

  return (
    <div
      className={`course-card ${isSelected ? 'selected' : 'unselected'}`}
      onClick={toggleSelection}
    >
      <p className="course-description">{description}</p>
      <p className="course-title">{title}</p>
    </div>
  );
}

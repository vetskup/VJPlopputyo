import '/src/coursecard.css';

export default function CourseCard({ id, title, description, isSelected, onToggleSelection }) {
  return (
    <div
      className={`course-card ${isSelected ? 'selected' : 'unselected'}`}
      onClick={() => onToggleSelection(id)}
    >
      <p className="course-description">{description}</p>
      <p className="course-title">{title}</p>
    </div>
  );
}

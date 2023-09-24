import MyH2 from "./MyH2";

interface EducationProps {
  name: string;
  degree: string;
  date: string;
  courses: string[];
}

function Education(props: EducationProps) {
  return (
    <div className="mb-16">
      <MyH2 text="Education" />
      <h3 >{props.name}</h3>
      <p>{props.degree}</p>
      <p>{props.date}</p>
      <p>{props.courses.join(', ')}</p>
    </div>
  );
}

export default Education;

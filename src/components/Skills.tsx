import MyH2 from "./MyH2";

interface skillsProps {
  skills: string[];
}

function Skills(props: skillsProps) {
  return (
    <div className="mb-16">
      <MyH2 text="Skills" />
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
import MyH2 from "./MyH2";

interface ProjectProps {
  name: string;
  company: string;
  description: string;
  date: string;
  technologies: string[];
  github: string;
  role: string;
  responsibilities: string[];
}

function Project(props: ProjectProps) {
  return (
    <div className="mb-16">
      <MyH2 text="Project" />
      <h3 >{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.technologies.join(', ')}</p>
      <p>{props.github}</p>
      <p>{props.role}</p>
      <p>{props.responsibilities.join(', ')}</p>
    </div>
  );
}

export default Project;
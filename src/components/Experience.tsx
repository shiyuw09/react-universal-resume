import MyH2 from "./MyH2";

interface ExperienceProps {
  type: "internship" | "work experience";
  company: string;
  role: string;
  date: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

function Experience(props: ExperienceProps) {
  return (
    <div className="mb-16">
      <MyH2 text={props.type} />
      <h3>
        {props.company}
      </h3>
      <p>{props.role}</p>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <p>
        {props.technologies.join(", ")}
      </p>
      <p className="text-gray-750 pb-px">
        {props.responsibilities.join(", ")}
      </p>
    </div>
  );
}

export default Experience;
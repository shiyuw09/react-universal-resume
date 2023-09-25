import { IProject } from '..';
import Labels from './Labels';
import ListItems from './ListItems';
import MyH2 from './MyH2';

interface ProjectProps {
  projects: IProject[];
}

function Project({ projects }: ProjectProps) {
  return (
    <div className="break-inside-avoid">
      <MyH2 text="Projects" />

      {projects.map((project: IProject, index: number) => (
        <section key={index} className="mb-4.5 break-inside-avoid">
          <header>
            <h3 className="text-lg font-semibold text-gray-700 leading-snugish group">
              <a href={project.github}>
                {project.name}
                <span className="text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                  ↗
                </span>
              </a>
            </h3>
            <div className="flex justify-between">
              <p className="leading-normal text-m text-gray-650">
                {project.date} | {project.role}
              </p>
              <Labels labels={project.technologies} />
            </div>
          </header>
          <p className="mt-2.1 text-md text-gray-700 leading-normal">
            {project.description}
          </p>
          <ListItems items={project.responsibilities} />
        </section>
      ))}
    </div>
  );
}

export default Project;

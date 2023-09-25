import { IProject } from '..';
import Labels from './Labels';
import ListItems from './ListItems';
import MyH2 from './MyH2';

interface ProjectProps {
  projects: IProject[];
}

function Project({ projects }: ProjectProps) {
  return (
    <section className="mb-8 first:mt-0">
      <div>
        <MyH2 text="Projects" />

        {projects.map((project: IProject, index: number) => (
          <section key={index} className="mb-4.5 break-inside-avoid">
            <header>
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish group mb-2.1">
                  <a href={project.github} target="_blank">
                    {project.name}
                    <span className="text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in">
                      ↗
                    </span>
                  </a>
                </h3>
                <Labels labels={project.technologies} />
              </div>
              <p className="leading-normal text-md text-gray-650">
                <span className="font-semibold text-slate-700 italic">
                  {project.role}
                </span>
                {' | '}
                {project.date}
                {' at '}
                {project.company}
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal italic">
              {project.description}
            </p>
            <ListItems items={project.responsibilities} />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Project;

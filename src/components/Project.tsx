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
              <div className="flex flex-col justify-between print:flex-row md:flex-row">
                <h3 className=" mb-2.1 text-lg font-semibold leading-snugish text-gray-700">
                  <a href={project.github} target="_blank" className="group">
                    {project.name}
                    <span className="inline-block font-normal text-gray-550 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                      ↗
                    </span>
                  </a>
                </h3>
                <Labels labels={project.technologies} />
              </div>
              <p className="text-md leading-normal text-gray-650">
                <span className="font-semibold italic text-slate-700">
                  {project.role}
                </span>
                {' | '}
                {project.date}
                {' at '}
                {project.company}
              </p>
            </header>
            <p className="mt-2.1 text-md italic leading-normal text-gray-700">
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

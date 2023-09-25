import { IWorkExperience } from '..';
import Labels from './Labels';
import ListItems from './ListItems';
import MyH2 from './MyH2';

interface ExperienceProps {
  expArray: IWorkExperience[];
}

function Experience({ expArray }: ExperienceProps) {
  const type: string = expArray[0].type;

  return (
    <section className="mb-8 first:mt-0">
      <div>
        <MyH2 text={type} />
        {expArray.map((exp: IWorkExperience, index: number) => (
          <section key={index} className="mb-4.5 break-inside-avoid">
            <header>
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish group mb-2.1 italic">
                  {exp.role}
                </h3>
                <Labels labels={exp.technologies} />
              </div>
              <p className="leading-normal text-md text-gray-650">
                {exp.date} | {exp.company}
              </p>
            </header>
            <p
              className="mt-1
             text-md text-gray-700 leading-normal italic"
            >
              {exp.companyDescription}
            </p>
            <ListItems items={exp.responsibilities} />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Experience;

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
              <div className="flex flex-col justify-between print:flex-row md:flex-row">
                <h3 className="group mb-2.1 text-lg font-semibold italic leading-snugish text-gray-700">
                  {exp.role}
                </h3>
                <Labels labels={exp.technologies} />
              </div>
              <p className="text-md leading-normal text-gray-650">
                {exp.date} | {exp.company}
              </p>
            </header>
            <p
              className="mt-1
             text-md italic leading-normal text-gray-700">
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

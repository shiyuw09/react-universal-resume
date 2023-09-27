import MyH2 from './MyH2';
import { IEducation } from '..';
import ListItems from './ListItems';

interface EducationProps {
  eduArray: IEducation[];
}

function Education({ eduArray }: EducationProps) {
  return (
    <section className="mb-8 first:mt-0">
      <div className="break-inside-avoid">
        <MyH2 text="Education" />
        {eduArray.map((edu: IEducation, index: number) => (
          <section key={index} className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold leading-snugish text-gray-700">
                {edu.name}
              </h3>
              <p className="text-md leading-normal text-gray-650">
                {edu.date} | {edu.degree}
              </p>

              <ListItems
                items={[`Relevant course work: ${edu.courses.join(', ')}`]}
              />
            </header>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Education;

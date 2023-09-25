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
          <section key={index} className="break-inside-avoid mb-4.5">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                {edu.name}
              </h3>
              <p className="leading-normal text-md text-gray-650">
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

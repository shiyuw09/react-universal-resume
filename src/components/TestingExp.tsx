import { IWorkExperience } from '..';

interface TestingExpProps {
  expArray: IWorkExperience[];
}

function TestingExp({ expArray }: TestingExpProps) {
  const role = expArray[0].role;
  return (
    <section className="mb-8">
      <div className="break-inside-avoid">
        <h3 className="text-lg text-gray-700 leading-snugish group mb-3">
          {role}
        </h3>
        {expArray.map((exp: IWorkExperience, index: number) => (
          <section key={index} className="break-inside-avoid">
            <div className="flex justify-between">
              <div className="flex mb-2">
                <p className="leading-normal text-gray-650">{exp.date}</p>
                <p className="leading-normal text-gray-650 text-start ml-40">
                  {exp.company}
                </p>
              </div>
              <p className="text-gray-650 leading-normal">
                {exp.companyDescription}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default TestingExp;

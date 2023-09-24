import MyH2 from './MyH2';
import { EducationInfo } from '..';

interface EducationProps {
  eduArray: EducationInfo[];
}

function Education({ eduArray }: EducationProps) {
  return (
    <section className="mb-8 first:mt-0">
      <div className="break-inside-avoid">
        <MyH2 text="Education" />
        {eduArray.map((edu: EducationInfo, index: number) => (
          <section key={index} className="break-inside-avoid mb-4.5">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                {edu.name}
              </h3>
              <p className="leading-normal text-md text-gray-650">
                {edu.degree} | {edu.date}
              </p>

              <ul>
                <li className="mt-2.1 text-md text-gray-700 leading-normal">
                  <span className="-ml-3 absolute select-none -translate-y-px transform">
                    ›
                  </span>
                  Relevant course work: {edu.courses.join(', ')}
                </li>
              </ul>
            </header>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Education;

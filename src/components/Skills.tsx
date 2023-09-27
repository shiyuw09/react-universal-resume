import { ISkill } from '..';
import MyH2 from './MyH2';

interface skillsProps {
  skills: ISkill[];
}

function Skills({ skills }: skillsProps) {
  return (
    <div className="mb-8">
      <MyH2 text="Skills" />
      <ul>
        {skills.map((skillOb, index) => (
          // group by level
          <li
            key={index}
            // className={`capitalize ${index < 2 ? 'h-7' : ''}`}>
            className="capitalize">
            <div className="my-1 flex flex-col sm:flex-row">
              <div className="font-semibold leading-normal text-gray-700 print:w-[100px] md:w-[100px]">{`${skillOb.level}:`}</div>
              <div className="text-gray-700">{skillOb.skills.join(', ')}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

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
            key={skillOb.level}
            className={`capitalize ${index < 2 ? 'h-7' : ''}`}
          >
            <div className="flex">
              <p className="text-gray-700 leading-normal mr-3">{`${skillOb.level}:`}</p>
              <p className="text-gray-700 leading-normal">
                {skillOb.skills.join(', ')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

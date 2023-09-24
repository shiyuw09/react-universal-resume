import { EducationInfo } from '.';

const educationNUS: EducationInfo = {
  name: 'National University of Singapore',
  degree: 'Master of Technology in Software Engineering',
  date: '2022 - 2023',
  courses: [
    'Architecting Software Solutions',
    'DevOps Engineering and Automation',
    'Cloud Native Solution Design',
    'Architecting IoT Solutions',
    'Edge Computing',
    'Cloud Computing',
    'Humanizing Smart Systems',
  ],
};

const educationHUST: EducationInfo = {
  name: 'Huazhong University of Science and Technology, China',
  degree: 'Information Management and Information Systems',
  // degree:
  //   'Bachelor of Management in Information Management and Information Systems',
  date: '2008 - 2012',
  courses: [
    'Object-Oriented Programming',
    'Data Structure',
    'Database Management',
    'C Programming',
  ],
};

export const educationData: EducationInfo[] = [educationNUS, educationHUST];

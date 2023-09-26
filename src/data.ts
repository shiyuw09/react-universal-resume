import { IContact, IEducation, IProject, IWorkExperience } from '.';

export const contactInfo: IContact = {
  name: 'John Doe',
  phone: '(123) 456-7890',
  email: 'johndoe@gmail.com',
  github: 'github.com/johndoe',
  linkedin: 'linkedin.com/in/johndoe',
  blog: 'johndoe.com',
};

/* Sample Education Info */
export const educationData: IEducation[] = [
  {
    name: 'Stanford University',
    degree: 'Master of Computer Science',
    date: '2018 - 2020',
    courses: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
    ],
  },
  {
    name: 'University of Michigan',
    degree: 'Bachelor of Computer Science',
    date: '2014 - 2018',
    courses: ['Data Structures', 'Operating Systems', 'Web Development'],
  },
];

/* Sample Project Info */
export const projectsInfo: IProject[] = [
  {
    name: 'HealthMate',
    description:
      'A healthcare platform for tracking patient vitals and medical history.',
    date: 'Jan 2020 – Apr 2020',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/HealthMate',
    role: 'Back-End Developer',
    responsibilities: [
      'Implemented RESTful APIs for patient data management.',
      'Integrated authentication and authorization using JWT.',
      'Wrote unit tests using Jest and Mocha.',
    ],
    company: 'Stanford University',
  },
  {
    name: 'Budgetify',
    description: 'A budget management app for personal finance.',
    date: 'May 2020 – July 2020',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/username/Budgetify',
    role: 'Mobile App Developer',
    responsibilities: [
      'Designed and implemented the app UI using Flutter.',
      'Integrated Firebase for real-time data sync across devices.',
      'Set up GitHub Actions for CI/CD.',
    ],
    company: 'Self',
  },
];

/* Sample Work Experience Info - Internships */
export const experienceIntern: IWorkExperience[] = [
  {
    type: 'internship',
    company: 'Facebook, USA',
    role: 'Software Engineer Intern',
    date: 'May 2019 – Aug 2019',
    companyDescription: 'Worked in the social graph team.',
    technologies: ['Python', 'GraphQL'],
    responsibilities: [
      'Implemented features for the social graph.',
      'Optimized database queries for performance.',
    ],
    responsibilitySummary: 'Worked on back-end features and optimizations.',
  },
];

/* Sample Work Experience Info - Full-Time Jobs */
export const experienceWork: IWorkExperience[] = [
  {
    type: 'work experience',
    company: 'Google, USA',
    role: 'Software Engineer',
    date: 'Jan 2021 - Present',
    companyDescription: 'Working in the Search team.',
    technologies: ['C++', 'Python'],
    responsibilities: [
      'Implemented new features for Google Search.',
      'Worked on code optimizations for low-latency searching.',
    ],
    responsibilitySummary: 'Full-stack developer in the Search team.',
  },
];

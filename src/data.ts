import { IEducation, IProject, IWorkExperience } from '.';

/* Education Info */
export const educationData: IEducation[] = [
  {
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
  },
  {
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
  },
];

/* Project Info */
export const projectsInfo: IProject[] = [
  {
    name: 'IoT-based Fall Detection System for Home Safety',
    description:
      'Used IoT and cloud computing technologies with wearables, edge devices, and intelligent algorithms for real-time fall detection and timely notifications.',
    date: 'Jan 2023 – May 2023',
    technologies: ['JavaScript', 'Python', 'AWS'],
    github: 'https://github.com/NUS-ArchSS/fall-detection-iot-solution',
    role: 'Full Stack Developer',
    responsibilities: [
      'Created JavaScript applications on Bangle.js 2 smartwatch to collect sensor data for fall detection.',
      'Developed Python applications on Raspberry Pi for data processing, storage, and uploading data to AWS for analysis.',
      'Integrated AWS IoT Core, IoT Greengrass, and Amazon SNS to enable device automation and real-time user notifications via SMS and email.',
    ],
    company: 'National University of Singapore',
  },
  {
    name: 'iQue Platform',
    description:
      'A platform providing queue information and online queuing service for various shops, including websites for both merchants and customers.',
    date: 'Sep 2022 – Oct 2022',
    technologies: ['Vue.js', 'Tailwind CSS', 'PWA', 'JavaScript'],
    github: 'https://github.com/nus-star6ucks/ique-qms',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed key features of merchant pages (Vue.js) - register, login, manage queues, call customers, send notifications etc.',
      'Developed core features of backend microservices - queue service (Java, Spring Boot).',
      'Integrated Cloud Firebase, OneSignal, and PWA for notifications.',
      'Created unit tests based on technologies such as JUnit and Mockito.',
      'Integrated GitHub Actions & Google Cloud Build for CI/CD pipeline.',
      'Set up Google Cloud SQL, Storage, GKE (Kubernetes Engine), and Ingress load balancer to achieve high availability and scalability of the application.',
    ],
    company: 'National University of Singapore',
  },
];

export const experienceIntern: IWorkExperience[] = [
  {
    type: 'internship',
    company: 'LDR Pte Ltd, Singapore',
    role: 'Full Stack Developer',
    date: 'Mar 2023 – Aug 2023',
    companyDescription: "Rebuild the company's Content Management System",
    technologies: ['React', 'Tailwind CSS', 'Radix UI', 'TypeScript'],
    responsibilities: [
      'Developed user and content management features for CMS.',
      'Created unit tests with Vitest, Jest, and React Testing Library.',
      'Set up CI/CD pipeline with GitHub Actions & AWS Fargate.',
      'Built backend services on the Appwrite platform.',
    ],
    responsibilitySummary: '',
  },
];

export const experienceWork: IWorkExperience[] = [
  {
    type: 'work experience',
    company: 'Yuanfudao, Beijing, China',
    role: 'Software Development Engineer in Test',
    date: 'Jun 2015 - Sep 2021',
    companyDescription: 'Top 3 largest online education company in China',
    technologies: ['Vue.js', 'Java'],
    responsibilities: [
      'Developed features for the front-end website for the integration testing platform written in Vue.js.',
      'Designed and implemented automated tests based on project requirements, utilising technologies such as Junit and Swagger Codegen to create regression tests and end-to-end integration tests of APIs.',
      'Familiar with basic Git operations and the code deployment process, participated in code reviews for all unit tests written by developers.',
    ],
    responsibilitySummary: '',
  },
  {
    type: 'work experience',
    companyDescription: '',
    technologies: [],
    responsibilitySummary: 'Functional Testing / UI Automation Testing',
    responsibilities: [
      'Responsible for all functional tests for the company’s mobile client, including iOS, Android, and H5.',
      'Created UI automation tests with Selenium to achieve UI regression testing for the web application.',
    ],
    company: 'Lvmama Tourism, Shanghai, China',
    date: 'Aug 2014 - Jun 2015',
    role: 'Software Test Engineer',
  },
  {
    type: 'work experience',
    companyDescription: '',
    technologies: [],
    responsibilities: [
      'Developed features for the front-end website for the integration testing platform written in Vue.js.',
      'Designed and implemented automated tests based on project requirements, utilising technologies such as Junit and Swagger Codegen to create regression tests and end-to-end integration tests of APIs.',
      'Familiar with basic Git operations and the code deployment process, participated in code reviews for all unit tests written by developers.',
    ],
    company: 'Aidingke, Shanghai, China',
    date: 'May 2013 - Jul 2014',
    role: 'Software Test Engineer',
    responsibilitySummary: 'Functional Testing / SVN Version Control',
  },
];

export const experienceTesting: IWorkExperience[] = [
  {
    type: 'work experience',
    companyDescription: '',
    technologies: [],
    responsibilitySummary: 'Functional Testing / UI Automation Testing',
    responsibilities: [
      'Responsible for all functional tests for the company’s mobile client, including iOS, Android, and H5.',
      'Created UI automation tests with Selenium to achieve UI regression testing for the web application.',
    ],
    company: 'Lvmama Tourism, Shanghai, China',
    date: 'Aug 2014 - Jun 2015',
    role: 'Software Test Engineer',
  },
  {
    type: 'work experience',
    companyDescription: '',
    technologies: [],
    responsibilities: [
      'Developed features for the front-end website for the integration testing platform written in Vue.js.',
      'Designed and implemented automated tests based on project requirements, utilising technologies such as Junit and Swagger Codegen to create regression tests and end-to-end integration tests of APIs.',
      'Familiar with basic Git operations and the code deployment process, participated in code reviews for all unit tests written by developers.',
    ],
    company: 'Aidingke, Shanghai, China',
    date: 'May 2013 - Jul 2014',
    role: 'Software Test Engineer',
    responsibilitySummary: 'Functional Testing / SVN Version Control',
  },
];

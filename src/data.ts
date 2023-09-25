import { IEducation, IProject } from '.';

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
    date: 'Oct 2022 – Sep 2022',
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

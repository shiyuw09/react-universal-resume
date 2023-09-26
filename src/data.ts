import { IContact, IEducation, IProject, IWorkExperience } from '.';

// Contact Information
export const contactInfo: IContact = {
  name: "Jane 'Debugger' Doe",
  phone: '555-COD-ER45',
  email: 'debuggerjane@example.com',
  github: 'https://github.com/debuggerjane',
  linkedin: 'https://www.linkedin.com/in/debuggerjane/',
  blog: 'https://bug-free-zone.dev',
};

// Education Information
export const educationData: IEducation[] = [
  {
    name: 'Hogwarts School of Witchcraft and Coding',
    degree: 'Bachelor of Magic in Computer Science',
    date: '2016-2020',
    courses: [
      'Potion++',
      'Defense Against the Dark Bugs',
      'Transfiguration of Data',
    ],
  },
  {
    name: 'Ninja Coding Dojo',
    degree: 'Black Belt in Front-end Development',
    date: '2021',
    courses: ['Stealth JavaScript', 'React Shuriken', 'Tailwind Ninjutsu'],
  },
];

// Project Information
export const projectsInfo: IProject[] = [
  {
    name: 'E-Commerce on Mars',
    description: 'Because Martians need online shopping too!',
    date: '2022',
    technologies: ['JavaScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/debuggerjane/e-commerce-on-mars',
    role: 'Front-end Astronaut',
    responsibilities: [
      "Developed UI that's so fast it feels like it's from another planet, boosting user engagement by 42%",
      'Implemented state management that even Martians found simple to navigate, leading to fewer abandoned carts',
      'Integrated Earth-to-Mars payment gateway; achieved a successful transaction latency of under 22 Martian minutes',
    ],
    company: 'MartianTech',
  },
  {
    name: 'Task Manager for Time Travelers',
    description:
      'Never forget what you did yesterday, or will do 300 years from now.',
    date: '2021',
    technologies: ['JavaScript', 'React', 'Firebase'],
    github: 'https://github.com/debuggerjane/task-manager-for-time-travelers',
    role: 'Temporal Front-end Developer',
    responsibilities: [
      'Designed a UI that adapts to fashion trends across eras, increasing user retention in the Middle Ages by 13%',
      'Created a Firestore database schema to accommodate tasks in various timelines; reduced paradoxes by 26%',
      'Implemented OAuth with 4D secure authentication; reduced unauthorized timeline alterations by 99%',
    ],
    company: 'XYZ-Timelines Inc',
  },
];

// Work Experience Information
export const experienceWork: IWorkExperience[] = [
  {
    type: 'work experience',
    company: 'The Avengers of Tech',
    role: 'Front-end Superhero',
    date: '2022-Present',
    companyDescription:
      'When bugs threaten the world, we are the ones to call.',
    technologies: ['JavaScript', 'React', 'Tailwind CSS'],
    responsibilities: [
      'Built a dashboard faster than Quicksilver, improving load time by 60%',
      "Led performance optimization tasks; web apps now feel as light as Thor's hammer (to Thor, not to you)",
      "Used React context API to manage global state, reducing re-render faster than Thanos' snap",
    ],
    responsibilitySummary: 'Saving the world, one line of code at a time.',
  },
  {
    type: 'work experience',
    company: 'Pirate Code Inc',
    role: 'Front-end Swashbuckler',
    date: '2021-2022',
    companyDescription: 'Where coding meets the high seas.',
    technologies: ['JavaScript', 'React'],
    responsibilities: [
      "Developed the UI using a treasure map as a wireframe; increased user 'arrrr-rate' by 33%",
      'Integrated ship-to-ship messaging API; reduced miscommunication during boardings by 47%',
      'Wrote custom Hooks that even Captain Hook found useful; reduced boilerplate by 25%',
    ],
    responsibilitySummary:
      'Developed the front-end while sailing through agile sprints and avoiding actual sprints.',
  },
];

export const experienceIntern: IWorkExperience[] = [
  {
    type: 'Internship',
    company: 'Jurassic Systems',
    role: 'Junior Dino Developer',
    date: '2020-2021',
    companyDescription: 'We brought the dinosaurs back, now we need a website.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    responsibilities: [
      "Maintained a website that's older than some of the dinosaurs; improved SEO ranking from Cretaceous to Jurassic era",
      'Fixed a critical bug that occasionally let the T-Rex out; incidents reduced by 100%',
      "Optimized loading time so it's faster than a Velociraptor; improved user experience significantly",
    ],
    responsibilitySummary:
      'Survived a year without becoming dino dinner, while making the site better.',
  },
];

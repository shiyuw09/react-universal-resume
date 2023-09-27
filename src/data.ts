import { IContact, IEducation, IProject, ISkill, IWorkExperience } from '.';

// Contact Information
export const contactInfo: IContact = {
  name: "Jane 'Debugger' Doe",
  phone: '555-COD-ER45',
  email: 'debuggerjane@example.com',
  github: 'https://github.com/debuggerjane',
  linkedin: 'https://www.linkedin.com/in/jane/',
  blog: 'https://bug-free-zone.dev',
  aboutMe: `Front-end developer by day, code superhero by night! With a passion
  for clean, efficient design, I bring ideas to life one pixel at a
  time. Making the web a better place, one div at a time.`
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
      'Transfiguration of Data'
    ]
  },
  {
    name: 'Ninja Coding Dojo',
    degree: 'Black Belt in Front-end Development',
    date: '2021',
    courses: ['Stealth JavaScript', 'React Shuriken', 'Tailwind Ninjutsu']
  }
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
      'Integrated Earth-to-Mars payment gateway; achieved a successful transaction latency of under 22 Martian minutes'
    ],
    company: 'MartianTech'
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
      'Integrated ship-to-ship messaging API; reduced miscommunication during boardings by 47%',
      'Wrote custom Hooks that even Captain Hook found useful; reduced boilerplate by 25%'
    ],
    company: 'XYZ-Timelines Inc'
  }
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
      "Used React context API to manage global state, reducing re-render faster than Thanos' snap"
    ],
    responsibilitySummary: 'Saving the world, one line of code at a time.'
  },
  // {
  //   type: 'work experience',
  //   company: 'Pirate Code Inc',
  //   role: 'Front-end Swashbuckler',
  //   date: '2021-2022',
  //   companyDescription: 'Where coding meets the high seas.',
  //   technologies: ['JavaScript', 'React'],
  //   responsibilities: [
  //     "Developed the UI using a treasure map as a wireframe; increased user 'arrrr-rate' by 33%",
  //     'Integrated ship-to-ship messaging API; reduced miscommunication during boardings by 47%',
  //     'Wrote custom Hooks that even Captain Hook found useful; reduced boilerplate by 25%'
  //   ],
  //   responsibilitySummary:
  //     'Developed the front-end while sailing through agile sprints and avoiding actual sprints.'
  // },
  // {
  //   type: 'Full-time',
  //   company: 'CryptoZoo Adventures',
  //   role: 'Front-end Beastmaster',
  //   date: '2023-Present',
  //   companyDescription: 'We make virtual pets real and real pets virtual.',
  //   technologies: ['Solidity', 'React', 'Three.js'],
  //   responsibilities: [
  //     "Led the creation of the zoo's interactive 3D interface, which had users roaring in delight and increased daily visits by 25%",
  //     "Solved the 'CryptoPanda Escape' glitch that could have cost the company its reputation; secured the pandas and earned employee of the month",
  //     'Pioneered the use of NFTs for adoption certificates, which skyrocketed pet adoption rates by 65%'
  //   ],
  //   responsibilitySummary:
  //     'Taming digital beasts while untangling the web. Also, saving pandas.'
  // },
  {
    type: 'Part-time',
    company: 'League of Extraordinary Devs',
    role: 'Superhero Sidekick',
    date: '2022-2023',
    companyDescription:
      'Task force of tech experts, tackling global challenges.',
    technologies: ['JavaScript', 'Node.js', 'CivicTech'],
    responsibilities: [
      'Built an AI-powered chatbot to distribute relief information during natural disasters, cutting through red tape like a lightsaber through butter',
      'Developed a real-time translation feature, shattering language barriers and allowing global teams to collaborate instantaneously',
      'Coordinated weekly Hacktivist Events; coding solutions for local community problems',
      'Integrated ship-to-ship messaging API; reduced miscommunication during boardings by 47%',
      'Wrote custom Hooks that even Captain Hook found useful; reduced boilerplate by 25%'
    ],
    responsibilitySummary: 'Saving the world one git commit at a time.'
  },
  {
    type: 'Freelance',
    company: 'Intergalactic Freelance',
    role: 'Cosmic Front-end Engineer',
    date: '2020-2022',
    companyDescription: 'Providing tech solutions throughout the Milky Way.',
    technologies: ['HTML', 'CSS', 'AlienScript'],
    responsibilities: [
      'Launched a star-rating app for intergalactic travel agencies, boosting user engagement across the solar system',
      "Singlehandedly defeated a rogue AI attempting to monopolize the galaxy's Wi-Fi; restored balance to the Force, I mean Internet",
      'Optimized website load times to be faster than light speed, ensuring that even beings from other dimensions could access client sites'
    ],
    responsibilitySummary:
      'Bridging galaxies through code, defeating rogue AIs, and generally being awesome.'
  }
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
      "Optimized loading time so it's faster than a Velociraptor; improved user experience significantly"
    ],
    responsibilitySummary:
      'Survived a year without becoming dino dinner, while making the site better.'
  }
];

export const skills: ISkill[] = [
  {
    level: 'advanced',
    skills: [
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Git',
      'Webpack',
      'State Management'
    ]
  },
  {
    level: 'familiar',
    skills: ['HTML', 'CSS', 'Firebase', 'TypeScript']
  },
  {
    level: 'used',
    skills: ['Node.js', 'Docker', 'AWS', 'GraphQL', 'Redux']
  }
];

export interface IContact {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  blog: string;
}
export interface IEducation {
  name: string;
  degree: string;
  date: string;
  courses: string[];
}

export interface IProject {
  name: string;
  description: string;
  date: string;
  technologies: string[];
  github: string;
  role: string;
  responsibilities: string[];
  company: string;
}

export interface IWorkExperience {
  type: string;
  company: string;
  role: string;
  date: string;
  companyDescription: string;
  technologies: string[];
  responsibilities: string[];
  responsibilitySummary: string;
}

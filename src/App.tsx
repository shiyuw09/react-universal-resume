import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Skills from './components/Skills';
import {
  educationData,
  experienceIntern,
  experienceWork,
  projectsInfo,
} from './data';
import reactLogo from './assets/react.svg';
import tsLogo from './assets/ts-logo-128.svg';
import viteLogo from '/vite.svg';
import { Github } from 'lucide-react';

function App() {
  return (
    <>
      <main className="font-firago mx-auto text-left">
        {/* Page */}
        <div className="bg-white p-6 mx-auto max-w-2xl print:max-w-a4 md:max-w-a4 md:h-a4 md:p-16">
          {/* Name */}
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-750 pb-px">
              Wang Shiyu
            </h1>
          </header>
          {/* end Name */}
          <AboutMe />
          <Education eduArray={educationData} />
          <Project projects={projectsInfo} />
          <Experience expArray={experienceIntern} />
        </div>
        {/* end Page */}
        {/* Page */}
        <div className="bg-white p-6 mx-auto mb-2 max-w-2xl print:max-w-a4 md:max-w-a4  md:p-16">
          <Experience expArray={experienceWork} />
          {/* <TestingExp expArray={experienceTesting} /> */}
          <Skills skills={[]} />
          <Contact />
        </div>
        <footer>
          <div className="flex justify-center items-center text-center">
            <span className="text-gray-700"> Made with </span>
            {/* <Heart className="inline-block w-4 text-red-500" />{' '} */}
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="inline-block"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="inline-block"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="inline-block"
            >
              <img src={tsLogo} className="logo" alt="TypeScript logo" />
            </a>
          </div>
          <p className="text-center text-gray-700">
            Inspired by{' '}
            <div className="underline inline-block">
              <Github className="inline-block w-5 h-5 -mt-1 -mr-1" />{' '}
              <a
                href="https://github.com/WebPraktikos/universal-resume"
                target="_blank"
              >
                WebPraktikos/universal-resume
              </a>
            </div>
          </p>
          <p className="text-center text-gray-650 text-xs italic mt-2">
            Last updated: 25 Sep, 2023
          </p>
        </footer>
        {/* end Page */}
      </main>
    </>
  );
}

export default App;

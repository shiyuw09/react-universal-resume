import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Skills from './components/Skills';
import { educationData } from './data';

function App() {
  return (
    <>
      <main className="font-firago mx-auto text-left">
        {/* Page */}
        <div className="bg-white p-6 mx-auto max-w-2xl">
          {/* Name */}
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-750 pb-px">
              Wang Shiyu
            </h1>
          </header>
          <AboutMe />
          <Education eduArray={educationData} />
          <Project
            name={''}
            description={''}
            date={''}
            technologies={[]}
            github={''}
            role={''}
            responsibilities={[]}
            company={''}
          />
          <Experience
            type={'internship'}
            company={''}
            role={''}
            date={''}
            description={''}
            technologies={[]}
            responsibilities={[]}
          />
          <Experience
            type={'work experience'}
            company={''}
            role={''}
            date={''}
            description={''}
            technologies={[]}
            responsibilities={[]}
          />
          <Skills skills={[]} />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;

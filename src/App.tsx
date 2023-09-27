import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Project from './components/Project';
import Skills from './components/Skills';
import {
  educationData,
  experienceIntern,
  experienceWork,
  contactInfo,
  projectsInfo,
  skills
} from './data';

function App() {
  return (
    <>
      <main className="mx-auto text-left font-firago">
        {/* Page */}

        <div className="page mx-auto max-w-2xl bg-white p-6 print:max-w-a4 xsm:p-8 sm:p-9 md:h-a4 md:max-w-a4 md:p-16">
          {/* Name */}
          <header className="mb-8 md:mb-11">
            <h1 className="pb-px text-center text-2xl font-semibold text-gray-750">
              {contactInfo.name}
            </h1>
          </header>
          {/* end Name */}

          <div className="print:h-a4-col-full md:h-a4-col-full">
            <AboutMe />
            <Education eduArray={educationData} />
            <Project projects={projectsInfo} />
            <Experience expArray={experienceIntern} />
          </div>
        </div>
        {/* end Page */}

        {/* Page */}
        <div className="page mx-auto max-w-2xl bg-gray-100 p-6 print:mt-2 print:max-w-a4 print:bg-white xsm:p-8 sm:p-9 md:h-a4 md:max-w-a4 md:p-16">
          <div className="print:h-a4-col-full md:h-a4-col-full">
            <Experience expArray={experienceWork} />
            <Skills skills={skills} />
            <Contact contact={contactInfo} />
          </div>
        </div>
        <Footer />
        {/* end Page */}
      </main>
    </>
  );
}

export default App;

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
} from './data';

function App() {
  return (
    <>
      <main className="font-firago mx-auto text-left">
        {/* Page */}
        <div className="bg-white p-6 mx-auto max-w-2xl print:max-w-a4 md:max-w-a4 md:p-16">
          {/* Name */}
          <header className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-750 pb-px text-center">
              {contactInfo.name}
            </h1>
          </header>
          {/* end Name */}
          <AboutMe />
          <Education eduArray={educationData} />
          <Project projects={projectsInfo} />
          <Experience expArray={experienceIntern} />
          <Experience expArray={experienceWork} />
          <Skills skills={[]} />
          <Contact contact={contactInfo} />
        </div>
        <Footer />
        {/* end Page */}
      </main>
    </>
  );
}

export default App;

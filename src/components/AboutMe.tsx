import { contactInfo } from '../data';
import MyH2 from './MyH2';

function AboutMe() {
  return (
    <section className="mb-8">
      <div className="break-inside-avoid">
        <MyH2 text="About me" />
        <p className="text-gray-700">{contactInfo.aboutMe}</p>
      </div>
    </section>
  );
}

export default AboutMe;

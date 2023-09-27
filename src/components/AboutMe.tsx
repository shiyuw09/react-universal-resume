import MyH2 from './MyH2';

function AboutMe() {
  return (
    <section className="mb-8">
      <div className="break-inside-avoid">
        <MyH2 text="About me" />
        <p className="text-gray-700">
          Front-end developer by day, code superhero by night! With a passion
          for clean, efficient design, I bring ideas to life one pixel at a
          time. Making the web a better place, one div at a time.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

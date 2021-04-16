import "./about.css";
import self from "../../assets/self.jpg";

// Use whatever image, SoC avatar for placeholder

function About() {
  return (
    <div className="about">
      <h1 className="text">About Me</h1>
      <img className="self" src={self} alt="me" />
      <p className="text">
        I'm Mell and I'm a developer. <br />
        Prior to 2020 I had almost no experience in coding, I worked in fast
        food restaurants and felt quite stuck. So in January 2020 I decided to
        follow my dreams of being a developer. I joined the School of Code
        bootcamp and haven't looked back. <br />
        After 4 months of serious hard work, many projects - some of which you
        can see on my projects page - and help from a great community, I
        graduated from SoC and became a developer. A month later, I joined SoC
        as a code coach and started teaching people who were in the exact same
        position that I was, six months before. <br />I went from knowing
        practically nothing, to teaching the subject in just six months.
      </p>
    </div>
  );
}

export default About;

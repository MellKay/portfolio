import "./about.css";
import self from "../../assets/self.jpg"

// Use whatever image, SoC avatar for placeholder

function About() {
  return (
    <div className="about">
    <img className="self" src={self} alt="me" />
      <h1 className="text">About Me</h1>
      <p className="text">Blah blah blah Mell is awesome blah blah blah</p>
    </div>
  );
}

export default About;

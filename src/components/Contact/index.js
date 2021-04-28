import "./contact.css";
import LinkedInLogo from '../../assets/linkedin.svg'
import TwitterLogo from '../../assets/twitter.svg'
import GithubLogo from '../../assets/github.svg'
import EmailLogo from '../../assets/email.svg' 

function Contact() {
  return (
    <div className="contact">
    <h1 className="textContact">Contact Me</h1>
    <div className="logos">
    <a href="https://www.linkedin.com/in/mellrusson/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="" /></a>
    <a href="https://twitter.com/MellKayR" target="_blank" rel="noreferrer"><img src={TwitterLogo} alt="" /></a>
    <a href="https://github.com/MellKay" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="" /></a>
    <a href="mailto:mellkayrusson@gmail.com" target="_blank" rel="noreferrer"><img src={EmailLogo} alt="" /></a>
    </div>
    </div>
  );
}

export default Contact;

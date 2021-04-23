import "./contact.css";
import LinkedInLogo from '../../assets/linkedin.svg'
import TwitterLogo from '../../assets/twitter.svg'
import GithubLogo from '../../assets/github.svg'
import EmailLogo from '../../assets/email.svg' 

function Contact() {
  return (
    <div className="contact">
    <h1 className="textContact">Contact</h1>
    <div className="logos">
    <a href="https://www.linkedin.com/in/mellrusson/" target="_blank"><img src={LinkedInLogo}/></a>
    <a href="https://twitter.com/MellKayR" target="_blank"><img src={TwitterLogo} /></a>
    <a href="https://github.com/MellKay" target="_blank"><img src={GithubLogo}/></a>
    <a href="mailto:mellkayrusson@gmail.com" target="_blank"><img src={EmailLogo}/></a>
    </div>
    </div>
  );
}

export default Contact;

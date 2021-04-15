import "./contact.css";
import ContactLogo from './ContactLogo'
import LinkedInLogo from './LinkedInLogo'
import TwitterLogo from './TwitterLogo'
import GithubLogo from './GithubLogo'
import EmailLogo from './EmailLogo' 

function Contact() {
  return (
    <div className="contact">
    <ContactLogo/>
    <div className="logos">
    <a href="https://www.linkedin.com/in/mellrusson/" target="_blank"><div className="linkedin"><LinkedInLogo/></div></a>
    <a href="https://twitter.com/MellKayR" target="_blank"><div className="twitter"><TwitterLogo/></div></a>
    <a href="https://github.com/MellKay" target="_blank"><div className="github"><GithubLogo/></div></a>
    <a href="mailto:mellkayrusson@gmail.com" target="_blank"><div className="email"><EmailLogo/></div></a>
    </div>
    </div>
  );
}

export default Contact;

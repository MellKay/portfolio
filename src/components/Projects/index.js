import "./projects.css";

import img1 from "../../assets/bnaHome.png";
import img2 from "../../assets/ani-matehome.png";
import img3 from "../../assets/twitterBot.PNG";
import { useState } from "react";

function Projects() {
  // 9 containers with thumbnail images
  // on click a container renders to the right of the thumbnails with screen shot, short description and link to hosted site/repo
  // Array of objects with each project - map over each and render thumbnails, on click will activate conditional render
  // if thumbnail - image
  // if full description - image, info and link
  // conditional render if 1 = true show objects within 1

  const projects = [
    {
      id: 0,
      title: "Bootcamper Community App",
      img: img1,
      description:
        "This was the result of our final project at the School of Code. We had 4 weeks to design and build a full stack community app for bootcampers. It has several features including a bootcamper list where you can see all bootcampers, past and present. It has a companies list where new bootcampers can see where previous bootcampers are working so they can get a good idea of where they can go and it has a list of relevent events in the area pulled from the meetup API, as well as many other features.",
      repo: "https://github.com/SchoolOfCode/Bootcamper-Network-App-React",
      liveSite: "https://bootcamper-network.netlify.app/",
    },
    {
      id: 1,
      title: "Ani-Mate",
      img: img2,
      description:
        "This is Ani-Mate, a month long project made by a small group for the Code First Girls: Hack from Home project. The idea behind this project was helping take care of yourself using a small virtual pet. Users would click the hunger button when they eat to feed Ani, the health button when they shower or sleep, and the happiness button when they do anything that makes them happy! We felt this would encourage remembering to take care of yourself, especially given that this was built during the lockdown when many people were having a hard time doing so.",
      repo: "https://github.com/MellKay/Hack-From-Home",
    },
    {
      id: 2,
      title: "Bootcamper Twitter Bot",
      img: img3,
      description:
        "This is a twitter bot that was created as part of our final project at School of Code, but deserves its own slot on my portfolio as it's something I'm very proud of making. It looks for tweets with hashtags such as #SchoolOfCode and retweets them to boost their numbers. It also retweets everything tweeted by @theSchoolOfCode. It was originally created so we could have a twitter feed on the homepage of our app that only showed specific and relevant tweets, without having to go and manually retweet every single one. It still recieves updates, particularly on SoC demo days to show support for the bootcampers.",
      repo: "https://github.com/MellKay/twitter-bot-jomellen",
      liveSite: "https://twitter.com/BootcamperBot",
    },
  ];

  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div className="projects">
      <h1>my projects</h1>
      <div className="container">
        <div className="grid-container">
          {projects.map((item) => (
            <div className="grid-item">
              <img
                src={item.img}
                className="thumbnail" alt=""
                onClick={() => setCurrentProject(projects[item.id])}
              />
            </div>
          ))}
        </div>
        <div className="project-display">
          <h2>{currentProject.title}</h2>
          <img src={currentProject.img} className="display-img" alt="" />
          <p>{currentProject.description}</p>
          {currentProject.liveSite && (
            <a href={currentProject.liveSite}>Live Hosted Site </a>
          )}
          <br />
          {currentProject.repo && <a href={currentProject.repo}>Github Repo</a>}
        </div>
      </div>
    </div>
  );
}

export default Projects;

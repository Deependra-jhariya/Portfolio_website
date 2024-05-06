import React from "react";
import "./styles.css";
import Deependra_img from "../../assets/Deependra_img.jpeg";
const About = () => {
  return (
    <div className="main_container">
      <div className="image_container">
        <img src={Deependra_img} alt="Description of the image" />
      </div>
      <div className="content_container">
        <div className="heading_name">
          <h1 className="text">I'm DEEPENDRA. A Mobile Application developer.</h1>
        </div>
        <p className="paragraph">Completed my bachelor's in Technology from Takshila Institute of Engineering & Technology, Jabalpur. My specialization is in Computer Science Engineering. I have a deep interest in wemobile application development and I have worked on various projects using the react native apart from that I am currently working at clysy software solution Pvt. Ltd. as a Software Developer Engineer, and I am always open to contributing to a great project that impacts the world.</p>
      </div>
    </div>
  );
};
export default About;

import React from "react";
import "./styles.css";
import About from "../About";
import Project from "../Project";
const Home = () => {
  return (
    <div>
      <div className="background-image-container">
        <div className="heading_name">
          <h2 className="text">
            "Hello, I'm Deependra Jhariya. I enjoy Creating Mobile Application."
          </h2>
        </div>
      </div>
      <div>
        <h1>ABOUT YOU</h1>
        <About />
      </div>
      <div>
        <h1>PROJECT</h1>
        <Project />
      </div>
    </div>
  );
};
export default Home;

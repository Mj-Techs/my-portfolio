import React from "react";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mighty-coder.svg";
import resume from "../assets/Mrityunjay_Resume.pdf";
import "../index.css";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:krmrityunjay98@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Mrityunjay <span>Kumar</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Front-End Developer</div>
      <a href={resume} download="Mrityunjay_resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img
            src={tie}
            alt="resume"
            className="sidebar__icon sidebar__resume"
          />
          Download Resume
        </div>
      </a>
      <div className="sidebar__contact">
        <div className="sidebar__item">
          <a
            href="https://www.linkedin.com/in/mrityunjay-kumar-432b5215a/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              className="sidebar__icon mr-2"
            />
            Linkedin
          </a>
        </div>
        <div className="sidebar__item">
          <a
            href="https://github.com/Mj-Techs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="sidebar__icon sidebar__github mr-2"
            />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-1" />
          Bangalore, India
        </div>
        <div className="sidebar__item">krmrityunjay98@gmail.com</div>
        <div className="sidebar__item">7986743940/9779631762</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </div>
  );
};

export default Sidebar;

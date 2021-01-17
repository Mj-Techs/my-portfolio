import React from "react";

import { FaReact, FaGitSquare } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiBootstrap,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiFirebase,
  SiJsonwebtokens,
  SiStyledComponents,
  SiHeroku,
} from "react-icons/si";

import {
  ResumeWrapper,
  LanguageWrapper,
  EducationWrapper,
  ExperienceWrapper,
} from "../App-style";
import Bar from "./Bar";

const languages = [
  {
    icon: <FaReact />,
    name: "React",
    level: "75",
  },
  {
    icon: <SiRedux />,
    name: "Redux",
    level: "70",
  },
  {
    icon: <SiJavascript />,
    name: "javaScript",
    level: "80",
  },
  {
    icon: <IoLogoCss3 />,
    name: "CSS3",
    level: "50",
  },
  {
    icon: <AiFillHtml5 />,
    name: "HTML",
    level: "50",
  },
  {
    icon: <SiStyledComponents />,
    name: "Styled-Component",
    level: "64",
  },
];

const tools = [
  {
    icon: <FaGitSquare />,
    name: "git",
    level: "50",
  },
  {
    icon: <SiPostman />,
    name: "postman",
    level: "80",
  },
  {
    icon: <SiFirebase />,
    name: "firebase",
    level: "65",
  },
  {
    icon: <SiJsonwebtokens />,
    name: "jwt",
    level: "80",
  },
  {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    level: "45",
  },
  {
    icon: <SiHeroku />,
    name: "Heroku",
    level: "60",
  },
];
const Resume = () => {
  return (
    <ResumeWrapper>
      <EducationWrapper>
        <h4 className="resume-card__heading">Education</h4>
        <div className="resume-card__body">
          <h5 className="resume-card__title">Computer Science Engineering</h5>
          <p className="resume-card__name">
            Amritsar College Of Engineering and Technology(2016-2020)
          </p>
          <p className="resume-card__details">
            I have completed my B.Tech in Computer Science Engineering from
            Amritsar College Of Engineering And Technology
          </p>
        </div>
      </EducationWrapper>
      <ExperienceWrapper>
        <h4 className="resume-card__heading">Experience</h4>
        <div className="resume-card__body">
          <h5 className="resume-card__title">Trainee</h5>
          <p className="resume-card__name">DCT Academy (july2020-ongoing)</p>
          <p className="resume-card__details">
            Currently i'm persuing full stack development trainning from DCT
            Academy and also i have completed my Front-End Development trainning
            where i completed some frontend projects with REST api.
          </p>
        </div>
      </ExperienceWrapper>

      <LanguageWrapper>
        <div className="resume-languages">
          <h5 className="resume-language__heading">Language</h5>

          <div className="resume-language__body mt-3">
            {languages.map((language, i) => (
              <Bar {...language} key={i} />
            ))}
          </div>
        </div>
        <div className="resume-languages">
          <h5 className="resume-language__heading">Tools and Libraries</h5>

          <div className="resume-language__body mt-3">
            {tools.map((tool, i) => (
              <Bar {...tool} key={i} />
            ))}
          </div>
        </div>
      </LanguageWrapper>
    </ResumeWrapper>
  );
};

export default Resume;

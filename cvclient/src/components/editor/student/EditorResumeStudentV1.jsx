import React from "react";
import classes from "../editor.module.css";
import MailIcon from "../../../assets/images/mail.png";
import TelephoneIcon from "../../../assets/images/telephone.png";
import LocationIcon from "../../../assets/images/location.png";
import LinkedinIcon from "../../../assets/images/linkedin-logo.png";
import GithubIcon from "../../../assets/images/github.png";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
import { TextAny } from "../../../language/langTexts";

const EditorResumeStudentV1 = ({
  color,
  name,
  surname,
  isPhoneNumber,
  phoneNumber,
  isEmail,
  email,
  isLocation,
  location,
  isGitHub,
  github,
  isLinkedin,
  linkedin,
  profileDescription,
  aboutme,
  experienceList,
  projectList,
  skillList,
  languageList,
  image,
  reportTemplateRef,
  educationList,
  softSkillList,
}) => {
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div
        className={`${classes["personal-details"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}
      >
        <div className={classes["image-container"]}>
          <img className={classes.image} src={image} alt="CV" />
          <div className={classes["background-image-div"]}></div>
        </div>

        <div className={classes.descontent}>
          <h2 className={classes.name}>
            {name} {surname}
          </h2>
          <ul className={classes["descontent-ul"]}>
            <li
              className={
                isPhoneNumber
                  ? classes["descontent-ul-li"]
                  : classes["display-none"]
              }
            >
              <img
                src={TelephoneIcon}
                alt="TelephoneIcon"
                className={classes.icon}
              />
              <p className={classes["personal-data"]}>{phoneNumber}</p>
            </li>
            <li
              className={
                isEmail ? classes["descontent-ul-li"] : classes["display-none"]
              }
            >
              <img src={MailIcon} alt="MailIcon" className={classes.icon} />
              <p className={classes["personal-data"]}>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </li>
            <li
              className={
                isLocation
                  ? classes["descontent-ul-li"]
                  : classes["display-none"]
              }
            >
              <img
                src={LocationIcon}
                alt="LocationIcon"
                className={classes.icon}
              />
              <p className={classes["personal-data"]}>{location}</p>
            </li>
            <li
              className={
                isLinkedin
                  ? classes["descontent-ul-li"]
                  : classes["display-none"]
              }
            >
              <img
                src={LinkedinIcon}
                alt="LinkedinIcon"
                className={classes.icon}
              />
              <p className={classes["personal-data"]}>{linkedin}</p>
            </li>
            <li
              className={
                isGitHub ? classes["descontent-ul-li"] : classes["display-none"]
              }
            >
              <img src={GithubIcon} alt="GithubIcon" className={classes.icon} />
              <p className={classes["personal-data"]}>{github}</p>
            </li>
          </ul>

          <div className={classes["personal-data-container"]}>
            <ul>
              <li>
                <p className={classes["personal-data-title"]}>
                  <TextAny text="section_about_me" />
                </p>
                <hr className={classes["personal-data-hr"]} />
                <span className={classes["personal-des"]}>{aboutme}</span>
              </li>
              <li>
                <p className={classes["personal-data-title"]}>
                  <TextAny text="section_languages" />
                </p>
                <hr className={classes["personal-data-hr"]} />
                <div>
                  {languageList.map((language, index) => (
                    <ul key={index}>
                      <p>{language.language}</p>
                    </ul>
                  ))}
                </div>
              </li>

              <li>
                <p className={classes["personal-data-title"]}>
                  <TextAny text="section_soft_skills" />
                </p>
                <hr className={classes["personal-data-hr"]} />
                <div>
                  {softSkillList.map((skill, index) => (
                    <p>{skill.softSkill}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["skills-projects"]}>
        <h2 className={classes["knowledge-title"]}>
          <TextAny text="section_education" />
        </h2>
        <hr />
        <div>
          {educationList.map((todo, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["p-year"]}>{todo.schoolStartYear}</p>
                <p className={classes["p-year"]}>{todo.schoolFinishYear}</p>
              </div>
              <p className={classes["width70"]}>
                {todo.schoolName}, {todo.schoolCity}
              </p>
            </ul>
          ))}
        </div>

        <h2 className={classes["knowledge-title"]}>
          <TextAny text="section_tech_skills" />
        </h2>
        <hr />
        <div>
          {skillList.map((skill, index) => (
            <ul key={index}>
              <li>{skill.skill}</li>
            </ul>
          ))}
        </div>

        <h2 className={classes["knowledge-title"]}>
          <TextAny text="section_projects" />
        </h2>
        <hr />
        <div>
          {projectList.map((project, index) => (
            <ul className={classes["ul-project"]} key={index}>
              <h3>{project.projectName}</h3>
              <a>{project.projectLink}</a>
              <p>{project.projectDescription}</p>
            </ul>
          ))}
        </div>

        <h2 className={classes["knowledge-title"]}>
          <TextAny text="section_clause" />
        </h2>
        <hr />
        <div>
          <TextAny text="clause" />
        </div>
      </div>
    </div>
  );
};

export default EditorResumeStudentV1;

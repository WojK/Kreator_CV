import React from "react";
import classes from "./editorResumeGeneralV2.module.css";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
const EditorResume2 = ({
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
}) => {
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div className={classes["cv-head"]}>
        <div className={classes["cv-namebox"]}>
          <img src={image} alt="CV" />
          <h1>
            {name} {surname}
          </h1>
          <p>{profileDescription}</p>
        </div>
        <div className={classes["cv-contact"]}>
          {isEmail && (
            <div>
              <h1>E-mail</h1>
              <p>{email}</p>
            </div>
          )}
          {isPhoneNumber && (
            <div>
              <h1>Phone number</h1>
              <p>{phoneNumber}</p>
            </div>
          )}
          {isLocation && (
            <div>
              <h1>Location</h1>
              <p>{location}</p>
            </div>
          )}
        </div>
      </div>
      <div className={classes["content"]}>
        <div className={classes["cv-leftside"]}>
          {experienceList.length > 0 && (
            <div className={classes["cv_section"]}>
              <h1>Experience</h1>
              {experienceList.map((todo, index) => (
                <ul key={index}>
                  <h2>{todo.companyName}</h2>
                  <h3>
                    {todo.experienceFrom} - {todo.experienceTo}
                  </h3>
                  <h4>{todo.companyCity}</h4>
                  <div className={classes.cv_section_desc}>
                    <p>
                      Odpowiedzielny za pozyskiwanie nowych klientow nawiazywan
                      zywanie umow
                    </p>
                  </div>
                  <hr />
                </ul>
              ))}
            </div>
          )}
          {educationList.length > 0 && (
            <div className={classes["cv_section"]}>
              <h1>Education</h1>
              {educationList.map((todo, index) => (
                <ul key={index}>
                  <h2>{todo.schoolName}</h2>
                  <h3>
                    {todo.schoolStartYear} - {todo.schoolFinishYear}
                  </h3>
                  <h4>{todo.schoolCity}</h4>
                  <div className={classes.cv_section_desc}>
                    <p>
                      Odpowiedzielny za pozyskiwanie nowych klientow nawiazywan
                      zywanie umow
                    </p>
                  </div>
                  <hr />
                </ul>
              ))}
            </div>
          )}
          {projectList.length > 0 && (
            <div className={classes["cv_section"]}>
              <h1>Projects</h1>
              {projectList.map((todo, index) => (
                <ul key={index}>
                  <h2>{todo.projectName}</h2>
                  <h4>{todo.projectLink}</h4>
                  <div className={classes.cv_section_desc}>
                    <p>{todo.projectDescription}</p>
                  </div>
                  <hr />
                </ul>
              ))}
            </div>
          )}
        </div>
        <div className={classes["cv-rightside"]}>
          {aboutme && (
            <div className={classes.cv_section}>
              <h1>About me</h1>
              <p>{aboutme}</p>
            </div>
          )}
          {skillList.length > 0 && (
            <div className={classes.cv_section}>
              <h1>Skills</h1>
              <div className={classes.cv_section_list_r}>
                {skillList.map((skill, index) => (
                  <ul key={index}>
                    <li>{skill.skill}</li>
                    <hr />
                  </ul>
                ))}
              </div>
            </div>
          )}
          {languageList.length > 0 && (
            <div className={classes.cv_section}>
              <h1>Languages</h1>
              <div className={classes.cv_section_list_r}>
                {languageList.map((language, index) => (
                  <ul key={index}>
                    <li>{language.language}</li>
                    <hr />
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorResume2;

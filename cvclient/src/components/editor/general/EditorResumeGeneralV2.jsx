import React from "react";
import classes from "./editorResumeGeneralV2.module.css";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
import { TextAny } from "../../../language/langTexts";

const EditorResume2 = ({
  name,
  surname,
  isPhoneNumber,
  phoneNumber,
  isEmail,
  email,
  isLocation,
  location,
  profileDescription,
  aboutme,
  experienceList,
  skillList,
  languageList,
  image,
  hobbyList,
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
              <h1><TextAny text="editor_personal_email"/></h1>
              <p>{email}</p>
            </div>
          )}
          {isPhoneNumber && (
            <div>
              <h1><TextAny text="editor_personal_phone_number"/></h1>
              <p>{phoneNumber}</p>
            </div>
          )}
          {isLocation && (
            <div>
              <h1><TextAny text="editor_personal_location"/></h1>
              <p>{location}</p>
            </div>
          )}
        </div>
      </div>
      <div className={classes["content"]}>
        <div className={classes["cv-leftside"]}>
          {experienceList.length > 0 && (
            <div className={classes["cv_section"]}>
              <h1><TextAny text="section_experience"/></h1>
              {experienceList.map((experience, index) => (
                <ul key={index}>
                  <h2>{experience.companyName}</h2>
                  <h3>
                    {experience.experienceFrom} - {experience.experienceTo}
                  </h3>
                  <h4>{experience.companyCity}</h4>
                  <div className={classes.cv_section_desc}>
                    <p>{experience.jobDescription}</p>
                  </div>
                  <hr />
                </ul>
              ))}
            </div>
          )}
          {educationList.length > 0 && (
            <div className={classes["cv_section"]}>
              <h1><TextAny text="section_education"/></h1>
              {educationList.map((education, index) => (
                <ul key={index}>
                  <h2>{education.schoolName}</h2>
                  <h3>
                    {education.schoolStartYear} - {education.schoolFinishYear}
                  </h3>
                  <h4>{education.schoolCity}</h4>
                  <div className={classes.cv_section_desc}>
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
              <h1><TextAny text="section_about_me"/></h1>
              <p>{aboutme}</p>
            </div>
          )}
          {skillList.length > 0 && (
            <div className={classes.cv_section}>
              <h1><TextAny text="section_skills"/></h1>
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
              <h1><TextAny text="section_languages"/></h1>
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
          {hobbyList.length > 0 && (
            <div className={classes.cv_section}>
              <h1><TextAny text="section_hobbies"/></h1>
              <div className={classes.cv_section_list_r}>
                {hobbyList.map((hobby, index) => (
                  <ul key={index}>
                    <li>{hobby.hobby}</li>
                    <hr />
                  </ul>
                ))}
              </div>
            </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default EditorResume2;

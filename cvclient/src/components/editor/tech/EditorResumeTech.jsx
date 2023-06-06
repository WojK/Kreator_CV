import React from "react";
import classes from "./editorTech.module.css";
import MailIcon from "../../../assets/images/mail.png";
import TelephoneIcon from "../../../assets/images/telephone.png";
import LocationIcon from "../../../assets/images/location.png";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
import { TextAny } from "../../../language/langTexts";

const EditorResumeTech = ({
  name,
  surname,
  isPhoneNumber,
  phoneNumber,
  isEmail,
  email,
  isLocation,
  location,
  experienceList,
  skillList,
  languageList,
  image,
  reportTemplateRef,
  educationList,
}) => {
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div className={classes["personal-details"]}>
        <div className={classes.descontent}>
          <h2 className={classes.name}>
            {name} {surname}
          </h2>
          <ul className={classes["descontent-ul"]}>

          {isPhoneNumber &&<li
              className={
                classes["descontent-ul-li"]
              }
            >
              <div className={classes["descontent-ul-li-left"]} >
                <img
                  src={TelephoneIcon}
                  alt="TelephoneIcon"
                  className={classes.icon}
                />
                <p><TextAny text="editor_personal_phone_number"/></p>
              </div>

              <p className={classes["personal-data"]}>{phoneNumber}</p>

            </li>}
            {isEmail &&<li
              className={
                classes["descontent-ul-li"]
              }
            >
              <div className={classes["descontent-ul-li-left"]} >

                <img src={MailIcon} alt="MailIcon" className={classes.icon} />
                <p><TextAny text="editor_personal_email"/></p>
              </div>

              <p className={classes["personal-data"]}>{email}</p>
            </li>}
            {isLocation &&<li
              className={
                classes["descontent-ul-li"]

              }
            >
              <div className={classes["descontent-ul-li-left"]} >
                <img
                  src={LocationIcon}
                  alt="LocationIcon"
                  className={classes.icon}
                />
                <p><TextAny text="editor_personal_location"/></p>
              </div>

              <p className={classes["personal-data"]}>{location}</p>
            </li>}
          </ul>
        </div>
        <div className={classes["image-container"]}>
          <img className={classes.image} src={image} alt="CV" />
          <div className={classes["background-image-div"]}></div>
        </div>
      </div>


      <div className={classes["skills-projects"]}>
        <hr/>
        <h2><TextAny text="section_education"/></h2>
        <div>
          {educationList.map((education, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["p-year"]}>{education.schoolStartYear}</p>
                <p className={classes["p-year"]} >-</p>
                <p className={classes["p-year"]}>{education.schoolFinishYear}</p>
              </div>
              <div className={classes["width70"]}>
                <h4 >
                  {education.schoolName}, <span className={classes["city"]}>{education.schoolCity}</span>
                </h4>
                <p className={classes["schoolDescription"]}>{education.schoolDesc}</p>
              </div>
            </ul>
          ))}
        </div>
        <hr/>
        <h2><TextAny text="section_experience"/></h2>
        <div>
          {experienceList.map((exp, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["p-year"]}>{exp.experienceFrom}</p>
                <p className={classes["p-year"]} >-</p>
                <p className={classes["p-year"]}>{exp.experienceTo}</p>
              </div>
              <div className={classes["width70"]}>
                <h4 >
                  {exp.companyName}, <span className={classes["city"]}>{exp.companyCity}</span>

                </h4>
                <p className={classes["jobDescription"]}>{exp.jobDescription}</p>
              </div>
            </ul>
          ))}
        </div>
        <hr/>
        <h2><TextAny text="section_languages"/></h2>
        <div>
          {languageList.map((language, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <h4 className={classes["p-year"]}>{language.language}</h4>
              </div>
              <div className={classes["width70"]}>
              </div>
            </ul>
          ))}
        </div>
        <hr/>
        <h2><TextAny text="section_skills"/></h2>
        <div className={classes["skill-elem"]}>
          {skillList.map((skill, index) => (
            <ul key={index}>
              <p className={classes["p-year"]}>{skill.skill},</p>
            </ul>
          ))}
        </div>


      </div>
    </div>
  );
};

export default EditorResumeTech;

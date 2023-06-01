import React from "react";
import classes from "./editorResumeTechV3.module.css";
import MailIcon from "../../../assets/images/mail.png";
import TelephoneIcon from "../../../assets/images/telephone.png";
import LocationIcon from "../../../assets/images/location.png";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
import Circle from "../../../assets/images/circle.png";

const EditorResumeTechV3 = ({
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
      <div className={classes["image-container"]}>
          <img className={classes.image} src={image} alt="CV" />
          <div className={classes["background-image-div"]}></div>
        </div>
        <div className={classes.descontent}>
          <h2 className={classes.name}>
            {name} {surname}
          </h2>
          <ul className={classes["descontent-ul"]}>

            {isPhoneNumber && <li
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
                <p> Phone number:</p>
              </div>

              <p className={classes["personal-data"]}>{phoneNumber}</p>

            </li>}
            {isEmail && <li
              className={
                classes["descontent-ul-li"]
              }
            >
              <div className={classes["descontent-ul-li-left"]} >

                <img src={MailIcon} alt="MailIcon" className={classes.icon} />
                <p> Email:</p>
              </div>

              <p className={classes["personal-data"]}>{email}</p>
            </li>}
            {isLocation && <li
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
                <p> Location: </p>
              </div>

              <p className={classes["personal-data"]}>{location}</p>
            </li>}
          </ul>
        </div>
        
      </div>


      <div className={classes["skills-projects"]}>
        <hr />
        <h2 className={classes["section-title"]}>Education</h2>
        <div>
          {educationList.map((todo, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["year"]}>{todo.schoolStartYear} - {todo.schoolFinishYear}</p>
              </div>
              <div className={classes["width70"]}>
                <p className={classes["section-main-info"]}>
                   {todo.schoolName}
                </p>
                <p className={classes["section-sub-info"]}>
                    {todo.schoolCity}
                </p>
                {/* <br />
                <p>Short desc:</p>
                <p>{todo.schoolDesc}</p> */}
              </div>
            </ul>
          ))}
        </div>
        <hr />
        <h2 className={classes["section-title"]}>Experience</h2>
        <div>
          {experienceList.map((todo, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["year"]}>{todo.experienceFrom} - {todo.experienceTo}</p>
              </div>
              <div className={classes["width70"]}>
                <p className={classes["section-main-info"]}>
                    {todo.companyName}
                </p>
                <p className={classes["section-sub-info"]}>
                    {todo.companyCity}
                </p>
                <p className={classes["jobDescription"]}>{todo.jobDescription}</p>
              </div>
            </ul>
          ))}
        </div>
        <hr />
        <h2 className={classes["section-title"]}>Languages</h2>
        <div>
          {languageList.map((language, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p><img
              src={Circle}
              alt="CircleIcon"
              className={classes["circle-icon"]}
            /> {language.language}</p>
              </div>
              <div className={classes["width70"]}>
              </div>
            </ul>
          ))}
        </div>
        <hr />
        <h2 className={classes["section-title"]}>Skills</h2>
        <div className={classes["skill-elem"]}>
          {skillList.map((skill, index) => (
              <p><img
              src={Circle}
              alt="CircleIcon"
              className={classes["circle-icon"]}
            /> {skill.skill}</p>
          ))}
        </div>


      </div>
    </div>
  );
};

export default EditorResumeTechV3;

import React from "react";
import classes from "./editorTech.module.css";
import MailIcon from "../../../assets/images/mail.png";
import TelephoneIcon from "../../../assets/images/telephone.png";
import LocationIcon from "../../../assets/images/location.png";
import "../../../assets/fonts/Roboto-normal";
import "../../../assets/fonts/times-normal";
import "../../../assets/fonts/times-bold";
const EditorResumeTech = ({
  name,
  surname,
  phoneNumber,
  email,
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

            <li
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

            </li>
            <li
              className={
                classes["descontent-ul-li"]
              }
            >
              <div className={classes["descontent-ul-li-left"]} >

                <img src={MailIcon} alt="MailIcon" className={classes.icon} />
                <p> Email:</p>
              </div>

              <p className={classes["personal-data"]}>{email}</p>
            </li>
            <li
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
            </li>
          </ul>
        </div>
        <div className={classes["image-container"]}>
          <img className={classes.image} src={image} alt="CV" />
          <div className={classes["background-image-div"]}></div>
        </div>
      </div>


      <div className={classes["skills-projects"]}>
        <hr />
        <h2 >Educations: </h2>
        <div>
          {educationList.map((todo, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["p-year"]}>{todo.schoolStartYear}</p>
                <p className={classes["p-year"]} >-</p>
                <p className={classes["p-year"]}>{todo.schoolFinishYear}</p>
              </div>
              <div className={classes["width70"]}>
                <h4 >
                  {todo.schoolName}, {todo.schoolCity}
                </h4>
                <br />
                <p>Short desc:</p>
                <p>{todo.schoolDesc}</p>
              </div>
            </ul>
          ))}
        </div>
        <hr />
        <h2 >Experience: </h2>
        <div>
          {experienceList.map((todo, index) => (
            <ul className={classes["card-list-elem-pdf"]} key={index}>
              <div className={classes["width30"]}>
                <p className={classes["p-year"]}>{todo.experienceFrom}</p>
                <p className={classes["p-year"]} >-</p>
                <p className={classes["p-year"]}>{todo.experienceTo}</p>
              </div>
              <div className={classes["width70"]}>
                <h4 >
                  {todo.companyName}, {todo.companyCity}

                </h4>
                <br />
                <p>Short description:</p>
                <p>{todo.experienceDesc}</p>
              </div>
            </ul>
          ))}
        </div>
        <hr />
        <h2 >Language skills</h2>
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
        <hr />
        <h2 >Skills</h2>
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

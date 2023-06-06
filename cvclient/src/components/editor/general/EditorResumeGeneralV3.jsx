import classes from "./editorResumeGeneralV3.module.css";
import TelephoneIcon from "../../../assets/images/telephone_white.png";
import MailIcon from "../../../assets/images/mail_white.png";
import LocationIcon from "../../../assets/images/location_white.png";
import { TextAny } from "../../../language/langTexts";

const EditorResumeGeneralV1 = ({
  color,
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
  hobbyList,
  image,
  reportTemplateRef,
  educationList,
}) => {
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div
        className={`${classes["name-and-photo-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}>
        <div>
          <p className={classes["name"]}>
            {name} {surname}
          </p>
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
            <p className={classes["contact-data"]}>{phoneNumber}</p>
          </li>
          <li
            className={
              isEmail ? classes["descontent-ul-li"] : classes["display-none"]
            }
          >
            <img src={MailIcon} alt="MailIcon" className={classes.icon} />
            <p className={classes["contact-data"]}>{email}</p>
          </li>
          <li
            className={
              isLocation ? classes["descontent-ul-li"] : classes["display-none"]
            }
          >
            <img
              src={LocationIcon}
              alt="LocationIcon"
              className={classes.icon}
            />
            <p className={classes["contact-data"]}>{location}</p>
          </li>
          <br />
        </div>
        <div>
          <img className={classes.image} src={image} alt="CV" />
        </div>
      </div>

      <div className={classes["cv-content"]}>
        <div className={classes["profile-div"]}>{profileDescription}</div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}><TextAny text="section_experience"/></p>
                <hr
        className={`${classes["data-hr"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}/>
          {experienceList.map((experience, index) => (
            <div className={classes["flex-container"]}>
              <div className={classes["column-left"]}>
                <p className={classes["company-years"]}>
                  {experience.experienceFrom} - {experience.experienceTo}
                </p>
              </div>
              <div className={classes["column-right"]}>
                <p className={classes["company"]}>{experience.companyName}</p>
                <p className={classes["company-city"]}>{experience.companyCity}</p>
                <p className={classes["job-description"]}>
                  {experience.jobDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}><TextAny text="section_education"/></p>
                <hr
        className={`${classes["name-and-photo-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}/>
          {educationList.map((education, index) => (
            <div className={classes["flex-container"]}>
              <div className={classes["column-left"]}>
                <p className={classes["school-years"]}>
                  {education.schoolStartYear} - {education.schoolFinishYear}
                </p>
              </div>
              <div className={classes["column-right"]}>
                <p className={classes["school-name"]}>
                  {education.schoolName}
                </p>
                <p className={classes["school-city"]}>
                  {education.schoolCity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}><TextAny text="section_languages"/></p>
                <hr
        className={`${classes["name-and-photo-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}/>
          <div className={classes["flex-container"]}>
            <div className={classes["column-left"]}></div>
            <div className={classes["column-right"]}>
              <div>
                {languageList.map((language, index) => (
                  <ul key={index}>
                    <p className={classes["small-margin"]}>
                      {language.language}
                    </p>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}><TextAny text="section_skills"/></p>
                <hr
        className={`${classes["name-and-photo-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}/>
          <div className={classes["flex-container"]}>
            <div className={classes["column-left"]}></div>
            <div className={classes["column-right"]}>
              <div>
                {skillList.map((skill, index) => (
                  <ul key={index} className={classes["descontent-ul"]}>
                    <li className={classes["small-margin"]}>{skill.skill}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}><TextAny text="section_hobbies"/></p>
                <hr
        className={`${classes["name-and-photo-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}/>
          <div className={classes["flex-container"]}>
            <div className={classes["column-left"]}></div>
            <div className={classes["column-right"]}>
              <div>
                {hobbyList.map((hobby, index) => (
                  <ul key={index}>
                    <p>{hobby.hobby}</p>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorResumeGeneralV1;

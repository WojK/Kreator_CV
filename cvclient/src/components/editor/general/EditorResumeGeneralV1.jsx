import classes from "./editorResumeGeneralV1.module.css";
import TelephoneIcon from "../../../assets/images/telephone.png";
import MailIcon from "../../../assets/images/mail.png";
import LocationIcon from "../../../assets/images/location.png";

const EditorResumeGeneralV1 = ({
  name,
  surname,
  isPhoneNumber,
  phoneNumber,
  isEmail,
  email,
  isLocation,
  location,
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
      <div className={classes["name-and-photo"]}>
        <div className={classes["semi-circle"]}>
          <div className={classes["image-container"]}>
            <img className={classes.image} src={image} alt="CV" />
          </div>
        </div>
        <p className={classes["name"]}>
          {name} {surname}
        </p>

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
        </ul>
      </div>
      <div className={classes["cv-content"]}>
        <div className={classes["skills-projects"]}>
          <div className={classes["skills-projects-content"]}>
            <p className={classes["knowledge-title"]}>Job Experience</p>
            <hr className={classes["data-hr"]} />
            <div>
              {experienceList.map((todo, index) => (
                <ul key={index}>
                  <p className={classes["company"]}>{todo.companyName}</p>
                  <p className={classes["company-years"]}>
                    {todo.experienceFrom} - {todo.experienceTo}
                    <br />
                    {todo.companyCity}{" "}
                  </p>
                  <p className={classes["job-description"]}>
                    {todo.jobDescription}
                  </p>
                  <br />
                </ul>
              ))}
            </div>

            <p className={classes["knowledge-title"]}>Education</p>
            <hr className={classes["data-hr"]} />
            <div>
              {educationList.map((todo, index) => (
                <ul key={index}>
                  <p className={classes["school"]}>
                    {todo.schoolName}, {todo.schoolCity}
                  </p>
                  <p className={classes["school-years"]}>
                    {todo.schoolStartYear} - {todo.schoolFinishYear}
                  </p>
                  <br />
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className={classes["personal-details"]}>
          <div className={classes["personal-details-content"]}>
            <p className={classes["personal-data-title"]}>About me {name}</p>
            <hr className={classes["data-hr"]} />
            <span className={classes["personal-description"]}>{aboutme}</span>

            <p className={classes["personal-data-title"]}>Languages</p>
            <hr className={classes["data-hr"]} />
            <div>
              {languageList.map((language, index) => (
                <ul key={index}>
                  <p className={classes["small-margin"]}>{language.language}</p>
                </ul>
              ))}
            </div>

            <p className={classes["personal-data-title"]}>Skills</p>
            <hr className={classes["data-hr"]} />
            <div>
              {skillList.map((skill, index) => (
                <ul key={index} className={classes["descontent-ul"]}>
                  <li className={classes["small-margin"]}>{skill.skill}</li>
                </ul>
              ))}
            </div>

            <p className={classes["personal-data-title"]}>Hobbies</p>
            <hr className={classes["data-hr"]} />
            <div>
              {hobbyList.map((hobby, index) => (
                <ul key={index}>
                  <p className={classes["small-margin"]}>{hobby.hobby}</p>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes["bottom-semi-circle"]}></div> */}
    </div>
  );
};

export default EditorResumeGeneralV1;

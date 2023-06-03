import classes from "./editorResumeGeneralV1.module.css";
import TelephoneIcon from "../../../assets/images/telephone.png";
import MailIcon from "../../../assets/images/mail.png";
import LocationIcon from "../../../assets/images/location.png";
import { TextAny } from "../../../language/langTexts";

const EditorResumeGeneralV1 = ({
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
      <div className={classes["name-and-photo"]}>
        <div className={classes["semi-circle"]}>
          <div>
            <img className={classes.image} src={image} alt="CV" />
          </div>
        </div>
        <p className={classes["name"]}>
          {name} {surname}
        </p>
        <p className={classes["profile-description"]}>{profileDescription}</p>

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
            <p className={classes["section-title"]}><TextAny text="section_experience"/></p>
            <hr className={classes["data-hr"]} />
            <div>
              {experienceList.map((exp, index) => (
                <ul key={index}>
                  <p className={classes["company"]}>{exp.companyName}</p>
                  <p className={classes["company-years"]}>
                    {exp.experienceFrom} - {exp.experienceTo}
                    <br />
                    {exp.companyCity}{" "}
                  </p>
                  <p className={classes["job-description"]}>
                    {exp.jobDescription}
                  </p>
                  <br />
                </ul>
              ))}
            </div>
            <p className={classes["section-title"]}><TextAny text="section_education"/></p>
            <hr className={classes["data-hr"]} />
            <div>
              {educationList.map((education, index) => (
                <ul key={index}>
                  <p className={classes["school"]}>
                    {education.schoolName}, {education.schoolCity}
                  </p>
                  <p className={classes["school-years"]}>
                    {education.schoolStartYear} - {education.schoolFinishYear}
                  </p>
                  <br />
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className={classes["personal-details"]}>
          <div className={classes["personal-details-content"]}>
            <p className={classes["section-title"]}><TextAny text="section_about_me"/></p>
            <hr className={classes["data-hr"]} />
            <span className={classes["personal-description"]}>{aboutme}</span>

            <p className={classes["section-title"]}><TextAny text="section_languages"/></p>
            <hr className={classes["data-hr"]} />
            <div>
              {languageList.map((language, index) => (
                <ul key={index}>
                  <p>{language.language}</p>
                </ul>
              ))}
            </div>

            <p className={classes["section-title"]}><TextAny text="section_skills"/></p>
            <hr className={classes["data-hr"]} />
            <div>
              {skillList.map((skill, index) => (
                <ul key={index} className={classes["descontent-ul"]}>
                  <li>{skill.skill}</li>
                </ul>
              ))}
            </div>

            <p className={classes["section-title"]}><TextAny text="section_hobbies"/></p>
            <hr className={classes["data-hr"]} />
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
  );
};

export default EditorResumeGeneralV1;

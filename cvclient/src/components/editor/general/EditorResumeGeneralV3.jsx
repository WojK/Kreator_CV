import classes from "./editorResumeGeneralV3.module.css";
import TelephoneIcon from "../../../assets/images/telephone_white.png";
import MailIcon from "../../../assets/images/mail_white.png";
import LocationIcon from "../../../assets/images/location_white.png";

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
      <div className={classes["name-and-photo-div"]}>
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
          <p className={classes["section-title"]}>Job Experience</p>
          <hr className={classes["data-hr"]} />
          {experienceList.map((todo, index) => (
            <div className={classes["flex-container"]}>
              <div className={classes["column-left"]}>
                <p className={classes["company-years"]}>
                  {todo.experienceFrom} - {todo.experienceTo}
                </p>
              </div>
              <div className={classes["column-right"]}>
                <p className={classes["company"]}>{todo.companyName}</p>
                <p className={classes["company-city"]}>{todo.companyCity}</p>
                <p className={classes["job-description"]}>
                  {todo.jobDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}>Education</p>
          <hr className={classes["data-hr"]} />
          {educationList.map((todo, index) => (
            <div className={classes["flex-container"]}>
              <div className={classes["column-left"]}>
                <p className={classes["school-years"]}>
                  {todo.schoolStartYear} - {todo.schoolFinishYear}
                </p>
              </div>
              <div className={classes["column-right"]}>
                <p className={classes["school-name"]}>
                  {todo.schoolName}
                </p>
                <p className={classes["school-city"]}>
                  {todo.schoolCity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes["section-div"]}>
          <p className={classes["section-title"]}>Languages</p>
          <hr className={classes["data-hr"]} />
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
          <p className={classes["section-title"]}>Skills</p>
          <hr className={classes["data-hr"]} />
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
          <p className={classes["section-title"]}>Hobbies</p>
          <hr className={classes["data-hr"]} />
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

        {/* <div className={classes["personal-details"]}>
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
        </div> */}
      </div>
    </div>
  );
};

export default EditorResumeGeneralV1;

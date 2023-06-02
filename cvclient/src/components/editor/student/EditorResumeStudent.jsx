import classes from "./editorResumeStudent.module.css";

import MailIcon from "../../../assets/images/mail_white.png";
import TelephoneIcon from "../../../assets/images/telephone_white.png";
import LocationIcon from "../../../assets/images/location_white.png";
import LinkedinIcon from "../../../assets/images/linkedin_white.png";
import GithubIcon from "../../../assets/images/github_white.png";
import Circle from "../../../assets/images/circle.png";
import CircleBlue from "../../../assets/images/circle_blue.png";

const EditorResumeStudent = ({
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
  tech,
  projectList,
  skillList,
  softSkillList,
  languageList,
  image,
  reportTemplateRef,
  educationList,
}) => {
  const changeDates = (date) => {
    if (date !== undefined) {
      return date.slice(0, 7).replace("-", ".");
    }
  };

  const modifyTechStack = (tech) => {
    const techList = tech.split(" ");
    const techJSX = techList.map((t) => (
      <div className={classes["tech-div"]}>
        <img
          src={CircleBlue}
          alt="CircleIcon"
          className={classes["circle-icon"]}
        />
        <p>{t}</p>
      </div>
    ));
    return <div className={classes["tech-list"]}>{techJSX}</div>;
  };

  const clause =
    "I consent to the processing of my personal data for the purpose and scope necessary for the recruitment process.";
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div
        className={`${classes["contact-div"]} ${
          color === "color1" ? classes.color1 : classes.color2
        }`}
      >
        <div className={classes["name-info-div"]}>
          <div className={classes["image-container"]}>
            <img className={classes.image} src={image} alt="CV" />
            <div className={classes["background-image-div"]}></div>
          </div>
          <p className={classes["name-surname-p"]}>
            {name} {surname}
          </p>
        </div>
        <div className={classes["contact-info-div"]}>
          <p
            className={
              isPhoneNumber
                ? classes["contact-info-p"]
                : classes["display-none"]
            }
          >
            <img
              src={TelephoneIcon}
              alt="TelephoneIcon"
              className={classes.icon}
            />
            <a href={`tel::${phoneNumber}`}>{phoneNumber}</a>
          </p>

          <p
            className={
              isEmail ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            <img src={MailIcon} alt="MailIcon" className={classes.icon} />

            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p
            className={
              isLocation ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            <img
              src={LocationIcon}
              alt="LocationIcon"
              className={classes.icon}
            />
            {location}
          </p>
          <p
            className={
              isGitHub ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            <img src={GithubIcon} alt="GithubIcon" className={classes.icon} />

            <a href={`${github}`}>{github}</a>
          </p>
          <p
            className={
              isLinkedin ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            <img
              src={LinkedinIcon}
              alt="LinkedinIcon"
              className={classes.icon}
            />
            <a href={`${linkedin}`}>{linkedin}</a>
          </p>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes["left-details-div"]}>
          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            About me
          </div>
          <div className={classes["des"]}>{aboutme}</div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Tech Skills
          </div>
          <div className={classes["des"]}>
            <ul>
              {skillList.map((skill, index) => (
                <li>
                  <img
                    src={Circle}
                    alt="CircleIcon"
                    className={classes["circle-icon"]}
                  />
                  <p>{skill.skill}</p>
                </li>
              ))}
            </ul>
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Soft Skills
          </div>
          <div className={classes["des"]}>
            <ul>
              {softSkillList.map((skill, index) => (
                <li>
                  <img
                    src={Circle}
                    alt="CircleIcon"
                    className={classes["circle-icon"]}
                  />
                  <p>{skill.softSkill}</p>
                </li>
              ))}
            </ul>
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Languages
          </div>
          <div className={classes["des"]}>
            <ul>
              {languageList.map((language, index) => (
                <li>
                  <img
                    src={Circle}
                    alt="CircleIcon"
                    className={classes["circle-icon"]}
                  />
                  <p>{language.language}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes["right-details-div"]}>
          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Education
          </div>
          <div className={classes["des"]}>
            {educationList.map((todo, index) => (
              <ul key={index}>
                <div className={classes.dates}>
                  <p className={classes["p-year"]}>
                    {changeDates(todo.schoolStartYear)}&nbsp;-&nbsp;
                    {changeDates(todo.schoolFinishYear)}
                  </p>
                </div>
                <div className={classes["education"]}>
                  <h2>{todo.schoolName}</h2>
                  <p>{todo.schoolCity}</p>
                  <p>{todo.schoolFaculty}</p>
                  <p>{todo.schoolSubject}</p>
                  <p>{todo.schoolSpecialization}</p>
                </div>
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Projects
          </div>
          <div className={classes["des"]}>
            {projectList.map((project, index) => (
              <ul className={classes["ul-project"]} key={index}>
                <h4>{project.projectName}</h4>
                <a href={project.projectLink}>{project.projectLink}</a>
                <p className={classes["project-description"]}>
                  {project.projectDescription}
                </p>
                {modifyTechStack(project.tech)}
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            Clause
          </div>
          <div className={classes["des"]}>{clause}</div>
        </div>
      </div>
    </div>
  );
};

export default EditorResumeStudent;

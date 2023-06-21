import classes from "./editorResumeStudent.module.css";

import MailIcon from "../../../assets/images/mail_white.png";
import TelephoneIcon from "../../../assets/images/telephone_white.png";
import LocationIcon from "../../../assets/images/location_white.png";
import LinkedinIcon from "../../../assets/images/linkedin_white.png";
import GithubIcon from "../../../assets/images/github_white.png";
import Circle from "../../../assets/images/circle.png";
import CircleBlue from "../../../assets/images/circle_blue.png";
import { TextAny } from "../../../language/langTexts";

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
    if (date !== undefined && date !== "") {
      return date.slice(0, 7).replace("-", ".");
    }
    return <TextAny text="currently" />;
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
            <TextAny text="section_about_me" />
          </div>
          <div className={classes["des"]}>{aboutme}</div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            <TextAny text="section_tech_skills" />
          </div>
          <div className={classes["des"]}>
            <ul>
              {skillList.map((skill, index) => (
                <li>
                  <img
                    src={CircleBlue}
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
            <TextAny text="section_soft_skills" />
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
            <TextAny text="section_languages" />
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
            <TextAny text="section_education" />
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
                  <p>{todo.schoolSubject}</p>
                  <p>{todo.schoolSpecialization}</p>
                  <p className={classes.p13}>{todo.schoolFaculty}</p>
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
            <TextAny text="section_projects" />
          </div>
          <div className={classes["des"]}>
            {projectList.map((project, index) => (
              <div className={classes["div-project"]} key={index}>
                <h4>{project.projectName}</h4>

                <a href={project.projectLink}>
                  <p>{project.projectLink}</p>
                </a>
                <p className={classes["project-description"]}>
                  {project.projectDescription}
                </p>
                {modifyTechStack(project.tech)}
              </div>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div
            className={`${classes["header-div"]} ${
              color === "color1" ? classes.color1 : classes.color2
            }`}
          >
            <TextAny text="section_clause" />
          </div>
          <div className={`${classes.p10} ${classes["des"]}`}>
            <TextAny text="clause" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorResumeStudent;

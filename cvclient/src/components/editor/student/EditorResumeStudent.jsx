import classes from "./editorResumeStudent.module.css";

const EditorResumeStudent = ({
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
  projectList,
  skillList,
  languageList,
  image,
  reportTemplateRef,
  educationList,
}) => {
  const clause =
    "I consent to the processing of my personal data for the purpose and scope necessary for the recruitment process.";
  return (
    <div ref={reportTemplateRef} className={classes["cv"]}>
      <div className={classes["contact-div"]}>
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
            {phoneNumber}
          </p>

          <p
            className={
              isEmail ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            {email}
          </p>
          <p
            className={
              isLocation ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            {location}
          </p>
          <p
            className={
              isGitHub ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            {github}
          </p>
          <p
            className={
              isLinkedin ? classes["contact-info-p"] : classes["display-none"]
            }
          >
            {linkedin}
          </p>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes["left-details-div"]}>
          <div className={classes["header-div"]}>About me</div>
          <div className={classes["des"]}>{aboutme}</div>
          <hr className={classes["personal-data-hr"]} />

          <div className={classes["header-div"]}>Skills</div>
          <div className={classes["des"]}>
            {skillList.map((skill, index) => (
              <ul key={index}>
                <p>{skill.skill}</p>
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div className={classes["header-div"]}>Languages</div>
          <div className={classes["des"]}>
            {languageList.map((language, index) => (
              <ul key={index}>
                <p>{language.language}</p>
              </ul>
            ))}
          </div>
        </div>
        <div className={classes["right-details-div"]}>
          <div className={classes["header-div"]}>Education</div>
          <div className={classes["des"]}>
            {educationList.map((todo, index) => (
              <ul className={classes["card-list-elem-pdf"]} key={index}>
                <div className={classes["width30"]}>
                  <div className={classes.dates}>
                    <p className={classes["p-year"]}>{todo.schoolStartYear}</p>
                    <p className={classes["p-year"]}>{todo.schoolFinishYear}</p>
                  </div>
                </div>
                <p className={classes["width70"]}>
                  {todo.schoolName}, {todo.schoolCity}
                </p>
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div className={classes["header-div"]}>Experience</div>
          <div className={classes["des"]}>
            {experienceList.map((todo, index) => (
              <ul className={classes["card-list-elem-pdf"]} key={index}>
                <div className={classes["width30"]}>
                  <div className={classes.dates}>
                    <p className={classes["p-year"]}>{todo.experienceFrom}</p>
                    <p className={classes["p-year"]}>{todo.experienceTo}</p>
                  </div>
                </div>
                <p className={classes["width70"]}>
                  {todo.companyName}, {todo.companyCity}
                </p>
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div className={classes["header-div"]}>Projects</div>
          <div className={classes["des"]}>
            {projectList.map((project, index) => (
              <ul className={classes["ul-project"]} key={index}>
                <h3>{project.projectName}</h3>
                <a>{project.projectLink}</a>
                <p>{project.projectDescription}</p>
              </ul>
            ))}
          </div>
          <hr className={classes["personal-data-hr"]} />

          <div className={classes["header-div"]}>Clause</div>
          <div className={classes["des"]}>{clause}</div>
        </div>
      </div>
    </div>
  );
};

export default EditorResumeStudent;

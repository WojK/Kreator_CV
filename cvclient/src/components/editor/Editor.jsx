import React from "react";
import classes from "./editor.module.css";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
// import { FaBeer } from "react-icons/fa";
import photo from "../../assets/images/photo.jpg";
import MailIcon from "../../assets/images/mail.png";
import TelephoneIcon from "../../assets/images/telephone.png";
import LocationIcon from "../../assets/images/location.png";
import LinkedinIcon from "../../assets/images/linkedin-logo.png";
import GithubIcon from "../../assets/images/github.png";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";
import { CardTab, TabSwitcher, TabContent } from "../card/Card";

const Editor = () => {
  // personal
  const [name, setName] = useState("Tom");
  const [surname, setSurname] = useState("Cruse");
  const [email, setEmail] = useState("tom.cruse@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+48 582 293 211");

  //personal desc
  const [location, setLocation] = useState("Warsaw");
  const [github, setGithub] = useState();
  const [linkedin, setLinkedin] = useState("http://linkedin.com/tomcruse");
  const [profileDescription, setProfileDescription] = useState(
    "Profile description"
  );
  const [aboutme, setAboutme] = useState(
    " A place where you can mark your interests"
  );
  const [image, setImage] = useState(photo);

  // languages
  const [languageList, setLanguageList] = useState([]);
  const [language, setLanguage] = useState("English");

  // education
  const [educationList, setEducationList] = useState([]);
  const [schoolName, setSchoolName] = useState(
    "Liceum Ogólnokształcące Im. Jana Pawła 2"
  );
  const [schoolCity, setSchoolCity] = useState("Warszawa");
  const [schoolStartYear, setSchoolStartYear] = useState("2022-03-20");
  const [schoolFinishYear, setSchoolFinishYear] = useState("2022-03-20");

  // experience
  const [experienceList, setExperienceList] = useState([]);
  const [companyName, setCompanyName] = useState("Politechnika Warszawska");
  const [companyCity, setCompanyCity] = useState("Warszawa");
  const [experienceFrom, setExperienceFrom] = useState("2013-03-20");
  const [experienceTo, setExperienceTo] = useState("2021-03-20");

  // skill
  const [skillList, setSkillList] = useState([]);
  const [skill, setSkill] = useState("Komunikatywnosc");

  //clause
  const [clause, setClause] = useState(
    "I consent to the processing of my personal data by (company name) for the purpose of recruiting for the position I have applied for."
  );

  //project
  const [projectList, setProjectList] = useState([]);
  const [projectName, setProjectName] = useState("Kreator CV");
  const [projectLink, setProjectLink] = useState("https://github.com/creator");
  const [projectDescription, setProjectDescription] = useState(
    "Kreator Cv to 5 osobowy projekt zespołowy majacy na celu..."
  );

  // education
  const handleAddEducation = () => {
    const newEducation = {
      schoolName,
      schoolCity,
      schoolStartYear,
      schoolFinishYear,
    };
    setEducationList([...educationList, newEducation]);
    setSchoolName("");
    setSchoolCity("");
    setSchoolStartYear("");
    setSchoolFinishYear("");
  };
  const handleRemoveEducation = (indexToRemove) => {
    const newEducationList = educationList.filter(
      (_, index) => index !== indexToRemove
    );
    setEducationList(newEducationList);
  };

  // experience
  const handleAddExperience = () => {
    const newExperience = {
      companyName,
      companyCity,
      experienceFrom,
      experienceTo,
    };
    setExperienceList([...experienceList, newExperience]);
    setCompanyName("");
    setCompanyCity("");
    setExperienceFrom("");
    setExperienceTo("");
  };
  const handleRemoveExperience = (indexToRemove) => {
    const newExperienceList = experienceList.filter(
      (_, index) => index !== indexToRemove
    );
    setExperienceList(newExperienceList);
  };
  // language
  const handleAddLanguage = () => {
    const newLanguage = { language };
    setLanguageList([...languageList, newLanguage]);
    setLanguage("");
  };

  const handleRemoveLanguage = (indexToRemove) => {
    const newLanguageList = languageList.filter(
      (_, index) => index !== indexToRemove
    );
    setLanguageList(newLanguageList);
  };

  //skill
  const handleAddSkill = () => {
    const newSkill = { skill };
    setSkillList([...skillList, newSkill]);
    setSkill("");
  };
  const handleRemoveSkill = (indexToRemove) => {
    const newSkillList = skillList.filter(
      (_, index) => index !== indexToRemove
    );
    setSkillList(newSkillList);
  };
  //project
  const handleAddProject = () => {
    const newProject = { projectName, projectLink, projectDescription };
    setProjectList([...projectList, newProject]);
    setProjectName("");
    setProjectLink("");
    setProjectDescription("");
  };

  const handleRemoveProject = (indexToRemove) => {
    const newProjectList = projectList.filter(
      (_, index) => index !== indexToRemove
    );
    setProjectList(newProjectList);
  };

  const [role, setRole] = useState("Role");

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };


  const [isGitHub, setIsGitHub] = useState(false);
  const handleGitHub = (event) => {
    setIsGitHub((current) => !current);
  };
  const [isLinkedin, setIslinkedin] = useState(false);
  const handleLinkedin = (event) => {
    setIslinkedin((current) => !current);
  };
  const [isLocation, setIsLocation] = useState(false);
  const handleLocation = (event) => {
    setIsLocation((current) => !current);
  };
  const [isEmail, setIsEmail] = useState(false);
  const handleEmail = (event) => {
    setIsEmail((current) => !current);
  };
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const handlePhoneNumber = (event) => {
    setIsPhoneNumber((current) => !current);
  };


  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
      hotfixes: ["px_scaling"],
    });

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };
  return (
    <>
      <div className={classes.main}>
        <div className={classes.form}>
          <div>
            <CardTab>
              <div className={classes["tab-card"]}>
                <div className={classes["tab-switcher"]}>
                  <TabSwitcher tabId={1} icon={"fas fa-user"}>
                    <div className={classes["tab-p"]}>Personal</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={2} icon={"fas fa-book"}>
                    <div className={classes["tab-p"]}>Profile</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={3} icon={"fas fa-school"}>
                    <div className={classes["tab-p"]}>Education</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={4} icon={"fas fa-briefcase"}>
                    <div className={classes["tab-p"]}>Experience</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={5} icon={"fa fa-fighter-jet"}>
                    <div className={classes["tab-p"]}>Project</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={6} icon={"fa fa-ambulance"}>
                    <div className={classes["tab-p"]}>Skills</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={7} icon={"fa fa-language"}>
                    <div className={classes["tab-p"]}>Languages</div>
                  </TabSwitcher>
                  <TabSwitcher tabId={8} icon={"fas fa-globe"}>
                    <div className={classes["tab-p"]}>Sum</div>
                  </TabSwitcher>
                </div>
                <div className={classes["tab-content"]}>
                  <TabContent id={1}>
                    <h1>Start with your resume header</h1>.
                    <p>Enter your full name and contact information so a recruiter can write or call you.</p>.
                    <div className={classes["tab-content-forms"]}>
                      {/* <div className={classes["tab-content-form"]}>
                        <label
                          htmlFor="file-upload"
                          className={classes["custom-file-upload"]}
                        >
                          Upload Image
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={onImageChange}
                        />
                      </div> */}

                      <div className={classes["tab-content-form"]}>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label htmlFor="surname">Surname</label>
                        <input
                          type="text"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        ></input>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div className={classes["is-active"]}>
                          <label>Phone number</label>
                          <input
                            className={classes["checkbox"]}
                            type="checkbox"
                            autocomplete="off"
                            value={isPhoneNumber}
                            onClick={handlePhoneNumber}
                          ></input>
                        </div>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        ></input>
                      </div>

                      <div className={classes["tab-content-form"]}>
                        <div className={classes["is-active"]}>
                          <label>Email</label>
                          <input
                            className={classes["checkbox"]}
                            type="checkbox"
                            autocomplete="off"
                            value={isEmail}
                            onClick={handleEmail}
                          ></input>
                        </div>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div className={classes["tab-content-form-33"]}>
                      <div className={classes["is-active"]}>
                        <label>Location</label>
                        <input
                          className={classes["checkbox"]}
                          type="checkbox"
                          autocomplete="off"
                          value={isLocation}
                          onClick={handleLocation}
                        ></input>
                      </div>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      ></input>
                    </div>

                    <div className={classes["tab-content-form-33"]}>
                      <div className={classes["is-active"]}>
                        <label>Github</label>
                        <input
                          className={classes["checkbox"]}
                          type="checkbox"
                          autocomplete="off"
                          value={isGitHub}

                          onClick={handleGitHub}
                          valur={isGitHub}
                        ></input>
                      </div>
                      <input
                        type="text"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                      ></input>
                    </div>
                    <div className={classes["tab-content-form-33"]}>
                      <div className={classes["is-active"]}>
                        <label>Linkedin</label>
                        <input
                          className={classes["checkbox"]}
                          type="checkbox"
                          autocomplete="off"
                          value={isLinkedin}
                          onClick={handleLinkedin}
                        ></input>
                      </div>
                      <input
                        type="text"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      ></input>
                    </div>
                  </TabContent>
                  <TabContent id={2}>
                    <h1>Fill in your personal information</h1>.
                    <p>Describe your profile and post information about yourself!</p>.
                    <label>Profile description</label>
                    <textarea
                      rows="5"
                      type="text"
                      value={profileDescription}
                      onChange={(e) => setProfileDescription(e.target.value)}
                    ></textarea>
                    <label>About me </label>
                    <textarea
                      rows="5"
                      type="text"
                      value={aboutme}
                      onChange={(e) => setAboutme(e.target.value)}
                    ></textarea>
                  </TabContent>
                  <TabContent id={3}>
                    <h1>Add your education</h1>.
                    <p>Add your most recent level of education - if you have higher education - do not list secondary education, and if you have secondary education, do not write about primary education.</p>
                    <div
                      className={`${classes["tab-content-forms"]}`}
                    >
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolNameInput">School Name:</label>
                          <input
                            id="schoolNameInput"
                            type="text"
                            value={schoolName}
                            onChange={(event) =>
                              setSchoolName(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolCityInput">School City:</label>
                          <input
                            id="schoolCityInput"
                            type="text"
                            value={schoolCity}
                            onChange={(event) =>
                              setSchoolCity(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolStartYearInput">
                            Start Year:
                          </label>
                          <input
                            id="schoolStartYearInput"
                            type="date"
                            value={schoolStartYear}
                            onChange={(event) =>
                              setSchoolStartYear(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolFinishYearInput">
                            Finish Year:
                          </label>
                          <input
                            id="schoolFinishYearInput"
                            type="date"
                            value={schoolFinishYear}
                            onChange={(event) =>
                              setSchoolFinishYear(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["to-right"]}>
                        <a className={`${classes["icon-add"]}`} onClick={handleAddEducation}
                        >
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>

                    <div className={classes.card}>
                      {educationList.map((todo, index) => (
                        <ul className={classes["card-list-elem"]} key={index}>
                          <p>{todo.schoolName}</p>
                          <p>{todo.schoolCity}</p>
                          <p>{todo.schoolStartYear}</p>
                          <p>{todo.schoolFinishYear}</p>
                          <a className={`${classes["icon-trash"]}`} onClick={() => handleRemoveEducation(index)}
                          >
                            <i class="fa fa-trash"></i>
                          </a>
                        </ul>
                      ))}
                    </div>
                  </TabContent>
                  <TabContent id={4}>
                    <h1>Now let's work on your experience</h1>.
                    <p>Start with your most recent job. You can also add volunteer work,
                      internships and extra-curricular activities.</p>
                    <div
                      className={`${classes["tab-content-forms"]}`}
                    >
                      <div className={classes["tab-content-form"]}>
                        <label>Conpany name</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(event) =>
                            setCompanyName(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>Company city</label>
                        <input
                          type="text"
                          value={companyCity}
                          onChange={(event) =>
                            setCompanyCity(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>Experience from</label>
                        <input
                          type="date"
                          value={experienceFrom}
                          onChange={(event) =>
                            setExperienceFrom(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>Experince to</label>
                        <input
                          type="date"
                          value={experienceTo}
                          onChange={(event) =>
                            setExperienceTo(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["to-right"]}>
                        <a className={`${classes["icon-add"]}`} onClick={handleAddExperience}
                        >
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className={classes.card}>
                      {experienceList.map((todo, index) => (
                        <ul className={classes["card-list-elem"]} key={index}>
                          <p>{todo.companyName}</p>
                          <p>{todo.companyCity}</p>
                          <p>{todo.experienceFrom}</p>
                          <p>{todo.experienceTo}</p>
                          <a className={`${classes["icon-trash"]}`} onClick={() => handleRemoveExperience(index)}
                          >
                            <i class="fa fa-trash"></i>
                          </a>
                        </ul>
                      ))}
                    </div>

                  </TabContent>
                  <TabContent id={5}>
                    <h1>Ok, let's go with projects</h1>.
                    <div
                      className={`${classes["tab-content-forms"]}`}
                    >
                      <div className={classes["tab-content-form"]}>
                        <label htmlFor="projectNameInput">Project Name:</label>
                        <input
                          id="projectNameInput"
                          type="text"
                          value={projectName}
                          onChange={(event) =>
                            setProjectName(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label htmlFor="projectLinkInput">Project Link:</label>
                        <input
                          id="projectLinkInput"
                          type="text"
                          value={projectLink}
                          onChange={(event) =>
                            setProjectLink(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form-100"]}>
                        <label htmlFor="projectDescriptionInput">
                          Project Description:
                        </label>
                        <textarea
                          id="projectDescriptionInput"
                          type="text"
                          value={projectDescription}
                          onChange={(event) =>
                            setProjectDescription(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["to-right"]}>
                        <a className={`${classes["icon-add"]}`} onClick={handleAddProject}
                        >
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className={classes.card}>
                      {projectList.map((todo, index) => (
                        <ul className={classes["card-list-elem"]} key={index}>
                          <p>{todo.projectName}</p>
                          <p>{todo.projectLink}</p>
                          <p>{todo.projectDescription}</p>
                          <a className={`${classes["icon-trash"]}`} onClick={() => handleRemoveProject(index)}
                          >
                            <i class="fa fa-trash"></i>
                          </a>
                        </ul>
                      ))}
                    </div>
                  </TabContent>
                  <TabContent id={6}>
                    <h1>Let's pick your most important skills</h1>
                    <div className={classes["tab-content-form-language"]}>
                      <div className={classes["tab-content-form-language-add"]}>
                        <input
                          className={
                            classes["tab-content-form-language-add-input"]
                          }
                          id="languageInput"
                          type="text"
                          value={skill}
                          onChange={(event) => setSkill(event.target.value)}
                        />

                      </div>
                      <div className={classes["to-right"]}>
                        <a className={`${classes["icon-add"]}`} onClick={handleAddSkill}
                        >
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                      <div className={classes.card}>
                        {/* <h4>Language List</h4> */}
                        {skillList.map((todo, index) => (
                          <ul className={classes["card-list-elem"]} key={index}>
                            <p>{todo.skill}</p>
                            <a className={`${classes["icon-trash"]}`} onClick={() => handleRemoveSkill(index)}
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </TabContent>
                  <TabContent id={7}>
                    <h1>Foreign languages</h1>
                    <p>Add the foreign languages you speak and specify your level of knowledge</p>
                    <div className={classes["tab-content-form-language"]}>
                      <div className={classes["tab-content-form-language-add"]}>
                        <input
                          className={
                            classes["tab-content-form-language-add-input"]
                          }
                          id="languageInput"
                          type="text"
                          value={language}
                          onChange={(event) => setLanguage(event.target.value)}
                        />
                      </div>
                      <div className={classes["to-right"]}>
                        <a className={`${classes["icon-add"]}`} onClick={handleAddLanguage}
                        >
                          <i class="fa fa-plus"></i>
                        </a>
                      </div>
                      <div className={classes.card}>
                        {/* <h4>Language List</h4> */}
                        {languageList.map((language, index) => (
                          <ul className={classes["card-list-elem"]} key={index}>
                            <p>{language.language}</p>
                            <a className={`${classes["icon-trash"]}`} onClick={() => handleRemoveLanguage(index)}
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </TabContent>
                  <TabContent id={8}>
                    <h1>It's almost ready! Let's finish your resume with a strong summary</h1>.
                    <div>
                      <label>Clause:</label>
                      <textarea
                        cols="100"
                        rows="5"
                        type="text"
                        value={clause}
                        onChange={(event) => setClause(event.target.value)}
                      />
                    </div>
                    <button onClick={handleGeneratePdf}>PDF</button>
                  </TabContent>
                </div>
              </div>
            </CardTab>
          </div>
        </div>

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
              <h2 className={classes.role}>{role}</h2>
              <ul className={classes["descontent-ul"]}>
                <li className={
                  isPhoneNumber
                    ? classes["descontent-ul-li"]
                    : classes["display-none"]
                }>
                  <img
                    src={TelephoneIcon}
                    alt="TelephoneIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{phoneNumber}</p>
                </li>
                <li className={
                  isEmail
                    ? classes["descontent-ul-li"]
                    : classes["display-none"]
                }>
                  <img src={MailIcon} alt="MailIcon" className={classes.icon} />
                  <p className={classes["personal-data"]}>{email}</p>
                </li>
                <li className={
                  isLocation
                    ? classes["descontent-ul-li"]
                    : classes["display-none"]
                }>
                  <img
                    src={LocationIcon}
                    alt="LocationIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{location}</p>
                </li>
                <li className={isLinkedin ? classes["descontent-ul-li"] : classes["display-none"]}>
                  <img
                    src={LinkedinIcon}
                    alt="LinkedinIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{linkedin}</p>
                </li>
                <li
                  className={
                    isGitHub
                      ? classes["descontent-ul-li"]
                      : classes["display-none"]
                  }
                >
                  <img
                    src={GithubIcon}
                    alt="GithubIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{github}</p>
                </li>
              </ul>

              <div className={classes["personal-data-container"]}>
                <ul>
                  <li>
                    <p className={classes["personal-data-title"]}>PROFILE</p>
                    <hr className={classes["personal-data-hr"]} />

                    <span className={classes["personal-des"]}>
                      {profileDescription}
                    </span>
                  </li>
                  <li>
                    <p className={classes["personal-data-title"]}>LANGUAGES</p>
                    <hr className={classes["personal-data-hr"]} />
                    <div>
                      {languageList.map((language, index) => (
                        <ul key={index}>
                          <p>{language.language}</p>
                        </ul>
                      ))}
                    </div>
                  </li>
                  <li>
                    <p className={classes["personal-data-title"]}>ABOUT ME</p>
                    <hr className={classes["personal-data-hr"]} />
                    <span className={classes["personal-des"]}>{aboutme}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["skills-projects"]}>
            <h2 className={classes["knowledge-title"]}>Educations: </h2>
            <hr />
            <div>
              {educationList.map((todo, index) => (
                <ul className={classes["card-list-elem-pdf"]} key={index}>
                  <div className={classes["width30"]}>
                    <p className={classes["p-year"]}>{todo.schoolStartYear}</p>
                    <p className={classes["p-year"]}>{todo.schoolFinishYear}</p>
                  </div>
                  <p className={classes["width70"]}>
                    {todo.schoolName}, {todo.schoolCity}
                  </p>
                </ul>
              ))}
            </div>
            <h2 className={classes["knowledge-title"]}>Experience: </h2>
            <hr />
            <div>
              {experienceList.map((todo, index) => (
                <ul className={classes["card-list-elem-pdf"]} key={index}>
                  <div className={classes["width30"]}>
                    <p className={classes["p-year"]}>{todo.experienceFrom}</p>
                    <p className={classes["p-year"]}>{todo.experienceTo}</p>
                  </div>
                  <p className={classes["width70"]}>
                    {todo.companyName}, {todo.companyCity}
                  </p>
                </ul>
              ))}
            </div>
            <h2 className={classes["knowledge-title"]}>Projects: </h2>
            <hr />
            <div>
              {projectList.map((project, index) => (
                <ul className={classes["ul-project"]} key={index}>
                  <h3>{project.projectName}</h3>
                  <a>{project.projectLink}</a>
                  <p>{project.projectDescription}</p>
                </ul>
              ))}
            </div>
            <h2 className={classes["knowledge-title"]}>SKILLS</h2>
            <hr />
            <div>
              {skillList.map((skill, index) => (
                <ul key={index}>
                  <li>{skill.skill}</li>
                </ul>
              ))}
            </div>
            {/* <p>{clause}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;

import React from 'react'
import classes from "./editor.module.css";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
// import { FaBeer } from "react-icons/fa";
import photo from "../../assets/images/photo.jpg";
import MailIcon from "../../assets/images/mail.png"
import TelephoneIcon from "../../assets/images/telephone.png";
import LocationIcon from "../../assets/images/location.png";
import LinkedinIcon from "../../assets/images/linkedin-logo.png";
import GithubIcon from "../../assets/images/github.png";
import "../../assets/fonts/Roboto-normal"
import "../../assets/fonts/times-normal"
import "../../assets/fonts/times-bold"
import { CardTab, TabSwitcher, TabContent } from "../card/Card";


const Editor = () => {

  // personal
  const [name, setName] = useState("Tom");
  const [surname, setSurname] = useState("Cruse");
  const [email, setEmail] = useState("tom.cruse@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+48 582 293 211");

  //personal desc
  const [location, setLocation] = useState("Warsaw");
  const [github, setGithub] = useState("http://github.com/tomcruse");
  const [linkedin, setLinkedin] = useState("http://linkedin.com/tomcruse");
  const [profileDescription, setProfileDescription] = useState("Profile description");
  const [aboutme, setAboutme] = useState(
    " A place where you can mark your interests");
  const [image, setImage] = useState(photo);

  // languages
  const [languageList, setLanguageList] = useState([]);
  const [language, setLanguage] = useState("English");


  // education
  const [educationList, setEducationList] = useState([]);
  const [schoolName, setSchoolName] = useState("Liceum Ogólnokształcące Im. Jana Pawła 2");
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
  const [clause, setClause] = useState("I consent to the processing of my personal data by (company name) for the purpose of recruiting for the position I have applied for.");

  //project
  const [projectList, setProjectList] = useState([]);
  const [projectName, setProjectName] = useState("Kreator CV");
  const [projectLink, setProjectLink] = useState("https://github.com/creator");
  const [projectDescription, setProjectDescription] = useState("Kreator Cv to 5 osobowy projekt zespołowy majacy na celu...");

  // ---------hanlers------------

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
    const newEducationList = educationList.filter((_, index) => index !== indexToRemove);
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
    const newExperienceList = experienceList.filter((_, index) => index !== indexToRemove);
    setExperienceList(newExperienceList);
  };
  // language
  const handleAddLanguage = () => {
    const newLanguage = { language };
    setLanguageList([...languageList, newLanguage]);
    setLanguage("");
  };

  const handleRemoveLanguage = (indexToRemove) => {
    const newLanguageList = languageList.filter((_, index) => index !== indexToRemove);
    setLanguageList(newLanguageList);
  };


  //skill
  const handleAddSkill = () => {
    const newSkill = { skill };
    setSkillList([...skillList, newSkill]);
    setSkill("");
  };
  const handleRemoveSkill = (indexToRemove) => {
    const newSkillList = skillList.filter((_, index) => index !== indexToRemove);
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
    const newProjectList = projectList.filter((_, index) => index !== indexToRemove);
    setProjectList(newProjectList);
  };

  const [role, setRole] = useState("Role");

  const onImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
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
          <div className={classes["tab"]}>
            <CardTab style="background-color:red;">
              <div className={classes["tab-space"]}>
                <TabSwitcher tabId={1}>
                  <div className={classes["tab-p"]}>Personal Data</div>
                </TabSwitcher>
                <TabSwitcher tabId={2}>
                  <div className={classes["tab-p"]}>Education</div>
                </TabSwitcher>
                <TabSwitcher tabId={3}>
                  <div className={classes["tab-p"]}>Experience / Skill</div>
                </TabSwitcher>
                <TabSwitcher tabId={4}>
                  <div className={classes["tab-p"]}>Project</div>
                </TabSwitcher>
                <TabSwitcher tabId={5}>
                  <div className={classes["tab-p"]}>Summarize</div>
                </TabSwitcher>
                <TabSwitcher tabId={6}>
                  <div className={classes["tab-p"]}>PDF</div>
                </TabSwitcher>
              </div>
              <div className={classes["tab-p"]}>
                <TabContent id={1}>
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
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" onChange={e => setName(e.target.value)}></input>
                  <label htmlFor="surname">Surname</label>
                  <input type="text" onChange={e => setSurname(e.target.value)}></input>
                  <label>Phone Number</label>
                  <input type="text" onChange={e => setPhoneNumber(e.target.value)}></input>
                  <label>Email</label>
                  <input type="text" onChange={e => setEmail(e.target.value)}></input>

                  <label>location</label>
                  <input type="text" onChange={e => setLocation(e.target.value)}></input>
                  <label>github</label>
                  <input type="text" onChange={e => setGithub(e.target.value)}></input>
                  <label>linkedin</label>
                  <input type="text" onChange={e => setLinkedin(e.target.value)}></input>
                  <label>EmprofileDescriptionail</label>
                  <input type="text" onChange={e => setProfileDescription(e.target.value)}></input>
                  <label>aboutme</label>
                  <input type="text" onChange={e => setAboutme(e.target.value)}></input>
                  <div >
                    <div>
                      <label htmlFor="languageInput">Language:</label>
                      <input
                        id="languageInput"
                        type="text"
                        value={language}
                        onChange={(event) => setLanguage(event.target.value)}
                      />
                    </div>
                    <button onClick={handleAddLanguage}>Add next language</button>
                    <div className={classes.card}>
                      <h4>Language List</h4>
                      {languageList.map((language, index) => (
                        <ul className={classes["card-list-elem"]} key={index}>
                          <p>{language.language}</p>
                          <button className={classes["remove-button"]} onClick={() => handleRemoveLanguage(index)}>Remove</button>
                        </ul>
                      ))}
                    </div>
                  </div>
                </TabContent>
                <TabContent id={2}>
                  <div>
                    <label htmlFor="schoolNameInput">School Name:</label>
                    <input
                      id="schoolNameInput"
                      type="text"
                      value={schoolName}
                      onChange={(event) => setSchoolName(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="schoolCityInput">School City:</label>
                    <input
                      id="schoolCityInput"
                      type="text"
                      value={schoolCity}
                      onChange={(event) => setSchoolCity(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="schoolStartYearInput">Start Year:</label>
                    <input
                      id="schoolStartYearInput"
                      type="date"
                      value={schoolStartYear}
                      onChange={(event) => setSchoolStartYear(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="schoolFinishYearInput">Finish Year:</label>
                    <input
                      id="schoolFinishYearInput"
                      type="date"
                      value={schoolFinishYear}
                      onChange={(event) => setSchoolFinishYear(event.target.value)}
                    />
                  </div>
                  <button onClick={handleAddEducation}>Add next education profile</button>
                  <div className={classes.card}>
                    <h4>Education List</h4>
                    {educationList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.schoolName}</p>
                        <p>{todo.schoolCity}</p>
                        <p>{todo.schoolStartYear}</p>
                        <p>{todo.schoolFinishYear}</p>
                        <button className={classes["remove-button"]} onClick={() => handleRemoveEducation(index)}>Remove</button>
                      </ul>
                    ))}
                  </div>
                </TabContent>
                <TabContent id={3}>
                  <div>
                    <label >companyName</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(event) => setCompanyName(event.target.value)}
                    />
                  </div>
                  <div>
                    <label >companyCity</label>
                    <input
                      type="text"
                      value={companyCity}
                      onChange={(event) => setCompanyCity(event.target.value)}
                    />
                  </div>
                  <div>
                    <label >experienceFrom</label>
                    <input
                      type="date"
                      value={experienceFrom}
                      onChange={(event) => setExperienceFrom(event.target.value)}
                    />
                  </div>
                  <div>
                    <label >experienceTo</label>
                    <input
                      type="date"
                      value={experienceTo}
                      onChange={(event) => setExperienceTo(event.target.value)}
                    />
                  </div>
                  <button onClick={handleAddExperience}>Add next experience</button>
                  <div className={classes.card}>
                    <h4>Education List</h4>
                    {experienceList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.companyName}</p>
                        <p>{todo.companyCity}</p>
                        <p>{todo.experienceFrom}</p>
                        <p>{todo.experienceTo}</p>
                        <button className={classes["remove-button"]} onClick={() => handleRemoveExperience(index)}>Remove</button>
                      </ul>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="skillInput">Skill:</label>
                    <input
                      id="skillInput"
                      type="text"
                      value={skill}
                      onChange={(event) => setSkill(event.target.value)}
                    />
                  </div>
                  <button onClick={handleAddSkill}>Add next skill</button>
                  <div className={classes.card}>
                    <h4>Skill list</h4>
                    {skillList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.skill}</p>
                        <button className={classes["remove-button"]} onClick={() => handleRemoveSkill(index)}>Remove</button>
                      </ul>
                    ))}
                  </div>
                </TabContent>
                <TabContent id={4}>
                  <div>
                    <label htmlFor="projectNameInput">Project Name:</label>
                    <input
                      id="projectNameInput"
                      type="text"
                      value={projectName}
                      onChange={(event) => setProjectName(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectLinkInput">Project Link:</label>
                    <input
                      id="projectLinkInput"
                      type="text"
                      value={projectLink}
                      onChange={(event) => setProjectLink(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectDescriptionInput">Project Description:</label>
                    <input
                      id="projectDescriptionInput"
                      type="text"
                      value={projectDescription}
                      onChange={(event) => setProjectDescription(event.target.value)}
                    />
                  </div>
                  <button onClick={handleAddProject}>Add</button>
                  <div className={classes.card}>
                    <h4>Project list</h4>
                    {projectList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.projectName}</p>
                        <p>{todo.projectLink}</p>
                        <p>{todo.projectDescription}</p>
                        <button className={classes["remove-button"]} onClick={() => handleRemoveProject(index)}>Remove</button>
                      </ul>
                    ))}
                  </div>


                </TabContent>
                <TabContent id={5}>
                  <div>
                    <label >Clause:</label>
                    <textarea
                      cols="100" rows="5"
                      type="text"
                      value={clause}
                      onChange={(event) => setClause(event.target.value)}
                    />
                  </div>
                </TabContent>
                <TabContent id={6}>

                  <button onClick={handleGeneratePdf}>PDF</button>
                </TabContent>
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
                <li className={classes["descontent-ul-li"]}>
                  <img
                    src={TelephoneIcon}
                    alt="TelephoneIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{phoneNumber}</p>
                </li>
                <li className={classes["descontent-ul-li"]}>
                  <img src={MailIcon} alt="MailIcon" className={classes.icon} />
                  <p className={classes["personal-data"]}>{email}</p>
                </li>
                <li className={classes["descontent-ul-li"]}>
                  <img
                    src={LocationIcon}
                    alt="LocationIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{location}</p>
                </li>
                <li className={classes["descontent-ul-li"]}>
                  <img
                    src={LinkedinIcon}
                    alt="LinkedinIcon"
                    className={classes.icon}
                  />
                  <p className={classes["personal-data"]}>{linkedin}</p>
                </li>
                <li className={classes["descontent-ul-li"]}>
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
                  <p className={classes["width70"]}>{todo.schoolName}, {todo.schoolCity}</p>

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
                  <p className={classes["width70"]}>{todo.companyName}, {todo.companyCity}</p>

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
}

export default Editor
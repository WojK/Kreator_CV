import React from "react";
import classes from "./editor.module.css";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";
import { CardTab, TabSwitcher, TabContent } from "../card/Card";

const EditorForm = ({
  setName,
  name,
  setSurname,
  surname,
  isPhoneNumber,
  handlePhoneNumber,
  phoneNumber,
  setPhoneNumber,
  isEmail,
  handleEmail,
  email,
  setEmail,
  isLocation,
  handleLocation,
  location,
  setLocation,
  isGitHub,
  handleGitHub,
  github,
  setGithub,
  isLinkedin,
  handleLinkedin,
  linkedin,
  setLinkedin,
  profileDescription,
  setProfileDescription,
  aboutme,
  setAboutme,
  companyName,
  setCompanyName,
  companyCity,
  setCompanyCity,
  experienceFrom,
  setExperienceFrom,
  experienceTo,
  setExperienceTo,
  handleAddExperience,
  experienceList,
  handleRemoveExperience,
  projectName,
  setProjectName,
  projectLink,
  setProjectLink,
  projectDescription,
  setProjectDescription,
  handleAddProject,
  projectList,
  handleRemoveProject,
  schoolName,
  setSchoolName,
  schoolCity,
  setSchoolCity,
  schoolStartYear,
  setSchoolStartYear,
  schoolFinishYear,
  setSchoolFinishYear,
  handleAddEducation,
  educationList,
  handleRemoveEducation,
  skill,
  setSkill,
  handleAddSkill,
  skillList,
  handleRemoveSkill,
  language,
  setLanguage,
  handleAddLanguage,
  languageList,
  handleRemoveLanguage,
  clause,
  setClause,
  handleGeneratePdf,
  onImageChange,
}) => {
  return (
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
                <p>
                  Enter your full name and contact information so a recruiter
                  can write or call you.
                </p>
                .
                <div className={classes["tab-content-forms"]}>
                  <div className={classes["tab-content-form-image"]}>
                    <input type="file" id="file-upload"  onChange={onImageChange} hidden />

                    <label
                      className={classes["custom-file-upload"]}
                      for="file-upload"
                    >
                      Choose Image
                    </label>
                  </div>

                  <div className={classes["tab-content-form-33"]}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className={classes["tab-content-form-33"]}>
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
                <div className={classes["tab-content-form-100"]}>
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
                <div className={classes["tab-content-form-100"]}>
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
                <div className={classes["tab-content-form-100"]}>
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
                <p>
                  Describe your profile and post information about yourself!
                </p>
                .<label>Profile description</label>
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
                <p>
                  Add your most recent level of education - if you have higher
                  education - do not list secondary education, and if you have
                  secondary education, do not write about primary education.
                </p>
                <div className={`${classes["tab-content-forms"]}`}>
                    
                  <div className={classes["tab-content-form"]}>
                    <div>
                      <label htmlFor="schoolNameInput">School Name:</label>
                      <input
                        id="schoolNameInput"
                        type="text"
                        value={schoolName}
                        onChange={(event) => setSchoolName(event.target.value)}
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
                        onChange={(event) => setSchoolCity(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className={classes["tab-content-form"]}>
                    <div>
                      <label htmlFor="schoolStartYearInput">Start Year:</label>
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
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddEducation}
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
                      <a
                        className={`${classes["icon-trash"]}`}
                        onClick={() => handleRemoveEducation(index)}
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </ul>
                  ))}
                </div>
              </TabContent>
              <TabContent id={4}>
                <h1>Now let's work on your experience</h1>.
                <p>
                  Start with your most recent job. You can also add volunteer
                  work, internships and extra-curricular activities.
                </p>
                <div className={`${classes["tab-content-forms"]}`}>
                  <div className={classes["tab-content-form"]}>
                    <label>Conpany name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(event) => setCompanyName(event.target.value)}
                    />
                  </div>
                  <div className={classes["tab-content-form"]}>
                    <label>Company city</label>
                    <input
                      type="text"
                      value={companyCity}
                      onChange={(event) => setCompanyCity(event.target.value)}
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
                      onChange={(event) => setExperienceTo(event.target.value)}
                    />
                  </div>
                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddExperience}
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
                      <a
                        className={`${classes["icon-trash"]}`}
                        onClick={() => handleRemoveExperience(index)}
                      >
                        <i class="fa fa-trash"></i>
                      </a>
                    </ul>
                  ))}
                </div>
              </TabContent>
              <TabContent id={5}>
                <h1>Ok, let's go with projects</h1>.
                <div className={`${classes["tab-content-forms"]}`}>
                  <div className={classes["tab-content-form"]}>
                    <label htmlFor="projectNameInput">Project Name:</label>
                    <input
                      id="projectNameInput"
                      type="text"
                      value={projectName}
                      onChange={(event) => setProjectName(event.target.value)}
                    />
                  </div>
                  <div className={classes["tab-content-form"]}>
                    <label htmlFor="projectLinkInput">Project Link:</label>
                    <input
                      id="projectLinkInput"
                      type="text"
                      value={projectLink}
                      onChange={(event) => setProjectLink(event.target.value)}
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
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddProject}
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
                      <a
                        className={`${classes["icon-trash"]}`}
                        onClick={() => handleRemoveProject(index)}
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
                      className={classes["tab-content-form-language-add-input"]}
                      id="languageInput"
                      type="text"
                      value={skill}
                      onChange={(event) => setSkill(event.target.value)}
                    />
                  </div>
                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddSkill}
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className={classes.card}>
                    {/* <h4>Language List</h4> */}
                    {skillList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.skill}</p>
                        <a
                          className={`${classes["icon-trash"]}`}
                          onClick={() => handleRemoveSkill(index)}
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
                <p>
                  Add the foreign languages you speak and specify your level of
                  knowledge
                </p>
                <div className={classes["tab-content-form-language"]}>
                  <div className={classes["tab-content-form-language-add"]}>
                    <input
                      className={classes["tab-content-form-language-add-input"]}
                      id="languageInput"
                      type="text"
                      value={language}
                      onChange={(event) => setLanguage(event.target.value)}
                    />
                  </div>
                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddLanguage}
                    >
                      <i class="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className={classes.card}>
                    {/* <h4>Language List</h4> */}
                    {languageList.map((language, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{language.language}</p>
                        <a
                          className={`${classes["icon-trash"]}`}
                          onClick={() => handleRemoveLanguage(index)}
                        >
                          <i class="fa fa-trash"></i>
                        </a>
                      </ul>
                    ))}
                  </div>
                </div>
              </TabContent>
              <TabContent id={8}>
                <h1>
                  It's almost ready! Let's finish your resume with a strong
                  summary
                </h1>
                .
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
  );
};

export default EditorForm;

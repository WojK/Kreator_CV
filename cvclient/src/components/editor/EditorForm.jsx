import { useEffect, useState } from 'react';
import classes from "./editor.module.css";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";
import { CardTab, TabSwitcher, TabContent } from "../card/Card";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TextAny } from "../../language/langTexts";
import axios from "axios";
import {
  studentsTemplates,
  generalsTemplates,
  technicalTemplates,
} from "../../pages/cv-data-templates";

const EditorForm = ({
  setColor,
  color,
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
  jobDescription,
  setJobDescription,
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
  schoolDesc,
  setSchoolDesc,
  schoolFaculty,
  setSchoolFaculty,
  schoolSubject,
  setSchoolSubject,
  setSchoolSpecialization,
  schoolSpecialization,
  handleAddEducation,
  educationList,
  handleRemoveEducation,
  skill,
  setSkill,
  softSkill,
  setSoftSkill,
  handleAddSoftSkill,
  handleRemoveSoftSkill,
  handleAddSkill,
  skillList,
  softSkillList,
  handleRemoveSkill,
  tech,
  setTech,
  language,
  setLanguage,
  handleAddLanguage,
  languageList,
  handleRemoveLanguage,
  hobby,
  setHobby,
  handleAddHobby,
  hobbyList,
  handleRemoveHobby,
  clause,
  setClause,
  handleGeneratePdf,
  onImageChange,
  formType,
}) => {
  const navigate = useNavigate();

  const { editorId } = useParams();

  let templates;
  if (formType === "general") {
    templates = generalsTemplates.map(function (template) {
      return (
        <div
          key={template.id}
          className={classes["template-choose"]}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          {template.shortcut}
        </div>
      );
    });
  } else if (formType === "student") {
    templates = studentsTemplates.map(function (template) {
      return (
        <div
          className={classes["template-choose"]}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          {template.shortcut}
        </div>
      );
    });
  } else if (formType === "technical") {
    templates = technicalTemplates.map(function (template) {
      return (
        <div
          className={classes["template-choose"]}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          {template.shortcut}
        </div>
      );
    });
  }
  const saveInfo = JSON.stringify({
    color: color,
    name: name,
    surname: surname,
    isPhoneNumber: isPhoneNumber,
    phoneNumber: phoneNumber,
    isEmail: isEmail,
    email: email,
    isLocation: isLocation,
    location: location,
    isGitHub: isGitHub,
    github: github,
    isLinkedin: isLinkedin,
    linkedin: linkedin,
    profileDescription: profileDescription,
    aboutme: aboutme,
    experienceList: experienceList,
    projectList: projectList,
    skillList: skillList,
    softSkillList: softSkillList,
    tech: tech,
    languageList: languageList,
    hobbyList: hobbyList,
    educationList: educationList
  });
  const handleSaveInfo = async (e) => {
    console.log(saveInfo);

    e.preventDefault();
    await axios
      .post("https://localhost:5710/api/Cv",
        saveInfo
      ,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('tokenCreatorCV')}` 
        }
      })
      .then((response) => {
        if (response.data) {

        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400)
          console.log(error.response.data);
      });
  };
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      axios.get('https://localhost:5710/api/cv',{headers: {
        'Authorization': `Bearer ${localStorage.getItem('tokenCreatorCV')}` 
      }})
        .then(response => {
          console.log(response.data)
          console.log(response.data.color)
          setColor(response.data.color);
          setName(response.data.name);
          setSurname(response.data.surname);
          setPhoneNumber(response.data.phoneNumber);
          setEmail(response.data.email);
          setLocation(response.data.location);
          setGithub(response.data.Github);
          setLinkedin(response.data.Linkedin);
          setProfileDescription(response.data.profileDescription);
          setAboutme(response.data.aboutMe);
          for (let element of response.data.experienceList) {

            setJobDescription(element.jobDescription);
            setCompanyName(element.companyName);
            setCompanyCity(element.companyCity);
            setExperienceFrom(element.experienceFrom);
            setExperienceTo(element.experienceTo);
            handleAddExperience()
          }
          for (let element of response.data.projectList) {
            setProjectName(element.projectName);
            setProjectLink(element.projectLink);
            setProjectDescription(element.projectDescription);
            handleAddProject()
          }
          for (let element of response.data.educationList) {

            setSchoolName(element.schoolName);
            setSchoolCity(element.schoolCity);
            setSchoolStartYear(element.schoolStartYear);
            setSchoolFinishYear(element.schoolFinishYear);
            setSchoolDesc(element.schoolDesc);
            setSchoolFaculty(element.schoolFaculty);
            setSchoolSubject(element.schoolSubject);
            setSchoolSpecialization(element.schoolSpecialization);
            handleAddEducation();
          }
          for (let element of response.data.skillList) {
            setSkill(element.skill);
            handleAddSkill()

          }
          for (let element of response.data.softSkillList) {
            setSoftSkill(element.softSkill);
            handleAddSoftSkill()
          }
          for (let element of response.data.languageList) {
            setLanguage(element.language);
            handleAddLanguage()
          }
          for (let element of response.data.hobbyList) {
            setHobby(element.hobby);
            handleAddHobby()
          }
          setTech(response.data.tech);
        });
    };

    dataFetch();
  }, []);


  return (
    <div className={classes.form}>
      <h1 className={classes["choose-template-text"]}>
        <TextAny text="editor_feel_free" />
      </h1>
      <div className={classes["template-choose-container"]}>{templates}</div>
      <button onClick={handleSaveInfo}>Save Info</button>

      <div>
        <CardTab>
          <div className={classes["tab-card"]}>
            <div className={classes["tab-switcher"]}>
              <TabSwitcher tabId={1} icon={"fas fa-user"}>
                <div className={classes["tab-p"]}>
                  <TextAny text="personal_tab" />
                </div>
              </TabSwitcher>
              {(formType === "general" || formType === "student") && (
                <TabSwitcher tabId={2} icon={"fas fa-book"}>
                  <div className={classes["tab-p"]}>
                    <TextAny text="profile_tab" />
                  </div>
                </TabSwitcher>
              )}
              <TabSwitcher tabId={3} icon={"fas fa-school"}>
                <div className={classes["tab-p"]}>
                  <TextAny text="education_tab" />
                </div>
              </TabSwitcher>
              <TabSwitcher tabId={4} icon={"fas fa-briefcase"}>
                {formType === "student" && (
                  <div className={classes["tab-p"]}>
                    <TextAny text="soft_skills_tab" />
                  </div>
                )}
                {formType !== "student" && (
                  <div className={classes["tab-p"]}>
                    <TextAny text="experience_tab" />
                  </div>
                )}
              </TabSwitcher>
              {formType === "student" && (
                <TabSwitcher tabId={5} icon={"fa fa-fighter-jet"}>
                  <div className={classes["tab-p"]}>
                    <TextAny text="project_tab" />
                  </div>
                </TabSwitcher>
              )}
              <TabSwitcher tabId={6} icon={"fa fa-ambulance"}>
                <div className={classes["tab-p"]}>
                  <TextAny text="skills_tab" />
                </div>
              </TabSwitcher>
              <TabSwitcher tabId={7} icon={"fa fa-language"}>
                <div className={classes["tab-p"]}>
                  <TextAny text="languages_tab" />
                </div>
              </TabSwitcher>
              {formType === "general" && (
                <TabSwitcher tabId={8} icon={"fas fa-laugh"}>
                  <div className={classes["tab-p"]}>
                    <TextAny text="hobby_tab" />
                  </div>
                </TabSwitcher>
              )}
              <TabSwitcher tabId={9} icon={"fas fa-globe"}>
                <div className={classes["tab-p"]}>
                  <TextAny text="sum_tab" />
                </div>
              </TabSwitcher>
            </div>
            <div className={classes["tab-content"]}>
              <TabContent id={1}>
                <h1>
                  <TextAny text="editor_personal_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_personal_submain_text" />
                </p>
                {(editorId === "student2" || editorId === "student1"
                  || editorId === "general1" || editorId === "general2" || editorId === "general3"
                  || editorId === "technical2" || editorId === "technical3"
                ) && (
                    <div className={classes.colors}>
                      <div
                        className={classes.colorbutton1}
                        onClick={() => setColor("color1")}
                      ></div>
                      <div
                        className={classes.colorbutton2}
                        onClick={() => setColor("color2")}
                      ></div>
                    </div>
                  )}
                <div className={classes["tab-content-forms"]}>
                  <div className={classes["tab-content-form-image"]}>
                    <input
                      type="file"
                      id="file-upload"
                      onChange={onImageChange}
                      hidden
                    />

                    <label
                      className={classes["custom-file-upload"]}
                      htmlFor="file-upload"
                    >
                      <TextAny text="editor_personal_choose_image" />
                    </label>
                  </div>

                  <div className={classes["tab-content-form-33"]}>
                    <label htmlFor="name">
                      <TextAny text="editor_personal_name" />
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div className={classes["tab-content-form-33"]}>
                    <label htmlFor="surname">
                      <TextAny text="editor_personal_surname" />
                    </label>
                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    ></input>
                  </div>
                  <div className={classes["tab-content-form"]}>
                    <div className={classes["is-active"]}>
                      <label>
                        <TextAny text="editor_personal_phone_number" />
                      </label>
                      <input
                        className={classes["checkbox"]}
                        type="checkbox"
                        autoComplete="off"
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
                      <label>
                        <TextAny text="editor_personal_email" />
                      </label>
                      <input
                        className={classes["checkbox"]}
                        type="checkbox"
                        autoComplete="off"
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
                    <label>
                      <TextAny text="editor_personal_location" />
                    </label>
                    <input
                      className={classes["checkbox"]}
                      type="checkbox"
                      autoComplete="off"
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
                {formType === "student" && (
                  <div className={classes["tab-content-form-100"]}>
                    <div className={classes["is-active"]}>
                      <label>Github</label>
                      <input
                        className={classes["checkbox"]}
                        type="checkbox"
                        autoComplete="off"
                        value={isGitHub}
                        onClick={handleGitHub}
                      ></input>
                    </div>
                    <input
                      type="text"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                    ></input>
                  </div>
                )}
                {(formType === "student") && (
                  <div className={classes["tab-content-form-100"]}>
                    <div className={classes["is-active"]}>
                      <label>Linkedin</label>
                      <input
                        className={classes["checkbox"]}
                        type="checkbox"
                        autoComplete="off"
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
                )}
              </TabContent>
              <TabContent id={2}>
                <h1>
                  <TextAny text="editor_profile_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_profile_submain_text" />
                </p>
                {formType === "general" && (
                  <>
                    <label>
                      <TextAny text="editor_profile_profile_description" />
                    </label>
                    <textarea
                      rows="5"
                      type="text"
                      value={profileDescription}
                      onChange={(e) => setProfileDescription(e.target.value)}
                    ></textarea>
                  </>
                )}
                <label>
                  <TextAny text="editor_profile_about_me" />
                </label>
                <textarea
                  rows="5"
                  type="text"
                  value={aboutme}
                  onChange={(e) => setAboutme(e.target.value)}
                ></textarea>
              </TabContent>
              <TabContent id={3}>
                <h1>
                  <TextAny text="editor_education_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_education_submain_text" />
                </p>
                <div className={`${classes["tab-content-forms"]}`}>
                  <div className={classes["tab-content-form"]}>
                    <div>
                      <label htmlFor="schoolNameInput">
                        <TextAny text="editor_education_school_name" />
                      </label>
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
                      <label htmlFor="schoolCityInput">
                        <TextAny text="editor_education_school_city" />
                      </label>
                      <input
                        id="schoolCityInput"
                        type="text"
                        value={schoolCity}
                        onChange={(event) => setSchoolCity(event.target.value)}
                      />
                    </div>
                  </div>
                  {formType === "student" && (
                    <>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolFaclutyInput">
                            School Faculty:
                          </label>
                          <input
                            id="schoolFacultyInput"
                            type="text"
                            value={schoolFaculty}
                            onChange={(event) =>
                              setSchoolFaculty(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolSubjectInput">
                            School Subject:
                          </label>
                          <input
                            id="schoolSubjectInput"
                            type="text"
                            value={schoolSubject}
                            onChange={(event) =>
                              setSchoolSubject(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <div>
                          <label htmlFor="schoolSpecializationInput">
                            School Specialization:
                          </label>
                          <input
                            id="schoolSpecializationInput"
                            type="text"
                            value={schoolSpecialization}
                            onChange={(event) =>
                              setSchoolSpecialization(event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className={classes["tab-content-form"]}>
                    <div>
                      <label htmlFor="schoolStartYearInput">
                        <TextAny text="editor_education_start_year" />
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
                        <TextAny text="editor_education_finish_year" />
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
                  <>
                    <label>
                      <TextAny text="editor_education_school_desc" />
                    </label>
                    <textarea
                      rows="3"
                      type="text"
                      value={schoolDesc}
                      onChange={(e) => setSchoolDesc(e.target.value)}
                    />
                  </>
                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddEducation}
                    >
                      <i className="fa fa-plus"></i>
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
                        <i className="fa fa-trash"></i>
                      </a>
                    </ul>
                  ))}
                </div>
              </TabContent>
              <TabContent id={4}>
                {editorId === "student2" && (
                  <div>
                    <h1>Let's pick your most important soft skills</h1>
                    <div className={classes["tab-content-form-language"]}>
                      <div className={classes["tab-content-form-language-add"]}>
                        <input
                          className={
                            classes["tab-content-form-language-add-input"]
                          }
                          id="languageInput"
                          type="text"
                          value={softSkill}
                          onChange={(event) => setSoftSkill(event.target.value)}
                        />
                      </div>
                      <div className={classes["to-right"]}>
                        <a
                          className={`${classes["icon-add"]}`}
                          onClick={handleAddSoftSkill}
                        >
                          <i className="fa fa-plus"></i>
                        </a>
                      </div>
                      <div className={classes.card}>
                        {softSkillList.map((todo, index) => (
                          <ul className={classes["card-list-elem"]} key={index}>
                            <p>{todo.softSkill}</p>
                            <a
                              className={`${classes["icon-trash"]}`}
                              onClick={() => handleRemoveSoftSkill(index)}
                            >
                              <i className="fa fa-trash"></i>
                            </a>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {editorId !== "student2" && (
                  <div>
                    <h1>
                      <TextAny text="editor_experience_main_text" />
                    </h1>
                    <br />
                    <p>
                      <TextAny text="editor_experience_submain_text" />
                    </p>
                    <div className={`${classes["tab-content-forms"]}`}>
                      <div className={classes["tab-content-form"]}>
                        <label>
                          <TextAny text="editor_experience_company_name" />
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(event) =>
                            setCompanyName(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>
                          <TextAny text="editor_experience_company_city" />
                        </label>
                        <input
                          type="text"
                          value={companyCity}
                          onChange={(event) =>
                            setCompanyCity(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>
                          <TextAny text="editor_experience_experience_from" />
                        </label>
                        <input
                          type="date"
                          value={experienceFrom}
                          onChange={(event) =>
                            setExperienceFrom(event.target.value)
                          }
                        />
                      </div>
                      <div className={classes["tab-content-form"]}>
                        <label>
                          <TextAny text="editor_experience_experience_to" />
                        </label>
                        <input
                          type="date"
                          value={experienceTo}
                          onChange={(event) =>
                            setExperienceTo(event.target.value)
                          }
                        />
                      </div>
                      <>
                        <label>
                          <TextAny text="editor_experience_job_desc" />
                        </label>
                        <textarea
                          rows="3"
                          type="text"
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                        />
                      </>
                      <div className={classes["to-right"]}>
                        <a
                          className={`${classes["icon-add"]}`}
                          onClick={handleAddExperience}
                        >
                          <i className="fa fa-plus"></i>
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
                            <i className="fa fa-trash"></i>
                          </a>
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </TabContent>
              <TabContent id={5}>
                <h1>
                  <TextAny text="editor_experience_job_desc" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_projects_submain_text" />
                </p>
                <div className={`${classes["tab-content-forms"]}`}>
                  <div className={classes["tab-content-form"]}>
                    <label htmlFor="projectNameInput">
                      <TextAny text="editor_projects_project_name" />
                    </label>
                    <input
                      id="projectNameInput"
                      type="text"
                      value={projectName}
                      onChange={(event) => setProjectName(event.target.value)}
                    />
                  </div>
                  <div className={classes["tab-content-form"]}>
                    <label htmlFor="projectLinkInput">
                      <TextAny text="editor_projects_project_link" />
                    </label>
                    <input
                      id="projectLinkInput"
                      type="text"
                      value={projectLink}
                      onChange={(event) => setProjectLink(event.target.value)}
                    />
                  </div>
                  <div className={classes["tab-content-form-100"]}>
                    <label htmlFor="projectDescriptionInput">
                      <TextAny text="editor_projects_project_desc" />
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
                  {formType === "student" && (
                    <div className={classes["tab-content-form"]}>
                      <label htmlFor="projectLinkInput">
                        <TextAny text="editor_projects_project_tech_stack" />
                      </label>
                      <input
                        id="projectTechInput"
                        type="text"
                        value={tech}
                        onChange={(event) => setTech(event.target.value)}
                      />
                    </div>
                  )}

                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddProject}
                    >
                      <i className="fa fa-plus"></i>
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
                        <i className="fa fa-trash"></i>
                      </a>
                    </ul>
                  ))}
                </div>
              </TabContent>
              <TabContent id={6}>
                <h1>
                  <TextAny text="editor_skills_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_skills_submain_text" />
                </p>
                <div className={classes["tab-content-form-language"]}>
                  <label htmlFor="skillInput">
                    <TextAny text="editor_skills_skill" />
                  </label>
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
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className={classes.card}>
                    {skillList.map((todo, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{todo.skill}</p>
                        <a
                          className={`${classes["icon-trash"]}`}
                          onClick={() => handleRemoveSkill(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </ul>
                    ))}
                  </div>
                </div>
              </TabContent>
              <TabContent id={7}>
                <h1>
                  <TextAny text="editor_languages_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_languages_submain_text" />
                </p>
                <div className={classes["tab-content-form-language"]}>
                  <label htmlFor="languageInput">
                    <TextAny text="editor_languages_language" />
                  </label>
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
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className={classes.card}>
                    {languageList.map((language, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{language.language}</p>
                        <a
                          className={`${classes["icon-trash"]}`}
                          onClick={() => handleRemoveLanguage(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </ul>
                    ))}
                  </div>
                </div>
              </TabContent>
              <TabContent id={8}>
                <h1>
                  <TextAny text="editor_hobby_main_text" />
                </h1>
                <br />
                <p>
                  <TextAny text="editor_hobby_submain_text" />
                </p>
                <div className={classes["tab-content-form-language"]}>
                  <label htmlFor="hobbyInput">
                    <TextAny text="editor_hobby_hobby" />
                  </label>
                  <div className={classes["tab-content-form-language-add"]}>
                    <input
                      className={classes["tab-content-form-language-add-input"]}
                      id="hobbyInput"
                      type="text"
                      value={hobby}
                      onChange={(event) => setHobby(event.target.value)}
                    />
                  </div>
                  <div className={classes["to-right"]}>
                    <a
                      className={`${classes["icon-add"]}`}
                      onClick={handleAddHobby}
                    >
                      <i className="fa fa-plus"></i>
                    </a>
                  </div>
                  <div className={classes.card}>
                    {hobbyList.map((hobby, index) => (
                      <ul className={classes["card-list-elem"]} key={index}>
                        <p>{hobby.hobby}</p>
                        <a
                          className={`${classes["icon-trash"]}`}
                          onClick={() => handleRemoveHobby(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </ul>
                    ))}
                  </div>
                </div>
              </TabContent>
              <TabContent id={9}>
                <h1>
                  <TextAny text="editor_sum_main_text" />
                </h1>
                <br />
                <div>
                  <label>
                    <TextAny text="editor_sum_clause" />
                  </label>
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

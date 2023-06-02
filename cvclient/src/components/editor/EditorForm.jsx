import React from "react";
import classes from "./editor.module.css";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";
import { CardTab, TabSwitcher, TabContent } from "../card/Card";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TextAny } from "../../language/langTexts";

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

  return (
    <div className={classes.form}>
      <h1 className={classes["choose-template-text"]}>
        <TextAny text="editor_feel_free" />
      </h1>
      <div className={classes["template-choose-container"]}>{templates}</div>

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
                {editorId === "student2" && (
                  <div className={classes.colors}>
                    <div
                      className={classes.color1}
                      onClick={() => setColor("color1")}
                    ></div>
                    <div
                      className={classes.color2}
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
                      for="file-upload"
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
                      <label>
                        <TextAny text="editor_personal_email" />
                      </label>
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
                    <label>
                      <TextAny text="editor_personal_location" />
                    </label>
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
                {formType === "student" && (
                  <div className={classes["tab-content-form-100"]}>
                    <div className={classes["is-active"]}>
                      <label>Github</label>
                      <input
                        className={classes["checkbox"]}
                        type="checkbox"
                        autocomplete="off"
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
                {(formType === "student" || formType === "technical") && (
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
                          <i class="fa fa-plus"></i>
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
                              <i class="fa fa-trash"></i>
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
                        ></textarea>
                      </>
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
                      <i class="fa fa-plus"></i>
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
                          <i class="fa fa-trash"></i>
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

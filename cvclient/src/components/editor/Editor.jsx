import React from "react";
import classes from "./editor.module.css";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";
import photo from "../../assets/images/photo.jpg";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";

import EditorForm from "./EditorForm";
import EditorFormTech from "./tech/EditorFormTech";
import EditorFormGeneral from "./general/EditorFormGeneral";

import EditorResumeTech from "./tech/EditorResumeTech";
import EditorResumeStudent from "./student/EditorResumeStudent";
import EditorResume from "./EditorResume";
import EditorResumeGeneralV2 from "./general/EditorResumeGeneralV2";
import EditorResumeGeneralV1 from "./general/EditorResumeGeneralV1";

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
  const [schoolDesc, setSchoolDesc] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, expedita!"
  );
  // experience
  const [experienceList, setExperienceList] = useState([]);
  const [companyName, setCompanyName] = useState("Politechnika Warszawska");
  const [companyCity, setCompanyCity] = useState("Warszawa");
  const [experienceFrom, setExperienceFrom] = useState("2013-03-20");
  const [experienceTo, setExperienceTo] = useState("2021-03-20");
  const [experienceDesc, setExperienceDesc] = useState("");
  const [jobDescription, setJobDescription] = useState(
    "Miejsce na opis czym zajmowałeś się w firmie"
  );
  // skill
  const [skillList, setSkillList] = useState([]);
  const [skill, setSkill] = useState("Komunikatywnosc");

  // hobby
  const [hobbyList, setHobbyList] = useState([]);
  const [hobby, setHobby] = useState("Italian Culture");

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
      schoolDesc,
    };
    setEducationList([...educationList, newEducation]);
    setSchoolName("");
    setSchoolCity("");
    setSchoolStartYear("");
    setSchoolFinishYear("");
    setSchoolDesc("");
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
      experienceDesc,
      jobDescription,
    };
    setExperienceList([...experienceList, newExperience]);
    setCompanyName("");
    setCompanyCity("");
    setExperienceFrom("");
    setExperienceTo("");
    setExperienceDesc("");
    setJobDescription("");
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
  // hobby
  const handleAddHobby = () => {
    const newHobby = { hobby };
    setHobbyList([...hobbyList, newHobby]);
    setHobby("");
  };

  const handleRemoveHobby = (indexToRemove) => {
    const newHobbyList = hobbyList.filter(
      (_, index) => index !== indexToRemove
    );
    setHobbyList(newHobbyList);
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
  const propsForm = {
    setName,
    name,
    setSurname,
    surname,
    isPhoneNumber,
    handlePhoneNumber,
    phoneNumber,
    isEmail,
    handleEmail,
    email,
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
    experienceDesc,
    setExperienceDesc,
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
    schoolDesc,
    setSchoolDesc,
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
    hobby,
    setHobby,
    handleAddHobby,
    hobbyList,
    handleRemoveHobby,
    clause,
    setClause,
    handleGeneratePdf,
    onImageChange,
  };
  const propsResume = {
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
    hobbyList,
    image,
    reportTemplateRef,
    educationList,
  };

  const { editorId } = useParams();
  let formType = editorId;
  formType = formType.slice(0, -1);
  return (
    <>
      <div className={classes.main}>
        {/* conditional rendering form*/}
        {formType == "student" && <EditorForm {...propsForm} />}
        {formType == "technical" && <EditorFormTech {...propsForm} />}
        {formType == "general" && <EditorFormGeneral {...propsForm} />}

        {/* conditional rendering resume*/}
        {editorId == "student1" && <EditorResume {...propsResume} />}
        {editorId == "student2" && <EditorResumeStudent {...propsResume} />}
        {editorId == "technical1" && <EditorResumeTech {...propsResume} />}
        {editorId == "general1" && <EditorResumeGeneralV1 {...propsResume} />}
        {editorId == "general2" && <EditorResumeGeneralV2 {...propsResume} />}
      </div>
    </>
  );
};

export default Editor;

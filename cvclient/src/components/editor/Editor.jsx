import React from "react";
import classes from "./editor.module.css";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import photo from "../../assets/images/photo.jpg";
import "../../assets/fonts/Roboto-normal";
import "../../assets/fonts/times-normal";
import "../../assets/fonts/times-bold";

import EditorForm from "./EditorForm";

import EditorResumeTech from "./tech/EditorResumeTech";
import EditorResumeTechV2 from "./tech/EditorResumeTechV2";

import EditorResumeStudentV1 from "./student/EditorResumeStudentV1";
import EditorResumeStudent from "./student/EditorResumeStudent";

import EditorResumeGeneralV1 from "./general/EditorResumeGeneralV1";
import EditorResumeGeneralV2 from "./general/EditorResumeGeneralV2";
import EditorResumeGeneralV3 from "./general/EditorResumeGeneralV3";


const Editor = () => {
  const [color, setColor] = useState("color1"); // each resume will have classes like: color1, color2 etc.

  // personal
  const [name, setName] = useState("Tom");
  const [surname, setSurname] = useState("Cruse");
  const [email, setEmail] = useState("tom.cruse@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+48 582 293 211");

  //personal desc
  const [location, setLocation] = useState("Warsaw");
  const [github, setGithub] = useState("https://github.com/WojK/Kreator_CV");
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
  const [schoolFaculty, setSchoolFaculty] = useState(""); //Electrical Engineering
  const [schoolSubject, setSchoolSubject] = useState(""); // Applied Information Technology
  const [schoolSpecialization, setSchoolSpecialization] = useState("");

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
  const [skill, setSkill] = useState("Communication");

  // soft skill
  const [softSkillList, setSoftSkillList] = useState([]);
  const [softSkill, setSoftSkill] = useState("Communication");

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

  const [tech, setTech] = useState("Tchnology");

  // education
  const handleAddEducation = () => {
    const newEducation = {
      schoolName,
      schoolCity,
      schoolStartYear,
      schoolFinishYear,
      schoolFaculty,
      schoolSubject,
      schoolSpecialization,
      schoolDesc,
    };
    setEducationList([...educationList, newEducation]);
    setSchoolName("");
    setSchoolCity("");
    setSchoolStartYear("");
    setSchoolFinishYear("");
    setSchoolDesc("");
    setSchoolFaculty("");
    setSchoolSubject("");
    setSchoolSpecialization("");
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

  const handleAddSoftSkill = () => {
    const newSkill = { softSkill };
    setSoftSkillList([...softSkillList, newSkill]);
    setSoftSkill("");
  };

  const handleRemoveSoftSkill = (indexToRemove) => {
    const newSkillList = softSkillList.filter(
      (_, index) => index !== indexToRemove
    );
    setSoftSkillList(newSkillList);
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
    const newProject = { projectName, projectLink, projectDescription, tech };
    setProjectList([...projectList, newProject]);
    setProjectName("");
    setProjectLink("");
    setProjectDescription("");
    setTech("");
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

  const { editorId } = useParams();
  let formType = editorId;
  formType = formType.slice(0, -1);

  const propsForm = {
    color,
    setColor,
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
    tech,
    setTech,
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
    schoolFaculty,
    setSchoolFaculty,
    schoolSubject,
    setSchoolSubject,
    schoolSpecialization,
    setSchoolSpecialization,
    handleAddEducation,
    educationList,
    handleRemoveEducation,
    skill,
    setSkill,
    softSkill,
    setSoftSkill,
    handleAddSkill,
    handleAddSoftSkill,
    handleRemoveSoftSkill,
    skillList,
    softSkillList,
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
    formType,
  };
  const propsResume = {
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
    projectList,
    skillList,
    softSkillList,
    tech,
    languageList,
    hobbyList,
    image,
    reportTemplateRef,
    educationList,
  };

  return (
    <>
      <div className={classes.main}>
        <EditorForm {...propsForm} />

        {/* conditional rendering resume*/}
        {editorId === "student1" && <EditorResumeStudentV1 {...propsResume} />}
        {editorId === "student2" && <EditorResumeStudent {...propsResume} />}
        {editorId === "technical1" && <EditorResumeTech {...propsResume} />}
        {editorId === "technical2" && <EditorResumeTechV2 {...propsResume} />}
        {editorId === "general1" && <EditorResumeGeneralV1 {...propsResume} />}
        {editorId === "general2" && <EditorResumeGeneralV2 {...propsResume} />}
        {editorId === "general3" && <EditorResumeGeneralV3 {...propsResume} />}
      </div>
    </>
  );
};

export default Editor;

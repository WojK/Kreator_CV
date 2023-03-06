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

const Editor = () => {
    const [image, setImage] = useState(photo);
    const [name, setName] = useState("Name");
    const [surname, setSurname] = useState("Surname");
    const [role, setRole] = useState("Role");
    const [phoneNumber, setPhoneNumber] = useState("Phone Number");
    const [location, setLocation] = useState("Location");
    const [email, setEmail] = useState("Address email");
    const [github, setGithub] = useState("Github");
    const [linkedin, setLinkedin] = useState("Linkedin");
    const [profileDescription, setProfileDescription] = useState(
      "Profile description"
    );
  
    const [education, setEducation] = useState(
      <p>
        <b>What?</b>
        <br /> Where? <br /> When?
      </p>
    );
    const [languages, setLanguages] = useState(<p> &#x2022; Language</p>);
  
    const [aboutme, setAboutme] = useState(
      " A place where you can mark your interests"
    );
  
    const [project] = useState(
      <p>
        <b>Project title</b> <br />
        Project description <br />
        Technology stack
      </p>
    );
  
    const nameHandler = (event) => {
      const newName = event.target.value;
      setName(newName);
    };
  
    const surnameHandler = (event) => {
      const newSurname = event.target.value;
      setSurname(newSurname);
    };
  
    const onImageChange = (event) => {
      setImage(URL.createObjectURL(event.target.files[0]));
    };
  
    const roleHandler = (event) => {
      setRole(event.target.value);
    };
  
    const phoneHandler = (event) => {
      setPhoneNumber(event.target.value);
    };
  
    const emailHandler = (event) => {
      setEmail(event.target.value);
    };
  
    const locationHandler = (event) => {
      setLocation(event.target.value);
    };
  
    const githubHandler = (event) => {
      setGithub(event.target.value);
    };
  
    const linkedinHandler = (event) => {
      setLinkedin(event.target.value);
    };
  
    const profileHandler = (event) => {
      setProfileDescription(event.target.value);
    };
  
    const educationHandler = (event) => {
      // narazie zakladam ze sklada sie z jakichs 3 elementow
      let elems = event.target.value.split(" ");
      console.log(elems);
      let education = (
        <p>
          <b>{elems[0]}</b>
          <br />
          {elems[1]} <br />
          {elems[2]}
        </p>
      );
  
      setEducation(education);
    };
  
    const languageHandler = (event) => {
      setLanguages(event.target.value);
    };
  
    const aboutmeHandler = (event) => {
      setAboutme(event.target.value);
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
            <input type="text" id="name" onChange={nameHandler}></input>
  
            <label htmlFor="surname">Surname</label>
            <input type="text" onChange={surnameHandler}></input>
  
            <label>Role</label>
            <input type="text" onChange={roleHandler}></input>
  
            <label>Phone Number</label>
            <input type="text" onChange={phoneHandler}></input>
  
            <label>Email</label>
            <input type="text" onChange={emailHandler}></input>
  
            <label>Location</label>
            <input type="text" onChange={locationHandler}></input>
  
            <label>Linkedin</label>
            <input type="text" onChange={linkedinHandler}></input>
  
            <label>Github</label>
            <input type="text" onChange={githubHandler}></input>
  
            <label>Profile</label>
            <input type="text" onChange={profileHandler}></input>
  
            <label>Education</label>
            <input type="text" onChange={educationHandler}></input>
  
            <label>Languages</label>
            <input type="text" onChange={languageHandler}></input>
  
            <label>About Me</label>
            <input type="text" onChange={aboutmeHandler}></input>
  
            <button onClick={handleGeneratePdf}>PDF</button>
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
                      <p className={classes["personal-data-title"]}>EDUCATION</p>
                      <hr className={classes["personal-data-hr"]} />
                      <span className={classes["personal-des"]}>{education}</span>
                    </li>
  
                    <li>
                      <p className={classes["personal-data-title"]}>LANGUAGES</p>
                      <hr className={classes["personal-data-hr"]} />
                      <span className={classes["personal-des"]}>{languages}</span>
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
              <h2>SKILLS</h2>
              <hr />
  
              <p className={classes["knowledge-title"]}>Good knowledge of:</p>
              <ul>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
              </ul>
  
              <p className={classes["knowledge-title"]}>Basic knowledge of:</p>
              <ul>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
              </ul>
  
              <p className={classes["knowledge-title"]}>Concepts: </p>
              <ul>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
                <li>&#x2022;</li>
              </ul>
  
              <h2>Projects</h2>
              <hr />
  
              {project}
            </div>
          </div>
        </div>
      </>
    );
}

export default Editor
import classes from "./MyAccount.module.css";
import profilepic from "../assets/images/profile-pic.png";
import download from "../assets/images/download-icon.png";
import { mockedListOfCV } from "../mocks/mockedData";

import { useState } from "react";

const listOfCV = mockedListOfCV;

const MyAccount = () => {
  return (
    <>
      <div className={classes["container"]}>
        <div className={classes.left}>
          <PersonalInfo />
        </div>
        <div className={classes.right}>
          <CvList />
        </div>
      </div>
    </>
  );
};

const CvList = () => {
  const cvList = listOfCV.map((cv) => (
    <CvListItem
      key={cv.id}
      cvId={cv.id}
      cvType={cv.type}
      date={cv.date}
      linkToDownload={cv.linkToDownload}
    />
  ));
  return (
    <div className={classes["list-of-cv-div"]}>
      <h1 className={classes["cv-list-header"]}>List of your CV's</h1>
      {cvList}
    </div>
  );
};

const CvListItem = (props) => {
  return (
    <>
      <p className={classes["cv-list-item"]}>
        {props.cvType} {props.date}{" "}
        <img
          src={download}
          className={classes["download-pic"]}
          alt="download"
        />
      </p>
    </>
  );
};

const PersonalInfo = () => {
  const name = "NAMETMP";
  const email = "EMAILTMP";
  const password = "****";

  const [editMode, setEditMode] = useState(false);
  const saveChanges = (e) => {
    //save changes in db
    //tbd.
  };

  return (
    <>
      <div className={classes["personal-info-div"]}>
        <div className={classes["center-content"]}>
          <img
            src={profilepic}
            className={classes["profile-pic"]}
            alt="profile-pic"
          />
          <h1 className={classes["personal-info-header"]}>Personal info</h1>
        </div>

        <div className={classes["input-content"]}>
          <div className={classes["label-value-div"]}>
            <p>Name: </p>
            {!editMode ? (
              <p>{name}</p>
            ) : (
              <input type="text" className={classes["input-class"]}></input>
            )}
          </div>
          <div className={classes["label-value-div"]}>
            <p>Email: </p>
            {!editMode ? (
              <p>{email}</p>
            ) : (
              <input type="text" className={classes["input-class"]}></input>
            )}
          </div>
          <div className={classes["label-value-div"]}>
            <p>Password: </p>
            {!editMode ? (
              <p>{password}</p>
            ) : (
              <input type="password" className={classes["input-class"]}></input>
            )}
          </div>
        </div>
        <div className={classes["center-content"]}>
          {!editMode ? (
            <button
              className={classes["update-profile-button"]}
              onClick={(e) => {
                setEditMode(!editMode);
              }}
            >
              Update profile
            </button>
          ) : (
            <>
              <button
                className={classes["save-changes-button"]}
                onClick={(e) => {
                  setEditMode(!editMode);
                  saveChanges();
                }}
              >
                Save Changes
              </button>
              &nbsp;&nbsp;
              <button
                className={classes["cancel-changes-button"]}
                onClick={(e) => {
                  setEditMode(!editMode);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAccount;

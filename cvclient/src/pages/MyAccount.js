import classes from "./MyAccount.module.css";
import profilepic from "../assets/images/profile-pic.png";
import { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../store/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5710/api/profile-info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["user-info-div"]}>
          <PersonalInfo data={data} token={token}/>
        </div>
      </div>
    </>
  );
};


const PersonalInfo = (props) => {
  const navigate = useNavigate();
  const name = props.name;
  const surname = props.surname;
  const [editMode, setEditMode] = useState(false);

    const nameRef = useRef();  
    const surenameRef = useRef();
  
    const updateUserInfo = async () => {
      try {
        const response = await axios.post(
          "https://localhost:5710/api/profile-update-info",
          {
            name: name,
            surname: surname,
          },
          {
            headers: {
              Authorization: `Bearer ${props.token}`,
            },
          }
        );
        navigate("/my_account");
        setEditMode(!editMode);
      } catch (error) {
        console.error(error);
      }
    };

  
    const saveChanges = (e) => {
        const name = nameRef.current.value;
        const surname = surenameRef.current.value;
        console.log("name: ", name);

        updateUserInfo();
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
                          <input type="text" className={classes["input-class"]} ref={nameRef}></input>
            )}
          </div>
          <div className={classes["label-value-div"]}>
            <p>Surname: </p>
            {!editMode ? (
              <p>{surname}</p>
            ) : (
                              <input type="text" className={classes["input-class"]} ref={surenameRef }></input>
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

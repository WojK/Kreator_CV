import classes from "./Register.module.css";
import registericon from "../../assets/images/register-icon.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { MdCheckCircleOutline, MdErrorOutline } from "react-icons/md";
import { TextAny } from "../../language/langTexts";

const Register = () => {
  return (
    <>
      <div className={classes["row"]}>
        <div className={`${classes.column} ${classes.left}`}>
          <RegisterForm />
        </div>
        <div className={`${classes.column} ${classes.right}`}>
          <img
            src={registericon}
            className={classes["register-icon"]}
            alt="register-icon"
          />
        </div>
      </div>
    </>
  );
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const onRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterInput((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    if (registerInput.password.length < 6) {
      setRegisterError(<TextAny text="password_min_length" />);
      return false;
    }
    if (registerInput.confirmPassword !== registerInput.password) {
      setRegisterError(<TextAny text="password_match" />);
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    await axios
      .post("https://localhost:5710/register", {
        name: registerInput.name,
        surname: registerInput.surname,
        email: registerInput.email,
        password: registerInput.password,
        confirmPassword: registerInput.confirmPassword,
      })
      .then((response) => {
        if (response.status === 200) setRegisterSuccess(true);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400)
          setRegisterError("User already exists.");
        else console.error(error);
      });
  };

  return (
    <>
      <p className={classes["register-title-form"]}>
        <TextAny text="register_welcome_text" />
      </p>
      <p className={classes["register-small-text"]}>
        <TextAny text="register_motivate" />
      </p>

      <div className={classes["form-container"]}>
        <form onSubmit={handleRegister}>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>
              <TextAny text="register_name" />
            </label>
            <input
              className={classes["input-box"]}
              //type="text"
              placeholder="name"
              name="name"
              value={registerInput.name}
              onChange={onRegisterInputChange}
              required
            ></input>
          </div>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>
              <TextAny text="register_surname" />
            </label>
            <input
              className={classes["input-box"]}
              //type="text"
              placeholder="surname"
              name="surname"
              value={registerInput.surname}
              onChange={onRegisterInputChange}
              required
            ></input>
          </div>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>E-mail:</label>
            <input
              className={classes["input-box"]}
              //type="text"
              placeholder="email"
              name="email"
              value={registerInput.email}
              onChange={onRegisterInputChange}
              required
            ></input>
          </div>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>
              <TextAny text="password" />
            </label>
            <input
              className={classes["input-box"]}
              type="password"
              placeholder="password"
              name="password"
              value={registerInput.password}
              onChange={onRegisterInputChange}
              required
            ></input>
          </div>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>
              <TextAny text="confirm_password" />
            </label>
            <input
              className={classes["input-box"]}
              type="password"
              placeholder="password"
              name="confirmPassword"
              value={registerInput.confirmPassword}
              onChange={onRegisterInputChange}
              required
            ></input>
          </div>
          {registerError && (
            <p className={classes["error-text"]}>
              <MdErrorOutline size={24} color="red" />
              {registerError}
            </p>
          )}
          <div className={classes["submit-container"]}>
            <input
              className={classes["submit-button"]}
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p
          className={classes["bottom-text"]}
          onClick={(e) => {
            navigate("/login");
          }}
        >
          <TextAny text="register_already_account" />
        </p>
        {registerSuccess && (
          <div className={classes["modal"]}>
            <div className={classes["modal-content"]}>
              <MdCheckCircleOutline color="#0a2b3d" size={100} />
              <p>Registration Successful</p>
              <button onClick={(e) => navigate("/login")}>Log in</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;

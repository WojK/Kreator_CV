import React from "react";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["register_form"]}>
      <div className={classes["register_title_form"]}>
        <p>Register</p>
      </div>
      <div className={classes["input_container"]}>
        <label>Username: </label>
        <input
          className={classes["input_box"]}
          type="text"
          name="uname"
          required
        />
      </div>
      <div className={classes["input_container"]}>
        <label>E-mail: </label>
        <input
          className={classes["input_box"]}
          type="e-mail"
          name="email"
          required
        />
      </div>
      <div className={classes["input_container"]}>
        <label>Confirm e-mail: </label>
        <input
          className={classes["input_box"]}
          type="e-mail"
          name="email"
          required
        />
      </div>
      <div className={classes["input_container"]}>
        <label>Password: </label>
        <input
          className={classes["input_box"]}
          type="password"
          name="pass"
          required
        />
      </div>
      <div className={classes["input_container"]}>
        <label>Confirm password: </label>
        <input
          className={classes["input_box"]}
          type="password"
          name="pass"
          required
        />
      </div>
      <div className={classes["button_container"]}>
        <input
          className={classes["submit_button"]}
          type="submit"
          value="Register"
        />
      </div>
      <div className={classes["bottom_text"]}>
        <p
          onClick={(e) => {
            navigate("/login_page");
          }}
        >
          Already have an account? Click here
        </p>
      </div>
    </div>
  );
};

export default Register;

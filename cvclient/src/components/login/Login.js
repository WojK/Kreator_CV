import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes["login_form"]}>
      <div className={classes["login_title_form"]}>
        <p>Login</p>
      </div>
      <div className={classes["input_container"]}>
        <label>Username: </label>
        <input className={classes["input_box"]} type="text" name="uname" required />
      </div>
      <div className={classes["input_container"]}>
        <label>E-mail: </label>
        <input className={classes["input_box"]} type="e-mail" name="email" required />
      </div>
      <div className={classes["input_container"]}>
        <label>Password: </label>
        <input className={classes["input_box"]} type="password" name="pass" required />
      </div>
      <div className={classes["button_container"]}>
        <input className={classes["submit_button"]} type="submit" value="Log in" />
      </div>
      <div className={classes["bottom_text"]}>
        <p>Do not have an account? Click here</p>
      </div>
    </div>
  );
};

export default Login
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login_form">
        <div className="login_title_form">
          <p>Login</p>
        </div>
        <div className="input_container">
          <label>Username: </label>
          <input className="input_box" type="text" name="uname" required />
        </div>
        <div className="input_container">
          <label>E-mail: </label>
          <input className="input_box" type="e-mail" name="email" required />
        </div>
        <div className="input_container">
          <label>Password: </label>
          <input className="input_box" type="password" name="pass" required />
        </div>
        <div className="button_container">
          <input className="submit_button" type="submit" value="Log in" />
        </div>
      </div>
  );
};

export default Login

import classes from "./Login.module.css";
import loginicon from "../../assets/images/login-icon.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import { MdErrorOutline } from "react-icons/md";
import { TextAny } from "../../language/langTexts";

const Login = () => {
  return (
    <>
      <div className={classes["row"]}>
        <div className={`${classes.column} ${classes.left}`}>
          <LoginForm />
        </div>
        <div className={`${classes.column} ${classes.right}`}>
          <img
            src={loginicon}
            className={classes["login-icon"]}
            alt="login-icon"
          />
        </div>
      </div>
    </>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://localhost:5710/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          authContext.login(response.data);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400)
          setLoginError(error.response.data);
      });
  };

  return (
    <>
      <p className={classes["login-title-form"]}>
        <TextAny text="login_welcome_text" />
      </p>
      <p className={classes["login-small-text"]}>
        <TextAny text="login_motivate" />
      </p>

      <div className={classes["form-container"]}>
        <form onSubmit={handleLogin}>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>E-mail: </label>
            <input
              className={classes["input-box"]}
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          {loginError && (
            <p className={classes["error-text"]}>
              <MdErrorOutline size={24} color="red" />
              {loginError}
            </p>
          )}
          <div className={classes["submit-container"]}>
            <input
              className={classes["submit-button"]}
              type="submit"
              value="Login"
            />
            {/* needs to be changed, maybe to <button> to have translation */}
          </div>
        </form>
        <p
          className={classes["bottom-text"]}
          onClick={(e) => {
            navigate("/register");
          }}
        >
          <TextAny text="login_no_account" />
        </p>
      </div>
    </>
  );
};

export default Login;

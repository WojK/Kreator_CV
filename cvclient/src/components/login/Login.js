import classes from "./Login.module.css";
import loginicon from "../../assets/images/login-icon.png";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <p className={classes["login-title-form"]}>
        Nice to see you again!!!
      </p>
      <p className={classes["login-small-text"]}>
        Sign in and continue your CV
      </p>

      <div className={classes["form-container"]}>
        <form>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>E-mail: </label>
            <input
              className={classes["input-box"]}
              type="text"
              placeholder="email"
            ></input>
          </div>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>Password: </label>
            <input
              className={classes["input-box"]}
              type="password"
              placeholder="password"
            ></input>
          </div>
          <div className={classes["submit-container"]}>
            <input
              className={classes["submit-button"]}
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p
          className={classes["bottom-text"]}
          onClick={(e) => {
            navigate("/register");
          }}
        >
          Do not have an account? Click here
        </p>
      </div>
    </>
  );
};

export default Login;

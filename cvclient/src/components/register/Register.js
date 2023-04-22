import classes from "./Register.module.css";
import registericon from "../../assets/images/register-icon.jpg";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <p className={classes["register-title-form"]}>
        Create perfect CV in 5 minutes
      </p>
      <p className={classes["register-small-text"]}>
        Sign up and learn from our experience
      </p>

      <div className={classes["form-container"]}>
        <form>
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>Username: </label>
            <input
              className={classes["input-box"]}
              type="text"
              placeholder="username"
            ></input>
          </div>
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
          <div className={classes["input-container"]}>
            <label className={classes["form-label"]}>Confirm password: </label>
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
          Already have an account? Click here
        </p>
      </div>
    </>
  );
};

export default Register;

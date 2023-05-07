import classes from "./MainPageContent.module.css";
import partners from "../assets/images/partners.png";
import cv from "../assets/images/cv.png";
import experience from "../assets/images/experience.png";
import task from "../assets/images/task.png";
import examplecv from "../assets/images/examplecv.jpg";
import { useNavigate } from "react-router-dom";

const MainPageContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes["main-layout-div"]}>
        <div className={classes["main-header-div"]}>
          <h1 className={classes["main-header"]}>
            Showcase your skills and experience in a way that makes you stand
            out from the crowd.
          </h1>
          <Button />
        </div>

        <img src={partners} className={classes["main-icon"]} alt="main-icon" />
      </div>

      <div className={classes["middle-section-div"]}>
        <hr className={classes["hr-main"]} />

        <h1 className={classes["advice-motto-header"]}>
          Your career success starts with well-designed CV
        </h1>

        <div className={classes["row"]}>
          <div className={classes["column"]}>
            <Benefit
              className={classes["margin-left"]}
              img={cv}
              content="Create a professional resume quickly and easily. All in a few quick steps in your browser."
            />
          </div>
          <div className={classes["column"]}>
            <Benefit
              img={experience}
              content="Boost your chance to get employed with sharp, clean and well-organised resume."
            />
          </div>
          <div className={classes["column"]}>
            <Benefit
              img={task}
              content="Organize your CV with commonly known standards to do not forget all crucial details."
            />
          </div>
        </div>
        <hr className={classes["hr-main"]} />
      </div>

      <div className={classes["cv-example-div"]}>
        <div className={classes["cv-example-img-div"]}>
          <img
            className={classes["cv-example"]}
            src={examplecv}
            alt="cv-example"
            onClick={(e) => {
              navigate("/creator");
            }}
          />
        </div>

        <div className={classes["cv-example-des"]}>
          <BenefitsList />
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={(e) => {
        navigate("/creator");
      }}
      className={classes["button-create-cv"]}
    >
      Create CV Right Now!
    </button>
  );
};

const Benefit = (props) => {
  return (
    <>
      <img
        src={props.img}
        className={classes["benefit-icon"]}
        alt="benefit-ico"
      />
      <p className={classes["content-text"]}>{props.content}</p>
    </>
  );
};

const BenefitsList = () => {
  return (
    <div>
      <h1 className={classes["advice-main-header"]}>Create your dream CV</h1>
      <h3 className={classes["advice-header"]}>Highest Quality</h3>
      <p className={classes["advices-text"]}>
        With our advanced and intuitive CV Creator, creating a resume is a
        breeze. It takes less than 2 minutes to generate one template. Just
        complete form.
      </p>
      <h3 className={classes["advice-header"]}>Professional Templates</h3>
      <p className={classes["advices-text"]}>
        Choose from over 10 professional resume templates. Designed by experts
        and adopted by successful experts.
      </p>
      <h3 className={classes["advice-header"]}>Advices</h3>
      <p className={classes["advices-text"]}>
        Check out our Advices page to learn from the best recruiters in the
        industry and take care of all the essential elements of your resume
      </p>
      <h3 className={classes["advice-header"]}>Get your Dream Job</h3>
      <p className={classes["advices-text"]}>
        Surprise your new employer with an effective and distinctive CV.
        Regardless of your experience. Get that job you've always dreamed of.
      </p>
    </div>
  );
};

export default MainPageContent;

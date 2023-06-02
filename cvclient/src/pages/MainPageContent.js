import classes from "./MainPageContent.module.css";
import partners from "../assets/images/partners.png";
import cv from "../assets/images/cv.png";
import experience from "../assets/images/experience.png";
import task from "../assets/images/task.png";
import examplecv from "../assets/images/student-template-example.png";
import { useNavigate } from "react-router-dom";
import { TextAny } from "../language/langTexts";

const MainPageContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes["main-layout-div"]}>
        <div className={classes["main-header-div"]}>
          <h1 className={classes["main-header"]}>
            <TextAny text="main_page_section1_main_text" />
          </h1>
          <Button />
        </div>

        <img src={partners} className={classes["main-icon"]} alt="main-icon" />
      </div>

      <div className={classes["middle-section-div"]}>
        <hr className={classes["hr-main"]} />

        <h1 className={classes["advice-motto-header"]}>
          <TextAny text="main_page_section2_main_text" />
        </h1>

        <div className={classes["row"]}>
          <div className={classes["column"]}>
            <Benefit
              className={classes["margin-left"]}
              img={cv}
              content={<TextAny text="main_page_section2_benefit1" />}
            />
          </div>
          <div className={classes["column"]}>
            <Benefit
              img={experience}
              content={<TextAny text="main_page_section2_benefit2" />}
            />
          </div>
          <div className={classes["column"]}>
            <Benefit
              img={task}
              content={<TextAny text="main_page_section2_benefit3" />}
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
      <TextAny text="main_page_section1_button" />
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
      <h1 className={classes["advice-main-header"]}>
        <TextAny text="main_page_section3_main_text" />
      </h1>
      <h3 className={classes["advice-header"]}>
        <TextAny text="main_page_section3_benefit1_title" />
      </h3>
      <p className={classes["advices-text"]}>
        <TextAny text="main_page_section3_benefit1" />
      </p>
      <h3 className={classes["advice-header"]}>
        <TextAny text="main_page_section3_benefit2_title" />
      </h3>
      <p className={classes["advices-text"]}>
        <TextAny text="main_page_section3_benefit2" />
      </p>
      <h3 className={classes["advice-header"]}>
        <TextAny text="main_page_section3_benefit3_title" />
      </h3>
      <p className={classes["advices-text"]}>
        <TextAny text="main_page_section3_benefit3" />
      </p>
      <h3 className={classes["advice-header"]}>
        <TextAny text="main_page_section3_benefit4_title" />
      </h3>
      <p className={classes["advices-text"]}>
        <TextAny text="main_page_section3_benefit4" />
      </p>
    </div>
  );
};

export default MainPageContent;

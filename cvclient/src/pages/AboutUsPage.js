import classes from "./AboutUsPage.module.css";
import github_aboutus from "../assets/images/github_aboutus.png";
import university from "../assets/images/university.png";
import aboutus from "../assets/images/aboutus.png";
import { TextAny } from "../language/langTexts";

const AboutUsPage = () => {
  return (
    <>
      <h1 className={classes.header}>
        <TextAny text="about_us" />
      </h1>
      <Paragraph
        img={aboutus}
        text={
          <p>
            <TextAny text="about_us_1" />
            <br />
            <ul className={classes.members}>
              <li>Wojciech Kudełko</li>
              <li>Michał Żdanuk</li>
              <li>Miłosz Moroz</li>
              <li>Kamil Smołecki</li>
              <li>Jakub Szczygielski</li>
            </ul>
          </p>
        }
      />
      <Paragraph img={university} text={<TextAny text="about_us_2" />} />
      <Paragraph img={github_aboutus} text={<TextAny text="about_us_3" />} />
    </>
  );
};

const Paragraph = (props) => {
  return (
    <div className={classes["paragraph-box"]}>
      <div className={classes["icon-div"]}>
        <img src={props.img} className={classes["icon"]} alt="about_us-icon" />
      </div>
      <div className={classes["des"]}>
        <p>
          {props.text}
          {props.img === github_aboutus ? (
            <a href="https://github.com/WojK/Kreator_CV.git">
              https://github.com/WojK/Kreator_CV.git
            </a>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

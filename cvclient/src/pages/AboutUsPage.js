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
          <>
            <TextAny text="about_us_1" />
            <br />
            <ul className={classes.members}>
              <li className={classes["member"]}>Wojciech Kudełko - <a className={classes["github-link"]} href="https://github.com/WojK">github.com/WojK</a></li>
              <li className={classes["member"]}>Michał Żdanuk - <a className={classes["github-link"]} href="https://github.com/MichalZdanuk">github.com/MichalZdanuk</a></li>
              <li className={classes["member"]}>Kamil Smołecki - <a className={classes["github-link"]} href="https://github.com/Smoleckk">github.com/Smoleckk</a></li>
              <li className={classes["member"]}>Jakub Szczygielski - <a className={classes["github-link"]} href="https://github.com/Kuba072002">github.com/Kuba072002</a></li>
              <li className={classes["member"]}>Miłosz Moroz - <a className={classes["github-link"]} href="https://github.com/morozm">github.com/morozm</a></li>
            </ul>
          </>
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
        <div>
          {props.text}
          {props.img === github_aboutus ? (
            <a className={classes["github-link"]} href="https://github.com/WojK/Kreator_CV.git">
              https://github.com/WojK/Kreator_CV.git
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

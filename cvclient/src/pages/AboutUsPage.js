import classes from "./AboutUsPage.module.css";
import github_aboutus from "../assets/images/github_aboutus.png";
import university from "../assets/images/university.png";
import aboutus from "../assets/images/aboutus.png";

const AboutUsPage = () => {
  return (
    <>
      <h1 className={classes.header}>About Us</h1>
      <Paragraph
        img={aboutus}
        text={
          <p>
            Created in small team managed with Scrum Method.
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
      <Paragraph
        img={university}
        text="Project created within course 'Team Project' on Warsaw University of Technology @2022/2023"
      />
      <Paragraph
        img={github_aboutus}
        text="Project Figma (UI) design, source code and documentation can be found on github: "
      />
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

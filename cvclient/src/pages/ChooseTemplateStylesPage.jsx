import classes from "./ChooseTemplateStylesPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import s1 from "../assets/images/examplecv.jpg";
import s2 from "../assets/images/examplecv — kopia.jpg";

const ChooseTemplateStylesPage = () => {
  const { cvtemplate } = useParams();
  const navigate = useNavigate();

  const studentsTemplates = [
    { img: s1, id: "s1", des: "Opis" },
    { img: s2, id: "s2", des: "Opis" },
  ];

  const generalsTemplates = [
    { img: s1, id: "s1", des: "Opis" },
    { img: s2, id: "s2", des: "Opis" },
    { img: s2, id: "s2", des: "Opis" },
  ];

  let content, title;
  if (cvtemplate === "student") {
    title = "Student";
    content = studentsTemplates.map(function (template) {
      return (
        <div
          className={classes.template}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          <img src={template.img} className={classes.img}></img>
          <p className={classes.des}>{template.des}</p>
        </div>
      );
    });
  } else if (cvtemplate === "general") {
    title = "General";
    content = generalsTemplates.map(function (template) {
      return (
        <div
          className={classes.template}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          <img src={template.img} className={classes.img}></img>
          <p className={classes.des}>{template.des}</p>
        </div>
      );
    });
  } else if (cvtemplate === "technical") {
    title = "Technical";
  }

  return (
    <>
      <h1 className={classes.header}>Choose Your {title} Template!</h1>
      <div className={classes.container}>{content}</div>;
    </>
  );
};

export default ChooseTemplateStylesPage;

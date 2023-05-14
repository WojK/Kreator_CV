import classes from "./ChooseTemplateStylesPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import s1 from "../assets/images/examplecv.jpg";
import s2 from "../assets/images/examplecv.jpg";

import student_template_example from "../assets/images/student-template-example.png";
import generalThumbnailV1 from "../assets/images/generalThumbnailV1.png";
import generalThumbnailV2 from "../assets/images/generalThumbnailV2.png";

import technicalThumbnailV1 from "../assets/images/technicalThumbnailV1.png";

const ChooseTemplateStylesPage = () => {
  const { cvtemplate } = useParams();
  const navigate = useNavigate();

  const studentsTemplates = [
    { img: s1, id: "student1", des: "Opis" },
    { img: student_template_example, id: "student2", des: "Opis" },
  ];

  const generalsTemplates = [
    { img: generalThumbnailV1, id: "general1", des: "Opis" },
    { img: generalThumbnailV2, id: "general2", des: "Opis" },
  ];

  const technicalTemplates = [
    { img: technicalThumbnailV1, id: "technical1", des: "Opis" },
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
    content = technicalTemplates.map(function (template) {
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
  }

  return (
    <>
      <h1 className={classes.header}>Choose Your {title} Template!</h1>
      <div className={classes.container}>{content}</div>;
    </>
  );
};

export default ChooseTemplateStylesPage;

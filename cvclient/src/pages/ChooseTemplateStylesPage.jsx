import classes from "./ChooseTemplateStylesPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  studentsTemplates,
  generalsTemplates,
  technicalTemplates,
} from "./cv-data-templates";

const ChooseTemplateStylesPage = () => {
  const { cvtemplate } = useParams();
  const navigate = useNavigate();

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

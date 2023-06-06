import classes from "./ChooseTemplateStylesPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  studentsTemplates,
  generalsTemplates,
  technicalTemplates,
} from "./cv-data-templates";
import { TextAny } from "../language/langTexts";

const ChooseTemplateStylesPage = () => {
  const { cvtemplate } = useParams();
  const navigate = useNavigate();

  let content, title;
  let text;
  if (cvtemplate === "student") {
    title = "student";
    content = studentsTemplates.map(function (template) {
      return (
        <div
          key={template.id}
          className={classes.template}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          <img src={template.img} className={classes.img}></img>
        </div>
      );
    });
  } else if (cvtemplate === "general") {
    title = "general";
    content = generalsTemplates.map(function (template) {
      return (
        <div
          key={template.id}
          className={classes.template}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          <img src={template.img} className={classes.img}></img>
        </div>
      );
    });
  } else if (cvtemplate === "technical") {
    title = "technical";
    content = technicalTemplates.map(function (template) {
      return (
        <div
          key={template.id}
          className={classes.template}
          onClick={(e) => {
            navigate(`/editor/${template.id}`);
          }}
        >
          <img src={template.img} className={classes.img}></img>
        </div>
      );
    });
  }
  text = title + "_template_choose";
  return (
    <>
      <h1 className={classes.header}>
        <TextAny text={text} />
      </h1>
      <div className={classes.container}>{content}</div>;
    </>
  );
};

export default ChooseTemplateStylesPage;

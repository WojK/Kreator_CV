import classes from "./TemplateCategory.module.css";

const TemplateCategory = ({ title, description }) => {
  return (
    <div className={classes["template-div"]}>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes["description-div"]}>
        <p>{description}</p>
      </div>
      <a href="/creator-template-style"> Lets go!</a>
    </div>
  );
};

export default TemplateCategory;

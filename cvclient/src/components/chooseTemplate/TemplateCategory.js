import classes from "./TemplateCategory.module.css";

const TemplateCategory = ({ title, description }) => {
  return (
    <div className={classes["template-div"]}>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes["description-div"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TemplateCategory;

import classes from "./TemplateCategory.module.css";
import { useNavigate } from "react-router-dom";
import icongeneral from "../../assets/images/general-template-icon.png";
import iconstudent from "../../assets/images/student-template-icon.png";
import icontechnical from "../../assets/images/technical-template-icon.png";

const TemplateCategory = ({ title, description, type }) => {
  const navigate = useNavigate();

  const chooseTemplate = (type) => {
    if (type === "general") {
      navigate("/creator/general");
    }
    if (type === "student") {
      navigate("/creator/student");
    }
    if (type === "technical") {
      navigate("/creator/technical");
    }
  };

  let img;

  if (type === "general") {
    img = icongeneral;
  } else if (type === "student") {
    img = iconstudent;
  } else if (type === "technical") {
    img = icontechnical;
  }
  return (
    <div
      className={classes["template-div"]}
      onClick={(e) => {
        chooseTemplate(type);
      }}
    >
      <img src={img} className={classes.img}></img>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes["description-div"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TemplateCategory;

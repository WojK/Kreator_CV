import classes from "./AdviceThumbnail.module.css";
import advicePhoto from "../../assets/images/advice-image.png";
import { useNavigate, useLocation } from "react-router-dom";

const AdviceThumbnail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const number = String(props.articleId);
  const url = location.pathname + "/" + number;

  return (
    <div onClick={(e) => {
      navigate(url);
    }} className={classes["advice-div"]}>
      <div className={classes["advice-content"]}>
        <img className={classes.adviceimg} src={advicePhoto} alt="CV" />
        <h1 className={classes["advice-title"]}>{props.title}</h1>
        <p className={classes["advice-date"]}>{props.date} {props.author}</p>
        <p className={classes["advice-description"]}>
          {props.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default AdviceThumbnail;

import classes from "./AdviceThumbnail.module.css";
import advicePhoto from "../../assets/images/advice-image.png";

const AdviceThumbnail = (props) => {
  return (
    <div className={classes["advice-div"]}>
      <div className={classes["advice-content"]}>
        <img className={classes.adviceimg} src={advicePhoto} alt="CV" />
        <h1 className={classes["advice-title"]}>{props.articleName}</h1>
        <br />
        <p className={classes["advice-description"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard
        </p>
      </div>
    </div>
  );
};

export default AdviceThumbnail;

import classes from "./advicethumbnail.module.css";

const AdviceThumbnail = (props) => {
  return (
    <div className={classes["advice-div"]}>
      <div className={classes["advice-content"]}>
        <h1 className={classes["advice-title"]}>{props.articleName}</h1>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>
    </div>
  );
};

export default AdviceThumbnail;

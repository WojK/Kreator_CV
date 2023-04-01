import AdviceThumbnail from "../components/advicePage/AdviceThumbnail";
import classes from "./advicepage.module.css";

const AdvicesPage = () => {
  return (
    <>
      <div className={classes["row"]}>
        <div className={classes["column"]}>
          <AdviceThumbnail articleName="Article title1" />
          <AdviceThumbnail articleName="Article title4" />
        </div>
        <div className={classes["column"]}>
          <AdviceThumbnail articleName="Article title2" />
          <AdviceThumbnail articleName="Article title5" />
        </div>
        <div className={classes["column"]}>
          <AdviceThumbnail articleName="Article title3" />
          <AdviceThumbnail articleName="Article title6" />
        </div>
      </div>
    </>
  );
};

export default AdvicesPage;

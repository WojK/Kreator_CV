import classes from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <>
      <div className={classes["row"]}>
        <div className={classes["column"]}>
          <h1 className={classes["about-us-title"]}>About us</h1>
        </div>
        <div className={classes["column"]}>
          <div className={classes["about-us-description"]}>
            We are a group of studens. Miłosz is our boss and the best
            programmer in PW. Miłosz is also our English Teacher.
            <br/>
            <br/>
            Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br/>
            <br/>
            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;

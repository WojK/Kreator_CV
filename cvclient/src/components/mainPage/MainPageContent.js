import classes from "./MainPageContent.module.css";
import MainPageCarousel from "./MainPageCarousel";
import { useNavigate } from "react-router-dom";

const MainPageContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MainPageCarousel />
      <div className={classes["div-content"]}>
        <p className={classes["cv-description"]}>
          In most situations, a CV is the first contact you have with a
          prospective employer and it is your chance to make a good first
          impression.You use it to show your prospective employer why they
          should hire you and what the benefits of having you on their team will
          be.
        </p>
        <br />
        <button className={classes["button"]} onClick={(e) => {
          navigate("/creator");
        }}>Create your CV with us</button>
      </div>
    </div>
  );
};

export default MainPageContent;

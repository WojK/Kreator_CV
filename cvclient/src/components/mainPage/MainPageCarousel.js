import React from "react";
import Carousel from "better-react-carousel";
import classes from "./MainPageCarousel.module.css";
import cvPhoto from "../../assets/images/cv-demo-image.png";

const MainPageCarousel = () => {
  return (
    <div className={classes["carousel-div"]}>
      <Carousel cols={3} rows={1} gap={100} autoplay={3000} loop>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} alt="CV" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainPageCarousel;

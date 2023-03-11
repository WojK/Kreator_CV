import React from "react";
import Carousel from "better-react-carousel";
import classes from "./MainPageCarousel.module.css";
import cvPhoto from "../../assets/images/cv-demo-image.png";

const MainPageCarousel = () => {
  return (
    <div className={classes["carousel-div"]}>
      <Carousel autoplay={3000} loop
      responsiveLayout={[
        {
          breakpoint: 2000,
          cols: 3,
          rows: 1,
          gap: 100,
          loop: true,
          autoplay: 3000
        },
        {
          breakpoint: 1200,
          cols: 3,
          rows: 1,
          gap: 50,
          loop: true,
          autoplay: 3000
        },
        {
          breakpoint: 900,
          cols: 2,
          rows: 1,
          gap: 50,
          loop: true,
          autoplay: 3000
        },
        {
          breakpoint: 800,
          cols: 1,
          rows: 1,
          gap: 50,
          loop: true,
          autoplay: 3000
        }
      ]}
      >
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={classes.adviceimg} src={cvPhoto} width="100%" alt="CV" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainPageCarousel;

import classes from "./ChooseTemplateStylesPage.module.css";
import { useRef, useEffect, useState } from "react";
import image1 from "../assets/images/img1.jpg"
import image2 from "../assets/images/img2.jpg"
import image3 from "../assets/images/img3.jpg"
import image4 from "../assets/images/img4.jpg"
import ImageSlider from "../components/imageSlider/ImageSlider"
const ChooseTemplateStylesPage = () => {
  const slides = [
    {
      image: image1,
      link: "/"
    },
    {
      image: image2,
      link: "/"
    },
    {
      image: image3,
      link: "/"
    },
    {
      image: image4,
      link: "/"
    },
  ];

  return (
    <div>
      <div className={classes["containerStyles"]}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ChooseTemplateStylesPage;

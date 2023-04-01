import classes from "./ChooseTemplateStylesPage.module.css";
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from "react";
import image1 from "../assets/images/img1.jpg"
import image2 from "../assets/images/img2.jpg"
import image3 from "../assets/images/img3.jpg"
import image4 from "../assets/images/img4.jpg"
const ChooseTemplateStylesPage = () => {
  const data_templates = [
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

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (<div className={classes["templates-div"]}>
    <motion.div ref={carousel} className={classes["carousel"]} whileTap={{ cursor: "grabbing" }}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={classes["inner-carousel"]} >
        {data_templates.map(template => {
          return (
            <motion.div className={classes["item"]} key={template}>
              <div className={classes["item-inside"]}>
                <img src={template.image} alt="" />
                <a className={classes["button"]} href={template.link}>
                  Lets build your future!
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  </div>
  );
};

export default ChooseTemplateStylesPage;

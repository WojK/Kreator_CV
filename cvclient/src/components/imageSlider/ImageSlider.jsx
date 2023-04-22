import { useState } from "react";
import classes from "./imageSlider.module.css";


const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
};

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].image})`,
    };

    return (
        <div className={classes["sliderStyles"]}>
            <div>
                <div onClick={goToPrevious} className={classes["leftArrowStyles"]} >
                    ❰
                </div>
                <div onClick={goToNext} className={classes["rightArrowStyles"]}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}>
                <a className={classes["href"]} href={slides[currentIndex].link}>Generate invoice</a>
            </div>
            <div className={classes["dotsContainerStyles"]}>
                {slides.map((slide, slideIndex) => (
                    <div
                        className={classes["dotStyle"]}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ImageSlider;
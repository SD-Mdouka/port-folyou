import React from "react";
import { ImageCertification } from "./ImageCertification";
import "./index.css";

const colors = ["trasparent", "trasparent", "trasparent", "trasparent"];
const delay = 2500;

const SlideCertification = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div id="slidertest" className="contentGlobal">
      <div className="flex items-center containerLocal ">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div className="slide" key={index} style={{ backgroundColor }}>
                <ImageCertification idLine={index + 1} />
              </div>
            ))}
          </div>

          <div className="slideshowDots">
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlideCertification;

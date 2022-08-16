import { useState } from "react";
import arrowLeft from "../assets/icon-arrow-left.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
import img1 from "../assets/image-slide-1.jpg";
import img2 from "../assets/image-slide-2.jpg";
import img3 from "../assets/image-slide-3.jpg";
import img4 from "../assets/image-slide-4.jpg";
import img5 from "../assets/image-slide-5.jpg";

var images = [img1, img2, img3, img4, img5];

function Slider() {
  var [slide, setSlide] = useState(2);

  return (
    <div className="slider">
      <div className="slider__viewport">
        <div
          className="slider__main"
          style={{ left: `calc(-${slide} * 100%)` }}
        >
          {images.map(function createImageElements(img, index) {
            return <img key={index} src={img} alt="" className="slider__img" />;
          })}
        </div>
      </div>
      <div className="slider__controls">
        <button
          className="slider__btn arrow"
          aria-label="click for the previous image"
        >
          <img
            src={arrowLeft}
            alt=""
            className="arrow__img"
            onClick={function moveSlideLeft() {
              if (slide > 0) {
                setSlide(slide - 1);
              }
            }}
          />
        </button>
        <button
          className="slider__btn arrow"
          aria-label="click for the next image"
        >
          <img
            src={arrowRight}
            alt=""
            className="arrow__img"
            onClick={function moveSlideRight() {
              if (slide < images.length - 1) {
                setSlide(slide + 1);
              }
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;

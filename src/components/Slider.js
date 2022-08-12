import { useState } from "react";
import arrowLeft from "../assets/icon-arrow-left.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
import img1 from "../assets/image-slide-1.jpg";
import img2 from "../assets/image-slide-2.jpg";
import img3 from "../assets/image-slide-3.jpg";
import img4 from "../assets/image-slide-4.jpg";
import img5 from "../assets/image-slide-5.jpg";

function Slider() {
  var [slide, setSlide] = useState(2);

  return (
    <div className="slider">
      <figure className="slider__main">
        <div
          className="slider__viewport"
          style={{
            marginLeft: `${(slide - 2) * (270 + 16)}px`,
          }} /* --------        nSlide * (slideWidth + gap)  */
        >
          <img src={img1} alt="" className="slider__img" />
          <img src={img2} alt="" className="slider__img" />
          <img src={img3} alt="" className="slider__img" />
          <img src={img4} alt="" className="slider__img" />
          <img src={img5} alt="" className="slider__img" />
        </div>
      </figure>
      <div className="slider__controls">
        <button
          className="slider__btn arrow"
          onClick={function moveSliderRight() {
            if (slide < 4) {
              setSlide(slide + 1);
            }
          }}
        >
          <img src={arrowLeft} alt="" className="arrow__img" />
        </button>
        <button
          className="slider__btn arrow"
          onClick={function moveSliderLeft() {
            if (slide > 0) {
              setSlide(slide - 1);
            }
          }}
        >
          <img src={arrowRight} alt="" className="arrow__img" />
        </button>
      </div>
    </div>
  );
}

export default Slider;

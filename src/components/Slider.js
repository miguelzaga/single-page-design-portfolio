import arrowLeft from "../assets/icon-arrow-left.svg";
import arrowRight from "../assets/icon-arrow-right.svg";
import img1 from "../assets/image-slide-1.jpg";
import img2 from "../assets/image-slide-2.jpg";
import img3 from "../assets/image-slide-3.jpg";
import img4 from "../assets/image-slide-4.jpg";
import img5 from "../assets/image-slide-5.jpg";

function Slider() {
  return (
    <div className="slider">
      <ul className="slider__main">
        <img src={img1} alt="" className="slider__img" />
        <img src={img2} alt="" className="slider__img" />
        <img src={img3} alt="" className="slider__img" />
        <img src={img4} alt="" className="slider__img" />
        <img src={img5} alt="" className="slider__img" />
      </ul>
      <div className="slider__controls">
        <button className="slider__btn arrow">
          <img src={arrowLeft} alt="" className="arrow__img" />
        </button>
        <button className="slider__btn arrow">
          <img src={arrowRight} alt="" className="arrow__img" />
        </button>
      </div>
    </div>
  );
}

export default Slider;

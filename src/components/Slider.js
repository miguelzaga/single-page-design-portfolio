import arrowLeft from "../assets/icon-arrow-left.svg";
import arrowRight from "../assets/icon-arrow-right.svg";

function Slider() {
  return (
    <div className="slider">
      <div className="slider__main">
        <img src="" alt="" className="slider__img" />
        <img src="" alt="" className="slider__img" />
        <img src="" alt="" className="slider__img" />
        <img src="" alt="" className="slider__img" />
        <img src="" alt="" className="slider__img" />
      </div>
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

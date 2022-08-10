import patternApps from "../assets/pattern-apps.svg";
import patternGraphicDesign from "../assets/pattern-graphic-design.svg";
import patternillustrations from "../assets/pattern-illustrations.svg";
import patternMotionGraphics from "../assets/pattern-motion-graphics.svg";
import patternPhotography from "../assets/pattern-photography.svg";
import patternUiUx from "../assets/pattern-ui-ux.svg";

function Grid() {
  return (
    <div className="grid">
      <figure className="grid__cell grid__cell-1">
        <img src={patternGraphicDesign} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">Graphic Design</figcaption>
      </figure>
      <figure className="grid__cell grid__cell-2">
        <img src={patternUiUx} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">UI/UX</figcaption>
      </figure>
      <figure className="grid__cell grid__cell-3">
        <img src={patternApps} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">Apps</figcaption>
      </figure>
      <figure className="grid__cell grid__cell-4">
        <img src={patternillustrations} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">Illustrations</figcaption>
      </figure>
      <figure className="grid__cell grid__cell-5">
        <img src={patternPhotography} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">Photography</figcaption>
      </figure>
      <figure className="grid__cell grid__cell-6">
        <img src={patternMotionGraphics} alt="" className="grid__cell-img" />
        <figcaption className="grid__cell-caption">Motion Graphics</figcaption>
      </figure>
    </div>
  );
}

export default Grid;

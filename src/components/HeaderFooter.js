import logo from "../assets/logo.svg";

function HeaderFooter() {
  return (
    <div className="header-footer">
      <img src={logo} alt="website logo" className="header-footer__img" />
      <button className="header-footer__btn btn1">Free Consultation</button>
    </div>
  );
}

export default HeaderFooter;

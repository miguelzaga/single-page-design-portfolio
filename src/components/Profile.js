import profileImg from "../assets/image-amy.webp";

function Profile() {
  return (
    <section className="profile">
      <img src={profileImg} alt="Amy's portrait" className="profile__img" />
      <div className="profile__main">
        <h2 className="profile__title">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="profile__text">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <button className="profile__btn btn2">Free Consultation</button>
      </div>
    </section>
  );
}

export default Profile;

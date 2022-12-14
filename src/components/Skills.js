import Grid from "./Grid";

function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h1 className="skills__title">Design solutions made easy</h1>
        <p className="skills__text">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <Grid className="skills__grid"></Grid>
    </section>
  );
}

export default Skills;

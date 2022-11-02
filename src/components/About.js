import styles from "./About.module.css";
import lasagneImg from "../assets/lasagna-5994612_1920.jpg";

const About = () => {
  return (
    <section className="section section--2">
      <div className="content__container">
        <div className={styles.about}>
          <div className={styles.about__text}>
            <p className={styles.text}>
              <span>About us... </span>
              Ti Amo, Pizza, is a new, exclusive venue on the culinary map of
              Krakow. We love simple Italian cuisine based on original
              ingredients. We are fans of modern, live music. We savour the
              flavours of traditional cocktails and enjoy original suggestions.
              And what we like the most is when all these positive energies
              interweave in one exceptional place. Boccanera is located in the
              heart of Krakow, in the square at ul Tomasza – Thomas Street and
              is much appreciated by its many guests for the richness of the
              restaurant’s flavours and quality of its interiors.
            </p>
          </div>
          {/* <img className={styles.img} src={lasagneImg} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default About;

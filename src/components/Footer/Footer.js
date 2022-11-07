import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="section section--5">
        <footer>
          <div className="content__container">
            <div className={styles.columns}>
              <div className={styles.column}>
                <h2>Ti Amo, Pizza!</h2>
                <p>St. Mark Street 15, 31-018 Krakow</p>
                <p>phone: +48 12 422 17 08</p>
                <p>email: email@tiamopizza.pl</p>
                <p>Working hours:</p>
                <p>Monday - Saturday 12 PM - 11 PM</p>
                <p>Sunday 12 PM - 10 PM</p>
              </div>
              <div className={`${styles.column} ${styles.socials}`}>
                <a href="#" className={styles.socials__link}>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className={styles.socials__link}>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className={styles.socials__link}>
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
              <div className={styles.column}>
                <h2>Italian cuisine</h2>
                <p>
                  Ti Amo, Pizza! is a new, exclusive venue on the culinary map
                  of Krakow. The restaurant is located in the heart of Krakow,
                  in the square at St. Thomas Street, and is much appreciated by
                  its many guests for the richness of the restaurant’s flavours
                  and quality of its interiors.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;

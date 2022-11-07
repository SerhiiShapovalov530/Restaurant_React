import styles from "./SocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className={styles.nav__socials}>
      <a href="#" className={styles.socials__link}>
        {" "}
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className={styles.socials__link}>
        {" "}
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className={styles.socials__link}>
        {" "}
        <FontAwesomeIcon icon={faPinterest} />
      </a>
    </div>
  );
};

export default SocialLinks;

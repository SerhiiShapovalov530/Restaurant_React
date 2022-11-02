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
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faPinterest} />
    </div>
  );
};

export default SocialLinks;

import styles from "./Logo.module.css";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <div className={styles.nav__logo}>
      <h1 className={`logo ${styles.logo}`}>Ti Amo, Pizza!</h1>
    </div>
  );
};

export default Logo;

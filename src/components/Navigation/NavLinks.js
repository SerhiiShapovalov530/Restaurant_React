import styles from "./NavLinks.module.css";

import Logo from "../UI/Logo";

const NavLinks = (props) => {
  return (
    <>
      {/* <Logo /> */}
      <ul className={styles.nav__items}>
        <li>
          <a href="" className={styles.nav__link}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={styles.nav__link}>
            Menu
          </a>
        </li>
        <li>
          <a href="" className={styles.nav__link}>
            Table Reservation
          </a>
        </li>
        <li>
          <a href="" className={styles.nav__link}>
            Contanct
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;

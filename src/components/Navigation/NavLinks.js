import styles from "./NavLinks.module.css";

import Logo from "../UI/Logo";

const NavLinks = (props) => {
  return (
    <>
      {/* <Logo /> */}
      <ul className={styles.nav__items}>
        <li>
          <a
            href="section--1"
            className={styles.nav__link}
            onClick={props.onClickScroll}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="section--4"
            className={styles.nav__link}
            onClick={props.onClickScroll}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="section--3"
            className={styles.nav__link}
            onClick={props.onClickScroll}
          >
            Table Reservation
          </a>
        </li>
        <li>
          <a
            href="section--5"
            className={styles.nav__link}
            onClick={props.onClickScroll}
          >
            Contanct
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;

import styles from "./NavLinks.module.css";

import Logo from "../UI/Logo";

const NavLinks = (props) => {
  // const linkScrollHandler = (e) => {
  //   e.preventDefault();
  //   const href = e.target.getAttribute("href");
  //   console.log(href);
  //   document.getElementById(href).scrollIntoView({ behavior: "smooth" });
  // };

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

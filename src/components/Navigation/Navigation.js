import { useState } from "react";
import styles from "./Navigation.module.css";

import NavLinks from "./NavLinks";
import Logo from "../UI/Logo";
import SocialLinks from "./SocialLinks";

const Navigation = (props) => {
  return (
    <>
      <nav
        className={
          props.mobileNavActive
            ? `${styles.nav} ${styles.nav__active}`
            : `${styles.nav} ${styles.nav__inactive}`
        }
      >
        <Logo />
        <NavLinks />
        <SocialLinks />
      </nav>
    </>
  );
};

export default Navigation;

import { useState } from "react";
import styles from "./Navigation.module.css";

import NavLinks from "./NavLinks";
import Logo from "../UI/Logo";
import SocialLinks from "./SocialLinks";
import Burger from "../UI/Burger";

const Navigation = (props) => {
  return (
    <>
      <Burger
        onActivation={props.onActivation}
        mobileNavActive={props.mobileNavActive}
      />
      <div className={styles.nav__bar}>
        <nav
          className={
            props.mobileNavActive
              ? `${styles.nav} ${styles.nav__active}`
              : `${styles.nav} ${styles.nav__inactive}`
          }
        >
          <Logo />
          <NavLinks onClickScroll={props.onLinkScrollHandler} />
          <SocialLinks />
        </nav>
      </div>
    </>
  );
};

export default Navigation;

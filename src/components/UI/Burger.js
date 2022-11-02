import styles from "./Burger.module.css";

const Burger = (props) => {
  return (
    <div className={styles.nav__burger} onClick={props.onActivation}>
      <span
        className={`${styles.bar} ${
          !props.mobileNavActive ? styles.bar__top : styles["bar__top--active"]
        }`}
      ></span>
      <span
        className={`${styles.bar} ${
          !props.mobileNavActive
            ? styles.bar__middle
            : styles["bar__middle--active"]
        }`}
      ></span>
      <span
        className={`${styles.bar} ${
          !props.mobileNavActive
            ? styles.bar__bottom
            : styles["bar__bottom--active"]
        }`}
      ></span>
    </div>
  );
};

export default Burger;

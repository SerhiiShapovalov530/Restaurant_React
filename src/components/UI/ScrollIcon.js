import styles from "./ScrollIcon.module.css";

const ScrollIcon = () => {
  return (
    <div className={styles.scroll__container}>
      <span className={styles.chevron}></span>
      <span className={styles.chevron}></span>
      <span className={styles.chevron}></span>
    </div>
  );
};

export default ScrollIcon;

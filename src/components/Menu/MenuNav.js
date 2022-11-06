import styles from "./Navigation.module.css";

const MenuNav = (props) => {
  return (
    <>
      <nav className={styles.menu}>
        <ul className={styles.menu__items}>
          <li className={styles.menu__item}>
            <span
              className={
                props.state.menu === "Pizza"
                  ? styles["item__name--active"]
                  : styles.item__name
              }
              onClick={props.onPizzaClick}
            >
              Pizza
            </span>
          </li>
          <li className={styles.menu__item}>
            <span
              className={
                props.state.menu === "PastaRisotto"
                  ? styles["item__name--active"]
                  : styles.item__name
              }
              onClick={props.onPastaClick}
            >
              Pasta & Risotto
            </span>
          </li>
          <li className={styles.menu__item}>
            <span
              className={
                props.state.menu === "Insalata"
                  ? styles["item__name--active"]
                  : styles.item__name
              }
              onClick={props.onInsalataClick}
            >
              Insalata
            </span>
          </li>
          <li className={styles.menu__item}>
            <span
              className={
                props.state.menu === "Desserts"
                  ? styles["item__name--active"]
                  : styles.item__name
              }
              onClick={props.onDessertsClick}
            >
              Desserts
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MenuNav;

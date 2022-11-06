import styles from "./MenuCard.module.css";

const Desserts = () => {
  return (
    <>
      <h1 className={styles.name}>Desserts</h1>
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Boccanera</div>
              <div className={styles.item__price}>$32</div>
            </div>

            <div className={styles.item__ingredients}>
              White chocolate and mascarpone mousse, forest fruits filling
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>
                Torta di mascarpone e ricotta
              </div>
              <div className={styles.item__price}>$28</div>
            </div>
            <div className={styles.item__ingredients}>
              Mascarpone and ricotta cheesecake
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desserts;

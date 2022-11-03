import styles from "./MenuCard.module.css";

const Pizza = () => {
  return (
    <>
      <h1 className={styles.name}>Pizza</h1>
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Margharita</div>
              <div className={styles.item__price}>$34</div>
            </div>

            <div className={styles.item__ingredients}>
              Tomato sauce, mozzarella Fior di Latte, pecorino, basil, and olive
              oil
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Parma</div>
              <div className={styles.item__price}>$46</div>
            </div>
            <div className={styles.item__ingredients}>
              Tomato sauce, mozzarella Fior di Latte, Parma ham, arugula, Grana
              Padano, olive oil
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Funghi</div>
              <div className={styles.item__price}>$44</div>
            </div>
            <div className={styles.item__ingredients}>
              Cream, mushrooms, truffle paste, ricotta, PEcorino Romano, thyme
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Salsiccia</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Tomato sauce, Mozzarella Fior di Latte, spinach, salsiccia,
              shallots, Pecorino Romano
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Vega Nera</div>
              <div className={styles.item__price}>$38</div>
            </div>
            <div className={styles.item__ingredients}>
              Mozzarella Fior for Latte, pepper, zucchini, datterini tomatoes
              and parsley
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Cotto</div>
              <div className={styles.item__price}>$44</div>
            </div>
            <div className={styles.item__ingredients}>
              Tomato sauce, mozzarella Fior di Latte, Pecorino Romano,
              prosciutto Cotto with truffle, basil
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Diavola</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Tomato sauce, mozzarella Fior di Latte, smoked mozzarella, basil,
              chilli, Salsiccia Picante salami, Pecorino Romano
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Nduja</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Tomato sauce, mozzarella Fior di Latte, 'nduja, shallots, ricotta,
              lime
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Quattro formaggi</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Mozzarella Fior di Latte, ricotta, gorgonzola, Pecorino Romano
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Arosto</div>
              <div className={styles.item__price}>$46</div>
            </div>
            <div className={styles.item__ingredients}>
              Mozzarella Fior di Latte, roasted rostbef, spicy mayonnaise,
              garlic, oregano
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;

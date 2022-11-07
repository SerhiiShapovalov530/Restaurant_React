import styles from "./MenuCard.module.css";

const PastaRisotto = () => {
  return (
    <>
      {/* <h1 className={styles.name}>Pasta & Risotto</h1> */}
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Mac & cheese</div>
              <div className={styles.item__price}>$38</div>
            </div>

            <div className={styles.item__ingredients}>
              Strozzapreti, cheese sauce, toast, panchetta, spring onions
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Penne al gorgonzola</div>
              <div className={styles.item__price}>$38</div>
            </div>
            <div className={styles.item__ingredients}>
              Penne in gorgonzola and mascarpone sauce, pistachios and pear
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Tagliolini con gamberetti</div>
              <div className={styles.item__price}>$34</div>
            </div>
            <div className={styles.item__ingredients}>
              Tagliolini with shrimps, garlic, spinach, and sun-dried tomatoes,
              crawfish bisque, cream, parsley
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Spaghetti di mare</div>
              <div className={styles.item__price}>$28</div>
            </div>
            <div className={styles.item__ingredients}>
              Spaghetti with clams, prawns, and calamari in tomato sauce with
              peperoncino, langustine bisque and parsley
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Risotto con gamberetti</div>
              <div className={styles.item__price}>$48</div>
            </div>
            <div className={styles.item__ingredients}>
              Black risotto with shrimps, crawfish bisque, dried tomatoes,
              spring onions, leek and chive oil
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>
                Tagliatelle con pollo e pera
              </div>
              <div className={styles.item__price}>$44</div>
            </div>
            <div className={styles.item__ingredients}>
              Tagliatelle with chicken in curry sauce, pear, almonds
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Lasagne</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Lasagna with meat rags in tomato sauce with mozzarella Fior di
              Latte
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Pappardelle con manzo</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Pappardelle with pieces of tenderloin, pecorino, pine nuts in
              demi-glace sauce and garlic
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Pad Thai</div>
              <div className={styles.item__price}>$48</div>
            </div>
            <div className={styles.item__ingredients}>
              Rice noodles, tofu, egg, pepper, leek, mung bean sprouts, peanuts,
              roasted onion, garlic, and spring onions
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastaRisotto;

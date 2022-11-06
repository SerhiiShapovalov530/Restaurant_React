import styles from "./MenuCard.module.css";

const StartersSoupsSalads = () => {
  return (
    <>
      <h1 className={styles.name}>STARTERS</h1>
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Tacos</div>
              <div className={styles.item__price}>$38</div>
            </div>

            <div className={styles.item__ingredients}>
              Tacos with pulled pork and tomato salsa
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Bruschetta con pomodori</div>
              <div className={styles.item__price}>$28</div>
            </div>
            <div className={styles.item__ingredients}>
              Crunchy toast with tomatoes, ricotta and feta cheese
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Carpaccio di manzo</div>
              <div className={styles.item__price}>$48</div>
            </div>
            <div className={styles.item__ingredients}>
              Beef carpaccio with pickled shallots and truffle mayonnaise
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Tonno</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Marinated tuna, capers, cherry tomatoes, olive oil, lemon juice
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Tacos con gamberoni</div>
              <div className={styles.item__price}>$36</div>
            </div>
            <div className={styles.item__ingredients}>
              Tacos with prawns, guacamole, marinated onion, coriander
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Gamberoni</div>
              <div className={styles.item__price}>$42</div>
            </div>
            <div className={styles.item__ingredients}>
              Argentinian prawns with white wine, served with lobster bisque,
              butter, garlic and parsley
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Focaccia al rosmarino</div>
              <div className={styles.item__price}>$24</div>
            </div>
            <div className={styles.item__ingredients}>
              Foccacia with rosemary, garlic, Grana Padano, oregano and extra
              virgin olive oil
            </div>
          </div>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Antipasti</div>
              <div className={styles.item__price}>$78</div>
            </div>
            <div className={styles.item__ingredients}>
              A plate of Italian cheeses and charucuteries, served with homemade
              jam, bread with garlic butter, artichoke, olives and sun-dried
              tomatoes
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.name}>SOUPS</h1>
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Crema di zucca</div>
              <div className={styles.item__price}>$26</div>
            </div>

            <div className={styles.item__ingredients}>
              Pumpkin cream, chives oil, pumpkin seeds
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Tom Yum</div>
              <div className={styles.item__price}>$34</div>
            </div>
            <div className={styles.item__ingredients}>
              Spicy, creamy soup with seafood, vegetables and coconut milk
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.name}>SALADS</h1>
      <div className={styles.menu__items}>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>
                Insalata con formaggio di capra
              </div>
              <div className={styles.item__price}>$48</div>
            </div>

            <div className={styles.item__ingredients}>
              Kale, goat cheese, baked pumpkin, fig, pomegranate
            </div>
          </div>
        </div>
        <div className={styles.menu__column}>
          <div className={styles.menu__item}>
            <div className={styles.item__details}>
              <div className={styles.item__name}>Insalata caesar</div>
              <div className={styles.item__price}>$48</div>
            </div>
            <div className={styles.item__ingredients}>
              Romaine lettuce with grilled farm chicken breast, served with
              croutons, roasted pancetta and Grana Padano
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartersSoupsSalads;

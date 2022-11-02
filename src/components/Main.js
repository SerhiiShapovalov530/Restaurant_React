import styles from "./Main.module.css";
import pizzaImg from "../assets/pizza.png";
import pastaImg from "../assets/pizza-3000285_1280.png";

const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__columns}>
          <div className={styles.main__column}>
            <h1 className={`logo ${styles["logo-main"]}`}>Ti Amo, Pizza!</h1>
            {/* <h2 className={styles.description}>Best in town.</h2> */}
            <h2>The taste of italy in the ceneter of Cracow</h2>
            <button>Book a table</button>
            <button>Check menu</button>
          </div>
          <div className={styles.main__column}>
            <img className={styles.main__img} src={pastaImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

import styles from "./Main.module.css";

import Navigation from "./Navigation/Navigation";
import pastaImg from "../assets/pizza-3000285_1280.png";

const getElementAndScroll = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  document.getElementById(href).scrollIntoView({ behavior: "smooth" });
};

const Main = (props) => {
  const linkScrollHandler = (e) => {
    getElementAndScroll(e);
    props.onMoblieNavHandler();
  };

  return (
    <>
      <section
        id="section--1"
        className={
          !props.mobileNavActive
            ? "section section--1"
            : "section section--1--active"
        }
      >
        <Navigation
          onActivation={props.onMoblieNavHandler}
          mobileNavActive={props.mobileNavActive}
          onLinkScrollHandler={linkScrollHandler}
        />

        <div className="content__container">
          <div className={styles.main}>
            <div className={styles.main__columns}>
              <div className={styles.main__column}>
                <h1 className={`logo ${styles["logo-main"]}`}>
                  Ti Amo, Pizza!
                </h1>

                <h2 className={styles.main__intro}>
                  it's not just food, it's an experience!
                  {/* <span className="text__color">it's an experience!</span> */}
                </h2>
                {/* <h2> The taste of italy in the ceneter of Cracow</h2> */}
                <a
                  href="section--3"
                  className={`${styles.btn} btn`}
                  onClick={getElementAndScroll}
                >
                  Book a table
                </a>
                <a
                  href="section--4"
                  className={`${styles.btn} btn ${styles.btn__menu}`}
                  onClick={getElementAndScroll}
                >
                  Check menu
                </a>
              </div>
              <div className={styles.main__column}>
                <img className={styles.main__img} src={pastaImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

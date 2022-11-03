import { useReducer } from "react";
import styles from "./Menu.module.css";

import Pizza from "./Components/Pizza";
import Insalate from "./Components/Insalate";
import PastaRisotto from "./Components/PastaRisotto";

import MenuNav from "./MenuNav";

const initialState = { menu: "Pizza" };

const reducer = (state, action) => {
  switch (action.type) {
    case "Pizza":
      return { ...state, menu: "Pizza" };
    case "PastaRisotto":
      return { ...state, menu: "PastaRisotto" };
    case "Insalata":
      return { ...state, menu: "Insalata" };
      break;
    default:
      console.log("Sorry");
  }
};

const Menu = () => {
  const [state, dispach] = useReducer(reducer, initialState);

  const onPizzaClickHanlder = () => {
    console.log("Pizza Click!");
    dispach({ type: "Pizza" });
    console.log("state:", state);
  };

  const onPastaClickHanlder = () => {
    console.log("Pasta Click!");
    dispach({ type: "PastaRisotto" });
    console.log("state:", state);
  };

  const onInsalataClickHanlder = () => {
    console.log("Insalata Click!");
    dispach({ type: "Insalata" });
    console.log("state:", state);
  };

  return (
    <section className={`section section--3 ${styles["section--3"]}`}>
      <div className="content__container">
        <h2 className={`heading ${styles.menu}`}>Menu</h2>
        <MenuNav
          state={state}
          onPizzaClick={onPizzaClickHanlder}
          onPastaClick={onPastaClickHanlder}
          onInsalataClick={onInsalataClickHanlder}
        />

        {state.menu === "Pizza" && <Pizza />}
        {state.menu === "PastaRisotto" && <PastaRisotto />}
        {state.menu === "Insalata" && <Insalate />}
      </div>
    </section>
  );
};

export default Menu;

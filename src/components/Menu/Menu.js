import { useReducer } from "react";
import styles from "./Menu.module.css";

import Pizza from "./Components/Pizza";
import StartersSoupsSalads from "./Components/StartersSoupsSalads";
import PastaRisotto from "./Components/PastaRisotto";
import Desserts from "./Components/Desserts";

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
    case "Desserts":
      return { ...state, menu: "Desserts" };
      break;
    default:
      console.log("No match!");
  }
};

const Menu = () => {
  const [state, dispach] = useReducer(reducer, initialState);

  const onPizzaClickHanlder = () => {
    dispach({ type: "Pizza" });
    // console.log("state:", state);
  };

  const onPastaClickHanlder = () => {
    dispach({ type: "PastaRisotto" });
    // console.log("state:", state);
  };

  const onInsalataClickHanlder = () => {
    dispach({ type: "Insalata" });
    // console.log("state:", state);
  };
  const onDesertsClickHanlder = () => {
    dispach({ type: "Desserts" });
  };

  return (
    <section
      className={`section section--4 ${styles["section--4"]}`}
      id="section--4"
    >
      <div className="content__container">
        <h2 className={` ${styles.menu}`}>
          <span className="text__color">Menu</span>
        </h2>
        <MenuNav
          state={state}
          onPizzaClick={onPizzaClickHanlder}
          onPastaClick={onPastaClickHanlder}
          onInsalataClick={onInsalataClickHanlder}
          onDessertsClick={onDesertsClickHanlder}
        />

        {state.menu === "Pizza" && <Pizza />}
        {state.menu === "PastaRisotto" && <PastaRisotto />}
        {state.menu === "Insalata" && <StartersSoupsSalads />}
        {state.menu === "Desserts" && <Desserts />}
      </div>
    </section>
  );
};

export default Menu;

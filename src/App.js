import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Burger from "./components/UI/Burger";
import Main from "./components/Main";
import ScrollIcon from "./components/UI/ScrollIcon";
import About from "./components/About";
import Booking from "./components/Booking/Booking";
import Menu from "./components/Menu/Menu";

function App() {
  const [mobileNavActive, setMobileMenuActive] = useState(false);
  const moblieNavHandler = () => {
    setMobileMenuActive((state) => !state);
  };

  return (
    <>
      <div className="wrapper">
        <section id="section section--1" className="section section--1">
          <div className="content__container">
            <Burger
              onActivation={moblieNavHandler}
              mobileNavActive={mobileNavActive}
            />
            <Navigation mobileNavActive={mobileNavActive} />
          </div>
          <div className="content__container">
            <Main />
            <ScrollIcon />
          </div>
        </section>

        <About />
        <Booking />
        <Menu />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import BookingProvider from "./store/BookingProvider";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Burger from "./components/UI/Burger";
import Main from "./components/Main";
import ScrollIcon from "./components/UI/ScrollIcon";
import About from "./components/About";
import Booking from "./components/Booking/Booking";
// import UserDataForm from "./components/Booking/UserDataForm";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
// import Modal from "./components/UI/Modal";

function App() {
  const [mobileNavActive, setMobileMenuActive] = useState(false);
  const moblieNavHandler = () => {
    setMobileMenuActive((state) => !state);
  };

  return (
    <>
      <div className="wrapper">
        {/* <Modal /> */}
        <section
          id="section section--1"
          className={
            !mobileNavActive
              ? "section section--1"
              : "section section--1--active"
          }
        >
          <Burger
            onActivation={moblieNavHandler}
            mobileNavActive={mobileNavActive}
          />
          <Navigation mobileNavActive={mobileNavActive} />

          <div className="content__container">
            <Main />
            <ScrollIcon />
          </div>
        </section>

        <About />
        <BookingProvider>
          <Booking />
        </BookingProvider>

        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;

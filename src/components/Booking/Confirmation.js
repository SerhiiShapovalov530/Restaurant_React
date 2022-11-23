import { useState, useContext } from "react";
import BookingContolContext from "../../store/bookingContolContext";
import styles from "./Confirmation.module.css";

const Confirmation = (props) => {
  const bookingCtx = useContext(BookingContolContext);

  const day = bookingCtx.date.getDate();
  const month = bookingCtx.date.getMonth() + 1;
  const year = bookingCtx.date.getFullYear();

  const hour = bookingCtx.time;
  const quantity = bookingCtx.noOfCustomers;

  return (
    <>
      <div className={styles.confirmation}>
        <h1>Your reservation is confirmed!</h1>
        <h2>
          <span className="text__color"> Table for: {quantity}</span>
        </h2>
        <h2>
          <span className="text__color">
            {" "}
            {day}-{month}-{year} | {hour}
          </span>
        </h2>

        <div className={styles.header__nav}>
          <button className={styles["btn-back"]} onClick={props.onBackHandler}>
            <span>&#8592;</span> Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;

import { useContext, useState } from "react";

import BookingContolContext from "../../store/bookingContolContext";

import BookingDetailsForm from "./BookingDetailsForm";
import UserDataForm from "./UserDataForm";
import Confirmation from "./Confirmation";
import { date as curDate } from "../../helpers/schedule";
import Modal from "../UI/Modal";

import styles from "./Booking.module.css";

const Booking = () => {
  const bookingCtx = useContext(BookingContolContext);
  const [isValid, setIsValid] = useState(false);

  const [isBooked, setIsBooked] = useState(false);

  const validateHandler = (e) => {
    e.preventDefault();
    console.log("click");

    if (bookingCtx.date && bookingCtx.time && bookingCtx.noOfCustomers) {
      console.log("->true<-");
      setIsValid(true);
    }
  };
  const backHandler = () => {
    setIsValid(false);
    setIsBooked(false);
    bookingCtx.resetTime();
  };

  const bookedHandler = () => {
    console.log("Table is booked");
    setIsBooked(true);
  };

  return (
    <>
      <section className="section section--3" id="section--3">
        <h1 className={styles.heading}>
          Book a <span className="text__color">table</span>{" "}
        </h1>
        {!isValid && <BookingDetailsForm onValidateHandler={validateHandler} />}
        {isValid && !isBooked && (
          <UserDataForm onBackHandler={backHandler} onBooked={bookedHandler} />
        )}
        {isBooked && <Confirmation onBackHandler={backHandler} />}
      </section>
    </>
  );
};

export default Booking;

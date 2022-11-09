import { useContext, useState } from "react";
import BookingContolContext from "../../store/bookingContolContext";

import BookingDetailsForm from "./BookingDetailsForm";
import UserDataForm from "./UserDataForm";

import styles from "./Booking.module.css";

const Booking = () => {
  const bookingCtx = useContext(BookingContolContext);
  const [isValid, setIsValid] = useState(false);

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
  };

  console.log("????isValid rerender:", isValid);

  return (
    <>
      <section className="section section--3">
        <h1 className={styles.heading}>Book a table</h1>
        {!isValid && <BookingDetailsForm onValidateHandler={validateHandler} />}
        {isValid && <UserDataForm onBackHandler={backHandler} />}
      </section>
    </>
  );
};

export default Booking;

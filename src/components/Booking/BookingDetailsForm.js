import { useContext, useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import BookingContolContext from "../../store/bookingContolContext";
import TimePeoplePicker from "./TimePeoplePicker";

import styles from "./Booking.module.css";
import "react-datepicker/dist/react-datepicker.css";

const BookingDetailsForm = (props) => {
  const bookingCtx = useContext(BookingContolContext);

  const startDate = bookingCtx.date;
  const dateHandler = bookingCtx.dateHandler;
  const minDate = new Date().toLocaleString().slice(0, 10);

  return (
    <form action="" className={styles.book}>
      <DatePicker
        selected={startDate}
        onChange={dateHandler}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        maxDate={addDays(new Date(), 30)}
        minDate={new Date()}
        inline
      />
      <div className={styles["book__peopleTime-container"]}>
        <div className={styles.book__peopleTime}>
          <TimePeoplePicker
          // selectNoOfCustomers={props.onSelectNoOfCustomers}
          // noOfCustomers={props.noOfCustomers}
          />
        </div>
        <button
          className={`${styles.btn} btn`}
          onClick={props.onValidateHandler}
        >
          Reserve
        </button>
      </div>
    </form>
  );
};

export default BookingDetailsForm;

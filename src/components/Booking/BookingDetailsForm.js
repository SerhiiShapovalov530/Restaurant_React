import { useContext } from "react";
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

  const formSumissionHandler = (e) => {
    // console.log("click");
    e.preventDefault();
  };

  return (
    <form action="submit" className={styles.book}>
      <DatePicker
        selected={startDate}
        onChange={dateHandler}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        maxDate={addDays(new Date(), 25)}
        minDate={new Date()}
        inline
      />
      <div className={styles["book__peopleTime-container"]}>
        <div className={styles.book__peopleTime}>
          <TimePeoplePicker />
        </div>

        {bookingCtx.isBookingAvaliable && (
          <button
            className={`${styles.btn} btn`}
            onClick={props.onValidateHandler}
          >
            Reserve
          </button>
        )}
      </div>
    </form>
  );
};

export default BookingDetailsForm;

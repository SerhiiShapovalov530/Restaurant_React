import { useContext, useEffect } from "react";

import BookingContolContext from "../../store/bookingContolContext";
import { HOUR_OPTIONS, date, curTime } from "../../helpers/schedule";

import styles from "./TimePeoplePicker.module.css";

const TimePeoplePicker = (props) => {
  const bookingCtx = useContext(BookingContolContext);

  const dateCtx = bookingCtx.date || date;
  const avaliableOptions = HOUR_OPTIONS.filter((option) => {
    if (
      date.getDate() === dateCtx.getDate() &&
      date.getMonth() === dateCtx.getMonth()
    ) {
      return option.value > curTime;
    } else {
      return option;
    }
  });

  useEffect(() => {
    bookingCtx.bookingAvalibilityHandler(avaliableOptions);
  }, [avaliableOptions]);

  const reservationsOnline = avaliableOptions.length !== 0;

  const inputs = (
    <div className={styles.picker}>
      <div className={styles.column}>
        <label htmlFor="">No. of people:</label>
        <select
          id="people-box-select"
          value={bookingCtx.noOfCustomers}
          onChange={bookingCtx.noCustomersHandler}
        >
          <option value="1">1 person </option>
          <option value="2">2 people</option>
          <option value="3">3 people </option>
          <option value="4">4 people </option>
          <option value="5">5 people </option>
          <option value="7">7 people </option>
          <option value="8">8 people </option>
          <option value="9">9 people </option>
          <option value="10">10 people </option>
        </select>
      </div>
      <div className={styles.column}>
        <label htmlFor="">Time:</label>
        <select
          id="hour-box-select"
          value={bookingCtx.time}
          onChange={bookingCtx.timeHandler}
        >
          {avaliableOptions.map((option, i) => (
            <option key={i} value={option.value}>
              {option.time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <>
      {reservationsOnline ? (
        inputs
      ) : (
        <p className={styles.message}>
          Online reservations are off for today. You can book a table for
          another day.
        </p>
      )}
    </>
  );
};

export default TimePeoplePicker;

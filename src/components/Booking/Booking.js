import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import TimePeoplePicker from "./TimePeoplePicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import styles from "./Booking.module.css";

const Booking = () => {
  useEffect(() => {}, []);
  const [startDate, setStartDate] = useState(null);

  const minDate = new Date().toLocaleString().slice(0, 10);

  return (
    <>
      <section className="section section--3">
        <h1 className={styles.heading}>Book a table</h1>
        <form action="" className={styles.book}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            maxDate={addDays(new Date(), 30)}
            minDate={new Date()}
            inline
          />
          <div className={styles["book__peopleTime-container"]}>
            <div className={styles.book__peopleTime}>
              <TimePeoplePicker />
            </div>
            <button className={`${styles.btn} btn`}>Reserve</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Booking;

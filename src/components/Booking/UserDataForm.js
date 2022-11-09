import { useState, useContext } from "react";
import BookingContolContext from "../../store/bookingContolContext";

import styles from "./UserDataForm.module.css";

const UserDataForm = (props) => {
  const bookingCtx = useContext(BookingContolContext);
  const [allergies, setAllergies] = useState(false);
  const day = bookingCtx.date.getDate();
  const month = bookingCtx.date.getMonth() + 1;
  const year = bookingCtx.date.getFullYear();

  const handleAllergiesClick = () => {
    setAllergies((allergies) => !allergies);
  };

  return (
    <>
      <div className={styles.header__nav}>
        <button className={styles["btn-back"]} onClick={props.onBackHandler}>
          <span>&#8592;</span> Back
        </button>
        <p className={styles.booking__data}>
          {`${day}-${month}-${year}`}| {bookingCtx.time} h |{" "}
          {bookingCtx.noOfCustomers} people
        </p>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.input}>
              <label className={styles.input__label}>First Name</label>
              <input type="text" />
            </div>
            <div className={styles.input}>
              <label className={styles.input__label}>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.input}>
              <label className={styles.input__label}>Email</label>
              <input type="email" />
            </div>
            <div className={styles["input--inline"]}>
              <label htmlFor="allergies">Intolerances or allergies?</label>
              <input
                type="checkbox"
                name="allergies"
                id="allergies"
                onClick={handleAllergiesClick}
              />
            </div>
            {allergies && (
              <div className={styles.input}>
                <label className={styles.input__label}>Allergies</label>
                <input type="text" />
              </div>
            )}
          </div>
        </div>
        <button className={`btn ${styles.btn}`}>Reserve</button>
      </form>
    </>
  );
};

export default UserDataForm;

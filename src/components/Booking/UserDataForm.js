import { useState } from "react";

import styles from "./UserDataForm.module.css";

// Propos -> recieve booking data/time/number of peoples

const UserDataForm = (props) => {
  const [allergies, setAllergies] = useState(false);

  const handleAllergiesClick = () => {
    setAllergies((allergies) => !allergies);
  };

  return (
    <>
      <div>
        <button className={styles["btn-back"]} onClick={props.onBackHandler}>
          <span>&#8592;</span> Back
        </button>
        <p className={styles.booking__data}>09-11-2022 | 16:00 h | 2 people</p>
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

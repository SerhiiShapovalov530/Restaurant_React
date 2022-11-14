import { useState, useContext } from "react";
import BookingContolContext from "../../store/bookingContolContext";
import useInput from "../../hooks/use-inputs";
import Modal from "../UI/Modal";

import styles from "./UserDataForm.module.css";

const UserDataForm = (props) => {
  let formIsValid = false;
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHander: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHander: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHander: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.length > 3 && value.includes("@"));

  const bookingCtx = useContext(BookingContolContext);

  const [allergies, setAllergies] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((modal) => !modal);
  };

  const backBtnHandler = () => {
    if (enteredName !== "" || enteredEmail !== "" || enteredLastName !== "") {
      modalHandler();
    } else {
      props.onBackHandler();
    }
  };

  const day = bookingCtx.date.getDate();
  const month = bookingCtx.date.getMonth() + 1;
  const year = bookingCtx.date.getFullYear();
  const handleAllergiesClick = () => {
    setAllergies((allergies) => !allergies);
  };

  if (enteredEmailIsValid && enteredLastNameIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const dataHandler = (e) => {
    e.preventDefault();

    resetName();
    resetLastName();
    resetEmail();
  };

  return (
    <>
      {showModal && (
        <Modal
          onbackHandler={props.onBackHandler}
          onModalHandler={modalHandler}
        />
      )}
      <div className={styles.header__nav}>
        <button className={styles["btn-back"]} onClick={backBtnHandler}>
          <span>&#8592;</span> Back
        </button>
        <p className={styles.booking__data}>
          {`${day}-${month}-${year}`} | {bookingCtx.time} h |{" "}
          {bookingCtx.noOfCustomers} people
        </p>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.columns}>
          <div>
            <div className={styles.input}>
              <label className={styles.input__label}>First Name</label>
              <input
                className={`${nameInputHasError ? styles.invalid : null}`}
                type="text"
                id="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
              {nameInputHasError && (
                <p className={styles["error-text"]}>Name must not be empty</p>
              )}
            </div>
            <div className={styles.input}>
              <label className={styles.input__label}>Last Name</label>
              <input
                className={`${lastNameInputHasError ? styles.invalid : null}`}
                type="text"
                id="lastName"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredLastName}
              />
            </div>
            {lastNameInputHasError && (
              <p className={styles["error-text"]}>
                Last name must not be empty
              </p>
            )}
          </div>
          <div className={styles.column}>
            <div className={styles.input}>
              <label className={styles.input__label}>Email</label>
              <input
                className={`${emailInputHasError ? styles.invalid : null}`}
                type="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailInputHasError && (
                <p className={styles["error-text"]}>Email is not correct</p>
              )}
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
        <button
          className={`btn ${styles.btn}`}
          disabled={!formIsValid}
          onClick={dataHandler}
        >
          Reserve
        </button>
      </form>
    </>
  );
};

export default UserDataForm;

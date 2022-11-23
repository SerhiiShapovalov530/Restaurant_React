import * as ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Content = (props) => {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}Message</h2>
          </header>
          <div className={styles.content}>
            <p>
              {props.message}Are you sure you want to leave? All changes will be
              lost!
            </p>
          </div>
          <div className={styles.btns__container}>
            <button
              className={`${styles.btn} btn`}
              onClick={props.onbackHandler}
            >
              Okay
            </button>
            <button
              className={`${styles.btn} btn`}
              onClick={props.onModalHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Content
          onModalHandler={props.onModalHandler}
          onbackHandler={props.onbackHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;

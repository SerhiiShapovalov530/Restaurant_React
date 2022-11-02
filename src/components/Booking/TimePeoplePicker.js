import styles from "./TimePeoplePicker.module.css";

const TimePeoplePicker = (props) => {
  return (
    <>
      <div className={styles.picker}>
        <div className={styles.column}>
          <label htmlFor="">No. of people:</label>
          <select id="people-box-select">
            <option value="1">1 person </option>
            <option value="2" selected="">
              2 people
            </option>
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
          <select id="hour-box-select">
            <option value="-1" disabled="">
              Select
            </option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TimePeoplePicker;

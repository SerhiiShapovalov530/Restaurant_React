import { useState } from "react";
import BookingContolContext from "./bookingContolContext";

const BookingProvider = (props) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [noOfCustomers, setNoOfCustomers] = useState(1);

  const dateHandler = (date) => {
    setDate(date);
    console.log("Provider:", date);
  };
  const timeHandler = (e) => {
    const value = e.target.value;
    setTime(value);
    console.log(time);
  };

  const noCustomersHandler = (e) => {
    const value = e.target.value;
    setNoOfCustomers(value);
    console.log(noOfCustomers);
  };

  const bookingContext = {
    date,
    time,
    noOfCustomers,
    firstName: "",
    LastName: "",
    email: "",
    allergies: false,
    allergiesData: "",

    dateHandler,
    noCustomersHandler,
    timeHandler,
  };
  return (
    <BookingContolContext.Provider value={bookingContext}>
      {props.children}
    </BookingContolContext.Provider>
  );
};

export default BookingProvider;

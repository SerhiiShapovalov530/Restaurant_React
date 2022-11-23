import { useState } from "react";
import BookingContolContext from "./bookingContolContext";
import { date as curDate, avaliableHours } from "../helpers/schedule";

const BookingProvider = (props) => {
  const isAfterHours = avaliableHours.length === 0 ? false : true;
  const avaliableTime =
    avaliableHours.length === 0 ? "13:00" : avaliableHours[0].value;

  const [date, setDate] = useState(curDate);
  const [time, setTime] = useState(avaliableTime);
  const [noOfCustomers, setNoOfCustomers] = useState(1);
  const [isBookingAvaliable, setIsBookingAvaliable] = useState(isAfterHours);
  const [allergiesDetails, setAllergiesDetails] = useState(null);

  const dateHandler = (date) => {
    setDate(date);
  };
  const timeHandler = (e) => {
    const value = e.target.value;
    setTime(value);
    // console.log("TIME:", time);
  };

  const resetTime = () => {
    setTime(avaliableTime);
  };

  const noCustomersHandler = (e) => {
    const value = e.target.value;
    setNoOfCustomers(value);
    // console.log("No. of customers", noOfCustomers);
  };

  const bookingAvalibilityHandler = (data) => {
    setIsBookingAvaliable(data.length === 0 ? false : true);
  };

  const allergiesHandler = (e) => {
    const value = e.target.value;

    setAllergiesDetails(value);
    console.log("allergiesDetails", allergiesDetails);
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
    resetTime,
    isBookingAvaliable,
    bookingAvalibilityHandler,
    allergiesHandler,
  };
  return (
    <BookingContolContext.Provider value={bookingContext}>
      {props.children}
    </BookingContolContext.Provider>
  );
};

export default BookingProvider;

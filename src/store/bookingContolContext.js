import React from "react";

const BookingContolContext = React.createContext({
  date: "",
  time: "",
  noOfCustomers: 1,
  firstName: "",
  LastName: "",
  email: "",
  allergies: false,
  allergiesData: "",
});

export default BookingContolContext;

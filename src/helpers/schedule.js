export const HOUR_OPTIONS = [
  { value: "13:00", time: "13:00" },
  { value: "13:30", time: "13:30" },
  { value: "14:00", time: "14:00" },
  { value: "14:30", time: "14:30" },
  { value: "15:00", time: "15:00" },
  { value: "15:30", time: "15:30" },
  { value: "16:00", time: "16:00" },
  { value: "16:30", time: "16:30" },
  { value: "17:00", time: "17:00" },
  { value: "17:30", time: "17:30" },
  { value: "18:00", time: "18:00" },
  { value: "18:30", time: "18:30" },
  { value: "19:00", time: "19:00" },
  { value: "19:30", time: "19:30" },
  { value: "20:00", time: "20:00" },
  { value: "20:30", time: "20:30" },
  { value: "21:00", time: "21:00" },
  { value: "21:30", time: "21:30" },
  { value: "22:00", time: "22:00" },
];

export const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();

export const curTime = `${hours + 1}:${minutes}`;

export const avaliableHours = HOUR_OPTIONS.filter((option) => {
  return option.value > curTime;
});

export const isBookingAvaliable = avaliableHours.length === 0 ? false : true;

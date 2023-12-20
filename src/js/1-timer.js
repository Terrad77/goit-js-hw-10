'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//ініціалізація бібліотеки
flatpickr('#datetime-picker', options);

//об'єкт параметрів
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
   
      // Функція для перевірки дати на майбутність
function isFutureDate(selectedDate) {
  const currentDate = new Date();
  return selectedDate > currentDate;
} 
  },
    let userSelectedDate = null;
};

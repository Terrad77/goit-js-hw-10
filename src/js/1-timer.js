'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');
button.disabled = true;

// оголоси поза межами методу let змінну userSelectedDate
let userSelectedDate = '';

//об'єкт параметрів бібліотеки flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //onClose() викликається щоразу під час закриття елемента інтерфейсу flatpickr.
  onClose(selectedDates) {
    // перевірка дати на майбутність
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      iziToast.show();
      // iziToast.error({
      //   title: 'Error',
      //   message: 'Please choose a date in the future',
      //   position: 'topRight',
      //   closeOnEscape: true,
      //   timeout: 5000,
      // });
      button.disabled = true;
    } else {
      button.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

//initial flatpickr
//створюємо екземпляр бібліотеки
const datePicker = flatpickr(input, options);

//додаємо слухач на input
input.addEventListener('focus', () => {
  datePicker.config.defaultDate = new Date();
});

// Start the countdown
button.addEventListener('click', () => {
  const currentTime = new Date().getTime();
  const selectedTime = userSelectedDate.getTime();
  const countdownInterval = selectedTime - currentTime;
  // convertMs(countdownInterval).addLeadingZero();
  const time = convertMs(countdownInterval);

  const formattedTime = {
    days: addLeadingZero(time.days),
    hours: addLeadingZero(time.hours),
    minutes: addLeadingZero(time.minutes),
    seconds: addLeadingZero(time.seconds),
  };

  console.log(formattedTime); // { days: '00', hours: '00', minutes: '00', seconds: '02' }
  // Очищення поля вводу
  input.value = '';
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// iziToast.show({
//   message: 'Please choose a date in the future',
//   messageColor: '#FAFAFB',
//   messageSize: '16px',
//   messageLineHeight: '1.5',
//   backgroundColor: '#EF4040',
//   position: 'topRight',
//   closeOnEscape: true,
//   close: true,
// });

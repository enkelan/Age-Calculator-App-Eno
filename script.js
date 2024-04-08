'use strict';

// SELECT ELEMENTS
const output_year = document.getElementById('YY');
const output_month = document.getElementById('MM');
const output_day = document.getElementById('DD');
const submit_btn = document.querySelector('.sumbit_btn');

// INPUT ELEMENTS
let isValid = false;
const input_year = document.getElementById('year');
const input_day = document.getElementById('day');
const input_month = document.getElementById('month');

// ERROR ELEMENTS
// Correctly select the <small> elements next to each input field
const error_day = document.querySelector('#day + small');
const error_month = document.querySelector('#month + small');
const error_year = document.querySelector('#year + small');

submit_btn.addEventListener('click', CalculateDate);
// INPUT VALIDATION

submit_btn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  CalculateDate();
});

input_day.addEventListener('input', () => {
  if (+input_day.value > 31 || +input_day.value === 0) {
    error_day.textContent = 'Must be a valid day';
    isValid = false;
    input_day.classList.add('error');
    document.querySelector('label[for="day"]').classList.add('error');
    return;
  } else {
    isValid = true;
    error_day.textContent = '';
    input_day.classList.remove('error');
    document.querySelector('label[for="day"]').classList.remove('error');
  }
});

input_month.addEventListener('input', () => {
  if (+input_month.value > 12 || +input_month.value === 0) {
    error_month.textContent = 'Must be a valid month';
    isValid = false;
    input_month.classList.add('error');
    document.querySelector('label[for="month"]').classList.add('error');
    return;
  } else {
    isValid = true;
    error_month.textContent = '';
    input_month.classList.remove('error');
    document.querySelector('label[for="month"]').classList.remove('error');
  }
});

input_year.addEventListener('input', () => {
  if (+input_year.value > 2023) {
    error_year.textContent = 'Must be a valid date';
    isValid = false;
    input_year.classList.add('error');
    document.querySelector('label[for="year"]').classList.add('error');
    return;
  } else if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = 'Must be a valid past';
    input_year.classList.add('error');
    document.querySelector('label[for="year"]').classList.add('error');
    return;
  } else {
    isValid = true;
    error_year.textContent = '';
    input_year.classList.remove('error');
    document.querySelector('label[for="year"]').classList.remove('error');
  }
});

// CALCULATE DATE FUNCTION

function CalculateDate() {
  if (isValid) {
    let birthday = new Date(
      input_year.value,
      input_month.value - 1,
      input_day.value
    );
    let today = new Date();
    let ageYears = today.getFullYear() - birthday.getFullYear();
    let ageMonth = today.getMonth() - birthday.getMonth();
    let ageDay = today.getDate() - birthday.getDate();

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYears--;
    }

    if (ageDay < 0) {
      ageMonth--;
      ageDay += 31;
    }

    if (ageMonth < 0) {
      ageMonth += 12;
    }

    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert('error');
  }
}

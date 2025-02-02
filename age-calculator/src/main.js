import './styles.css';
import datepicker from 'js-datepicker';
import { DateTime } from 'luxon';
import 'js-datepicker/dist/datepicker.min.css';

const dateComponents = {
  day: null,
  month: null,
  year: null
};

const picker = datepicker('#dob', { 
  startDay: 1, 
  maxDate: DateTime.local().toJSDate(),
  formatter: (input, date, instance) => {
    dateComponents.day = null;
    dateComponents.month = null;
    dateComponents.year = null;
    result.innerHTML = '';

    if (date > DateTime.local().minus({ days: 1 }).toJSDate()) {
      error.innerHTML = 'Please select a valid date';
      calculateBtn.disabled = true;
    } else {
      dateComponents.day = date.getDate();
      dateComponents.month = date.getMonth() + 1;
      dateComponents.year = date.getFullYear();
      calculateBtn.disabled = false;
      error.innerHTML = '';
    }
    
    input.value = date.toDateString();
  }
});

const calculatorForm = document.getElementById('age-calculator');
const calculateBtn = document.getElementById('calculate-btn');
const dobIcon = document.getElementById('dob-icon');
const result = document.getElementById('result');
const error = document.getElementById('error');

calculatorForm.addEventListener('submit', calculateAge);
dobIcon.addEventListener('click', toggleDatePicker);

function toggleDatePicker(e) {
  e.stopPropagation()
  const isHidden = picker.calendarContainer.classList.contains('qs-hidden')
  picker[isHidden ? 'show' : 'hide']()
}

function calculateAge(e) {
  e.preventDefault();

  const { day, month, year } = dateComponents;

  if (!day || !month || !year) {
    error.innerHTML = 'Please select a valid date';
    calculateBtn.disabled = true;
    return;
  }

  const today = DateTime.local();
  const dob = DateTime.local(year, month, day);
  const age = today.diff(dob, ['years', 'months', 'days']).toObject();

  result.innerHTML = `You are <strong>${Math.floor(age.years)} year(s), ${Math.floor(age.months % 12)} month(s) and ${Math.floor(age.days % 30)} day(s)</strong> old`;
}
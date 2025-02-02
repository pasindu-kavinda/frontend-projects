import './style.css';
import datepicker from 'js-datepicker';
import { DateTime } from 'luxon';
import 'js-datepicker/dist/datepicker.min.css';

let day;
let month;
let year;

const picker = datepicker('#dob', { 
  startDay: 1, 
  maxDate: DateTime.local().toJSDate(),
  formatter: (input, date, instance) => {
    day = null;
    month = null;
    year = null;
    result.innerHTML = '';

    if(date > DateTime.local().minus({ days: 1 }).toJSDate()) {
      error.innerHTML = 'Please select a valid date';
      calculateBtn.disabled = true;
    }else {
      day = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();
      calculateBtn.disabled = false;
      error.innerHTML = '';
    }
    
    input.value = date
  }
});

const calculatorForm = document.getElementById('age-calculator');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');
const error = document.getElementById('error');

calculatorForm.addEventListener('submit', calculateAge);

function calculateAge(e) {
  e.preventDefault();

  if(!day ||!month ||!year) {
    error.innerHTML = 'Please select a valid date';
    return;
  }
  const today = DateTime.local();
  const dob = DateTime.local(year, month, day);
  const age = today.diff(dob, 'years').toObject().years;
  const months = today.diff(dob, 'months').toObject().months % 12;
  const days = today.diff(dob, 'days').toObject().days % 30;
  
  result.innerHTML = `You are <strong>${Math.floor(age)} year(s), ${Math.floor(months)} month(s) and ${Math.floor(days)} day(s)</strong> old`;
}
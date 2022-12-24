import './style.css';
import add, { createList, clearComplete } from './modules/app.js';

window.addEventListener('load', createList());
// Add an event
const inputChange = document.querySelector('#input');
clearComplete();

inputChange.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (inputChange.value === '') {
      // eslint-disable-next-line no-alert
      alert('Kindy dont add empty tasks');
    } else {
      add(inputChange.value);
      inputChange.value = '';
    }
  }
});

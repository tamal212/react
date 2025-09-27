/* 
let counter = document.querySelector('.bpm');
let count = 1;
setInterval(() => {
  if (count < 75) {
    count++;
    counter.innerHTML = count;
  }
 },2);
 */
let counters = document.querySelectorAll('.bpm');
counters.forEach(count => {
  let target =+count.getAttribute('data-target');
  let counter =+count.innerHTML;
})


const button = document.querySelector('#btn');
const text = document.querySelector('#text');
let number = 0;
button.addEventListener('click', () => {
  number++;
  text.innerHTML = number;
 })
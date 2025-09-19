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
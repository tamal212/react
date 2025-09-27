 'use strict';
const addNum = document.querySelector('#posative');

const people_total = document.querySelector('#add_people');
let count = 0;
addNum.addEventListener('click', () => {
 count++;
  people_total.innerHTML = count;
})

const removeNum = document.querySelector('#negative');
removeNum.addEventListener('click', () => {
  if (count>1) {
      count--;
   }
  people_total.innerHTML = count;
})

//?    BUTTON 
const clickButton = document.querySelector('.btn');
clickButton.addEventListener('click', () => {
  document.querySelector('.bottom').style.display = ('block');


  const bill = Number(document.querySelector('#bill').value);

  const tip = Number(document.querySelector('#tip').value);

  let amount = bill * (tip / 100);
  const totalVat = (bill + 5) / 100;

// * browser showing part
  document.querySelector('#total').innerHTML = bill;
  document.querySelector('#yourTip').innerHTML = amount;
  document.querySelector('#vat').innerHTML = totalVat;


 let people =people_total.innerHTML;

  document.querySelector('#amount').innerHTML =((bill + amount +totalVat)/people).toFixed(2);
 }
)

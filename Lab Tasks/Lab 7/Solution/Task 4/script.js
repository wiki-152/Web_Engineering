let count = 0;

const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
  count+=1;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count-=1;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

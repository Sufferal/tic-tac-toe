const btns = document.querySelectorAll('.container .btn');
const btnsText = document.querySelectorAll('.container .btn-text');

window.addEventListener('load', () => {
  for (const btnText of btnsText) {
    btnText.textContent = 'O';
    btnText.style.opacity = '0';
  }
});

let pick = 'X';
let isPickX = true;

function switchPick() {
  if(isPickX) {
    pick = 'O';
    isPickX = false;
  } else {
    pick = 'X';
    isPickX = true;
  }
}

for (const btn of btns) {
  btn.addEventListener('click', () => {
    btn.value = pick;
    btn.textContent = pick;
    switchPick();
  });
}
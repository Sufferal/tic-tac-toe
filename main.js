const btns = document.querySelectorAll(".container .btn");
const btnsText = document.querySelectorAll(".container .btn-text");
const playAgainBtn = document.querySelector("#play-again");
const result = document.querySelector('#result');

playAgainBtn.addEventListener('click', clearBoard);

let pick = "X";
let isPickX = true;
let isOpponentTurn = false;
let isBtnDisabled = false;
let winner;


// // Style event
// window.addEventListener("load", () => {
//   for (const btnText of btnsText) {
//     btnText.textContent = "O";
//     btnText.style.opacity = "0";
//   }
// });

function getBtnsValue() {
  return [
    [
      document.querySelector("#btn1").value,
      document.querySelector("#btn2").value,
      document.querySelector("#btn3").value,
    ],
    [
      document.querySelector("#btn4").value,
      document.querySelector("#btn5").value,
      document.querySelector("#btn6").value,
    ],
    [
      document.querySelector("#btn7").value,
      document.querySelector("#btn8").value,
      document.querySelector("#btn9").value,
    ],
  ];
}

function switchPick() {
  if (isPickX) {
    pick = "O";
    isPickX = false;
    isOpponentTurn = !isOpponentTurn;
  } else {
    pick = "X";
    isPickX = true;
    isOpponentTurn = !isOpponentTurn;
  }
}

function toggleDisableBtns() {
  for (const btn of btns) {
    btn.disabled = !isBtnDisabled;
    !isBtnDisabled ? btn.classList.add('disabled') : btn.classList.remove('disabled');
  }

  isBtnDisabled = !isBtnDisabled;
}

function clearBoard() {
  for (const btn of btns) {
    btn.textContent = '';
    btn.value = '';
  }  
  toggleDisableBtns();
}

// Wins functions
function isHorizontalWin() {
  let btnsValue = getBtnsValue();

  for (let i = 0; i < btnsValue.length; i++) {
    if (
      btnsValue[i][0] === pick &&
      btnsValue[i][1] === pick &&
      btnsValue[i][2] === pick
    ) {
      return true;
    }
  }

  return false;
}

function isVerticalWin() {
  let btnsValue = getBtnsValue();

  for (let i = 0; i < btnsValue.length; i++) {
    if (
      btnsValue[0][i] === pick &&
      btnsValue[1][i] === pick &&
      btnsValue[2][i] === pick
    ) {
      return true;
    }
  }

  return false;
}

function isDiagonalWin() {
  let btnsValue = getBtnsValue();

  if (
    btnsValue[0][0] === pick &&
    btnsValue[1][1] === pick &&
    btnsValue[2][2] === pick || 
    btnsValue[0][2] === pick &&
    btnsValue[1][1] === pick &&
    btnsValue[2][0] === pick
  ) {
    return true;
  }

  return false;
}

function game() {
  if (isHorizontalWin() || isVerticalWin() || isDiagonalWin()) {
    winner = isOpponentTurn ? 'Player 2' : 'Player 1';
    result.textContent = `${winner} won`;
    toggleDisableBtns();
  } else {
    console.log("You lost");
  }
}

for (const btn of btns) {
  btn.addEventListener("click", () => {
    btn.value = pick;
    btn.textContent = pick;

    // Can't click on the same button twice
    btn.disabled = !isBtnDisabled;

    game();

    switchPick();
  });
}

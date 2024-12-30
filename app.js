let newInput = document.querySelector(".newInput");
let lastInput = document.querySelector(".lastInput");
let buttons = document.querySelector(".buttons").children;
const deleteLastDigit = document.querySelector(".del");
const clrAll = document.querySelector(".clear");
const result = document.querySelector(".equal");
const squareDigit = document.querySelector(".square");
const squareRootDigit = document.querySelector(".squareRoot");
const percentage = document.querySelector(".percentage");

// ISPISUJE VRIJEDNOST

for(let button of buttons){
  button.addEventListener('click', () => {
    newInput.textContent += button.value
  })
}

// BRISE ZADNJI UNOS
function del() {
  let deleteDigit = newInput.textContent;
  newInput.textContent = deleteDigit.slice(0, -1);
}
deleteLastDigit.addEventListener("click", del);

// BRISE SVE
function clear() {
  newInput.textContent = "";
  lastInput.textContent = "";
}
clrAll.addEventListener("click", clear);

// KLIK NA ZNAK JEDNAKOSTI - PRIKAZ REZULTATA
function equality() {
  switch (true) {
    case newInput.textContent.includes("+"):
      let plusOperation = newInput.textContent;
      let plusOperation2 = plusOperation.split("+");
      let plusResult = plusOperation2.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue);
      });
      lastInput.textContent = plusResult;
      newInput.textContent = "";
      break;

    case newInput.textContent.includes("-"):
      let minusOperation = newInput.textContent;
      let minusOperation2 = minusOperation.split("-");
      let minusResult = minusOperation2.reduce((accumulator, currentValue) => {
        return Number(accumulator) - Number(currentValue);
      });
      lastInput.textContent = minusResult;
      newInput.textContent = "";
      break;

    case newInput.textContent.includes("×"):
      let multiplyOperation = newInput.textContent;
      let multiplyOperation2 = multiplyOperation.split("×");
      let multiplyResult = multiplyOperation2.reduce(
        (accumulator, currentValue) => {
          return Number(accumulator) * Number(currentValue);
        }
      );
      lastInput.textContent = multiplyResult;
      newInput.textContent = "";
      break;

    case newInput.textContent.includes("÷"):
      let divideOperation = newInput.textContent;
      let divideOperation2 = divideOperation.split("÷");
      let divideResult = divideOperation2.reduce(
        (accumulator, currentValue) => {
          return Number(accumulator) / Number(currentValue);
        }
      );
      lastInput.textContent = divideResult;
      newInput.textContent = "";
      break;
  }
}
result.addEventListener("click", equality);

// BROJ # NA KVADRAT
function powerOfTwo() {
  lastInput.textContent = newInput.textContent ** 2;
  newInput.textContent = "";
}
squareDigit.addEventListener("click", powerOfTwo);

// KORIJEN OD BROJA #
function squareRootOfDigit() {
  lastInput.textContent = Math.sqrt(newInput.textContent).toFixed(4);
  newInput.textContent = "";
}

squareRootDigit.addEventListener("click", squareRootOfDigit);

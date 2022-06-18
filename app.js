let numDisplay = document.querySelector(".numDisplay");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let clear = document.querySelector(".clear");
let divide = document.querySelector(".divide");
let add = document.querySelector(".add");
let multiply = document.querySelector(".multiply");
let subtract = document.querySelector(".subtract");
let equals = document.querySelector(".equals");

divide.addEventListener("click", (e) => {
  divide.classList.add("divideActive");
  add.classList.remove("addActive");
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  if (divide.classList.contains("divideActive") == true) {
    numDisplay.textContent += "/";
  }
});
add.addEventListener("click", (e) => {
  divide.classList.add("divideActive");

  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.add("addActive");
  if (add.classList.contains("addActive") == true) {
    numDisplay.textContent += "+";
    add.disabled = true;
  }
});

multiply.addEventListener("click", (e) => {
  subtract.classList.remove("subtractActive");
  divide.classList.remove("divideActive");
  add.classList.remove("addActive");
  multiply.classList.add("multiplyActive");
  if (multiply.classList.contains("multiplyActive") == true) {
    numDisplay.textContent += "*";
  }
});

subtract.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  divide.classList.remove("divideActive");
  add.classList.remove("addActive");
  subtract.classList.add("subtractActive");
  if (subtract.classList.contains("subtractActive") == true) {
    numDisplay.textContent += "-";
  }
});

seven.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 7;
});

eight.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 8;
});

nine.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 9;
});

six.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 6;
});

five.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 5;
});

four.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  addActive = false;
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 4;
});

three.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 3;
});

two.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 2;
});

one.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 1;
});

zero.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  if (numDisplay.textContent == "0") {
    numDisplay.textContent = "";
  }
  numDisplay.textContent += 0;
});

clear.addEventListener("click", (e) => {
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  numDisplay.textContent = "0";
});

equals.addEventListener("click", (e) => {
  add.disabled = false;
  multiply.classList.remove("multiplyActive");
  subtract.classList.remove("subtractActive");
  add.classList.remove("addActive");
  divide.classList.remove("divideActive");
  numDisplay.textContent = eval(numDisplay.textContent);
});

// let add = function (firstNum, secondNum) {
//   let total = firstNum + secondNum;
//   return total;
// };

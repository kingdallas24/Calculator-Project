let numDisplay = document.querySelector(".numDisplay");
let calcNum = document.querySelectorAll(".calcNum");
let nine = document.querySelector(".nine");
let clear = document.querySelector(".clear");
let symbol = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let percent = document.querySelector(".percent");
let positiveNegative = document.querySelector(".positiveNegative");

let value1;
let value2;
let operator;

let symActive = false;

const addNums = function (a, b) {
  return a + b;
};

const subtractNums = function (a, b) {
  return a - b;
};
const multiplyNums = function (a, b) {
  return a * b;
};

const divideNums = function (a, b) {
  return a / b;
};

function operate(val1, val2, operator) {
  if (operator == "+") {
    return addNums(val1, val2);
  } else if (operator == "-") {
    return subtractNums(val1, val2);
  } else if (operator == "/") {
    return divideNums(val1, val2);
  } else if (operator == "*") {
    return multiplyNums(val1, val2);
  }
}

calcNum.forEach((num1) => {
  num1.addEventListener("click", (e) => {
    if (symActive == false) {
      if (numDisplay.textContent == "0") numDisplay.textContent = "";
      value1 = parseFloat((numDisplay.textContent += num1.textContent));
    }
  });
});

function stopEvent() {}

symbol.forEach((sym) => {
  sym.addEventListener("click", (e) => {
    symActive = true;
    if (sym.textContent.includes("+")) {
      sym.classList.add("addActive");
      operator = "+";
    } else if (sym.textContent.includes("-")) {
      sym.classList.add("subtractActive");
      operator = "-";
    } else if (sym.textContent.includes("X")) {
      sym.classList.add("multiplyActive");
      operator = "*";
    } else if (sym.textContent.includes("÷")) {
      sym.classList.add("divideActive");
      operator = "/";
    }
    numDisplay.textContent = "";
  });
});

calcNum.forEach((num2) => {
  num2.addEventListener("click", (e) => {
    symbol.forEach((sym) => {
      sym.classList.remove(
        "multiplyActive",
        "addActive",
        "subtractActive",
        "divideActive"
      );
    });
    if (symActive == true) {
      value2 = parseFloat((numDisplay.textContent += num2.textContent));
    }
  });
});

equals.addEventListener("click", (e) => {
  symActive = false;
  let finalResult = operate(value1, value2, operator);
  numDisplay.textContent = finalResult;
  value1 = finalResult;
  console.log(finalResult);
});

clear.addEventListener("click", (e) => {
  numDisplay.textContent = "0";
});

percent.addEventListener("click", (e) => {
  if (symActive == false) {
    value1 = value1 / 100;
    numDisplay.textContent = value1;
    return value1;
  } else if (symActive == true) {
    value2 = value2 / 100;
    numDisplay.textContent = value2;
    return value2;
  }
});

positiveNegative.addEventListener("click", (e) => {
  if (symActive == false) {
    value1 = "-" + value1;
    numDisplay.textContent = value1;
    return value1;
  } else if (symActive == true) {
    value2 = "-" + value2;
    numDisplay.textContent = value2;
    return value2;
  }
});

let numDisplay = document.querySelector(".numDisplay");
let calcNum = document.querySelectorAll(".calcNum");
let nine = document.querySelector(".nine");
let clear = document.querySelector(".clear");
let symbol = document.querySelectorAll(".operator");
let equals = document.querySelector(".equals");
let percent = document.querySelector(".percent");
let decimal = document.querySelector(".decimal");
let positiveNegative = document.querySelector(".positiveNegative");
let equation = document.querySelector(".equation");
let zero = document.querySelector(".zero");
let value1;
let value2;
let operator;
let multiply = document.querySelector(".multiply");

if (value2 == undefined) {
  equals.disabled = true;
}

let symActive = false;
let negativeActive = false;
zero.disabled = true;
positiveNegative.disabled = true;

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
    positiveNegative.disabled = false;
    zero.disabled = false;

    if (symActive == false) {
      if (numDisplay.textContent == "0") {
        equation.textContent = "";
        numDisplay.textContent = "";
      }

      value1 = parseFloat(
        (numDisplay.textContent += num1.textContent).replace(/,/g, "")
      );

      equation.textContent = value1;

      let length = value1.toString().length;
      console.log(length);

      if (length >= 4) {
        numDisplay.textContent = value1.toLocaleString("en", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
      }

      if (length >= 8 && length <= 9) {
        numDisplay.style.fontSize = "75%";
      }
      if (length === 9) {
        calcNum.forEach((num1) => {
          num1.disabled = true;
        });
      }
    }
  });
});

symbol.forEach((sym) => {
  sym.addEventListener("click", (e) => {
    symbol.forEach((sym) => {
      sym.disabled = true;
    });
    positiveNegative.disabled = true;
    symActive = true;

    decimal.disabled = false;
    calcNum.forEach((num) => {
      num.disabled = false;
    });
    symActive = true;
    if (sym.textContent.includes("+")) {
      sym.classList.add("addActive");
      sym.classList.remove("multiplyActive", "subtractActive", "divideActive");
      operator = "+";
    } else if (sym.textContent.includes("-")) {
      sym.classList.add("subtractActive");
      sym.classList.remove("addActive", "subtractActive", "divideActive");

      operator = "-";
    } else if (sym.textContent.includes("X")) {
      sym.classList.add("multiplyActive");
      sym.classList.remove("addActive", "subtractActive", "divideActive");
      operator = "*";
    } else if (sym.textContent.includes("÷")) {
      sym.classList.add("divideActive");
      sym.classList.remove("multiplyActive", "addActive", "subtractActive");
      operator = "/";
    }
    numDisplay.textContent = "";
    equation.textContent += " " + operator + " ";
  });
});

calcNum.forEach((num2) => {
  num2.addEventListener("click", (e) => {
    equals.disabled = false;
    positiveNegative.disabled = false;
    symbol.forEach((sym) => {
      sym.classList.remove(
        "multiplyActive",
        "addActive",
        "subtractActive",
        "divideActive"
      );
    });
    if (symActive == true) {
      numDisplay.style.fontSize = "75%";
      value2 = parseFloat(
        (numDisplay.textContent += num2.textContent).replace(/,/g, "")
      );
      equation.textContent += num2.textContent;

      let length = value2.toString().length;
      console.log(length);

      if (length >= 4) {
        numDisplay.textContent = value2.toLocaleString("en", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
      }

      if (length >= 8 && length <= 9) {
        numDisplay.style.fontSize = "75%";
      }
      if (length === 9) {
        calcNum.forEach((num2) => {
          num2.disabled = true;
        });
      }
    }
  });
});

equals.addEventListener("click", (e) => {
  equals.disabled = true;
  symbol.forEach((sym) => {
    sym.disabled = false;
  });

  numDisplay.style.fontSize = "75%";
  calcNum.forEach((num) => {
    num.disabled = true;
  });

  symActive = false;
  let finalResult = operate(value1, value2, operator);
  if (finalResult.toString().length > 9) {
    numDisplay.style.fontSize = "30%";
    finalResult = finalResult.toExponential();
  }

  numDisplay.textContent = finalResult;

  numDisplay.textContent = finalResult.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  equation.textContent += " " + "=" + " " + finalResult;

  value1 = finalResult;
  if (finalResult == 0) console.log(finalResult);
  value2 = undefined;
});

clear.addEventListener("click", (e) => {
  numDisplay.style.fontSize = "75%";
  positiveNegative.disabled = true;
  symActive = false;
  equals.disabled = true;
  equation.textContent = "";

  calcNum.forEach((num) => {
    num.disabled = false;
  });
  symbol.forEach((sym) => {
    sym.disabled = true;

    sym.classList.remove(
      "multiplyActive",
      "addActive",
      "subtractActive",
      "divideActive"
    );
  });
  if (value1 == undefined) {
    decimal.disabled = true;
  } else {
    decimal.disabled = false;
  }
  numDisplay.textContent = "0";
  value1 = undefined;

  value2 = undefined;
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
  makeNegative();
});

function makeNegative() {
  positiveNegative.classList.toggle("negative");
  equation.classList.toggle("negative");

  if (
    symActive == false &&
    positiveNegative.className.includes("negative") &&
    equation.className.includes("negative")
  ) {
    value1 = -+value1;

    numDisplay.textContent = value1;
    equation.textContent = value1;
    return value1;
  } else if (
    symActive == false &&
    !positiveNegative.className.includes("negative") &&
    !equation.className.includes("negative")
  ) {
    numDisplay.textContent = value1;
    equation.textContent = value1;
    return value1;
  } else if (
    symActive == true &&
    positiveNegative.className.includes("negative") &&
    equation.className.includes("negative")
  ) {
    value2 = -+value2;
    numDisplay.textContent = value2;
    equation.textContent = `${value1} ${operator} ${value2}`;
    return value2;
  } else if (
    symActive == true &&
    !positiveNegative.className.includes("negative") &&
    !equation.className.includes("negative")
  ) {
    numDisplay.textContent = value2;
    equation.textContent = parseFloat(`${value1} ${operator} ${value2}`);
    return value2;
  }
}

decimal.addEventListener("click", (e) => {
  setTimeout(function () {
    decimal.disabled = true;
  }, 100);
});

function addSymbol() {
  symbol.disabled = true;
  equation.textContent += " " + operator + " ";
}

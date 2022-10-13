var newInput = document.querySelector("p#calcDisplayCurrentNumber");
var lastInput = document.querySelector("p#calcDisplayLastNumber")
var lastOperation = document.getElementById("calcDisplayLastOperation")
var resetButton = document.getElementById("reset")

var inputVal = ""
var inputValInt = 0
var sumVal = 0
var tempVal = 0
var operator = "+";

resetButton.addEventListener("click", () => {
    inputVal = "";
    newInput.textContent = inputVal;
    sumVal = 0
    lastInput.textContent = sumVal;
});

document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener("click", event => {
        if (inputVal === "" || inputVal === 0) {
            return
        }
        newInput.textContent = inputVal;
        inputValInt = parseInt(inputVal);
        operate(operator, sumVal, inputVal)
        lastInput.textContent = sumVal
        operator = item.textContent;
    })
})

document.querySelectorAll(".btnNumber").forEach(item => {
    item.addEventListener("click", event => {
        var inputNumber = item.textContent;
        inputVal += inputNumber;
        newInput.textContent = inputVal;
    })
}
)

function operate(operator, sumVal, inputValInt) {
    if (operator === "+") {
        add();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "*") {
        multiply();
    } else if (operator === "/") {
        divide();
    }
}


function add() {
    var result = sumVal + inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}


function subtract() {
    var result = sumVal - inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
};

function multiply() {
    var result = sumVal * inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}

function divide() {
    var result = sumVal / inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}

function resetVal() {
    inputVal = "";
    lastOperation.textContent = ""
    newInput.textContent = inputVal;
    sumVal = 0
    lastInput.textContent = sumVal;
}

function changeDisplayValue() {
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}

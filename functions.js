/* DOM Selectors */
var newInput = document.querySelector("p#calcDisplayCurrentNumber");
var lastInput = document.querySelector("p#calcDisplayLastNumber")
var lastOperation = document.getElementById("calcDisplayLastOperation")
var resetButton = document.getElementById("reset")
var currentOperator = document.getElementById("calcDisplayCurrentOperator")
var backspace = document.getElementById("backspace")
var decimal = document.getElementById("decimal")

/* variables for later use */
var inputVal = ""
var inputValInt = 0
var sumVal = 0
var operator = "+";
var inputNumber = ""

/* execution of the number buttons */
document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener("click", event => {
        if (inputVal === "") {
            operator = item.textContent
            currentOperator.textContent = operator;
            return
        }
        newInput.textContent = inputVal;
        inputValInt = parseFloat(inputVal);
        operate(operator, sumVal, inputVal);
        lastInput.textContent = sumVal
        operator = item.textContent;
        currentOperator.textContent = operator;
    })
})

/* execution of the operator buttons */
document.querySelectorAll(".btnNumber").forEach(item => {
    item.addEventListener("click", event => {
        inputNumber = item.textContent;
        inputVal += inputNumber;
        newInput.textContent = inputVal;
    })
}
)

/* eventlisteners for the 'special' buttons */
backspace.addEventListener("click", () => {
    var inputValStr = inputVal.toString();
    var tempArray = inputValStr.split("");
    if (tempArray.length > 1) {
        var tempArrayRemove = tempArray.splice(-1, 1);
        var tempArrayToInt = parseFloat(tempArray.join(""));
        inputVal = tempArrayToInt;
        newInput.textContent = inputVal;
    } else {
        inputVal = ""
        newInput.textContent = inputVal;
        return
    }
});

decimal.addEventListener("click", () => {
    var tempArray = inputVal.split("")
    if (!tempArray.includes(".")) {
        inputVal += "."
        tempArrayToInt = parseInt(inputVal);
    }
    if (tempArray.includes(".")) {
        return
    }
})

resetButton.addEventListener("click", () => {
    inputVal = "";
    newInput.textContent = inputVal;
    sumVal = 0;
    lastInput.textContent = sumVal;
    lastOperation.textContent = "";
    operator = "+"
});

/* what operation is executed, based on selected operator */
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

/* operator functions */

function add() {
    var result = sumVal + inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = Math.round(result * 1000) / 1000;
    inputVal = "";
    newInput.textContent = inputVal;
}

function subtract() {
    var result = sumVal - inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = Math.round(result * 1000) / 1000;
    inputVal = "";
    newInput.textContent = inputVal;
}

function multiply() {
    var result = sumVal * inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = Math.round(result * 1000) / 1000;
    inputVal = "";
    newInput.textContent = inputVal;
}

function divide() {
    var result = sumVal / inputValInt;
    lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    sumVal = Math.round(result * 1000) / 1000;
    inputVal = "";
    newInput.textContent = inputVal;
}

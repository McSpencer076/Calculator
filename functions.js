var newInput = document.querySelector("p#calcDisplayCurrentNumber");
var lastInput = document.querySelector("p#calcDisplayLastNumber")
var inputVal = ""
var inputValInt = 0
var sumVal = 0
var tempVal = 0
var operator = "+";

function currentOperator(){
    
}

function nextOperator(){

}

document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener("click", event => {
        
        if (inputVal === "" || inputVal === 0) {
            return
        }
        // if (lastInput.textContent == 0) {
        //     lastInput.textContent = `${inputVal} ${operator} `;
        // } else {
        //     lastInput.textContent += `${inputVal} ${operator} `
        // }
        newInput.textContent = inputVal;
        inputValInt = parseInt(inputVal);
        operate(operator, sumVal, inputVal)
        lastInput.textContent = sumVal;
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
    } else if (operator === "=") {
        equals();
    } else if (operator === "C") {
        resetVal();
    }
}


function add() {
    var result = sumVal + inputValInt;
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}


function subtract() {
    var result = sumVal - inputValInt;
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
};

function multiply() {
    var result = sumVal * inputValInt;
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}

function divide() {
    var result = sumVal / inputValInt;
    sumVal = result;
    inputVal = "";
    newInput.textContent = inputVal;
}

function equals() {
    console.log(sumVal)
}

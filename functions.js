/* DOM Selectors */
var newInput = document.querySelector("p#calcDisplayCurrentNumber");
var lastInput = document.querySelector("p#calcDisplayLastNumber")
var lastOperation = document.getElementById("calcDisplayLastOperation")
var resetButton = document.getElementById("reset")
var currentOperator = document.getElementById("calcDisplayCurrentOperator")
var backspace = document.getElementById("backspace")
var decimal = document.getElementById("decimal")
var body = document.querySelector("body");
var header = document.querySelector(".header");
var footer = document.querySelector(".footer");
var enterButton = document.getElementById("equals")
var buttons = document.querySelectorAll('.btnNumber, .btnOperator, .btnSpecials');

/* variables for design */
var headerHeight = header.offsetHeight;
var footerHeight = footer.offsetHeight;

/* variables for operation use */
var inputVal = ""
var inputValInt = 0
var sumVal = ""
var operator = "+";
var inputNumber = ""

/* execution of the operator buttons */
document.querySelectorAll('.btnOperator').forEach(item => {
    item.addEventListener("click", event => {
        if (inputVal === "" || inputVal === ".") {
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


/* execution of the number buttons */
document.querySelectorAll(".btnNumber").forEach(item => {
    item.addEventListener("click", event => {
        inputNumber = item.textContent;
        if (inputVal !== "0" || inputNumber !== "0") {
            inputVal += inputNumber;
            newInput.textContent = inputVal;
        }
    })
}
)

/* eventlistener for design */
window.addEventListener("resize", () => {
    var bodyHeight = top.innerHeight;
    var fadeOut = bodyHeight < 640;
    header.classList.toggle("fadeOutHeader", fadeOut)
    footer.classList.toggle("fadeOutFooter", fadeOut)
    header.classList.toggle("fadeInHeader", !fadeOut)
    footer.classList.toggle("fadeInFooter", !fadeOut)
});


/* eventlisteners for the 'special' buttons */
backspace.addEventListener("click", () => {
    if (inputVal.length > 1) {
        inputVal = inputVal.substring(0, inputVal.length - 1);
    } else {
        inputVal = "";
    }
    newInput.textContent = inputVal;
});

decimal.addEventListener("click", () => {
    var tempArray = inputVal.split("");
    var hasDecimal = tempArray.includes(".");

    if (!hasDecimal) {
        inputVal += ".";
        tempArrayToInt = parseInt(inputVal);
        newInput.textContent = inputVal;
    }
});

resetButton.addEventListener("click", () => {
    inputVal = "";
    newInput.textContent = inputVal;
    sumVal = "";
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

    //check if lol + lol = hihi
    if (sumVal == "707" && inputValInt == "707") {
        hihiTjalling();
    }

    displayAnswer(result);
}

function subtract() {
    var result = sumVal - inputValInt;
    displayAnswer(result)
}

function multiply() {
    var result = sumVal * inputValInt;
    displayAnswer(result)
}

function divide() {

    //Check if divided by 0
    if (inputVal === "0") {
        infinityBeyond();
        lastOperation.textContent = "INFINITY"
        return;
    }

    var result = sumVal / inputValInt;
    displayAnswer(result);
}


/* function to display answer */
function displayAnswer(result) {
    if (sumVal === "") {
        lastOperation.textContent = ""
    } else {
        lastOperation.textContent = `${sumVal} ${operator} ${inputVal}`
    }
    sumVal = Math.round(result * 1000) / 1000;
    newInput.textContent = inputVal = "";
}

/* keyboard support */
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === 'Backspace' || key === 'c' || key === "Enter") {
        if (key === "Backspace") {
            backspace.click();
        }
        else if (key === "c"){
            resetButton.click();
        } 
        else if (key === "Enter"){
            enterButton.click();
        }    
    }
    else {
        buttons.forEach(function (button) {
            if (button.textContent === key) {
                button.click();
            }
        });
    }
});


/* weird extra functions for fun */
function infinityBeyond() {
    const imageBuzz = document.createElement("img");
    imageBuzz.src = "IMAGES/BuzzText.png";
    imageBuzz.classList.add("movingImage");
    body.appendChild(imageBuzz);
    setTimeout(() => {
        imageBuzz.remove();
    }, 2900);
}

function hihiTjalling() {
    const imageTjalling = document.createElement("img")
    imageTjalling.src = "IMAGES/HIHI.png"
    imageTjalling.classList.add("staticImage");
    body.appendChild(imageTjalling)
    setTimeout(() => {
        imageTjalling.remove();
    }, 2900);
}

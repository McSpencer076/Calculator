const calcBtnNumbers = document.querySelectorAll(".btnNumber");
const calcBtnOperators = document.querySelectorAll(".btnOperator");
const calcBtnEquals = document.getElementById("equals");
const calcBtnPlus = document.getElementById("plus");
const calcBtnMinus = document.getElementById("minus");
const calcBtnMultiply = document.getElementById("multiply");
const calcBtnDivide = document.getElementById("divide");

var calcDisplayCurrent = document.querySelector("p#calcDisplayCurrentVal");
var calcDisplayLast = document.querySelector("p#calcDisplayLastVal")
var val1 = ""
var val2 = ""
var tempVal = 0
var currentVal = ""

calcBtnPlus.addEventListener("click", add);
calcBtnMinus.addEventListener("click", subtract);
calcBtnMultiply.addEventListener("click", multiply);
calcBtnDivide.addEventListener("click", divide);


document.querySelectorAll('.btnNumber').forEach(item => {
    item.addEventListener('click', event => {
        let valStr = item.textContent;
        val1 = parseInt(valStr);
        val2 = `${val2}${val1}`
        currentVal = parseInt(val2);
        calcDisplayCurrent.textContent = currentVal;
    })
})


function add() {
    var result = currentVal + tempVal
    tempVal = result
    resetVal()
    calcDisplayLast.textContent = tempVal;
    return
};

function resetVal() {
    val1 = "";
    val2 = "";
    currentVal = 0;
    calcDisplayCurrent.textContent = 0;
    calcDisplayLast.textContent = parseInt(currentVal);
}


function subtract() {
    var result = tempVal - currentVal;
    tempVal = result;
    resetVal();
    calcDisplayLast.textContent = tempVal;
};

function multiply() {
    var result = tempVal * currentVal;
    tempVal = result;
    resetVal();
    calcDisplayLast.textContent = tempVal;
};

function divide() {
    if(currentVal == 0){
        console.log("ploep")
        calcDisplayLast.textContent = tempVal;
        return
    }else{
    var result = tempVal / currentVal;
    tempVal = result;
    resetVal();
    calcDisplayLast.textContent = tempVal;
    }
};

function equals(){

}
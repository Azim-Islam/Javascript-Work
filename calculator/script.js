const calcualtorDisplay = document.querySelector('h1');
const inputBtnList = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let waitingNextValue = false;

const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber/secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber+secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber-secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber*secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
}

function useOperator(operator){
    const currValue = Number(calcualtorDisplay.textContent);

    if (operatorValue && waitingNextValue) {
        operatorValue = operator;
        return;
    };

    if (!firstValue){
        firstValue = currValue;
    }
    else {
        // console.log(firstValue, operatorValue, currValue);
        const calculation = calculate[operatorValue](firstValue, currValue);
        calcualtorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    operatorValue = operator;
    waitingNextValue = true;
}

function sendNumberValue(number){
    // calcualtorDisplay.textContent = number
    if (waitingNextValue ) {
        calcualtorDisplay.textContent = number;
        waitingNextValue = false;
    }
    else {
        const displayValue = calcualtorDisplay.textContent;
        calcualtorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal(){
    if (!calcualtorDisplay.textContent.includes('.') && !waitingNextValue){
        calcualtorDisplay.textContent  = calcualtorDisplay.textContent + '.'
    }
}

// Reset
function resetAll(){
    calcualtorDisplay.textContent = '0';
    firstValue = 0;
    operatorValue = '';
    waitingNextValue = false;
}



inputBtnList.forEach((btn) => {
    if (btn.classList.length === 0) {
        btn.addEventListener('click', () => sendNumberValue(btn.value))
    }
    else if (btn.classList.contains('operator')) {
        btn.addEventListener('click', () => useOperator(btn.value))
    }
    else if (btn.classList.contains('decimal')) {
        btn.addEventListener('click',  addDecimal)
    }

});



clearBtn.addEventListener('click', resetAll);
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator-display');
const buttons = document.querySelector('.calculator-buttons');

buttons.addEventListener('click', (e) => {
  if(e.target.matches('button')){
    const buttonClicked = e.target;
    const dataOperation = buttonClicked.dataset.operation;
    const buttonContent = buttonClicked.textContent;
    const displayedNumber = display.textContent;
    
    if(!dataOperation){
      if(displayedNumber === '0' || displayedNumber === '+' || displayedNumber === '-' || displayedNumber === '*' || displayedNumber === '/'){
        display.textContent = buttonContent;
      } else {
        display.textContent += buttonContent;
      } 
    } 

    if(dataOperation === 'decimal'){
      display.textContent = displayedNumber + '.';
    } 

    if(dataOperation === 'add' || dataOperation === 'subtract' || dataOperation === 'multiply' || dataOperation === 'divide'){
      display.dataset.firstNumber = displayedNumber;
      display.dataset.operator = buttonContent;
      display.textContent = buttonContent;
    }

    if(dataOperation === 'clear'){
      location.reload();
    }

    if(dataOperation === 'equels'){
      const firstNumber = display.dataset.firstNumber;
      const operator = display.dataset.operator;
      const secondNumber = displayedNumber;
      
      let result = '';

      if(operator === '+'){
        result = add(firstNumber, secondNumber);
      } else if (operator === '-'){
        result = subtract(firstNumber, secondNumber);
      } else if (operator === '*'){
        result = multiply(firstNumber, secondNumber);
      } else if (operator === '/'){
        result = divide(firstNumber, secondNumber);
      }

      display.textContent = result;
    }
  }
});

function add(num1, num2){
  return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2){
  return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2){
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2){
  return parseFloat(num1) / parseFloat(num2);
}

function operate(firstnumber, operator, secondNumber){
  if(operator === '+'){
    display = add(firstnumber, secondNumber)
  } else if(operator === '-'){
    display = subtract(firstnumber, secondNumber)
  } else if(operator === '*'){
    display = multiply(firstnumber, secondNumber)
  } else if(operator === '/'){
    display = divide(firstnumber, secondNumber)
  }
}
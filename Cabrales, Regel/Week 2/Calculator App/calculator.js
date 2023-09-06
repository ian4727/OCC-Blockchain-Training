class Calculator {
    // new instance of calculator object with 2 parameters
    constructor(previousOperandTextElement, currentOperandTextElement) {
        // assigns previous and current operand text element in the object instance
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        // clears calculator when new object instance is created
        this.clear();
    }
  
    // resetting the calculator's state to its initial values
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        // there is no pending mathematical operation
        this.operation = undefined;
    }
  
    delete() {
        // converts the currentOperand to a string then removes last character using slice method, then the result is assigned back to currentOperand
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
        // if button clicked is '.' or current operand contains '.', returns early to prevenet double decimal points
        if (number === '.' && this.currentOperand.includes('.')) return;
        // essentially or else of condition above
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    // setting the mathematical operation
    chooseOperation(operation) {
        // If empty, returns early. there's no number to operate on
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        // chosen operation is assigned to 'operation' property of calc
        this.operation = operation;
        // current operand is moved to the previousOperand property
        this.previousOperand = this.currentOperand;
        // current operand is cleared
        this.currentOperand = '';
    }
  
    compute() {
        let computation;
        // convert previousOperand and currentOperand from strings to floating-point numbers
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // checks if either prev or current is not a valid number (NaN = Not a number)
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
      }
    //   after computation, result is stored in current 
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }
  
    getDisplayNumber(number) {
        // converts number to string 
        const stringNumber = number.toString();
        // splits string on decimal point then converts integer part to float
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        // extract decimal part 
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        // check if number is valid
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        // checks if there are decimal digits and displays accordingly
        if (decimalDigits != null) {
            // string interpolation = embed variables, expressions, or values within a string
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }
  
    updateDisplay() {
        // updates display 
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
  }
  
// selects doc elements and assigns them to constants
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
  
// creates new calculator object instance 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
  
// for when buttons are clicked
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
  })
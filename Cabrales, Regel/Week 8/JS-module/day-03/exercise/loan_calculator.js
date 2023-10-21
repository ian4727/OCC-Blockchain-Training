// Accessing elements
const loanForm = document.getElementById('loanForm');
const loanAmountInput = document.getElementById('loanAmount');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');
const resultDiv = document.getElementById('result');
const calculateBtn = document.getElementById('calculateBtn');

// Adding event listener for form submission
calculateBtn.addEventListener('click', calculate);

// Function to calculate the loan payment
function calculate(event) {
  event.preventDefault();
  const interest = parseFloat(interestRateInput.value) * 0.01;
  const loanAmount = parseFloat(loanAmountInput.value);
  const loanTotal = loanAmount + (loanAmount*interest);
  const loanTerm = parseInt(loanTermInput.value) * 12;
  const monthlyPayment = loanTotal / loanTerm;
  console.log(loanTotal);

  // Display the result
  resultDiv.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

 

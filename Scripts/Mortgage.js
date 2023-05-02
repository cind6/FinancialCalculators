"use strict";

// Find the HTML elements
const loanAmountInput = document.getElementById("loanAmount");
const interestRateInput = document.getElementById("interestRate");
const loanTermInput = document.getElementById("loanTerm");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const monthlyPaymentOutput = document.getElementById("monthlyPayment");
const totalInterestOutput = document.getElementById("totalInterest");


// Initialize the page
window.onload = init;

function init(){
//Add event listeners to the buttons
   calculateBtn.onclick = onCalculateBtnClicked;
   resetBtn.onclick = onResetBtnClicked;
}

function onCalculateBtnClicked(){
    console.log("clicked");
  // get the values from the input fields
  const loanAmount = parseFloat(loanAmountInput.value);
  const interestRate = parseFloat(interestRateInput.value);
  const loanTerm = parseFloat(loanTermInput.value);

  // check if any of the input values is not a number (NaN)
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid numbers for loan amount, interest rate, and loan term.");
    return; // exit the function if any input value is NaN
}

  // calculate the monthly payment
  const monthlyRate = interestRate / 1200; // Convert annual rate to monthly rate
  const numPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, - numPayments));
  

  // calculate the total interest
  const totalInterest = ((monthlyPayment * numPayments) - loanAmount).toFixed(2);

  // display the results
  monthlyPaymentOutput.value = monthlyPayment.toFixed(2);
  totalInterestOutput.value = totalInterest;
}


function onResetBtnClicked() {
    // Reset all input fields and output field
    loanAmountInput.value = "";
    interestRateInput.value = "";
    loanTermInput.value = "";
    monthlyPaymentOutput.value = "";
    totalInterestOutput.value = "";
  }
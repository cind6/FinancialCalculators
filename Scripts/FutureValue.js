"use strict";

/* 
Calculate CD Formula

A=P(1+r/n)**(nt)

A=total CD will be wort at the end of the term , including amount input
P= principal , or amount inout when you bought CD 
R= Rate or APY (Annual interest rate, expressed as decimal)EX : interest rate 1.25 APY , r is 0.0125
n= number of times that interest in compaunded every year , (n=365,interest compounded daily )
t=time , number of years until maturity date

*/

// Find the HTML elements
const depositAmountInput = document.getElementById("depositAmount");
const lengthTermInput = document.getElementById("lengthTerm");
const annualRateInput = document.getElementById("annualRate");
const futureValueOutput = document.getElementById("futureValue");
const totalInterestOutput = document.getElementById("totalInterest");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");


// Initialize the page
window.onload = init;

function init(){
//Add event listeners to the buttons
   calculateBtn.onclick = onCalculateBtnClicked;
   resetBtn.onclick = onResetBtnClicked;
}

function onCalculateBtnClicked(){
    console.log("clicked");
  // Get the input values and convert them to numbers
  const depositAmount = Number(depositAmountInput.value);
  const lengthTerm = Number(lengthTermInput.value);
  const annualRate = Number(annualRateInput.value);

  // check if any of the input values is not a number (NaN)
  if (isNaN(depositAmount) || isNaN(lengthTerm) || isNaN(annualRate)) {
    alert("Please enter valid numbers for loan amount, interest rate, and loan term.");
    return; // exit the function if any input value is NaN
  }

  // Calculate the future value and total interest earned using the formula
  const futureValue = depositAmount * (1 + (annualRate / 36500)) ** (365 * lengthTerm);
  const totalInterest = futureValue - depositAmount;

  // Display the results in the output fields
  futureValueOutput.value = futureValue.toFixed(2);
  totalInterestOutput.value = totalInterest.toFixed(2);
};

function onResetBtnClicked() {
    // Reset all input fields and output field
    depositAmountInput.value = "";
    lengthTermInput.value = "";
    annualRateInput.value = "";
    futureValueOutput.value = "";
    totalInterestOutput.value = "";
}
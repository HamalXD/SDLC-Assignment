function calculate() {
  // Getting the value of the amount
  const initialAmount = parseFloat(
    document.getElementById("initialAmount").value
  );

  // Getting the value of the interest rate
  const annualInterestRate =
    parseFloat(document.getElementById("annualInterestRate").value) / 100;
  const years = parseFloat(document.getElementById("years").value);

  // This is where the calculation happens
  if (!isNaN(initialAmount) && !isNaN(annualInterestRate) && !isNaN(years)) {
    const futureValue = initialAmount * Math.pow(1 + annualInterestRate, years);
    document.getElementById("futureValue").textContent =
      "$" + futureValue.toFixed(2);
  } else {
    document.getElementById("futureValue").textContent = "Invalid input";
  }
}

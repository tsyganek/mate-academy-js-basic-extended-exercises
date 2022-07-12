function convertCurrency(amount, exchangeRate, currencyName) {
  if (amount <= 0 || exchangeRate <= 0) {
    return `Enter valid data`;
  }

  let newCurrencyAmount = (amount * exchangeRate).toFixed(2);

  if (newCurrencyAmount - Math.round(newCurrencyAmount) === 0) {
    newCurrencyAmount = Math.round(newCurrencyAmount);
  }

  return `Give them ${newCurrencyAmount} ${currencyName}('s)`;
}

convertCurrency(1000, 0.037, "dollar");
convertCurrency(251, 0.15, "zloty");
convertCurrency(-100, -0.034, "bolivar");

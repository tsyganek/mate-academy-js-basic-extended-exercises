function calculateGuests(guestsInput) {
  if (guestsInput.length === 0 || guestsInput === "0") {
    return "not a number";
  }

  const numberFound = guestsInput.match(/\d+/);

  if (numberFound === null) {
    return "not a number";
  }

  return Number(numberFound[0]);
}

calculateGuests("I think 5 guests");
calculateGuests("Big company of 15 dudes");
calculateGuests("5");
calculateGuests("alone");
calculateGuests("0");
calculateGuests("Hello, 9.75 people");
calculateGuests("There will be 7 or 9 guys");
calculateGuests("hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk");

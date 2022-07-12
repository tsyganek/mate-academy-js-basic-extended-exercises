function isEven(number) {
  if (Math.round(number) !== number) {
    console.log(false);
    return false;
  }

  if (number % 2 === 0) {
    console.log(true);
    return true;
  }

  return false;
}

isEven(100);
isEven(0);
isEven(77);
isEven(10.2);
isEven(-2);

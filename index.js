function getCentury(year) {
  if (year <= 100) {
    console.log(1);
    return 1;
  }
  if (year % 100 === 0) {
    console.log(Math.floor(year / 100));
    return Math.floor(year / 100);
  }
  console.log(Math.ceil(year / 100));
  return Math.ceil(year / 100);
}

getCentury(2001);
getCentury(0);
getCentury(1786);
getCentury(1500);

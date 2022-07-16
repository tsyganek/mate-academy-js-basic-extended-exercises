// function getYears(amount, percent, limit) {
//   let i = 0;
//   amount = amount + (amount * percent) / 100;
//   while (amount < limit) {
//     i++;
//     amount = amount + (amount * percent) / 100;
//   }
//   console.log(i);
//   return i;
// }

function getYears(amount, percent, limit) {
  let i = 0;
  while (amount + (amount * percent) / 100 <= limit) {
    i++;
    amount = amount + (amount * percent) / 100;
    console.log(amount);
  }
  console.log(i);
  return i;
}

getYears(1600, 10, 2000);
getYears(500, 3, 550);
getYears(20000, 10, 21000);
getYears(1800, 11, 1998);

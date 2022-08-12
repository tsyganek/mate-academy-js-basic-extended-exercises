// Власникам Grand Mate Hotel подобаються роботи наших студентів. У них є ще кілька замовлень для нас.

// Напиши функцію-валідатор бронювань canTheyBook, яка приймає кількість дорослих adultsCount і дітей childrenCount та повертає true, якщо виконуються всі умови:

// номер вміщує не більше 8 персон
// має бути хоча б один дорослий
// на одного дорослого може бути не більше двох дітей
// Вважай непередані аргументи рівними 0.

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  let adults = adultsCount;
  if (adults === undefined) {
    adults = 0;
  }

  let children = childrenCount;
  if (children === undefined) {
    children = 0;
  }

  if (adults + children <= 8 && adults >= 1 && children / adults <= 2) {
    console.log("true");
    return true;
  }
  console.log("false");
  return false;
}

canTheyBook(0, 2);
canTheyBook(2, 4);
canTheyBook(9);

// На складах порядок. Роботи стоять без роботи. Проведемо інвентаризацію?

// На кожній коробці є 1 символ, що позначає її тип. Потрібно навчити роботів і рахувати їх.

// Створи функцію countBoxes, яка приймає рядок boxes, де кожен символ - це тип однієї з коробок на складі. Порахуй, скільки коробок кожного типу є на складі та поверни об'єкт зі звітом.

function countBoxes(boxes) {
  let obj = {};
  for (const box of boxes) {
    if (!obj[box]) {
      obj[box] = 1;
    } else {
      obj[box]++;
    }
  }
  console.log(obj);
  return obj;
}

// return object;

countBoxes("aabca");
countBoxes("aaaaca31");
countBoxes("");
countBoxes("a");
countBoxes("aA");

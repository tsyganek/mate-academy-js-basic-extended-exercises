// Вночі у головного інженера хтось поцупив зі столу креслення. Тепер ми не знаємо, які дані потрібні, щоб роботи працювали коректно. Пропоную зловити одного робота, який зараз прибирає у коридорі, підключитися до його терміналу і дізнатися, які поля нам потрібні для нових роботів.

// Створи функцію getRobotSchema, яка приймає об'єкт robot і повертає його схему - об'єкт з тими саме ключами, а як значення використай типи даних.

// Приклад:

function getRobotSchema(robot) {
  let obj = {};
  for (const [key, value] of Object.entries(robot)) {
    obj[key] = typeof value;
  }
  console.log(obj);
  return obj;
}

const robot = {
  version: 16,
  name: "Cleaner 3000",
  released: true,
  creator: { name: "Vlad" },
};

getRobotSchema(robot);

// {
//   version: 'number',
//   name: 'string',
//   released: 'boolean',
//   author: 'object',
// }

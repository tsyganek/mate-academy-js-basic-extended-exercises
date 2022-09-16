// Mate Robot Factory вже випустила не одну сотню роботів різних конфігурацій, розмірів та видів. Інформація про кожного робота зберігається у вигляді об'єкта з його характеристиками.

// Давай напишемо функцію compareRobots, яка приймає двох роботів та повертає true, тільки якщо всі характеристики обох роботів збігаються (порядок властивостей не важливий, лише ключі та значення).

// Примітки:

// у кожного робота є унікальний серійний номер (не враховуємо під час порівняння)
// властивості роботів не можуть мати значення undefined і NaN

function compareRobots(robot1, robot2) {
  const robot1Keys = Object.keys(robot1);
  console.log(robot1Keys);
  const robot2Keys = Object.keys(robot2);
  console.log(robot2Keys);

  if (robot1Keys.length !== robot2Keys.length) {
    console.log("false1");
    return false;
  }

  for (let i = 0; i < robot1Keys.length; i++) {
    if (robot1Keys[i] !== robot2Keys[i]) {
      console.log("false0");
      return false;
    }
  }

  // for (key of robot1Keys) {
  //   if (robot1[key] !== robot2[key]) {
  //     console.log(robot1[key]);
  //     console.log(robot2[key]);
  //     console.log("false2");
  //     return false;
  //   }
  // }

  let robot1Values = Object.values(robot1);
  let robot2Values = Object.values(robot2);

  for (let i = 1; i < robot1Values.length; i++) {
    if (robot1Values[i] !== robot2Values[i]) {
      console.log("false4");
      return false;
    }
  }

  console.log(true);
  return true;
}

const charlie = { serialNo: 1, chipVer: 12 };

const lordy = { serialNo: 2, chipVer: 12 };
compareRobots(charlie, lordy); // true

const paul = { serialNo: 3, chipVer: 15 };
compareRobots(paul, charlie); // false

const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
compareRobots(mike, charlie); // false

const max = { serialNo: 5, engineVer: 12 };
compareRobots(max, charlie); // false

const steve = { serialNo: 6 };
compareRobots(steve, charlie); // false

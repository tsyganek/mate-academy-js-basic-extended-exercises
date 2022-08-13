// Ironman триатлон - це одна з серій триатлонових перегонів, на довгі дистанції. Вона складається з плавання (3,86 км), їзди на велосипеді (180,25 км) і марафону (42,2 км) і це все за 17 годин, без зупинок, без відпочинку. Повір - це боляче і важко.

// Твоє завдання - створити функцію getTriathlonDistance, яка приймає число distance, що представляє відстань, яку атлет вже подолав.

// Функція повинна визначити, на якому етапі триатлону знаходиться спортсмен залежно від distance, і повернути відповідне повідомлення.

// Поверни одне зі значень:

// Якщо distance = 0 - рядок Starting Line... Good Luck!.
// Якщо distance більша за 0 і менша за 3.86 - об'єкт з ключем swim, значенням якого є залишок до кінця дистанції (що означає, що атлет зараз пливе).
// Якщо distance дорівнює або більша за 3.86 і менша за 184.11 - об'єкт з ключем bike, значенням якого є залишок до кінця дистанції (що означає, що атлет зараз їде на велосипеді).
// Якщо distance дорівнює або більша за 184.11 і менша за 226.31 - об'єкт з ключем run, значенням якого є залишок до кінця дистанції (що означає, що атлет зараз біжить марафон).
// Якщо distance дорівнює або більша за 226.31 - рядок You\'re done! Stop running! (що означає, що атлет завершив тріатлон).
// Примітка: відстані мають бути округлені до 2 знаків після коми.

function getTriathlonDistance(distance) {
  const totalDistance = 226.31;
  const tri1 = {
    swim: `${Math.round((totalDistance - distance) * 100) / 100} to go!`,
  };
  const tri2 = {
    bike: `${Math.round((totalDistance - distance) * 100) / 100} to go!`,
  };
  const tri3 = {
    run: `${Math.round((totalDistance - distance) * 100) / 100} to go!`,
  };

  if (distance === 0) {
    return "Starting Line... Good Luck!";
  } else if (distance > 0 && distance < 3.86) {
    return tri1;
  } else if (distance >= 3.86 && distance < 184.11) {
    return tri2;
  } else if (distance >= 184.11 && distance < totalDistance) {
    return tri3;
  }

  return "You're done! Stop running!";
}

getTriathlonDistance(39);
getTriathlonDistance(2.05);
getTriathlonDistance(200.31);
getTriathlonDistance(0);
getTriathlonDistance(226.31);

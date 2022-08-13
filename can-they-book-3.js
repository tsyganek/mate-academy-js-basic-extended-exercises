// Нещодавно в Grand Mate Hotel добудували новий корпус з 4-місними номерами, і власники знову звернулися до нас по допомогу.

// Потрібно створити функцію recommendRoom для сайту, яка буде автоматично рекомендувати потрібну кімнату для введених параметрів adultsCount, childrenCount, babiesCount.

// Є два види кімнат:

// small room для 4 осіб
// big room для 8 осіб
// Не забувай про опцію extra bed - додаткове ліжко для немовляти. Воно доступне як для номерів на 4 людини, так і для номерів на 8 осіб.

// Можеш не перейматися за валідність даних - canTheyBook валідатор вже перевірив їх. Просто поверни правильний рядок для заданих параметрів.

function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {
  if (adultsCount + childrenCount + babiesCount <= 4) {
    console.log("small room");
    return "small room";
  } else if (adultsCount + childrenCount <= 8 && babiesCount === 0) {
    console.log("big room");
    return "big room";
  } else if (
    adultsCount + babiesCount + childrenCount <= 5 &&
    babiesCount !== 0
  ) {
    console.log("small room + extra bed");
    return "small room + extra bed";
  } else if (
    adultsCount + babiesCount + childrenCount <= 9 &&
    babiesCount !== 0
  ) {
    console.log("big room + extra bed");
    return "big room + extra bed";
  }
}

recommendRoom(2, 2, 1);
recommendRoom(2, 1, 1);
recommendRoom(3, 2);
recommendRoom(3, 0, 2);
recommendRoom(7, 0, 2);
recommendRoom(8);

// Час оновлювати програмне забезпечення! Інженери випустили оновлення для застарілих версій роботів. Потрібно вишикувати всіх роботів і перевірити у кого з них застаріле ПЗ.

// Функція getOutdated приймає масив роботів robots і повертає масив індексів тих роботів, у яких coreVersion менший за newVersion.

function getOutdated(robots, newVersion) {
  let outdatedRobotsIndexes = [];
  for (let i = 0; i < robots.length; i++) {
    if (robots[i].coreVersion < newVersion) {
      outdatedRobotsIndexes.push(i);
    }
  }
  console.log(outdatedRobotsIndexes);
  return outdatedRobotsIndexes;
}

const robots = [
  { coreVersion: 4 },
  { coreVersion: 7 },
  { coreVersion: 18 },
  { coreVersion: 3 },
  { coreVersion: 15 },
  { coreVersion: 8 },
  { coreVersion: 5 },
  { coreVersion: 6 },
];

getOutdated(robots, 5);
getOutdated(robots, 4);
getOutdated(robots, 19);
getOutdated(robots, 2);

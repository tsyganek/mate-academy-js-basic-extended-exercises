// Справи готелю пішли на краще. У Mate Grand Hotel більше не повторюються випадки, коли банда з 20 дітей забронювала 8-місний номер.

// Власники знову звернулися до нас. У них є нова послуга: Екстра-ліжко для малюка до 2-х років. Тепер номер вміщує до 8 дорослих + 1 малюк.

// Потрібно оновити функцію canTheyBook так, щоб вона приймала третій аргумент babiesCount та трохи змінити умови:

// номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
// має бути мінімум один дорослий;
// на одного дорослого може бути не більше 2-ох дітей АБО однієї дитини та одного малюка;
// малюків можна розмістити на ліжках для дорослих, тому в номері може бути більше ніж один малюк (якщо виконуються інші умови).
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  if (
    adults + children <= 8 &&
    adults >= 1 &&
    (children + babies) / adults <= 2 &&
    adults + children + babies <= 9
  ) {
    console.log("true");
    return true;
  }

  console.log("false");
  return false;
}

canTheyBook(2, 3, 1);
canTheyBook(8, 0, 1);
canTheyBook(4, 2, 3);
canTheyBook(0, 1, 1);
canTheyBook(9);
canTheyBook(8, 1);
canTheyBook(2, 2, 3);
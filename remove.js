// У нас більше немає потреби зберігати дані про вік наших користувачів, тому ми вирішили видалити вік з бази у два етапи.

// Потрібно видалити поле age з бази даних people в усіх, в кого gender дорівнює female. Повертати з функції нічого не потрібно.

//   const people = [
//     { name: 'Emma', gender: 'female', age: 19 },
//     { name: 'Avram', gender: 'male', age: 41 },
//   ];

// Видаляємо вік у тих людей, у кого поле 'gender'
// має значення 'female' та отримуємо:

//   const people = [
//     { name: 'Emma', gender: 'female' },
//     { name: 'Avram', gender: 'male', age: 41 },
//   ];

function removeFemaleAges(people) {
  for (const person of people) {
    if (person.gender === "female") {
      delete person.age;
    }
  }
}

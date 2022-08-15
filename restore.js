function restoreNames(users) {
  for (let user of users) {
    if (users.firstName === undefined) {
      const arr = user.fullName.split(" ");
      user.firstName = arr[0];
    }
  }
}

const users = [
  {
    firstName: undefined,
    lastName: "Holy",
    fullName: "Jack Holy",
  },
  {
    lastName: "Adams",
    fullName: "Mike Adams",
  },
];

restoreNames(users);

// users ===
//   [
//     {
//       firstName: "Jack",
//       lastName: "Holy",
//       fullName: "Jack Holy",
//     },
//     {
//       firstName: "Mike",
//       lastName: "Adams",
//       fullName: "Mike Adams",
//     },
//   ];

// function getTask(weekday) {
//   if (weekday === "monday") {
//     return "Write a new module for the program";
//   } else if (weekday === "tuesday") {
//     return "Test the module and find bugs";
//   } else if (weekday === "wednesday") {
//     return "Write a new module for the program";
//   } else if (weekday === "thursday") {
//     return "Test the module and find bugs";
//   } else if (weekday === "friday") {
//     return "You need to meet the boss today";
//   } else if (weekday === "saturday") {
//     return "Spend the evening with your friends";
//   } else if (weekday === "sunday") {
//     return "Go to the movies in the evening";
//   } else {
//     return "Entered the wrong day of the week";
//   }
// }

function getTask(weekday) {
  switch (weekday) {
    case "monday":
      return "Write a new module for the program";
    case "tuesday":
    case "thursday":
      return "Test the module and find bugs";
    case "wednesday":
      return "Write a new module for the program";
    case "friday":
      return "You need to meet the boss today";
    case "saturday":
      return "Spend the evening with your friends";
    case "sunday":
      return "Go to the movies in the evening";
    default:
      return "Entered the wrong day of the week";
  }
}

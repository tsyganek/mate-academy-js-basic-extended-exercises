// Якщо поглянути на банківську карту можна помітити на ній 8-10 значний код. Що означають ці числа? Перші 4 числа означають платіжну систему твоєї карти.

// Напиши функцію getPaymentSystem, яка приймає число number і повертає назву платіжної системи.

// Наприклад, якщо номер карти починається з:

// 34, 37 - це платіжна система American Express
// 4 - це VISA
// 51, 52, 53, 54, 55 - це MasterCard
// 63, 67 - це Maestro
// у всіх інших випадках — це unknown payment system
// Примітка: в цій задачі не можна користуватися if / else та тернарними операторами.

function getPaymentSystem(number) {
  switch (number) {
    case 4:
      return "Visa";
    case 34:
    case 37:
      return "American Express";
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return "MasterCard";
    case 63:
    case 67:
      return "Maestro";
    default:
      return "unknown payment system";
  }
}

console.log(getPaymentSystem(4));
console.log(getPaymentSystem(37));
console.log(getPaymentSystem(1234));

// Завдання номер 1
// написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student1 = {
//     name: 'Анна',
//     Speciality: 'Інформатика',
//     GPA: 4.5,
//     MissedClasses: 2,
//     bringInfo: function () {
//         console.log(`Ім'я: ${this.name}, Спеціальність: ${this.Speciality}, Середній бал: ${this.GPA}, Кількість пропущених занять: ${this.MissedClasses}`);
//     }
// };
// student1.bringInfo.call(student1);

// const student2 = {
//     name: 'Артур',
//     speciality: 'Інженер',
//     gpa: 4.8,
//     missedClasses: 3,
//     bringInfo: function () {
//         console.log(`Ім'я: ${this.name}, Спеціальність: ${this.speciality}, Середній бал: ${this.gpa}, Кількість пропущених занять: ${ this.missedClasses}`)
//     }
// };
// student2.bringInfo.apply(student2);

// const student3 = {
//     name: 'Валерія',
//     speciality: 'Бухгалтер',
//     gpa: 4.3,
//     missedClasses: 1,
//     bringInfo: function () {
//         console.log(`Ім'я: ${this.name}, Спеціальність: ${this.speciality}, Середній бал: ${this.gpa}, Кількість пропущених занять: ${ this.missedClasses}`)
//     }
// };
// student3.bringInfo.bind(student3)();

// Завдання номер 2
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function htmlInfo() {
//     alert('HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.')
// }
// function cssInfo() {
//     alert('CSS - мова за допомогою якої оформлюються усі веб сторінки.')
// }
//document.querySelector('#html').addEventListener("click", htmlInfo);
//document.querySelector('#css').addEventListener("click", cssInfo);


//Завдання номер 3
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const totalPrice = (name, price, quantity) => {
//     return console.log(`За цю кількість ${name} загальна ціна становить ${price * quantity}`)
// }

// totalPrice('banana', 30, 4.5);
// totalPrice('cherry', 58, 1.3);
// totalPrice('orange', 89, 3.4);


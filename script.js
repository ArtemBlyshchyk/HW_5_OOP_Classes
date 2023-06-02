// TASK №1=====================================================================================================
// Напишіть клас Круг та реалізуйте функціонал:
// -	Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об’єкт;
// -	Визначте метод отримання довжини кола для поточного об’єкта (L = 2 * П * R);
// -	Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// -	Визначте метод отримання об’єкта-кола, який повертає копію поточного об’єкта;
// -	 Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об’єкт кола із заданими параметрами;
// -	Визначте метод перевірки попадання крапки до кола;
// -	Визначте метод перетворення поточного об’єкта на символьний рядок (toString()).

// SOLUTION
// // Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об’єкт;
// class Circle {
//   constructor(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;

//     // this.x = parseFloat(
//     //   prompt("Please, enter the X coordinate of the center of the circle:")
//     // );
//     // this.y = parseFloat(
//     //   prompt("Please, enter the Y coordinate of the center of the circle:")
//     // );
//     // this.radius = parseFloat(prompt("Please, enter the radius of the circle:"));
//   }
//   // -	Визначте метод отримання довжини кола для поточного об’єкта (L = 2 * П * R);
//   circleLength() {
//     return 2 * Math.PI * this.radius;
//   }
//   // -	Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
//   static lengthByRadius(radius) {
//     return 2 * Math.PI * radius;
//   }
//   // -	Визначте метод отримання об’єкта-кола, який повертає копію поточного об’єкта;
//   copyObjectCircle() {
//     return new Circle(this.x, this.y, this.radius);
//   }
//   // -   Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об’єкт кола із заданими параметрами;
//   static coordinateCenter(x, y, radius) {
//     return new Circle(x, y, radius);
//   }
//   // -	Визначте метод перевірки попадання крапки до кола;
//   checkPoint(x, y) {
//     let distance = Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2);
//     return distance <= Math.pow(this.radius, 2);
//   }
//   // Визначте метод перетворення поточного об’єкта на символьний рядок (toString()).
//   toString() {
//     return `Circle: coordinates of the center(${this.x}, ${this.y}), radius(${this.radius})`;
//   }
// }
// const circle = new Circle(1, 1, 4);
// console.log(circle); // Result: Circle {x: 1, y: 1, radius: 4}

// console.log(circle.circleLength()); // Result: 25.132741228718345
// console.log(Circle.lengthByRadius(5)); // Result: 31.41592653589793

// const circle2 = circle.copyObjectCircle();
// console.log(circle2.toString()); // Result: Circle: center(1, 1), radius(4)

// console.log(Circle.coordinateCenter(2, 2, 6)); // Result: Circle {x: 2, y: 2, radius: 6}
// console.log(circle.checkPoint(4, 4)); // Result: false
// console.log(circle.checkPoint(2, 3)); // Result: true
// console.log(circle.toString()); // Result: Circle: coordinates of the center(1, 1), radius(4)

// TASK №2=====================================================================================================
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
// let mentor = {
// 	course: “JS fundamental”,
// 	duration: 3,
// 	direction: “web-development”
//          };
// propsCount(mentor);  //3

// Solution
// function propsCount(currentObject) {
//   console.log(Object.keys(currentObject).length);
// }
// // Check of works
// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };
// propsCount(mentor); //3

// Second variant****************************************************************************************
// let currentObject = new Object();
// function propsCount(currentObject) {
//   let counter = 0;
//   for (let key in currentObject) {
//     counter++;
//   }
//   return `Amount of the properties: ${counter}`;
// }

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };

// console.log(propsCount(mentor)); // Amount of the properties: 3

// TASK №3=====================================================================================================
// -	Створіть клас Person, у якого конструктор приймає параметри name і surname, а також містить метод showFullName(), який виводить у консоль ім’я і прізвище особи.
// -	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// -	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише імя, прізвище, але і по-батькові (midleName) студента.
// -	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.

// Приклад результату:
// const stud1 = new Student(“Petro”, “Petrenko”, 2019);
// console.log(stud1.showFullName(“Petrovych”));     //  Petrenko Petro Petrovych
// console.log(“Current course: ” + stud1.showCourse());  //  Current course: 4

// SOLUTION

// // -	Створіть клас Person, у якого конструктор приймає параметри name і surname, а також містить метод showFullName(), який виводить у консоль ім’я і прізвище особи.
// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   showFullName() {
//     console.log(`Name: ${this.name}, surname: ${this.surname}`);
//   }
// }
// // const person = new Person("Artem", "Blyshchyk");
// // person.showFullName();
// // -	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   // -	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише імя, прізвище, але і по-батькові (midleName) студента.
//   showFullName(midleName) {
//     return `Name: ${this.name}, middle name: ${midleName}, surname: ${this.surname}`;
//   }
//   // -	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
//   showCourse() {
//     const currentYear = new Date().getFullYear();
//     // console.log(currentYear);
//     let course = currentYear - this.year + 1;
//     if (course < 1 || course > 6) {
//       return "You are not a student!";
//     }
//     return course;
//   }
// }

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); //  Name: Petro, middle name: Petrovych, surname: Petrenko
// console.log("Current course: " + stud1.showCourse()); //  Current course: 5

// TASK №4=====================================================================================================
// 1. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// 2. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів.

// SOLUTION

// class Marker {
//   constructor(color, amountPercentage) {
//     this.color = color;
//     this.amountPercentage = amountPercentage;
//   }
//   print(textColor) {
//     let printText = "";
//     for (let i = 0; i < textColor.length; i++) {
//       if (textColor[i] !== " " && this.amountPercentage > 0) {
//         printText += textColor[i];
//         this.amountPercentage -= 0.5;
//       } else {
//         printText += " ";
//       }
//     }
//     console.log("%c" + printText, `Color: ${this.color}`);
//   }
// }

// const marker = new Marker("red", 100);
// marker.print("Hello, how are you?");
// console.log(
//   "The rest ink in the marker:" + " " + marker.amountPercentage + "%"
// );
// // 2. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// // Продемонструвати роботу написаних методів.
// class RefillMarker extends Marker {
//   refill(inkAmount) {
//     if (inkAmount > 0) {
//       this.amountPercentage = Math.min(this.amountPercentage + inkAmount, 100);
//       console.log(
//         "Your level ink in the marker after refilled:" +
//           " " +
//           this.amountPercentage +
//           "%"
//       );
//     } else {
//       console.log("You have not refilled your marker!");
//     }
//   }
// }

// const refilledMarker = new RefillMarker("blue", 60);
// refilledMarker.print("Hello again, I come back!");
// console.log(
//   "The rest ink in the marker:" + " " + refilledMarker.amountPercentage
// );
// refilledMarker.refill(10);

// TASK №5=====================================================================================================
// Створіть клас Worker, який буде мати конструктор, який приймає наступні властивості: fullName(ім’я та прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
// 1)	клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата – це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
// 2)	додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3)	додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести на екран.
// 4)	Вивести значення зарплати з новим experience.
// 5)	Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі: worker_fullName: salary_value.
// 6)	Реалізувати динамічне сортування для будь-якої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker(“John Johnson”, 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log(“New experience: ” + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log(“New experience: ” + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker(“Tom Tomson”, 48, 22);
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// …………………..
// New experience: 1.5
// Tom Tomson salary: 1584

// Andy Ander
// Andy Ander salary: 667
// …………………..
// New experience: 1.5
// Andy Ander salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

// SOLUTION

// Створіть клас Worker, який буде мати конструктор, який приймає наступні властивості: fullName(ім’я та прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  // 1)	клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата – це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    console.log(
      "Worker:" + " " + this.fullName + " " + "salary:" + " " + salary
    );
  }
  // 2)	додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
  #experience = 1.2;
  showSalaryWithExperience() {
    let salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    console.log(
      "Worker:" +
        " " +
        this.fullName +
        " " +
        "salary with experience coefficient:" +
        " " +
        salaryWithExp
    );
  }
  // 3)	додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести на екран.
  get getExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.getExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.getExp);
worker1.showSalaryWithExperience();
console.log("\n");
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.getExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.getExp);
worker1.showSalaryWithExperience();
console.log("\n");
let worker3 = new Worker("Andy Ander", 10, 30);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.getExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.getExp);
worker3.showSalaryWithExperience();

console.log("\nSorted salary:");
let workers = [worker1, worker2, worker3];
workers.sort((a, b) => {
  return a.getExp - b.getExp;
});
console.log(workers); // Як зробити щоб правильно фільтрувало?

for (let worker of workers) {
  worker.showSalaryWithExperience();
}

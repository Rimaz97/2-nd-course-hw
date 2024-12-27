// Задание 1

const getSmallerNumber = (num1, num2) => {
  // Сравнение двух чисел с помощью тернарного оператора.
  return num1 < num2 ? num1 : num2;
};
// Пример использования функции.
let result = getSmallerNumber(8, 4);
console.log(result); // Вывод: 4

// Задание 2

const checkEvenOdd = (num) => {
  // Проверка числа на чётность с помощью оператора остатка.
  if (num % 2 === 0) {
      // Если остаток от деления на 2 равен нулю, возвращаем строку 'Число четное'.
      return 'Число четное';
  } else {
      // Иначе возвращаем строку 'Число нечетное'.
      return 'Число нечетное';
  }
};
// Пример использования функции.
let result = checkEvenOdd(4);
console.log(result); // Вывод: Число четное

// Задача 3

// Функция, которая принимает число и выводит в консоль квадрат этого числа:
function squareNumber(num) {
  console.log(num * num);
}
// Пример использования функции:
squareNumber(5); // Вывод в консоль: 25
// Функция, которая возвращает квадрат числа значением:
function getSquareOfNumber(num) {
  return num * num;
}
// Пример использования функции:
let result = getSquareOfNumber(3); // Результат функции присваивается переменной result
console.log(result); // Вывод в консоль: 9

// Задача 4

// Функция, которая спрашивает у пользователя, сколько ему лет
function askAge() {
  // Считываем возраст пользователя с клавиатуры
  let age = Number(prompt("Введите ваш возраст"));

  if (age < 0) {
      // Если пользователь ввёл отрицательное число
      console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
      // Если возраст от 0 до 12
      console.log("Привет, друг!");
  } else {
      // Если возраст больше или равен 13
      console.log("Добро пожаловать!");
  }
}

askAge(); // Вызываем функцию

// Задача 5

function multiplyNumbers(num1, num2) {
  // Проверка, являются ли оба параметра числами
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
  } else {
      // Если оба параметра — числа, то возвращаем их произведение
      return num1 * num2;
  }
}
// Пример использования функции
let result = multiplyNumbers('5', '3');
console.log(result); // Вывод: 15

// Задача 6

const cubeNumber = (n) => {
  // Запрос числа у пользователя
  let userInput = Number(prompt('Введите число'));

  if (typeof userInput === 'number' && !isNaN(userInput)) {
      // Проверка, является ли введённое значение числом
      const result = `${userInput} в кубе равняется ${userInput * userInput * userInput}`;
      console.log(result);
      return result;
  } else {
      // Если значение не является числом, возвращаем строку с сообщением об ошибке
      console.log('Переданный параметр не является числом');
  }
};
// Пример использования функции
for (let i = 0; i <= 10; i++) {
  cubeNumber(i);
}

// Задача 7

// Определение круга как объекта с методами для вычисления площади и периметра
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function() {
  return Math.PI * this.radius * this.radius;
};

Circle.prototype.getPerimeter = function() {
  return 2 * Math.PI * this.radius;
};
// Создание двух объектов circle1 и circle2
let circle1 = new Circle(5);
let circle2 = new Circle(7);
// Пример использования методов объектов
console.log("Площадь первого круга: " + circle1.getArea());
console.log("Периметр первого круга: " + circle1.getPerimeter());

console.log("Площадь второго круга: " + circle2.getArea());
console.log("Периметр второго круга: " + circle2.getPerimeter());
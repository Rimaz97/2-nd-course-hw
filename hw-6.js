// Задача 1
let one = [1, 5, 4, 10, 0, 3];
let i = 0; // Инициализируем переменную i, которая будет использоваться для перебора элементов массива

while (one[i] !== 10) { //перебора элементов массива, пока значение текущего элемента не равно 10
  console.log(one[i]); // Выводим текущий элемент массива в консоль
  i++; // Увеличиваем значение переменной i на 1
}

// Задача 2

let two = [1, 5, 4, 10, 0, 3];

console.log(two.indexOf(4)); // Выводим индекс числа 4

// Задача 3

let three = [1, 3, 5, 10, 20];

console.log(three.join(' ')); // Выводим элементы массива, разделённые пробелом

// Задача 4

let four = [];

for (let i = 0; i < 3; i++) {
  four[i] = [];
  for (let j = 0; j < 3; j++) {
    four[i][j] = 1;
  }
}

console.log(four); // Выводим созданный многомерный массив

// Задача 5

// Имеем массив
let five = ['1', '1', '1'];

// Используем метод push() для добавления
five.push('2', '2', '2');

// Выводим обновленный массив
console.log(five);

// Задача 6

let six = [9, 8, 7, 'a', 6, 5];

// Отсортируем массив
six = six.sort((a, b) => a - b);

// Удалим букву 'a' из массива
six = six.filter(item => item !== 'a');

console.log(six); // Выводим отсортированный и отфильтрованный массив

// Задача 7

let seven = [9, 8, 7, 6, 5];
let userInput = prompt("Введите число");

if (seven.includes(userInput)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// Задача 8

let string = 'abcdef';

// Преобразуем строку в массив символов
let splitString = string.split("");

// // Используем метод reverse() для изменения порядка элементов массива
splitString.reverse();

// // Конвертируем массив обратно в строку и выводим результат
let joinedText = splitString.join("");
console.log(joinedText); // Выводим результат в консоль

// Задача 9

let Nine = [[1, 2, 3], [4, 5, 6]];

// Используем оператор spread для объединения элементов массивов
let result = [...Nine];

console.log(result); // Выводим результат в консоль

// Задача 10

let ten = [4, 2, 8, 3, 6, 1, 5, 9, 7]; // Пример массива с числами от 1 до 10

for (let i = 0; i < ten.length; i++) {
  if (i < ten.length - 1) { // Проверяем, есть ли следующий элемент
    console.log(ten[i] + ten[i + 1]);
  } else {
    // Для последнего элемента выводим только текущий элемент
    console.log(ten[i]);
  }
}

// Задача 11

function squareEleven(numbers) {
  return numbers.map(number => number * number);
}

// Пример использования функции
const inputEleven = [1, 2, 3, 4, 5];
const outputEleven = squareEleven(inputEleven);

console.log(outputEleven); // Выводим результат в консоль

// Задача 12

function twelve(words) {
  return words.map(word => word.length);
}

// Пример использования функции
const inputTwelve = ["apple", "banana", "cherry"];
const outputTwelve = twelve(inputTwelve);

console.log(outputTwelve); // Выводим результат в консоль

// Задача 13

function thirteen(numbers) {
  return numbers.filter(number => number < 0);
}

// Пример использования функции
const inputThirteen = [1, -2, 3, -4, 5];
const outputThirteen = thirteen(inputThirteen);

console.log(outputThirteen); // Выводим результат в консоль

// Задача 14

// Генерация исходного массива из 10 случайных чисел от 0 до 10
const originalFourteen = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

// Создание нового массива с четными значениями
const evenNumbersFourteen = originalFourteen.filter(number => number % 2 === 0);

console.log("Исходный массив:", originalFourteen);
console.log("Массив с четными числами:", evenNumbersFourteen);

// Задача 15

let fifteen = [];

// Генерация массива из 6 случайных чисел от 1 до 10
for (let i = 0; i < 6; i++) {
  fifteen[i] = Math.floor(Math.random() * 10) + 1;
}

// Нахождение среднего арифметического
const average = fifteen.reduce((a, b) => a + b, 0) / fifteen.length;

// Вывод результата в консоль
console.log("Среднее арифметическое:", average);
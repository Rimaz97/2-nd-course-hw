// Задача 1

// Создаём переменную с исходной строкой.
let myString = 'js';

// Применяем метод toUpperCase() к строке myString.
myString = myString.toUpperCase();

// Выводим результат на экран.
console.log(myString);

// Задача 2

// Функция, которая принимает массив строк и строку.
function filterArray(array, string) {
    // Создаём новый массив для хранения результатов.
    let result = [];
  
    // Проходимся по каждому элементу исходного массива.
    for (let i = 0; i < array.length; i++) {
      // Проверяем, начинается ли текущий элемент с переданной строки.
      if (array[i].toUpperCase().startsWith(string.toUpperCase())) {
        // Если да, добавляем его в результирующий массив.
        result.push(array[i]);
      }
    }
  
    // Возвращаем результирующий массив.
    return result;
}
  
// Пример использования функции.
let originalArray = ['JavaScript', 'Java', 'C++','Python', 'Ruby'];
let searchString = 'ja';

console.log(filterArray(originalArray, searchString));

// Задача 3

// Округление числа до меньшего целого с использованием Math.floor()
console.log("Округление до меньшего целого: " + Math.floor(32.58884));

// Округление числа до большего целого с использованием Math.ceil()
console.log("Округление до большего целого: " + Math.ceil(32.58884));

// Округление числа до ближайшего целого с использованием Math.round()
console.log("Округление до ближайшего целого: " + Math.round(32.58884));

// Задача 4

// Нахождение минимального значения с использованием Math.min()
console.log("Минимальное значение: " + Math.min(52, 53, 49, 77, 21, 32));

// Нахождение максимального значения с использованием Math.max()
console.log("Максимальное значение: " + Math.max(52, 53, 49, 77, 21, 32));

// Задача 5

// Функция, которая выводит в консоль случайное число от 1 до 10
function getRandomNumber() {
    // Генерируем случайное число с помощью Math.random()
    let randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // Выводим случайное число в консоль
    console.log("Случайное число: " + randomNumber);
}

// Вызываем функцию для генерации и вывода случайного числа
getRandomNumber();

// Задача 6

// Функция, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа
function getRandomArray(n) {
    // Создаём массив для хранения случайных чисел
    let array = [];
  
    // Генерируем случайные числа от 0 до n с помощью Math.random() и добавляем их в массив
    for (let i = 0; i < n / 2; i++) {
      array.push(Math.floor(Math.random() * n));
    }
  
    // Возвращаем массив случайных чисел
    return array;
}

// Пример использования функции
let number = 10;
console.log("Массив случайных чисел: " + getRandomArray(number));

// Задача 7

// Функция, которая принимает два целых числа и возвращает случайное число в этом диапазоне
function getRandomNumberInRange(min, max) {
    // Генерируем случайное число с помощью Math.random()
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Возвращаем случайное число
    return randomNumber;
}

// Пример использования функции
let min = 5;
let max = 20;
console.log("Случайное число в диапазоне от " + min + " до " + max + " = " + getRandomNumberInRange(min, max));

// Задача 8

// Вывод текущей даты в консоль с использованием объекта Date
console.log(new Date());

// Задача 9

// Создание переменной currentDate, хранящей текущую дату
let currentDate = new Date();

// Вывод текущей даты в консоль
console.log("Текущая дата: " + currentDate);

// Получение количества дней в текущем месяце и году с помощью getDate()
let daysInMonth = currentDate.getDate();
let monthDays = 30; // Предполагаем, что в месяце 30 дней для упрощения примера
if (currentDate.getMonth() === 1 || currentDate.getMonth() === 2) {
  monthDays = 28; // Учитываем февраль високосного года
} else if (currentDate.getMonth() > 2 && currentDate.getMonth() < 12) {
  // Для других месяцев используем значение по умолчанию 30
}

// Установка даты, которая наступит через 73 дня
currentDate.setDate(daysInMonth + monthDays + 73);

// Выводим дату, которая наступит через 73 дня после текущей
console.log("Дата, которая наступит через 73 дня: " + currentDate);

// Задача 10

// Функция, которая принимает дату и возвращает её в указанном формате
function formatDate(date) {
    // Получение отдельных компонентов даты
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    // Преобразование месяца из числового индекса в название на русском языке
    const months = [
      'января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря'
    ];
    let monthName = months[monthIndex];
  
    // Определение дня недели и его названия на русском
    let weekday = date.toLocaleString('ru', {weekday: 'long'});
  
    // Формирование строки с датой
    let dateString = `Дата: ${day} ${monthName} ${year} — сегодня ${weekday}.`;
  
    // Аналогичные действия для времени
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeString = `${hours}:${minutes}:${seconds}`;
  
    // Объединение строк с датой и временем
    return `${dateString} Время: ${timeString}`;
}

// Пример использования функции
let todayDate = new Date();
console.log(formatDate(todayDate));
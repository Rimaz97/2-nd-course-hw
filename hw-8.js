// Задача 1 

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
 
// Колбэк для метода sort
people.sort((a, b) => a.age - b.age);
 
// Вывод отсортированного массива в консоль
console.log(people);

//  Задача 2

// Функция для проверки, является ли число положительным
function isPositive(num) {
    return num > 0;
}

// Функция для проверки, является ли пол "мужским"
function isMale(person) {
    return person.gender === 'male';
}

// Реализация функции filter
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// Пример использования
console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));

// Задача 3

// Функция для вывода текущей даты
function logCurrentDate() {
    const now = new Date();
    console.log(now.toString());
}

// Запускаем интервал
const intervalId = setInterval(logCurrentDate, 3000);

// Устанавливаем таймаут на 30 секунд для остановки интервала
setTimeout(() => {
    clearInterval(intervalId); // Останавливаем интервал
    console.log("30 секунд прошло"); // Выводим сообщение
}, 30000);

// Задача 4

function delayForSecond(callback) {
    // Используем setTimeout для задержки в 1 секунду (1000 миллисекунд)
    setTimeout(() => {
        callback(); // Вызываем переданную функцию через 1 секунду
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// Задача 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб')); // Передаем функцию как колбэк

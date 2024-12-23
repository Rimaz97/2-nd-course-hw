// Задание 1

// Объявляем переменную «a»
let a;
// Присваиваем переменной «a» значение 10
a = 10;
// Выводим значение переменной «a» на экран с помощью метода alert()
alert(a);
// Снова присваиваем переменной «a» новое значение — 20
a = 20;
// Повторно выводим значение переменной «a» на экран
alert(a);

// Задание 2

// Объявляем переменную и присваиваем ей значение года выпуска первого iPhone
let iphoneReleaseYear = 2007;
// Выводим значение переменной на экран с помощью метода alert()
alert(iphoneReleaseYear);

// Задание 3

// Объявляем переменную и присваиваем ей значение имени создателя языка JavaScript
let javascriptCreator = 'Брендан Эйх';
// Выводим значение переменной на экран с помощью метода alert()
alert(javascriptCreator);

// Задание 4

// Объявляем переменные с именами «a» и «b» и присваиваем им значения 10 и 2 соответственно
let a = 10;
let b = 2;
// Выводим на экран сумму переменных «a» и «b», используя метод alert()
alert(a + b);
// Выводим разность переменных «a» и «b»
alert(a - b);
// Выводим произведение переменных «a» и «b»
alert(a * b);
// Делим переменную «a» на переменную «b» и выводим результат
alert(a / b);

// Задание 5

// Объявляем переменную result и присваиваем ей результат возведения числа 2 в степень 5
let result = 2 ** 5;
// Выводим значение переменной result на экран с помощью метода alert()
alert(result);

// Задание 6

// Объявляем переменные «a» и «b» и присваиваем им значения 9 и 2 соответственно
let a = 9;
let b = 2;
// Находим остаток от деления переменной «a» на переменную «b»
let remainder = a % b;
// Выводим результат на экран с помощью метода alert()
alert(remainder);

// Задание 7

// Объявляем переменную num и присваиваем ей значение 1
let num = 1;
// Увеличиваем значение переменной num на 5 с помощью оператора инкремента
num += 5;
// Уменьшаем значение переменной num на 3 с помощью оператора декремента
num -= 3;
// Умножаем значение переменной num на 7 с помощью оператора инкремента
num *= 7;
// Делим значение переменной num на 3
num /= 3;
// Прибавляем к значению переменной num единицу
num++;
// Вычитаем из значения переменной num единицу
num--;
// Выводим результат на экран с помощью метода alert()
alert(num);

// Задание 8

// Создаём переменную age.
let age;
// Присваиваем переменной age значение, введённое пользователем с помощью метода prompt().
age = prompt("Сколько вам лет?");
// Выводим результат с помощью alert().
alert(age);

// Задание 9

// Создаём объект user.
let user = {
    name: "Иван", // Присваиваем свойству name объекта user строковое значение.
    age: 25, // Присваиваем свойству age объекта user числовое значение.
    isAdmin: true // Присваиваем свойству isAdmin объекта user булевое значение.
};

// Задание 10

// С помощью метода prompt() спрашиваем у пользователя его имя и сохраняем в переменную.
let userName = prompt("Как вас зовут?");
// Выводим на экран шаблонную строку с помощью метода alert().
alert("Привет, " + userName + "!");

// Дополнительное задание

1. // Запрашиваем у пользователя загадать любое число и сохраняем его в переменной number с помощью метода prompt().
let number = prompt("Загадайте любое число");

2. // Удваиваем загаданное число, сохраняем результат в новой переменной result1.
let result1 = number * 2;
// Показываем пользователю удвоенное число с помощью метода alert().
alert("Удвоенное число: " + result1);

3. // Прибавляем к удвоенному числу 10, сохраняем результат в новой переменной result2.
let result2 = result1 + 10;
// Показываем пользователю результат после прибавления 10 с помощью метода alert().
alert("Результат после прибавления 10: " + result2);

4. // Делим полученное число на 2, сохраняем результат в новой переменной result3.
let result3 = result2 / 2;
// Показываем пользователю результат деления на 2 с помощью метода alert().
alert("Число после деления на 2: " + result3);

5. // Вычитаем из результата первоначальное загаданное число, сохраняем результат в new_result.
let new_result = result3 - number;
// Показываем пользователю окончательный результат с помощью метода alert().
alert("Окончательный результат: " + new_result);

6. // Сообщаем пользователю, что ответ равен 5.
alert("Ответ равен 5");




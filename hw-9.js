// Задача 1

// Получаем ссылки на заголовок и кнопку
const heading1 = document.querySelector('#heading1'); 
const button1 = document.querySelector('#toggleButton1');

// Функция для скрытия и показа заголовка
function toggleHeading() {
    if (heading1.style.display === 'none') {
        heading1.style.display = 'block';
        button1.textContent = 'Скрыть'; 
    } else {
        heading1.style.display = 'none';
        button1.textContent = 'Показать'; 
    }
}

// Добавляем обработчик события на кнопку
button1.addEventListener('click', toggleHeading);

// Задача 2

// Получаем ссылки на абзац и кнопку
const textParagraph = document.querySelector('#text'); 
const changeColorButton = document.querySelector('#changeColorButton');

// Функция для изменения цвета текста абзаца
function changeColor() {
    textParagraph.style.color = 'blue'; // Изменяем цвет текста на синий
}

// Добавляем обработчик события на кнопку
changeColorButton.addEventListener('click', changeColor);

// Задача 3 

// Получаем ссылки на заголовок и кнопку
const heading2 = document.querySelector('#heading2');
const changeTextButton1 = document.querySelector('#changeTextButton1');

// Переменная для хранения первоначального текста заголовка
const originalText2 = heading2.textContent; // Изменил имя переменной

// Функция для изменения текста заголовка
function changeText2() { // Изменил имя функции
    // Проверяем текущий текст заголовка и меняем его
    if (heading2.textContent === originalText2) {
        heading2.textContent = 'Привет, мир!'; // Меняем текст
    } else {
        heading2.textContent = originalText2; // Возвращаем обратно
    }
}

// Добавляем обработчик события на кнопку
changeTextButton1.addEventListener('click', changeText2); // Изменил название функции

// Задача 4

// Получаем ссылки на все элементы с классом 'description'
const descriptions = document.querySelectorAll('.description');

// Функция для изменения текста элементов
function changeDescriptionText() {
    // Перебираем найденные элементы
    descriptions.forEach(description => {
        description.textContent = 'Измененный текст'; // Меняем текст каждого элемента
    });
}

// Добавляем обработчик события на кнопку
const changeDescriptionButton = document.querySelector('#changeDescriptionButton');
changeDescriptionButton.addEventListener('click', changeDescriptionText);

// Задача 5

// Получаем ссылки на все элементы с классом 'description2'
const descriptionElements = document.querySelectorAll('.description2');

// Функция для изменения текста элементов
function changeDescriptionText2() { // Изменил имя функции
    // Перебираем найденные элементы
    descriptionElements.forEach(description => {
        description.textContent = 'Новый текст'; // Меняем текст каждого элемента
    });
}

// Добавляем обработчик события на кнопку
const changeTextButton2 = document.querySelector('#changeTextButton2');
changeTextButton2.addEventListener('click', changeDescriptionText2); // Изменил название функции

// Задача 6

// Получаем кнопку по ее ID
const addElementButton = document.querySelector('#addElementButton');

// Функция для добавления нового элемента
function addNewElement() {
    // Создаем новый абзац
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац'; // Устанавливаем текст абзаца

    // Добавляем новый абзац в конец документа (в body)
    document.body.appendChild(newParagraph);
}

// Добавляем обработчик события на кнопку
addElementButton.addEventListener('click', addNewElement);


// Задача 7

// Получаем кнопку по ее ID
const removeElementButton = document.querySelector('#removeElementButton');

// Функция для удаления первого элемента с классом 'description'
function removeFirstDescriptionElement() {
    // Находим первый элемент с классом 'description'
    const firstDescription = document.querySelector('.description3'); 
    
    // Если элемент найден, удаляем его
    if (firstDescription) {
        firstDescription.remove();
    }
}

// Добавляем обработчик события на кнопку
removeElementButton.addEventListener('click', removeFirstDescriptionElement);
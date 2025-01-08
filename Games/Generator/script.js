// Функция для генерации случайного цвета
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

// Обработчик для кнопки смены цвета
document.getElementById('change-color').addEventListener('click', function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color-display').textContent = `Текущий цвет: ${newColor}`;
});

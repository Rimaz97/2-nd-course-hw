// Функция для игры "Камень, ножницы, бумага"
function playGame(userChoice) {
    const options = ["камень", "ножницы", "бумага"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    document.getElementById('result').innerHTML = `
        Ваш выбор: ${userChoice}<br>
        Выбор компьютера: ${computerChoice}<br>
        Результат: ${result}
    `;
}

// Добавляем обработчики событий для кнопок
document.getElementById('rock').addEventListener('click', function() {
    playGame('камень');
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame('ножницы');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('бумага');
});

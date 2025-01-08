function flipText() {
    // Получаем текст из поля ввода
    let inputText = document.getElementById("inputText").value;
  
    // Переворачиваем текст
    inputText = inputText.split('').reverse().join('');
  
    // Выводим перевернутый текст в элемент outputText
    document.getElementById("outputText").innerHTML = inputText;
}

function clearInput() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").innerHTML = '';
}
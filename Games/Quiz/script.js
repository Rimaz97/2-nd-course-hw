// Данные о каждом шаге квиза, включая вопрос и возможные ответы
const formSteps = [
  {
    question: "Какой цвет небо?",
    answers: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 1 // Индекс с учетом 0
  },
  {
    question: "Сколько дней в неделе?",
    answers: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 1
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    answers: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 1
  },
];

// Переменная для отслеживания текущего шага
let currentStep = 0;

// Массив для хранения выбранных ответов
let selectedAnswers = [];

// Функция для отображения текущего шага квиза
function renderStep() {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");
  const progressFill = document.getElementById("progress-fill");

  // Отображаем текущий вопрос
  questionText.textContent = formSteps[currentStep].question;
  answersContainer.innerHTML = "";

  // Создаем элементы для каждого ответа
  formSteps[currentStep].answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.classList.add("quiz__answer-item");
    label.setAttribute("for", `answer-${index}`);

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", `question-${currentStep}`);
    input.setAttribute("id", `answer-${index}`);
    input.value = answer;

    const circle = document.createElement("div");
    circle.classList.add("quiz__answer-item-circle");

    const text = document.createElement("div");
    text.classList.add("quiz__answer-item-text");
    text.textContent = answer;

    label.appendChild(input);
    label.appendChild(circle);
    label.appendChild(text);
    answersContainer.appendChild(label);
  });

  // Обновляем прогресс-бар
  const progress = ((currentStep + 1) / formSteps.length) * 100;
  progressFill.style.width = progress + "%";
}

// Функция для перехода к следующему шагу
function nextStep() {
  const selectedAnswer = document.querySelector(
    `input[name="question-${currentStep}"]:checked`
  );

  if (selectedAnswer) {
    // Сохраняем выбранный ответ
    selectedAnswers.push({
      question: formSteps[currentStep].question,
      answer: selectedAnswer.value,
    });
  } else {
    alert("Пожалуйста, выберите ответ.");
    return;
  }

  // Переход к следующему шагу или завершение квиза
  if (currentStep < formSteps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    displayResults();
  }
}

// Функция для отображения результатов
function displayResults() {
  const quizContainer = document.querySelector('.quiz');
  quizContainer.innerHTML = ''; // Очистка контейнера

  // Заголовок результатов
  const resultTitle = document.createElement('h2');
  resultTitle.textContent = 'Викторина окончена';
  quizContainer.appendChild(resultTitle);

  let correctCount = 0;
  let incorrectCount = 0;

  selectedAnswers.forEach((step, index) => {
    const correctAnswerIndex = formSteps[index].correctAnswer;
    if (step.answer === formSteps[index].answers[correctAnswerIndex]) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  // Текст результатов
  const resultText = document.createElement('p');
  resultText.textContent = `Правильные ответы: ${correctCount}, Неправильные ответы: ${incorrectCount}`;
  quizContainer.appendChild(resultText);
}

// Функция для отправки результатов (можно удалить или оставить для отладки)
function sendResults(data) {
  console.log("Отправляем данные...");
  console.log(data);
}

// Событие загрузки DOM
document.addEventListener("DOMContentLoaded", renderStep);

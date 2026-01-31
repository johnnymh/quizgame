// ============ DATA ============
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 0,
  },
  {
    question: 'What is the largest country in the world?',
    options: ['Canada', 'China', 'Russia', 'USA'],
    answer: 2,
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yuan', 'Yen', 'Dollar', 'Euro'],
    answer: 1,
  },
  {
    question: 'What is the highest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Makalu', 'Dhaulagiri'],
    answer: 1,
  },
  {
    question: 'What is the largest ocean in the world?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    answer: 3,
  },
];

// ============ DOM ELEMENTS ============
const questionElement = document.querySelector('#question');
const optionElements = document.querySelectorAll('.options button');
const scoreElement = document.querySelector('#score');

// ============ STATE ============
let questionIndex = 0;
let score = 0;

// ============ FUNCTIONS ============
// Set the initial question and options
function setQuestion() {
  const currentQuestion = quizData[questionIndex];
  questionElement.innerHTML = currentQuestion.question;
  optionElements.forEach((optionElement, index) => {
    optionElement.innerHTML = currentQuestion.options[index];
  });
}

// Check the answer and update the score
function checkAnswer(optionIndex) {
  const currentQuestion = quizData[questionIndex];
  if (optionIndex === currentQuestion.answer) {
    score++;
  }
  questionIndex++;

  if (questionIndex < quizData.length) {
    setQuestion();
  } else {
    showResults();
  }
}

// Show the quiz results
function showResults() {
  questionElement.style.display = 'none';
  optionElements.forEach(optionElement => {
    optionElement.style.display = 'none';
  });
  scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}`;
  scoreElement.style.display = 'block';
}

// ============ INITIALIZATION ============
// Add event listeners to the option buttons
optionElements.forEach((optionElement, index) => {
  optionElement.addEventListener('click', () => {
    checkAnswer(index);
  });
});

// Start the quiz
setQuestion();

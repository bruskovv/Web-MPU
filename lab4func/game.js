const LEVELS = [
  { name: 'начальный', nameEn: 'Primary', total: 10 },
  { name: 'средний', nameEn: 'Intermediate', total: 10 },
  { name: 'продвинутый', nameEn: 'Advanced', total: 10 }
];

let currentLevel = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questionInLevel = 0;
let usedQuestions = new Set();
let currentQuestion = null;

const levelNameEl = document.getElementById('levelName');
const questionNumberEl = document.getElementById('questionNumber');
const questionTextEl = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const messageEl = document.getElementById('message');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const endMessage = document.getElementById('endMessage');
const restartBtn = document.getElementById('restartBtn');
const exitBtn = document.getElementById('exitBtn');

function startGame() {
  currentLevel = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  questionInLevel = 0;
  usedQuestions = new Set();
  
  correctCountEl.textContent = '0';
  wrongCountEl.textContent = '0';
  messageEl.textContent = '';
  
  gameScreen.classList.remove('hidden');
  endScreen.classList.add('hidden');
  
  answerInput.disabled = false;
  submitBtn.disabled = false;
  
  nextQuestion();
}

function nextQuestion() {
  if (currentLevel >= LEVELS.length) {
    endGame(true);
    return;
  }
  
  const level = LEVELS[currentLevel];
  
  if (questionInLevel >= level.total) {
    const percentage = (correctAnswers / level.total) * 100;
    
    if (percentage >= 80 && currentLevel < LEVELS.length - 1) {
      currentLevel++;
      questionInLevel = 0;
      correctAnswers = 0;
      wrongAnswers = 0;
      usedQuestions = new Set();
      
      showMessage(`Поздравляем! Переход на уровень: ${LEVELS[currentLevel].name}`, 'info');
      
      setTimeout(() => {
        correctCountEl.textContent = '0';
        wrongCountEl.textContent = '0';
        nextQuestion();
      }, 2000);
      return;
    } else {
      endGame(percentage >= 80 && currentLevel === LEVELS.length - 1);
      return;
    }
  }
  
  levelNameEl.textContent = `Level: ${level.nameEn}`;
  questionNumberEl.textContent = `Question: ${questionInLevel + 1} / ${level.total}`;
  
  let question;
  let key;
  do {
    question = generateQuestion(currentLevel);
    key = question.text;
  } while (usedQuestions.has(key));
  
  usedQuestions.add(key);
  questionInLevel++;
  currentQuestion = question;
  
  questionTextEl.textContent = question.text;
  answerInput.value = '';
  answerInput.focus();
  messageEl.textContent = '';
}

function generateQuestion(levelIndex) {
  if (levelIndex === 0) {
    return generateArithmetic();
  } else if (levelIndex === 1) {
    return Math.random() < 0.5 ? generateArithmetic() : generateComparison();
  } else {
    return Math.random() < 0.5 ? generateLogical() : generateBinary();
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArithmetic() {
  const a = rand(1, 20);
  const b = rand(1, 20);
  const operators = ['+', '-', '×', '÷'];
  const op = operators[rand(0, operators.length - 1)];
  
  let answer;
  if (op === '+') answer = a + b;
  else if (op === '-') answer = a - b;
  else if (op === '×') answer = a * b;
  else {
    const dividend = a * b;
    answer = a;
    return { text: `${dividend} ${op} ${b}`, answer: String(answer) };
  }
  
  return { text: `${a} ${op} ${b}`, answer: String(answer) };
}

function generateComparison() {
  const a = rand(1, 20);
  const b = rand(1, 20);
  const operators = ['>', '<', '>=', '<=', '==', '!='];
  const op = operators[rand(0, operators.length - 1)];
  
  let result;
  if (op === '>') result = a > b;
  else if (op === '<') result = a < b;
  else if (op === '>=') result = a >= b;
  else if (op === '<=') result = a <= b;
  else if (op === '==') result = a === b;
  else result = a !== b;
  
  return { text: `${a} ${op} ${b}`, answer: String(result) };
}

function generateLogical() {
  const a = Math.random() < 0.5;
  const b = Math.random() < 0.5;
  const operators = ['&&', '||'];
  const op = operators[rand(0, 1)];
  
  let result = op === '&&' ? (a && b) : (a || b);
  
  return { text: `${a} ${op} ${b}`, answer: String(result) };
}

function generateBinary() {
  const a = rand(1, 15);
  const b = rand(1, 15);
  const operators = ['&', '|', '^'];
  const op = operators[rand(0, operators.length - 1)];
  
  let result;
  if (op === '&') result = a & b;
  else if (op === '|') result = a | b;
  else result = a ^ b;
  
  return { 
    text: `${a.toString(2)} ${op} ${b.toString(2)}`, 
    answer: result.toString(2) 
  };
}

function checkAnswer() {
  if (!currentQuestion) return;
  
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = currentQuestion.answer.toLowerCase();
  
  if (userAnswer === correctAnswer) {
    correctAnswers++;
    correctCountEl.textContent = String(correctAnswers);
    showMessage('Correct!', 'correct');
    
    setTimeout(() => nextQuestion(), 1000);
  } else {
    wrongAnswers++;
    wrongCountEl.textContent = String(wrongAnswers);
    showMessage(`Wrong! Correct answer: ${currentQuestion.answer}`, 'wrong');
    
    setTimeout(() => nextQuestion(), 2000);
  }
}

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = `message ${type}`;
}

function endGame(success) {
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  
  if (success) {
    endMessage.textContent = '🎉 Поздравляем! Вы успешно завершили все уровни игры!';
  } else {
    endMessage.textContent = 'Игра окончена. Вы не набрали 80% правильных ответов. Попробуйте ещё раз!';
  }
}

submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkAnswer();
});

restartBtn.addEventListener('click', startGame);
exitBtn.addEventListener('click', () => {
  endMessage.textContent = 'Спасибо за игру!';
  restartBtn.classList.add('hidden');
  exitBtn.classList.add('hidden');
});

startGame();

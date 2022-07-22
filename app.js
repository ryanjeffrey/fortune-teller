// import functions and grab DOM elements
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');
const inputSection = document.getElementById('input-section');
const userQuestion = document.getElementById('user-question');
const askQuestionButton = document.getElementById('ask-question-btn');
const anotherQuestionButton = document.getElementById('ask-another-question-btn');
const anotherQuestionSection = document.getElementById('another-question-section');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// set event listeners 
askQuestionButton.addEventListener('click', () => {
    copyQuestion();
    showRandomAnswer();
    toggleVisibility();
    applyAnimations();
});

anotherQuestionButton.addEventListener('click', () => {
    toggleAnotherVisibility();
});

function copyQuestion() {
    const question = userQuestion.value;
    questionDisplay.textContent = question;
}

function showRandomAnswer() {
    const randomAnswer = getRandomItem(answers);
    answerDisplay.textContent = randomAnswer;
}

function getRandomItem(answers) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const item = answers[randomIndex];
    return item;
}

function toggleVisibility() {
    inputSection.classList.add('hidden');
    anotherQuestionSection.classList.remove('hidden');
    answerDisplay.classList.remove('hidden');
}

function toggleAnotherVisibility() {
    answerDisplay.classList.add('hidden');
    inputSection.classList.remove('hidden');
    questionDisplay.textContent = '';
    anotherQuestionSection.classList.add('hidden');
}

function applyAnimations() {
    answerDisplay.classList.add('fade-in');
}


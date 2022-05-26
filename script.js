var state = 'begin';

var startEl = document.querySelector('#begin');
var quizEl = document.querySelector('#quizBody');
var endEl = document.querySelector('#end');
var beginBtn = document.querySelector('#begin');
var quizTitle = document.querySelector('#quizBody #title');
var timer = document.querySelector('#timeLeft')

var questionsArr = [
    {
        question: 'What is the typical color of grass?',
        choices: ['red', 'orange', 'purple', 'green'],
        answer: 'green'
    },
    {
        question: 'Which of these is not a fruit?',
        choices: ['strawberries', 'apples', 'burger', 'kiwi'],
        answer: 'burger'
    },
    {
        question: 'Where is Fort Lauderdale located?',
        choices: ['Florida', 'China', 'New York', 'Oklahoma'],
        answer: 'Florida'
    }

]

function displayState() {
    if (state === 'begin') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quizBody') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

function init() {
    displayState();
}

function displayTimer() {
    timer.textContent = time;
}

var time = 24;

function setTimer() {
    var timerInterval = setInterval(function () {
        time--;
        displayTimer();

        if (time === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function displayQuestions() {
    
}

beginBtn.addEventListener("click", function () {
    state = 'quizBody';
    displayState();
    setTimer();

});


quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

init();
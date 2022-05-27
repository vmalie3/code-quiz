var state = 'begin';

var startEl = document.querySelector('#begin');
var quizEl = document.querySelector('#quizBody');
var endEl = document.querySelector('#end');
var beginBtn = document.querySelector('#begin');
var quizTitle = document.querySelector('#quizBody #title');
var timer = document.querySelector('#timeLeft');
var question = document.querySelector('#questions');
var choiceBtns = document.getElementsByClassName('choice');

var choiceA = document.querySelector('#choiceBtn1');
var choiceB = document.querySelector('#choiceBtn2');
var choiceC = document.querySelector('#choiceBtn3');
var choiceD = document.querySelector('#choiceBtn4');

var message = document.querySelector('#message');


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

var time = 30;
var score = 0;

function setTimer() {
    displayTimer();
    var timerInterval = setInterval(function () {
        time--;
        displayTimer();

        if (time === 0) {
            clearInterval(timerInterval);
            state = 'end';
            displayState();
            score = 0;
            message.textContent = 'Time ran out! Your score is ' + score;
        }
        if (state === 'end' && time > 0) {
            score = time;
            console.log(score);
            clearInterval(timerInterval);
            message.textContent = 'Your score is ' + score;
        }

    }, 1000);
}

var questionIndex = 0;
function displayQuestions() {
    question.textContent = questionsArr[questionIndex].question;
    choiceA.textContent = questionsArr[questionIndex].choices[0];
    choiceB.textContent = questionsArr[questionIndex].choices[1];
    choiceC.textContent = questionsArr[questionIndex].choices[2];
    choiceD.textContent = questionsArr[questionIndex].choices[3];
}

var correctAnswers = 0;

function nextQuestion() {
    if (questionIndex === 2) {
        state = 'end';
        displayState();

    } else {
        questionIndex++;
        displayQuestions();
    }
}





beginBtn.addEventListener("click", function () {
    state = 'quizBody';
    displayState();
    setTimer();
    displayQuestions();
    var answer = 0;
    choiceA.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[0] === questionsArr[questionIndex].answer) {
            answer++;
            console.log(answer);
        } else {
            time = time - 5;
        }
        nextQuestion();
    })
    choiceB.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[0] === questionsArr[questionIndex].answer) {
            answer++;
            console.log(answer);
        } else {
            time = time - 5;
        }
        nextQuestion();
    })
    choiceC.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[0] === questionsArr[questionIndex].answer) {
            answer++;
            console.log(answer);
        } else {
            time = time - 5;
        }
        nextQuestion();
    })
    choiceD.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[0] === questionsArr[questionIndex].answer) {
            answer ++;
            console.log(answer);
        } else {
            time = time - 5;
        }
        nextQuestion();
    }) 
});


quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

//Local storage


var username = localStorage.getItem('#nameInput');
var submitBtn = document.querySelector('#submit');
var score = parseInt(localStorage.getItem('score'));
var nameInput = document.querySelector('#nameInput');

submitBtn.addEventListener('submit', function () {
    localStorage.setItem('name', nameInput);
    // if (nameInput = '') {
    //     message.textContent = 'Error; Please enter a name';
    // } else {
    //     message.textContent = 'Score logged to High Scores';
    //     localStorage.setItem('name', nameInput);
    // }
})

init();
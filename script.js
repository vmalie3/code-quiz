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


var username = localStorage.getItem('name');
var submitBtn = document.querySelector('#submit');
var score = parseInt(localStorage.getItem('score'));

//array of objects with question, choices, and answer

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

//display state functions to choose what is visible

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

//timer functions

function displayTimer() {
    timer.textContent = time;
}


var time = 5;

function setTimer() {
        displayTimer();
    var timerInterval = setInterval(function () {
        time--;
        displayTimer();

        if (time === 0) {
            clearInterval(timerInterval);
            state = 'end';
            displayState();
        }
        if (state === 'end') {
            score = time;
        }

    }, 1000);
}

//function to show question and answer choices

var questionIndex = 0;
function displayQuestions() {
    question.textContent = questionsArr[questionIndex].question;
    choiceA.textContent = questionsArr[questionIndex].choices[0];
    choiceB.textContent = questionsArr[questionIndex].choices[1];
    choiceC.textContent = questionsArr[questionIndex].choices[2];
    choiceD.textContent = questionsArr[questionIndex].choices[3];
}

function nextQuestion() {
    questionIndex++;
    choiceBtns.addEventListener('click', function() {
        nextQuestion();
    });
}

//change question after a choice has been clicked

// for (var i = 0; i < choiceBtns.length; i++) {
//     choiceBtns[i].addEventListener('click', function() {
//         questionIndex++;
//     });
// }


beginBtn.addEventListener("click", function () {
    state = 'quizBody';
    displayState();
    setTimer();
    displayQuestions();

});


//display end screen

quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
});

//Local storage
var message = document.querySelector('#message');

submitBtn.addEventListener('submit', function () {

    var nameInput = document.querySelector('#text').value;
    if(nameInput = '') {
        message.textContent = 'Error; Please enter a name';
    } else {
        message.textContent = 'Score logged to High Scores';
        localStorage.setItem('name', nameInput);
    }
})

init();

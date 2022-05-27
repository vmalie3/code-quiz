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
var answerMessage = document.querySelector('#answerMessage');

var nameInput = document.querySelector('#nameInput');
var submitNameBtn = document.querySelector('#submit');

var highscoreButton = document.querySelector('#linkHS');
var hsPage = document.querySelector('#showClickHS');

var questionsArr = [
    {
        question: 'What is the typical color of grass?',
        choices: ['red', 'orange', 'purple', 'green'],
        answer: 'green'
    },
    {
        question: 'Which of these is not a fruit?',
        choices: ['berries', 'apples', 'burger', 'kiwi'],
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
        hsPage.style.display = 'none';
    }
    if (state === 'quizBody') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        hsPage.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
        hsPage.style.display = 'block';
    }
    if (state === 'highScorePage') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
        hsPage.style.display = 'block'; 
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
    
    choiceA.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[0] === questionsArr[questionIndex].answer) {
            answerMessage.textContent = 'Correct!';
        } else {
            time = time - 5;
            answerMessage.textContent = 'Incorrect: -5 seconds';
        }
        nextQuestion();
    })
    choiceB.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[1] === questionsArr[questionIndex].answer) {
            answerMessage.textContent = 'Correct!';
        } else {
            time = time - 5;
            answerMessage.textContent = 'Incorrect: -5 seconds';
        }
        nextQuestion();
    })
    choiceC.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[2] === questionsArr[questionIndex].answer) {
            answerMessage.textContent = 'Correct!';
        } else {
            time = time - 5;
            answerMessage.textContent = 'Incorrect: -5 seconds';
        }
        nextQuestion();
    })
    choiceD.addEventListener('click', function() {
        if (questionsArr[questionIndex].choices[3] === questionsArr[questionIndex].answer) {
            answerMessage.textContent = 'Correct!';
        } else {
            time = time - 5;
            answerMessage.textContent = 'Incorrect: -5 seconds';
        }
        nextQuestion();
    }) 
});


quizTitle.addEventListener("click", function () {
    state = 'end';
    displayState();
    
});

highscoreButton.addEventListener('click', function() {
    state = 'highScorePage';
    displayState();
})

//Local storage

var createScore = document.querySelector('#addScore');

submitNameBtn.addEventListener('click', function () {
    // event.preventDefault();
    console.log('is this working');
    var scores = JSON.parse(localStorage.getItem("userScore")) || [];
    console.log(nameInput);
    var userScore = {
        username: nameInput.value,
        highscore: score.value
    };

    scores.push(userScore);
    console.log(scores);

    localStorage.setItem('userScore', JSON.stringify(scores));     
});

init();
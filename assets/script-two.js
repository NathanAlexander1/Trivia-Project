//DOM elements
var startBtn = document.querySelector("#start-button");
var timerCountdownSpan = document.querySelector("#time-left");
var questionSpan = document.querySelector("#question");
var ulForAnswers = document.querySelector("#listContainer");
var scoreSpan = document.querySelector("#score-span");
var optionButtonsWorkOne = document.querySelector("#button-one");
var optionButtonsWorkTwo = document.querySelector("#button-two");
var optionButtonsWorkThree = document.querySelector("#button-three");
var optionButtonsWorkFour = document.querySelector("#button-four");
var arrayOfButtons = [
  optionButtonsWorkOne,
  optionButtonsWorkTwo,
  optionButtonsWorkThree,
  optionButtonsWorkFour,
];
// console.log(arrayOfButtons);
// Variables
var score = 0;
scoreSpan.textContent = score;
var timeLeft = 45;
var timeInterval;
var arrayOfQuesObj = [
  {
    question: "1 How many continents are there?",
    possibleAnswers: ["Ten", "Seven", "Eight", "Nine"],
    correctAnswer: "Seven",
  },
  {
    question: "2 What color is the sky?",
    possibleAnswers: ["Green", "Orange", "Blue", "Pumpkin"],
    correctAnswer: "Blue",
  },
  {
    question: "3 How much wood could a woodchuck chuck?",
    possibleAnswers: [11, 15, 7, 9],
    correctAnswer: 11,
  },
  {
    question: "4 What is the best thing to drink from?",
    possibleAnswers: ["Plate", "Bowl", "Spoon", "Cup"],
    correctAnswer: "Cup",
  },
  {
    question: "5 What is the capitol of of the USA?",
    possibleAnswers: ["Olympia", "Mexico", "Washington DC", "Congo"],
    correctAnswer: "Washington DC",
  },
];
var highScore = 0;
let potentialAnswerDiv = document.querySelectorAll(".optionButtons");
var index = 0;
var k = 0;

//First question from array of objects is displayed w/ answers
//On start:

//need to iterate over array of objects

function nextQuestion() {
  var questionElement = arrayOfQuesObj[index].question;
  //   console.log(questionElement);
  var answerElementOne = arrayOfQuesObj[index].possibleAnswers[0];
  //   console.log(answerElementOne);
  var answerElementTwo = arrayOfQuesObj[index].possibleAnswers[1];
  //   console.log(answerElementTwo);
  var answerElementThree = arrayOfQuesObj[index].possibleAnswers[2];
  //   console.log(answerElementThree);
  var answerElementFour = arrayOfQuesObj[index].possibleAnswers[3];
  //   console.log(answerElementFour);

  questionSpan.textContent = questionElement;

  optionButtonsWorkOne.textContent = answerElementOne;
  optionButtonsWorkTwo.textContent = answerElementTwo;
  optionButtonsWorkThree.textContent = answerElementThree;
  optionButtonsWorkFour.textContent = answerElementFour;

}

//start button event listener
  //on click timer starts
  //first question shows
  //nextQuestion function

//add evemt listener to div container eith question answers
  //when a click event happens inside div, check what was clicked and see if it was the right answer
  //if answer correct, add points
  //if wrong subtract time from timer



function checkAnswer(event) {
  var userAnswerOne = event.target.textContent;
  console.log(userAnswerOne);
  var correctAnswer = arrayOfQuesObj[index].correctAnswer;
  index++;
  if (userAnswerOne === correctAnswer) {
    // alert("correct");
    score += 1;
    nextQuestion();
  } else {
    // alert("WRONG");
    timeLeft -= 3;
    nextQuestion();
  }  
}

ulForAnswers.addEventListener("click", checkAnswer);

startBtn.addEventListener("click", function () {
  timerCountdownSpan.textContent = timeLeft;
  nextQuestion();
  //Timer starts counting down
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerCountdownSpan.textContent = timeLeft;
      timeLeft--;
    } else if ((timeLeft = 0)) {
      console.log("ALL DONE");
      //   isPlaying = false;
    }
  }, 1000);
});

//user selects an answer
//if answer is correct (button selected = correctAnswer)
//continue to next question
//else subtract time from timer
//continue to next question
//when timer reaches 0
//alert user score and highscores
//add number of times button selected = correctAnswer(?)
//alert high scores

//above commented code was in nextQuestion Func
//go into local storage - refer to activities

//DOM elements
var startBtn = document.querySelector("#start-button");
var timerCountdownSpan = document.querySelector("#time-left");
var questionSpan = document.querySelector("#question");
var ulForAnswers = document.querySelector("#listContainer");
// var buttonAccess = ulForAnswers.getElementsByTagName("button");
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
var timeLeft = 15;
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

//First question from array of objects is displayed w/ answers
//On start:
startBtn.addEventListener("click", function () {
  //   if (isPlaying) {
  //     // console.log("not playing");
  //     return;
  //   }
  //   isPlaying = true;
  //   // console.log("game started!");
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
//need to iterate over array of objects

function nextQuestion() {
  //while flag
  var flag = true;
  //for loop
  while (flag) {
    for (var i = 0; i < arrayOfQuesObj.length; i++) {
      //var question = arrayofobjects[i].question
      var currentQuestion = arrayOfQuesObj[i].question;
      questionSpan.textContent = currentQuestion;
      console.log(questionSpan);
      var possibleAnswers = arrayOfQuesObj[i].possibleAnswers;
      var correctAnswer = arrayOfQuesObj[i].correctAnswer;
      console.log(correctAnswer);
      //   arrayOfButtons[i].textContent = arrayOfQuesObj[i].possibleAnswers;

      for (var j = 0; j < possibleAnswers.length; j++) {
        arrayOfButtons[j].textContent = possibleAnswers[j];
        arrayOfButtons[j].addEventListener("click", function () {
          flag = false;
          if (arrayOfButtons[j] === correctAnswer) {
            score += 1;
            flag = true;
          } else {
            timeLeft = timeLeft - 3;
            flag = true;
          }
        });
      }

      return;
    }
  }
  //var possibleanswers = arrayofobjects[i].answers
  //var correctAnswer = arrayofobjects[i].correctanswer

  //questionspan = question
  //possibleanswers = arrayOfButtons[i]
  //flag = false
  //possibleanswers.addeventlistener(click, fucntion() {
  //if possibleansers ===correctanswer
  //score = score + 1
  //flag = true
  //else
  //timer - 5
  //flag = true
  //})

  //user selects an answer
  //if answer is correct (button selected = correctAnswer)
  //continue to next question
  //else subtract time from timer
  //continue to next question
  //when timer reaches 0
  //alert user score and highscores
  //add number of times button selected = correctAnswer(?)
  //alert high scores
}

//go into local storage - refer to activities

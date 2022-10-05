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

var highscoreButton = document.querySelector("#highscore-button");
var arrayOfButtons = [
  optionButtonsWorkOne,
  optionButtonsWorkTwo,
  optionButtonsWorkThree,
  optionButtonsWorkFour,
];
// console.log(arrayOfButtons);
// Variables
var score = 0;

var timeLeft = 60;
var timeInterval;
var arrayOfQuesObj = [
  {
    question: "1 What is the name of somebody who studies insects?",
    possibleAnswers: ["Insectologist", "Enterologist", "Entomologist", "Estimologist"],
    correctAnswer: "Entomologist"
  },
  {
    question: "2 How many known types of insects are there?",
    possibleAnswers: ["20 million", "900,000", "14.6 billion", "2.4 million"],
    correctAnswer: "900,000"
  },
  {
    question: "3 How many individual people does the total biomass of ants equal?",
    possibleAnswers: ["1 billion", "5 billion", "9 billion", "34 billion"],
    correctAnswer: "34 billion"
  },
  {
    question: "4 What was the first ever insect to be sent to space?",
    possibleAnswers: ["Ant", "Fruit Fly", "Cicada", "Cockroach"],
    correctAnswer: "Fruit Fly"
  },
  {
    question: "5 What do you call a fear of insects?",
    possibleAnswers: ["Arachnophobia", "Entomophobia", "Ophidiophobia", "Kagkourophobia"],
    correctAnswer: "Entomophobia"
  },
  {
    question: "6 Which of the follow IS an arachnid?",
    possibleAnswers: ["Termites", "Ticks", "Beatles", "Centipedes"],
    correctAnswer: "Ticks"
  },
  {
    question: "7 What is the average lifespan of a bumblebee?",
    possibleAnswers: ["One month", "Two months", "Four months", "One year"],
    correctAnswer: "One month"
  },
  {
    question: "8 How long do periodical cicadas live underground for?",
    possibleAnswers: ["17 years", "Two Years", "10 years", "One monrh"],
    correctAnswer: "17 years"
  },
  {
    question: "9 How much honey does the average bee make in its lifetime?",
    possibleAnswers: ["One tablespoon", "Half a tablespoon", "One-eighth a teaspoon", "One-twelvth of a teaspoon"],
    correctAnswer: "One-twelvth of a teaspoon"
  },
  {
    question: "10 Which organ do insects NOT have?",
    possibleAnswers: ["Lungs", "Heart", "Brain", "Stomach"],
    correctAnswer: "Lungs"
  }
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

  // if (index > arrayOfQuesObj.length-1) {
  //   var initialsPrompt = prompt("Please enter your initials.");
  //   storeUser (initialsPrompt, score);
    
  //   clearInterval(timeInterval);

  //   confirm ("See highscores?");
    
  //   if (confirm) {
  //     window.location.replace("./assets./highscore.html");
  //   }
  // }

}

function checkAnswer(event) {
  var userAnswerOne = event.target.textContent;
  // console.log(userAnswerOne);
  var correctAnswer = arrayOfQuesObj[index].correctAnswer;
  index++;
  if (userAnswerOne === correctAnswer) {
    // alert("correct");
    score += 10;
    scoreSpan.textContent = score;
  
    nextQuestion();
  } else {
    // alert("WRONG");
    timeLeft -= 10;
    nextQuestion();
  } 
}

function storeUser (initialsPlace, scorePlace) {
  var savedScores = JSON.parse(localStorage.getItem("info"));
  if (savedScores === null) {
    savedScores = [];
  }
  var infoOfUser = {
    initials: initialsPlace, 
    score: scorePlace
  };
  savedScores.push(infoOfUser)
  localStorage.setItem("info", JSON.stringify(savedScores));
  alertScore(infoOfUser);
}

function alertScore(infoOfUser) {
  alert("Your initials: " + infoOfUser.initials + "\n" + "Your score:  " + infoOfUser.score);
}

// function localStorKeyCounter () {
//   var keyCounter = 0;
//   if (localStorage !== null) {
//     keyCounter = localStorage.length
//     keyCounter++;
//   }
// }

highscoreButton.addEventListener("click", function() {
  window.location.href = 'highscore.html';
})

ulForAnswers.addEventListener("click", checkAnswer);



startBtn.addEventListener("click", function () {
  timerCountdownSpan.textContent = timeLeft;
  nextQuestion();
  //Timer starts counting down
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerCountdownSpan.textContent = timeLeft;
      timeLeft--;
    } else {
      var initialsPrompt = prompt("Please enter your initials.");
      storeUser (initialsPrompt, score);
      
      clearInterval(timeInterval);
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

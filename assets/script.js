// // // create score variable (globally)
// // // start button
// var startBtn = document.querySelector("#start-button");
// // empty space after timer text
// var timerCountdownSpan = document.querySelector("#time-left");
// var questionSpan = document.querySelector("#question");

// //starting score
// var score = 0;
// //timer variable
// var timeLeft = 15;
// //set time interval variable to attach to timer later
// var timeInterval;
// var isPlaying = false;
// var questionIndex = 0;
// var highScore = 0;
// var arrayOfQuesObj = [
//   {
//     question: "1 How many continents are there?",
//     possibleAnswers: ["Ten", "Seven", "Eight", "Nine"],
//     correctAnswer: "Seven",
//   },
//   {
//     question: "2 What color is the sky?",
//     possibleAnswers: ["Green", "Orange", "Blue", "Pumpkin"],
//     correctAnswer: "Blue",
//   },
//   {
//     question: "3 How much wood could a woodchuck chuck?",
//     possibleAnswers: [11, 15, 7, 9],
//     correctAnswer: 11,
//   },
//   {
//     question: "4 What is the best thing to drink from?",
//     possibleAnswers: ["Plate", "Bowl", "Spoon", "Cup"],
//     correctAnswer: "Cup",
//   },
//   {
//     question: "5 What is the capitol of of the USA?",
//     possibleAnswers: ["Olympia", "Mexico", "Washington DC", "Congo"],
//     correctAnswer: "Washington DC",
//   },
// ];

// //add event listener to start button
// startBtn.addEventListener("click", function () {
//   if (isPlaying) {
//     // console.log("not playing");
//     return;
//   }
//   isPlaying = true;
//   // console.log("game started!");
//   answerList();
//   timerCountdownSpan.textContent = timeLeft;

//   timeInterval = setInterval(function () {
//     if (timeLeft > 0) {
//       timerCountdownSpan.textContent = timeLeft;
//       timeLeft--;
//     } else if ((timeLeft = 0)) {
//       console.log("ALL DONE");
//       isPlaying = false;
//     }
//   }, 1000);
// });

// function answerList() {
//   //user selection variable
//   var userSelection;
//   var ulForAnswers = document.querySelector("#listContainer");
//   var buttonAccess = ulForAnswers.getElementsByTagName("button");
//   console.log(buttonAccess);
//   // for (var k = 0; k < buttonAccess.length; k++) {
//   //     buttonAccess[k].addEventListener("click", function () {
//   //         console.log(k);
//   //     })
//   //     console.log(buttonAccess[k]);

//   // }
//   // console.log(buttonAccess[1]);
//   //   var optionButtonsWork = document.getElementsByClassName(".optionButtons");
//   var optionButtonsWorkOne = document.querySelector("#button-one");
//   var optionButtonsWorkTwo = document.querySelector("#button-two");
//   var optionButtonsWorkThree = document.querySelector("#button-three");
//   var optionButtonsWorkFour = document.querySelector("#button-four");
//   //for each object in array

//   // for (var questionIndex = 0; questionIndex < arrayOfQuesObj.length;) {
//   var displayQuestion = function (i) {
//     console.log(questionIndex);
//     console.log(highScore);

//     questionSpan.textContent = arrayOfQuesObj[i].question;
//     // console.log(questionSpan.textContent);
//     var correctAnswer = arrayOfQuesObj[i].correctAnswer;

//     /////////////////////////////////////
//     var checkAnswer = function (answer) {
//       optionButtonsWorkOne.addEventListener("click", function () {
//         console.log("testONE");
//         if (buttonAccess[0].textContent === answer) {
//           console.log("you clicked right!");
//           questionIndex++;
//           highScore++;
//           displayQuestion(questionIndex);
//         } else {
//           console.log("WRONG");
//           questionIndex++;
//           displayQuestion(questionIndex);
//         }
//       });

//       optionButtonsWorkTwo.addEventListener("click", function () {
//         console.log("testTWO");
//         if (buttonAccess[1].textContent === answer) {
//           console.log("you clicked right!");
//           questionIndex++;
//           highScore++;
//           displayQuestion(questionIndex);
//         } else {
//           console.log("WRONG");
//           questionIndex++;
//           displayQuestion(questionIndex);
//         }
//       });

//       optionButtonsWorkThree.addEventListener("click", function () {
//         console.log("testTHREE");
//         if (buttonAccess[2].textContent === answer) {
//           console.log("you clicked right!");
//           questionIndex++;
//           highScore++;
//           displayQuestion(questionIndex);
//         } else {
//           console.log("WRONG");
//           questionIndex++;
//           displayQuestion(questionIndex);
//         }
//       });

//       optionButtonsWorkFour.addEventListener("click", function () {
//         console.log("testFOUR");
//         if (buttonAccess[3].textContent === answer) {
//           console.log("you clicked right!");
//           questionIndex++;
//           highScore++;
//           displayQuestion(questionIndex);
//         } else {
//           console.log("WRONG");
//           questionIndex++;
//           displayQuestion(questionIndex);
//         }
//       });
//     };
//     //////////////////////////////

//     // console.log(correctAnswer);
//     // create variable to access possible answer array of each object
//     var possAnsArr = arrayOfQuesObj[i].possibleAnswers;
//     // console.log(possAnsArr);

//     for (var j = 0; j < possAnsArr.length; j++) {
//       buttonAccess[j].textContent = possAnsArr[j];
//       // console.log(buttonAccess[j]);
//     }

//     checkAnswer(correctAnswer);
//   };

//   displayQuestion(questionIndex);

//   // }
// }

// ====================================================
// create score variable (globally)
// start button
var startBtn = document.querySelector("#start-button");
// empty space after timer text
var timerCountdownSpan = document.querySelector("#time-left");
var questionSpan = document.querySelector("#question");
var score = 0;

//starting score
var score = 0;
//timer variable
var timeLeft = 15;
//set time interval variable to attach to timer later
var timeInterval;
var isPlaying = false;
var arrayOfQuesObj = [
  {
    question: "How many continents are there?",
    possibleAnswers: ["Ten", "Seven", "Eight", "Nine"],
    correctAnswer: "Seven",
  },
  {
    question: "What color is the sky?",
    possibleAnswers: ["Green", "Orange", "Blue", "Pumpkin"],
    correctAnswer: "Blue",
  },
  {
    question: "How much wood could a woodchuck chuck?",
    possibleAnswers: [11, 15, 7, 9],
    correctAnswer: 11,
  },
  {
    question: "What is the best thing to drink from?",
    possibleAnswers: ["Plate", "Bowl", "Spoon", "Cup"],
    correctAnswer: "Cup",
  },
  {
    question: "What is the capitol of of the USA?",
    possibleAnswers: ["Olympia", "Mexico", "Washington DC", "Congo"],
    correctAnswer: "Washington DC",
  },
];

//add event listener to start button
startBtn.addEventListener("click", function () {
  if (isPlaying) {
    // console.log("not playing");
    return;
  }
  isPlaying = true;
  // console.log("game started!");
  answerList();
  timerCountdownSpan.textContent = timeLeft;

  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerCountdownSpan.textContent = timeLeft;
      timeLeft--;
    } else if ((timeLeft = 0)) {
      console.log("ALL DONE");
      isPlaying = false;
    }
  }, 1000);
});

function answerList() {
  //user selection variable
  var userSelection;
  var ulForAnswers = document.querySelector("#listContainer");
  var buttonAccess = ulForAnswers.getElementsByTagName("button");
  for (var k = 0; k < buttonAccess.length; k++) {
    buttonAccess[k].addEventListener("click", function () {
      console.log(k);
    });
  }
  // console.log(buttonAccess[1]);
  //   var optionButtonsWork = document.getElementsByClassName(".optionButtons");
  var optionButtonsWorkOne = document.querySelector("#button-one");
  var optionButtonsWorkTwo = document.querySelector("#button-two");
  var optionButtonsWorkThree = document.querySelector("#button-three");
  var optionButtonsWorkFour = document.querySelector("#button-four");
  //for each object in array

  for (var i = 0; i < arrayOfQuesObj.length; i++) {
    questionSpan.textContent = arrayOfQuesObj[i].question;
    // console.log(questionSpan.textContent);
    var correctAnswer = arrayOfQuesObj[i].correctAnswer;
    // console.log(correctAnswer);
    // create variable to access possible answer array of each object
    var possAnsArr = arrayOfQuesObj[i].possibleAnswers;
    // console.log(possAnsArr);

    for (var j = 0; j < possAnsArr.length; j++) {
      buttonAccess[j].textContent = possAnsArr[j];
      // console.log(buttonAccess[j]);
    }

    function eventDesignations() {
      optionButtonsWorkOne.addEventListener("click", function () {
        console.log("testONE");
        if (buttonAccess[0].textContent === correctAnswer) {
          console.log("you clicked right!");
        } else {
          console.log("WRONG");
        }
      });

      optionButtonsWorkTwo.addEventListener("click", function () {
        console.log("testTWO");
        if (buttonAccess[1].textContent === correctAnswer) {
          console.log("you clicked right!");
        } else {
          console.log("WRONG");
        }
      });
      optionButtonsWorkThree.addEventListener("click", function () {
        console.log("testTHREE");
        if (buttonAccess[2].textContent === correctAnswer) {
          console.log("you clicked right!");
        } else {
          console.log("WRONG");
        }
      });
      optionButtonsWorkFour.addEventListener("click", function () {
        console.log("testFOUR");
        if (buttonAccess[3].textContent === correctAnswer) {
          console.log("you clicked right!");
        } else {
          console.log("WRONG");
        }
      });
    }
  }
}

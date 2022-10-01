
// create score variable (globally)
// start button
var startBtn = document.querySelector("#start-button");
// empty space after timer text
var timerCountdownSpan = document.querySelector("#time-left");
var questionSpan = document.querySelector("#question");



//starting score
var score = 0;
//timer variable
var timeLeft = 5;
//set time interval variable to attach to timer later
var timeInterval;
var isPlaying = false;
var arrayOfQuesObj = 
[{
    question: "How many continents are there?",
    possibleAnswers: ["Ten", "Seven", "Eight", "Nine"],
    correctAnswer: "Seven"
}, 
{
    question: "What color is the sky?",
    possibleAnswers: ["Green", "Orange", "Blue", "Pumpkin"],
    correctAnswer: "Blue"
},
{
    question: "How much wood could a woodchuck chuck?",
    possibleAnswers: [11, 15, 7, 9],
    correctAnswer: 11
},
{
    question: "What is the best thing to drink from?",
    possibleAnswers: ["Plate", "Bowl", "Spoon", "Cup"],
    correctAnswer: "Cup"
}];



//add event listener to start button
startBtn.addEventListener("click", function () {
    if (isPlaying) {
        // console.log("not playing");
        return;
    }
    isPlaying = true
    // console.log("game started!");
    answerList ();
    timerCountdownSpan.textContent = timeLeft;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerCountdownSpan.textContent = timeLeft;
            timeLeft--;
            
        } else if (timeLeft = 0) {
            console.log("ALL DONE")
            isPlaying = false;
            
        }
    }, 1000)
        

})

    function answerList () {
        //user selection variable
        var userSelection;


        
        //for array of objects[i]
            //questionSpan.textContent = arr[i].question
            //listForButtons.textContent = arr[i].possibleAnswers
        //for each object in array
        for (var i = 0; i < arrayOfQuesObj.length; i++) {
            var ulForAnswers = document.querySelector("#listContainer");
            //change question text to question from key of arrayOfQuestObj`
            questionSpan.textContent = arrayOfQuesObj[i].question;
            // console.log(questionSpan.textContent);
            // create variable to access possible answer array of each object
            var possAnsArr = arrayOfQuesObj[i].possibleAnswers;
            // console.log(possAnsArr);
            var listForButtons = document.createElement("li");
            //attach list items to ul
            ulForAnswers.appendChild(listForButtons);
            console.log(ulForAnswers);

            var listButton = document.createElement("button");
            listForButtons.appendChild(listButton);

            //iterate over array of possible answers
                for (var x = 0; x < possAnsArr.length; x++) {
                    listButton.textContent = possAnsArr[x];
                }
           
            var correctAnswer = arrayOfQuesObj[i].correctAnswer;
            // console.log(correctAnswer);
        }
    }

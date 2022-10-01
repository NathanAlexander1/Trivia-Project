
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

//add event listener to start button
startBtn.addEventListener("click", function () {
    if (isPlaying) {
        console.log("not playing");
        return;
    }
    isPlaying = true
    console.log("game started!");
    questionSpan.textContent = "How should I figure out how to cycle through questions?"
    timerCountdownSpan.textContent = timeLeft;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerCountdownSpan.textContent = timeLeft;
            timeLeft--;
            console.log(timerCountdownSpan);
            
        } else {
            console.log("game over!");
            isPlaying = false;
            
        }
    }, 1000)
        
    
})
    //when clicked call timer function
    //when clicked, call display function

//function timer
    //timer-- (refer back to activities)

//function to display:
// var userSelect; doesnt need to equal anything (or maybe make it equal to a click event)
        //first picture (array[0].image)
            //document.queryselector(image) - set image equal to celebrity eyeball (setAttribute)
        //four answer options
// for loop(looping over array of celebrities)
        //select ul var ul = doc.querySelector
            //var li = document.createElement("li")
            //var x = document.createElement("button")
            // x.textContent = array[0].celebrities[0]
            //li.appendChild(x)
//ul.appendChild(li)

// if userSelect on click === correct answer (somehow) 




//user guesses option
    //if that option is correct, display "great job"
    //add one to score
var highscoresOL = document.querySelector("#highscores");
var highscoreEntry = document.createElement("li");
highscoresOL.appendChild(highscoreEntry);




// function grabLocal () {
    var arrayOfScores = [];
    var displayHighScores = JSON.parse(localStorage.getItem("info"));
    
    // console.log(displayHighScores);
    var highscoreScore = displayHighScores.score;
    var highscoreInitials = displayHighScores.initials;
    var highScoreListItem = highscoreInitials + ": " + highscoreScore;
    // console.log(highScoreListItem);


function createScoreList () {
    var highscoresOl = document.querySelector("#highscores");
    var highscoreEntry = document.createElement("li");
    highscoreEntry.textContent = highScoreListItem;
    highscoresOl.appendChild(highscoreEntry);
    console.log(highscoresOL)
}


createScoreList ();
// for () {
// createScoreList ();
// }
    // for (var x = 0; x < arrayOfScores.length; i++){
    
    // // highscoresOL = document.createElement("li")

    // // document.appendChild("highscoresOL");

    // // highscoresOL.textContent = "EXAMPLE"
    // }
    
//   }

//   grabLocal();
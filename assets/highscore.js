function createScoreList (scoreListItem) {
    var highscoresOl = document.querySelector("#highscores");
    var highscoreEntry = document.createElement("li");
    highscoreEntry.textContent = scoreListItem;
    highscoresOl.appendChild(highscoreEntry);
}

// function grabLocal () {
    var arrayOfScores = [];
    var displayHighScores = JSON.parse(localStorage.getItem("info"));
    
    arrayOfScores.push(displayHighScores);

    for (var i = 0; i < arrayOfScores.length; i++) {
        var currentScoreObj = arrayOfScores[i]
        
        var currentScoreListItem = currentScoreObj.initials + ": " + currentScoreObj.score;

        createScoreList(currentScoreListItem);

    }
   
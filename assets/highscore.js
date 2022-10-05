function createScoreList (scoreListItem) {
    var highscoresOl = document.querySelector("#highscores");
    var highscoreEntry = document.createElement("li");
    highscoreEntry.textContent = scoreListItem;
    highscoresOl.appendChild(highscoreEntry);
}

function grabLocal () {
    var savedScores = JSON.parse(localStorage.getItem("info"));

    for (var i = 0; i < savedScores.length; i++) {
        var currentScoreObj = savedScores[i]
        
        var currentScoreListItem = currentScoreObj.initials + ": " + currentScoreObj.score;

        createScoreList(currentScoreListItem);

    }
}

grabLocal ();
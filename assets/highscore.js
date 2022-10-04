function displayList () {


}

//grab intial: score from local storage (getItem)
function grabLocal (initials, scorePlace) {
    var userScore = localStorage.getItem(initials, scorePlace);
    console.log(userScore);
}
grabLocal();

//creat a list itme and append to ol
function createListAndAppend () {

}


//set list item text content to the intial: score pair

//sort through each highscore and list from highest to lowest
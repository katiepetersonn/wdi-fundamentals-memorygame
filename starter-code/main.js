//alert ("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert = "You found a match!"
}
else {
	alert = "Sorry, try again."
}*/
//get an element with the id of game-board and set it to an element.
 var boardGame = document.getElementById ('game-board'); {

var createCards = function (){
//create a for loop that creates HTML elements for each card
	for (var i = 0; i<cards.length; i++) {
//each card should be a div.
	var cardElement = document.createElement('div');
//and have the class card
	cardElement.className = 'card';
//append each newly created card to the div.
	boardGame.appendChild(cardElement);
}

}
createCards();

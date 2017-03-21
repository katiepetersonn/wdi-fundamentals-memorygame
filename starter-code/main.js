//declare a variable, cards, and set it equal to an array of four string.
var cards = ['queen', 'queen', 'king', 'king'];

//declare a variable, cardsInPlay, whose value is an empty string.
var cardsInPlay = [];

var board = document.getElementById('game-board');

//set up each card with the createBoard function.
function createBoard() {

//loop through the cards array.
  for (var i=0; i<cards.length; i++) {
//div element that will be used as a card.
    var cardElement = document.createElement('div');
//add a class to the card element.
    cardElement.className = 'card';

//attribute that equals the card value.
    cardElement.setAttribute('data-card', cards[i]);
//click event listener to each card.
  cardElement.addEventListener('click', isTwoCards);

//append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

//check to see if there are cards in play. 

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
//show the card's image
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='css/king.png'>"; // king
  } else {
    this.innerHTML = "<img src='css/queen.png'>"; //queen
  }
//if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

//test if two cards in play are a match.
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
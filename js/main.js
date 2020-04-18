let cards = [
	{
		rank: 'queen',
		suit: 'hearts';
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds';
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts';
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds';
		cardImage: 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];

function checkForMatch() {
	let cardOne = cardsInPlay[0];
	let cardTwo = cardsInPlay[1];
	if(cardOne === cardTwo) {
		alert("You Found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped" + cards[cardId].rank);
	console.log("Suit is " + cards[cardId].suit);
	console.log("Card Image is " + cards[cardId].cardImage);
	cardsInPlay.push(card[cardId].rank);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);
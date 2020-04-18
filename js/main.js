let cards = ['queen','queen','king','king'];
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
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(card[cardId]);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);
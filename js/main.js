let cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];
let gameBoard = document.getElementById('game-board');

function randomizeCards() {
	let newCards = [];
	for(let i = 0; i < 3; i++) {
		let index = Math.floor(Math.random() * cards.length);
		console.log(index);
		newCards.push(cards.splice(index,1)[0]);
		console.log(cards);
	}
	newCards.push(cards.pop());
	cards = newCards;
}

function resetBoard() {
	cardsInPlay = [];
	randomizeCards();
	let cardsOnBoard = gameBoard.childNodes;
	for(let i = 0; i < cards.length; i++) {
		cardsOnBoard[i].setAttribute('src', 'images/back.png');
		cardsOnBoard[i].setAttribute('class', '');
	}
}

function createBoard() {
	randomizeCards();
	
	for(let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}

	let button = document.createElement('button');
	button.innerHTML = 'Reset';
	button.setAttribute('class','reset');
	button.addEventListener('click', resetBoard);
	gameBoard.appendChild(button);
}

function checkForMatch() {
	let cardOne = cardsInPlay[0];
	let cardTwo = cardsInPlay[1];
	if(cardOne === cardTwo) {
		setTimeout(function() {
			alert("You Found a match!");
		}, 250);
	} else {
		setTimeout(function() {
			alert("Sorry, try again.");
		}, 250);
	}
	//resetBoard();
}

function flipCard() {
	let id = this.getAttribute('data-id');
	let card = cards[id];
	this.setAttribute('src', card.cardImage);
	if(cardsInPlay.length < 2) {
		this.setAttribute('class', 'flipped');
	}
	console.log("User flipped" + card.rank);
	console.log("Suit is " + card.suit);
	console.log("Card Image is " + card.cardImage);
	cardsInPlay.push(card.rank);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

createBoard();
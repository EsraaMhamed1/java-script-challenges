'use strict';

let gridItems = document.getElementsByClassName('squere');
let currentTurn = 'x';
let gameOver = false;

let boardArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

for (const item of gridItems) {
	item.addEventListener('click', function () {
		if (gameOver) return;

		let value = item.getAttribute('value');
		let index = value - 1;
		if (boardArr[index] === 'x' || boardArr[index] === 'o') return;

		// ui
		let squeurContent = document.querySelector(`.squere[value = "${value}"]`);
		squeurContent.innerHTML = currentTurn;

		// ux

		boardArr[index] = currentTurn;
		evaluateBoard();
		if (currentTurn == 'x') {
			currentTurn = 'o';
		} else {
			currentTurn = 'x';
		}

		document.getElementById('instruction').innerHTML = `${currentTurn} turn`;
	});
}

function evaluateBoard() {
	if (
		// rows
		(boardArr[0] == boardArr[1] && boardArr[1] == boardArr[2]) ||
		(boardArr[3] == boardArr[4] && boardArr[4] == boardArr[5]) ||
		(boardArr[6] == boardArr[7] && boardArr[7] == boardArr[8]) ||
		// clomuns
		(boardArr[0] == boardArr[3] && boardArr[3] == boardArr[6]) ||
		(boardArr[1] == boardArr[4] && boardArr[4] == boardArr[7]) ||
		(boardArr[2] == boardArr[5] && boardArr[5] == boardArr[8]) ||
		// digonals
		(boardArr[2] == boardArr[4] && boardArr[4] == boardArr[6]) ||
		(boardArr[0] == boardArr[4] && boardArr[4] == boardArr[8])
	) {
		var winner = currentTurn == 'o' ? 'o' : 'x';
		gameOver = true;

		alertify.alert(`${winner}   wins 🎉`);
	}
	gameFinish();
}

function gameFinish() {
	var isDraw = true;
	for (let squere of boardArr) {
		if ((squere != 'x') & (squere != 'o')) {
			isDraw = false;
		}
	}

	if (isDraw) {
		alertify.alert('Game Over!');
	}
}

document.getElementById('reset').addEventListener('click', function () {
	reset();
});

function reset() {
	for (let item of gridItems) {
		let value = item.getAttribute('value');
		let squeurContent = document.querySelector(`.squere[value = "${value}"]`);
		squeurContent.innerHTML = '';

		boardArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	}
	gameOver = false;
	currentTurn = 'x';
	document.getElementById('instruction').innerHTML = `${currentTurn} turn`;
}

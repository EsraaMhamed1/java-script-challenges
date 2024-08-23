'use strict';
// let content = document.getElementById('title').innerHTML;

// function changetitle2(mouseover) {
// 	let content = 'Esraa eltehawy';

// 	if (mouseover == false) {
// 		content = 'Test';
// 	}
// 	document.getElementById('title-2').innerHTML = content;
// }

// document.getElementById('title').addEventListener('mouseover', function () {
// 	document.getElementById('title-2').innerHTML = 'Esraa eltehawy';
// 	// this.innerHTML = 'heloo';
// });
// document.getElementById('title').addEventListener('mouseout', function () {
// 	document.getElementById('title-2').innerHTML = 'Test';
// 	// this.innerHTML = 'heloo';
// });

// add aand delet elements in java script ;

// document.getElementById('ul').innerHTML += '<li>Esraa</li>';

// let liElement = document.createElement('li');
// let textContent = document.createTextNode('Esraa');
// liElement.appendChild(textContent);
// document.getElementById('ul').appendChild(liElement);

// document.getElementById('ul').removeChild(liElement);

// let khaledLi = document.getElementById('khaled-li');
// document.getElementById('ul').removeChild(khaledLi);

// challenge 54.2
let output = document.getElementById('output');
let isSend = false;

document.getElementById('btn').addEventListener('click', () => {
	if (!isSend) {
		isSend = true;
		output.innerHTML = '';
	}

	var input = document.getElementById('input').value;
	document.getElementById('output').innerHTML += ` ${input} <br>`;
});
output.addEventListener('mouseover', () => {
	if (isSend) {
		output.style.backgroundColor = 'green';
	} else {
		output.style.backgroundColor = 'red';
	}
});
output.addEventListener('mouseout', () => {
	output.style.backgroundColor = 'white';
});

document.getElementById('input').addEventListener('mouseout', () => {
	document.getElementById('current-input').innerHTML =
		document.getElementById('input').value;
});

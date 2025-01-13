'use strict';
// getting elements from dom
const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'Satisfied';

// attach events

ratingContainer.addEventListener('click', function (e) {
	if (e.target.parentNode.classList.contains('rating')) {
		// console.log(e.target.parentNode.classList.contains('rating'));
		removeActive();
		e.target.parentNode.classList.add('active');
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener('click', function () {
	panel.innerHTML = `
      <p class='heart'>💖</p> 
      <strong>Thank You!</strong> 
      <strong>Feedback: ${selectedRating} </strong>`;
});

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
}

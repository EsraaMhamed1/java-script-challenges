// 'use strict';
// const insert = document.getElementById('insert');

// window.addEventListener('keydown', function (e) {
// 	insert.innerHTML = `

//     <div class="key">
//       ${e.key === '' ? 'Space' : e.key}
//       </div>
//       <small class='title'>KeyCode</small>

//       <div class="key">
//       ${e.keyCode}
//       </div>
//       <small>Code</small>

//       <div class="key">

//       ${e.code}
//       </div>
//       `;
// });

const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
	// if its ' ' then put out Space or else put out whatever key is
	insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
});

// keyCode is deprecated

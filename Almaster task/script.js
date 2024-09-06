'use strict';

const studentList = document.getElementById('student-list');
const governorateFilter = document.getElementById('governorate-filter');
const genderFilter = document.getElementById('gender-filter');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('x-btn');

function renderCards(filteredStudents) {
	studentList.innerHTML = '';
	let displayCount = 0;
	for (let student of filteredStudents) {
		const card = `<div
            class="card" 
            id="card-${student.id}">
            <div class='card-content'>
              <div >
                <img
                  class="image"
                  src="${student.image}"
                  alt="${student.gender}"
                />
              </div>
              <div class='info' >
                <span>Name: 
                   <strong>
                     ${student.name}
                  </strong>
                </span>
                <span>Age: 
                   <strong>
                       ${student.age}
                    </strong>
                    </span>
              </div>
            </div>
          </div>`;
		studentList.insertAdjacentHTML('beforeend', card);
		displayCount++;
	}
	addEventListeners(filteredStudents);
	updateResult(displayCount);
}

function showDetails(student) {
	studentList.innerHTML = `
      <div class="student-details">
        <div id="close-details">
          <button >
             <img class='btn' src='./assets/arrow-back.svg' alt=''/>
          </button>
        </div>
        <img class="student-img" src="${student.image}" alt="${student.gender}"/>
        <div class="student-info">
        <h3><strong>Name :</strong> ${student.name}</h3>
        <p><strong>Age :</strong> ${student.age}</p>
        <p><strong>Adress :</strong> ${student.address}</p>
        <p><strong>Gender: </strong> ${student.gender}</p>
        <p>Phone Number :</strong> ${student.phoneNumber}</p>
        </div>
      </div>
    `;
	document
		.getElementById('close-details')
		.addEventListener('click', () => renderCards(students));
}

const addEventListeners = (filteredStudents) => {
	for (let student of filteredStudents) {
		document
			.getElementById(`card-${student.id}`)
			.addEventListener('click', () => {
				showDetails(student);
			});
	}
};

/** filter students */

function filterStudents() {
	const selectedGender = genderFilter.value;
	const selectedGovernorate = governorateFilter.value;
	const searchQuery = searchInput.value.toLowerCase();

	const filteredStudents = students.filter(function (student) {
		const genderMatch =
			selectedGender === '' || student.gender === selectedGender;
		const governorateMatch =
			selectedGovernorate === '' || student.address === selectedGovernorate;
		const nameMatch = student.name.toLowerCase().includes(searchQuery);

		return genderMatch && governorateMatch && nameMatch;
	});

	renderCards(filteredStudents);
}
searchInput.addEventListener('input', filterStudents);

renderCards(students);

/** clear btn  */

clearBtn.addEventListener('click', function () {
	searchInput.value = '';
	genderFilter.value = '';
	governorateFilter.value = '';
	renderCards(students);
});

/* show result */

function updateResult(count) {
	const resultCountEle = document.getElementById('result-count');
	resultCountEle.textContent = `${count} result${count !== 1 ? 's' : ''}`;
}

/** sort by row  */
document.getElementById('sort-btn-rows').addEventListener('click', function () {
	const container = document.getElementById('student-list'); // Removed extra space

	if (container.classList.contains('grid-layout')) {
		container.classList.remove('grid-layout');
		container.classList.add('card');
	}
	/*animation */
	anime({
		targets: '.card',
		width: '100%',
		easing: 'easeInOutQuad',
		direction: 'normal',
	});
});

// /** sort by col */ default view
document.getElementById('sort-btn-cols').addEventListener('click', function () {
	renderCards(students);
});

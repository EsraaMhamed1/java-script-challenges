let tasks = [
	{ title: 'finish data cience course', date: '15/8/2024', isDone: false },
];

function getTasksFromStorage() {
	let retrievedTasks = JSON.parse(localStorage.getItem('tasks'));

	tasks = retrievedTasks ?? [];
}
getTasksFromStorage();

function FillTasksOnThePage() {
	let index = 0;
	document.getElementById('tasks').innerHTML = '';
	for (let task of tasks) {
		let content = `<!-- task -->
            <div
                class="task  ${task.isDone ? 'done' : ''}"

            >
                <!-- task info -->
                <div
                class="task-info"
                >
                    <h3 style=' margin-bottom:5px;'>${task.title}</h3>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#000000"
                        >
                            <path
                                d="M480.21-384q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5ZM216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Z"
                            />
                        </svg>
                        ${task.date}
                    </span>
                </div>
                <!-- task info -->

                <!-- task actions  -->
                <div 
                    id="btns"
                >
                    <button
                             class="del-btn"
                             onClick='deleteTask(${index})'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#e8eaed"
                        >
                            <path
                                d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm72-144h72v-336h-72v336Zm120 0h72v-336h-72v336Z"
                            />
                        </svg>
                    </button>
                     ${
												task.isDone
													? `
                        <button

                        onClick='toggelTaskCompletion(${index})'
                        class="done-btn"
                        
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px" fill="#e8eaed">
                            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                    </button>
                                `
													: `
                     <button

                        onClick='toggelTaskCompletion(${index})'
                        class="done-btn"
                        style="
	                        background-color: rgb(5, 150, 5) ; 
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path
                                d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"
                            />
                        </svg>
                    </button>
                     `
											}

                    <button
                        id="edit-btn"
                    onClick="editTask(${index})"
                       
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#e8eaed"
                        >
                            <path
                                d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z"
                            />
                        </svg>
                    </button>
                </div>
                <!-- task actions  -->
            </div>
            <!-- task -->
                     `;
		document.getElementById('tasks').innerHTML += content;
		index++;
	}
}
FillTasksOnThePage();
document.getElementById('add-btn').addEventListener('click', function () {
	let taskNAme = prompt('Enter new task');
	let currentDate = new Date().toLocaleDateString('en-GB');
	let taskJson = {
		title: taskNAme,
		date: currentDate,
		isDone: false,
	};
	tasks.push(taskJson);
	storeTask();
	FillTasksOnThePage();
});

function deleteTask(index) {
	let task = tasks[index];
	let isConfirmed = confirm('Are you sure delete ' + task.title + ' ?');
	if (isConfirmed) {
		tasks.splice(index, 1);
		storeTask();
		FillTasksOnThePage();
	}
}

function editTask(index) {
	let task = tasks[index];
	let taskUpdate = prompt('Enter task title : ', task.title);
	task.title = taskUpdate;
	storeTask();
	FillTasksOnThePage();
}

function toggelTaskCompletion(index) {
	let task = tasks[index];
	task.isDone = !task.isDone;
	storeTask();
	FillTasksOnThePage();
}

// storage function
function storeTask() {
	let taskSting = JSON.stringify(tasks);
	localStorage.setItem('tasks', taskSting);
}

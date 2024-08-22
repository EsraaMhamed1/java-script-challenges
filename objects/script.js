'use strict';

// 2d array

// var students = [
// 	['khaled', 'omar', 'mohamed', 'sami'],
// 	[15, 16, 17, 16],
// 	['2000', '2001', '2002', '2003'],
// ];
// console.log('the name is :' + students[0]);
// console.log('the age is :' + students[1]);
// console.log('the birth date is :' + students[2]);

// object

// let student = {
// 	firstName: 'Esraa',
// 	lastName: 'Mohamed',
// 	age: '22',
// 	birthDate: '2001',
// 	fullName: function () {
// 		return this.firstName + ' ' + this.lastName;
// 	},
// };

// console.log(student.fullName());

//  edit key value pair to object

// console.log(student.birthDate);
// student.birthDate = '2000';
// console.log(student.birthDate);

// Add key
// student.gender = 'female';
// console.log(student.gender);

// delet key
// delete student.age;
// console.log(student);

// composition objects on array => array of objects
var students = [
	{ name: 'khaled', age: 15, birthDate: '2000' },
	{ name: 'omar', age: 16, birthDate: '20001' },
	{ name: 'mohamed', age: 17, birthDate: '2003' },
	{ name: 'sami', age: 16, birthDate: '2002' },
];

// console.log(students);

// challenge on objects
for (let student of students) {
	let content = `<tr> <td>${student.name}</td> <td>${student.age}</td><td>${student.birthDate}</td></tr>`;
	document.getElementById('students').innerHTML += content;
}

// var person = {
// 	name: 'Andrew',
// 	age: 21
// };
//
// function updatePerson(obj){
// 	// obj = {
// 	// 	name: 'Andrew',
// 	// age: 24
// 	// 	}; // These lines of code don't update the original
//
// obj.age = 24; // this updates the origian
// }
//
// updatePerson(person);
// console.log(person);

//Array Example

var grades = [15, 37];

function addGrade(grades) {
	grades.push('50'); // does update the original grades array
	debugger;
	//grades = [12,14,20]; //doesn't update the original grades array
}

addGrade(grades);

console.log(grades);
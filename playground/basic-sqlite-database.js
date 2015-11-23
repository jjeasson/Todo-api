var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined,{
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250] //description must be between 1 and 250 characters
		}
	},
	completed:{
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});

sequelize.sync({
	//force: true
}).then(function(){ // a promise
	console.log('Everything is synced');
	
	Todo.findById(3).then(function(todo){
		if (todo) {
				console.log(todo.toJSON());
			} else {
				console.log('no todo found');
			}
	});
	
	
	// Todo.create({
// 		description: 'Take out trash',
// 	}).then(function(todo){
// 		return Todo.create({
// 			description: 'Clean office'
// 		});
// 	}).then(function(){
// 		// return Todo.findById(1)
// 		return Todo.findAll({
// 			where: {
// 				description: {
// 					$like: '%Office%'
// 				}
// 			}
// 		});
// 	}).then (function(todos){
// 		if (todos) {
// 			todos.forEach(function(todo){
// 				console.log(todo.toJSON());
// 			});
// 		} else {
// 			console.log('no todos found');
// 		}
// 	}).catch(function(e){
// 		console.log(e);
// 	});
});
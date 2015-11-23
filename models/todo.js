// the todo model is defined

module.exports = function(sequelize, DataTypes){
	return sequelize.define('todo', {
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250] //description must be between 1 and 250 characters
			}
		},
		completed:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});	
};
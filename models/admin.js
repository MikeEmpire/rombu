module.exports = function(sequelize, Sequelize) {
	var Admin = sequelize.define('Admin', {
	    username: {
	        type: Sequelize.STRING,
	        allowNull: false,
	        unique: true
	    },
	    password: {
	        type: Sequelize.STRING,
	        allowNull: false
	    }
	});
	return Admin;
};

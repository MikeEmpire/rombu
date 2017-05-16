module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define('User', {
	    name: {
	        type: Sequelize.STRING,
	        allowNull: false
	    },
	    company: {
	        type: Sequelize.STRING
	    },
	    email: {
	        type: Sequelize.STRING,
	        allowNull: false,
	        unique: true,
	        validate: {
	            isEmail: true
	        }
	    },
	    message: {
	        type: Sequelize.TEXT
	    }
	});
	return User;
};

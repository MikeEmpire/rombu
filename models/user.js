module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define('User', {
	    name: {
	        type: Sequelize.STRING,
	        allowNull: false
	    },
	    email: {
	        type: Sequelize.STRING,
	        allowNull: false,
	        unique: true,
	        validate: {
	            isEmail: true
	        }
	    },
	    subject: {
	        type: Sequelize.STRING
	    },
	    message: {
	        type: Sequelize.TEXT
	    }
	});
	return User;
};

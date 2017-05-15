module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
	    name: {
	        type: Sequelize.STRING,
	        allowNull: false,
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
};

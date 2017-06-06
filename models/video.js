module.exports = function(sequelize, Sequelize) {
	var Video = sequelize.define('Video', {
	    name: {
	        type: Sequelize.STRING,
	        allowNull: false
	    },
	    company: {
	        type: Sequelize.STRING,
	    },
	    url: {
	        type: Sequelize.STRING,
	        allowNull: false
	    },
			videoType: {
				type: Sequelize.STRING,
				allowNull: false
			},
	    description: {
	        type: Sequelize.TEXT
	    },
	    featured: {
	    		type: Sequelize.BOOLEAN,
	    		allowNull: false
	    }
	});
	return Video;
};

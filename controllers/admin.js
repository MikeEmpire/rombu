var express = require('express');

var router = express.Router();

// IMPORT MODELS HERE

router.get('/', function(req, res) {
	res.send("Admin");
});


module.exports = router;
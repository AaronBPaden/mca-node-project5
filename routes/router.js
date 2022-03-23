"use strict";
const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
	switch(req.url) {
		case '/favicon.ico':
			res.end();
		default:
			res.status(404).render('pages/404', {
				title: '404 Error',
				name: '404 Error'
			});
	}
});

module.exports = router;

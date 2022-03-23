"use strict";
const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API = 'https://api.sampleapis.com/simpsons/characters';

router.get('/', (req, res) => {
	fetch(API)
		.then(res => res.json())
		.then(data => res.render('pages/characters', {
			title: 'Simpsons Characters',
			name: 'Simpsons Characters',
			data
		}));
});

module.exports = router;

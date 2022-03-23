"use strict";
const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API = 'https://api.sampleapis.com/simpsons/episodes';

router.get('/', (req, res) => {
	fetch(API)
		.then(res => res.json())
		.then(data => res.render('pages/episodes', {
			title: 'Simpsons Episodes',
			name: 'Simpsons Episodes',
			data
		}));
});

router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetch(`${API}/${id}`)
		.then(res => res.json())
		.then(data => res.render('pages/single-episode', {
			title: data.name,
			name: data.name,
			data
		}));
});

module.exports = router;

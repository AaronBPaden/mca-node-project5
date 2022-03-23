"use strict";
const express = require('express');
const router = express.Router();
const API = 'https://api.sampleapis.com/simpsons/products';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', (req, res) => {
	fetch(API)
		.then(res => res.json())
		.then(data => res.render('pages/products', {
			title: "Simpsons Products",
			name: "MERCH",
			data
		}));
});

router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	fetch(`${API}/${id}`)
		.then(res => res.json())
		.then(data => res.render('pages/single-product', {
			title: data.name,
			name: data.name,
			data
		}));
});

module.exports = router;

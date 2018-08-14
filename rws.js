#!/usr/bin/env node

const rs = require('@workmarket/rowanscript').default;
const getData = require('./utils/getData');
const getProg = require('./utils/getProg');

Promise.all([getData, getProg])
	.then(all => {
		const data = all[0];
		const prog = all[1];

		const result = rs(prog)(data);
		console.log(JSON.stringify(result, null, 2));
	})
	.catch(console.error);

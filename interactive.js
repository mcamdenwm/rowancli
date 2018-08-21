#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: `> `,
});

rl.prompt();

rl.on('line', (code) => {
	let parsedCode;
	let result;

	try {
		parsedCode = JSON.parse(code);
	} catch (error) {
	}

	console.log('Got', code);

	rl.prompt();
}).on('close', () => {
	process.exit(0);
});
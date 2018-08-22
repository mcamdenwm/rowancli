#!/usr/bin/env node

const rs = require('@workmarket/rowanscript').default;
const jsome = require('jsome');
const readline = require('readline');
const ttys = require('ttys');

const getData = require('./utils/getData');
const getProg = require('./utils/getProg');

const isArray = rs([':isArray']);
const isObject = rs([':isObject']);

function prompt(rli, inData) {
	rli.question('> ', function (ttyProg) {
		if (ttyProg === 'quit') {
			rli.close();
			process.exit(0);
		}

		try {
			const result = rs(JSON.parse(ttyProg))(inData);
			jsome(result);
		} catch (e) {
			console.error('Expression failed: ', e.message);
		}

		prompt(rli, inData);
	});
}

Promise.all([getData, getProg])
	.then(all => {
		const data = all[0];
		const prog = all[1];

		if (':tty' === prog) {
			console.log('Operating on...');
			const displayData = {};

			Object.keys(data).forEach(k => {
				let val = '...';
				
				if (isObject(data[k])) {
					val = '{ ... }';
				}

				if (isArray(data[k])) {
					val = '[ ... ]';
				}

				displayData[k] = val;
			});

			jsome(displayData);

			const rli = readline.createInterface(ttys.stdin, ttys.stdout)

			console.log('Welcome to the TTY interface, type "quit" to end the session');

			prompt(rli, data);

		} else {
			const result = rs(prog)(data);
			console.log(JSON.stringify(result, null, 2));
			process.exit(0); // Pipe-able
		}
	})
	.catch(console.error);

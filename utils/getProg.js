const fs = require('fs');

module.exports = new Promise((rs, rj) => {
	let prog = process.argv[2];

	if (process.stdin.isTTY) {
		prog = process.argv[3];
	}

	if (prog) {
		if (!fs.existsSync(prog)) {
			return rj('Unable to find prog ', prog);
		}

		fs.readFile(prog, 'utf8', (e, data) => {
			if (e) {
				return rj('Unable to prog ', prog, e);
			}

			rs(JSON.parse(data));
		});		
	}
	else {
		rs(':tty');
	}
});
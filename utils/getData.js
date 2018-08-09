module.exports = new Promise((rs, rj) => {
	if (process.stdin.isTTY) {
		const ttyData = process.argv[2];

		if (ttyData && ttyData.length) {
			rs(ttyData);
		} else {
			rj('Need some data');
		}
	} else {
		process.stdin.setEncoding('utf8');

		let buffer = '';

		process.stdin.on('readable', () => {
			const chunk = process.stdin.read();
			if (chunk !== null) {
				buffer += chunk;
			}
		});

		process.stdin.on('error', e => rj(e));

		process.stdin.on('end', () => {
			let data = JSON.parse(buffer);

			if (!data && process.argv[3]) {
				data = JSON.parse(process.argv[3]);
			}

			return rs(data);
		});
	}
});
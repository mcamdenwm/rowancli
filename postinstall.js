const fs = require('fs');

const binPath = '/usr/local/bin';
const installPath = `${binPath}/rws`;
const localPath = fs.realpathSync('./rws.js');

fs.exists(installPath, (exists) => {
	if (exists) {
		console.info(`rs found in ${binPath}, skipping link`);
		process.exit(0);
	} else {
		fs.symlink(localPath, installPath, (e) => {
			if (e) {
				console.error(`Unable to symlink rws to ${instalPath}`, e);
				process.exit(1);
			}
			else {
				console.info(`rws is now available in ${binPath}`);
			}
		})
	}
})
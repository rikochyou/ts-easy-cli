const { version } = require('../package.json')
const currentPlatformKey = process.platform === 'win32' ? 'USERPROFILE' : 'HOME'
const downloadDirPath = `${process.env[currentPlatformKey]}\\.ts-template`
// console.log(downloadDirPath)
module.exports = {
	version,
	downloadDirPath
}
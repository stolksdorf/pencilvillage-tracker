module.exports = require('pico-conf')
	.argv().env()
	.defaults(require('./default.js'))
	.file(`./${process.env.NODE_ENV}.js`);
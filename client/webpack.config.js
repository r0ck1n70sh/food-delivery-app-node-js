const path = require('path')
const hwp = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist'),
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new hwp({
			template: path.join(__dirname, "/src/index.html")
		})
	]
}

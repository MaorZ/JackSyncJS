module.exports = {
	entry: './src/app.ts',
	output: {
		filename: 'dist/index.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '']
	},
	module: {
		loaders: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	}
};
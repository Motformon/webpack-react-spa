const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { SRC_DIR, reStyle } = require('../env');

module.exports = {
	client: {
		test: reStyle,
		rules: [
			{
				loader: 'style-loader', 
			},
			{
				exclude: SRC_DIR,
				loader: "css-loader",
			},
			{
				include: SRC_DIR,
				loader: "css-loader",
				options: {
					importLoaders: 1,
					modules: true,
					localIdentName: '[local]___[hash:base64:5]'
				},
			},
			{
				test: /\.(scss|sass)$/,
				loader: 'sass-loader'
			},
		],



		// {
		// 	test: /\.css$/,
		// 	use: [
		// 		MiniCssExtractPlugin.loader, 
		// 		"css-loader",
		// 	]
		// },
		// {
		// 	test: /\.css$/,
		// 	use: [
		// 		'style-loader', 
				// {
				// 	loader: "css-loader",
				// 	options: {
				// 		modules: true,
				// 		localIdentName: "[local]___[hash:base64:5]"
				// 	}
				// },
		// 	]
		// },
		// {
		// 	test: /\.scss$/,
		// 	use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		// },
	},
};
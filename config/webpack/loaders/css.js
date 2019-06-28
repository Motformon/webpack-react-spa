const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { SRC_DIR, reStyle } = require('../env');

module.exports = {
	client: {
		test: reStyle,
		rules: [
			{
				loader: MiniCssExtractPlugin.loader, 
			},
			{
				exclude: SRC_DIR,
				loader: "css-loader",
			},
			{
				include: SRC_DIR,
				loader: "css-loader",
				options: {
					importLoaders: 2,
					modules: true,
					localIdentName: '[local]___[hash:base64:5]'
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					config: {
						path: './config/webpack/postcss.config.js',
					},
				},
			},
			{
				test: /\.(scss|sass)$/,
				loader: 'sass-loader'
			},
		],

	},
};
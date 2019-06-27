const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	client: [
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		},
		{
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		},
	],
};
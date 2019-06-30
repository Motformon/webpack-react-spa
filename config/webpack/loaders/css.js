const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	client: 
	[
		{
			test: /\.css$/,
			loaders: [
				MiniCssExtractPlugin.loader, 
				{
				loader: "css-loader",
					options: {
						importLoaders: 2,
						modules: true,
						localIdentName: '[local]___[hash:base64:5]'
					}
				},
			
				{
					loader: 'postcss-loader',
					options: {
						config: {
							path: './config/webpack/postcss.config.js',
						},
					},
				},
			]
		},

		{
			test: /\.(scss|sass)$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader, 
				}, 
				{
					loader: "css-loader"
				}, 
				{
					loader: "sass-loader"
				}
			]
		}
	]
	// {




		
		// test: reStyle,
		// rules: [
		// 	{
		// 		// loader: MiniCssExtractPlugin.loader, 
		// 		loader: 'style-loader', 
		// 	},
		// 	// {
		// 	// 	include: SRC_DIR,
		// 	// 	loader: "css-loader",
		// 	// },
		// 	{
		// 		// exclude: SRC_DIR,
		// 		loader: "css-loader",
		// 		options: {
		// 			// importLoaders: 2,
		// 			modules: true,
		// 			localIdentName: '[local]___[hash:base64:5]'
		// 		},
		// 	},

		// 	// {
		// 	// 	loader: 'postcss-loader',
		// 	// 	options: {
		// 	// 		config: {
		// 	// 			path: './config/webpack/postcss.config.js',
		// 	// 		},
		// 	// 	},
		// 	// },
		// 	// {
		// 	// 	loader: 'sass-loader'
		// 	// },
		// ],

	// },
};
module.exports = {
	client: [
		{ 
			test: /\.(js|jsx|ts|tsx)$/, 
			exclude: /node_modules/, 
			loader: "babel-loader" 
		}
	],
};
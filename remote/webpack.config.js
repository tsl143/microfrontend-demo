const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
	entry: "./src/index",
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 3002,
	},
	output: {
		publicPath: "auto",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "remote1",
			library: { type: "var", name: "remote1" },
			filename: "remoteEntry.js",
			exposes: {
				"./SharedComponent": "./src/SharedComponent",
			},
			shared: { react: { singleton: true }, "react-dom": { singleton: true } },
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

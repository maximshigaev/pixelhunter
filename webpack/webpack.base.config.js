const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATHS = {
	src: path.join(__dirname, "../src"),
	build: path.join(__dirname, "../build")
};

module.exports = {
	context: path.resolve(__dirname, "./src"),

	externals: {
		paths: PATHS
	},

	entry: {
		bundle: `${PATHS.src}/index.js`
	},

	output: {
		filename: "./js/[name].js",
		path: PATHS.build
	},

	watch: true,

	module: {
		rules: [
			// {
			// 	enforce: "pre",
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: "eslint-loader"
			// 	}
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0"]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { sourceMap: true }
					},
					"postcss-loader",
					{
						loader: "sass-loader",
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: {
					loader: "url-loader",
					options: {
						name: "[name].[ext]",
						outputPath: `${PATHS.build}/img`
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: "url-loader",
					options: {
						name: "[name].[ext]",
						outputPath: `${PATHS.build}/fonts`
					}
				}
			}
			// {
			// 	test: /test\.js$/,
			// 	use: "mocha-loader",
			// 	exclude: /node_modules/
			// }
			// {
			// 	test: /\.svg$/,
			// 	loader: "svg-sprite-loader",
			// 	include: /.*sprite\.svg/
			// }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/index.html`
		}),
		new MiniCssExtractPlugin({
			filename: "css/style.css"
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/img`, to: `${PATHS.build}/img` },
			{ from: `${PATHS.src}/fonts`, to: `${PATHS.build}/fonts` }
		])
	],
	resolve: {
		extensions: [".js", ".json", ".jsx", "*"]
	}
};

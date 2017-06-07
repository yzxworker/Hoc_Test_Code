var webpack=require('webpack');
var ExtTxtPlugin=require('extract-text-webpack-plugin');

// var HtmlWebpackPlugin = require("html-webpack-plugin"); 监控html
// npm install html-webpack-plugin  --save-dev

module.exports={
	entry:'./js/main.jsx',
	output:{
		path:'dist/js',
		filename:'[name].js',
		publicPath:'dist/js'
	},
	module:{
		loaders:[
			{ test:/\.js$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']} },
			{ test:/\.jsx$/,loader:'babel-loader',exclude:/node_modules/,query:{compact:false,presets:['es2015','react']} },
			{ test:/\.css$/,loader:ExtTxtPlugin.extract('style-loader',"css-loader") },
			{ test:/\.(png)|(jpg)$/,loader:"url?limit=50000" },
			{ test:/\.scss$/,loader:ExtTxtPlugin.extract('style-loader',"css-loader",'scss-loader') }
		]
	},
	plugins:[
		new ExtTxtPlugin("../css/style.css"),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		// new HtmlWebpackPlugin({
		// 	template:'index.html',
		// 	filename:'../../index.html'       监控html
		// }),
	]
}
/*
 * @Author: your name
 * @Date: 2021-12-24 11:19:09
 * @LastEditTime: 2021-12-27 11:11:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/webpack.config.js
 */
// /*
//  * @Author: your name
//  * @Date: 2021-12-24 11:19:09
//  * @LastEditTime: 2021-12-24 18:05:09
//  * @LastEditors: Please set LastEditors
//  * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  * @FilePath: /santa_game/webpack.config.js
//  */
const path = require("path")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_DEV = process.env.NODE_ENV !== "production";
const distDir = IS_DEV ? "public" : "dist";
const pkg = require("./package.json");

var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');


module.exports = {
    mode: IS_DEV ? "development" : "production",
    devtool: IS_DEV ? "eval-source-map" : "none",
    entry: './src/game.ts',
    output: {
        publicPath: distDir,
        filename: IS_DEV? "bundle.js" : `santa-${pkg.version}.min.js`,
        path: path.resolve(__dirname, distDir),
    },
    resolve: {
		extensions: [".ts", ".js"],
        alias: {
            phaser: phaser
          }
	},
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader', exclude: '/node_modules/' },
        //   { test: /phaser\.js$/, use: 'expose-loader?Phaser' }
        ]
      },
    devServer: {
		// contentBase: path.join(__dirname, distDir),
        static: {
          directory: path.resolve(__dirname, './')},
        // publicPath: distDir,
        compress: true,
        host: "0.0.0.0",
        port: 1024,
        open: true,
        hot: true
	},
    plugins: [
      // new CleanWebpackPlugin([`${distDir }`]),
        // npmjs.com/package/friendly-errors-webpack-plugin
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`Your application is running here: http://localhost:1024/`],
			},
			clearConsole: true,
		}),
    new HtmlWebpackPlugin()
	],
	performance: {
		hints: false,
	},

}



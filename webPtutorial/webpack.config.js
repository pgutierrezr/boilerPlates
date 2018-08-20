const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle.[contenthash].js',
        path: path.resolve(__dirname, './build'),
        publicPath:''
    },
    mode: 'none',
    module:{
        rules: [
          
            {
                test:/\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
            ,
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            filename:'style.[contenthash].css'
        }),
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            title: 'Mother Fucker!!',
            filename:'mtfk.html',
            meta: {
                viewport: 'width = device-width, initial-scale=2'
            }
        })
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PLUGINS = [
    new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, 'src', 'index.html')
        }
    ),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename: 'index.css'
    })
];

const LOADERS = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
];

module.exports = {
    entry: {
        index: path.resolve(__dirname,'src','index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "index.js"
    },
    mode: 'development',
    devServer: {
        port: 3000,
        open: true
    },
    plugins: PLUGINS,
    module: {
        rules: LOADERS
    }
}
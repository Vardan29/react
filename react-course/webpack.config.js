const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGINS = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
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
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['url-loader'],
    }
];

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "main.js"
    },
    mode: 'development',
    plugins: PLUGINS,
    module: {
        strictExportPresence: true,
        rules: LOADERS
    },
    devServer: {
        historyApiFallback: true,
        contentBase: '/',
        port: 3000,
        open: true,
        hot: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            core: path.resolve(__dirname, 'src/core/'),
            store: path.resolve(__dirname, 'src/store/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            components: path.resolve(__dirname, 'src/components/')
        }
    }
};

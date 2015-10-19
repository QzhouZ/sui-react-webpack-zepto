var getWebpackConfig = require('./webpack.config');
module.exports = getWebpackConfig({environment: 'dev'});

/*

var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './www_src/view/app.js'
    ],
    output: {
        path: path.join(__dirname, 'www/js'),
        filename: 'bundle.js',
        publicPath: '/www/js/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.coffee'],
        alias: {
            lib: path.join(__dirname, "./www_src/lib"),
            view: path.join(__dirname, "./www_src/view")
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};*/

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
    var config = {
        entry: [
            './www_src/app.js'
        ],
        output: {
            path: path.join(__dirname, 'www/js'),
            filename: 'bundle.js',
            publicPath: '../js/' // 当前url，比如www/view/info.html，那么路径就是www/js/
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
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
            // Webpack压缩代码的时候，React官方提供的代码已经是合并的, 可以通过以下插件优化
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            })
        ]
    };

    // 开发模式
    if (options.environment === 'dev') {
        // config.devtool = 'source-map';
       /* Array.prototype.unshift.call(
            config.entry,
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server'
        );
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ];
        config.output.publicPath = '/www/js/';
        config.module.loaders[0].loaders.unshift('react-hot');*/
    }
    return config;
};
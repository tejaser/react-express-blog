var webpack = require('webpack');
var path = require('path');
var commonPlugin = new webpack.optimize.CommonChunkPlugin('common.js');

module.exports = {
    devtool: 'eval';
    entry: {

    },
    output: {
        path: path.join(__dirname, './public/javascripts/dist'),
        filename: '[name].js',
    },
    resolve: {
        extentions: ['', '.js', '.es6', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    plugins: [
        commonsPlugin
    ]
};

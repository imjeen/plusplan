
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var Uglify = require("webpack/lib/optimize/UglifyJsPlugin");

var appTypeName =  "app"; // app or demo

module.exports = {
    // cache: true,
    context: __dirname, // default: process.cwd()
    entry:{
    	entryMain: "./" + appTypeName + "/js/main.js",
        vendor: ['jquery','underscore','backbone']
    },
    output: {
        path: "./" + appTypeName + "/build",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            // Extract css files
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" 
            },
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery"
        // }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.Uglify()
    ],
    resolve: {
        // for resolve, e.g: require('jquery')
        alias:{
            jquery:         __dirname + "/app/bower_components/jquery/dist/jquery.js",
            underscore:     __dirname + "/app/bower_components/underscore/underscore.js",
            backbone:       __dirname + "/app/bower_components/backbone/backbone.js"
        }

    }
};
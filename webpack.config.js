const webpack = require('webpack');
var path = require('path');
var EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
    entry: {
        customIcons: "./js/customIcons.js",
    },
    output: {
        libraryTarget: "var",
        filename: "[name].js"
    },
    resolve: {
        root: path.resolve("./"),
        alias: {
            "OfficeFabric": path.resolve( __dirname, "node_modules", "office-ui-fabric-react", "lib-amd"),
            "react-dom":    path.resolve( __dirname, "node_modules", "react-dom"),
            "react":    path.resolve( __dirname, "node_modules", "react"),
            "jquery":    path.resolve( __dirname, "node_modules", "jquery"),
        }
    },
    plugins: [
        new EncodingPlugin({
            encoding: 'utf-8'
        }),
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            "window.jQuery":"jquery"
        }),
    ]
};
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CssoWebpackPlugin = require('csso-webpack-plugin').default;

var baseConfig = {
    entry: {
        app: './src/app.js'
    },
    module: {
        rules: [{
            test: /\.postcss$/,
            use: ExtractTextPlugin.extract(
                [
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => ([
                                require("postcss-import"),
                                require("postcss-cssnext"),
                            ]),
                        },
                    },
                ]
            ),
        }, ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new CssoWebpackPlugin(),
    ]
}

module.exports = baseConfig;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}
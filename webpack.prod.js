const TerserPlugin = require('terser-webpack-plugin');
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {
    mode: 'production',

    output: {
        path: path.resolve( __dirname, 'js' ),
        filename: 'app.min.js'
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },

    devtool: 'source-map'
} );

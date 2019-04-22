const path = require( 'path' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, { 
    mode: 'development',

    output: {
        path: path.resolve( __dirname, 'js' ),
        filename: 'app.js'
    },

    devtool: 'source-map'
} );
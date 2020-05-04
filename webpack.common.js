const path = require( 'path' );

module.exports = {
    entry: './src/js/app.js',

    output: {
        sourceMapFilename: '../src/js/sourcemaps/[file].map'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, './'), 
                    /\/node_modules\/@superstructure.net\/m/,
                    /\/node_modules\/@superstructure.net\/e/,
                    /\/node_modules\/@superstructure.net\/c/
                ],                
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    externals: {},

    plugins: []
};

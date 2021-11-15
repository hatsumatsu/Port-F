const webpack = require('webpack');
const webpackConfigDev = require('../webpack.dev.js');
const webpackConfigProduction = require('../webpack.prod.js');

const postcss = require('postcss');

module.exports = {
    // JS
    devBuildJS: function () {
        webpack(webpackConfigDev, (error, stats) => {
            if (error || stats.hasErrors()) {
                console.error(err);
            }

            console.log(
                `Compiled ${stats.compilation.outputOptions.filename} in ${
                    stats.compilation.endTime - stats.compilation.startTime
                }ms`
            );
        });
    },

    productionBuildJS: function () {
        webpack(webpackConfigProduction, (error, stats) => {
            if (error || stats.hasErrors()) {
                console.error(err);
            }

            console.log(
                `Compiled ${stats.compilation.outputOptions.filename} in ${
                    stats.compilation.endTime - stats.compilation.startTime
                }ms`
            );
        });
    },

    buildCSS: function () {},
};

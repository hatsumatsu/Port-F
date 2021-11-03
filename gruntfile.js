module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    const webpackConfigDev = require('./webpack.dev.js');
    const webpackConfigProd = require('./webpack.prod.js');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ftp: grunt.file.readJSON('.ftppass'),

        postcss: {
            options: {
                parser: require('postcss-scss'),

                processors: [
                    require('postcss-import')(),
                    require('postcss-custom-media')(),
                    require('postcss-mixins')(),
                    require('postcss-nested')(),
                    require('postcss-color-function')(),
                    require('autoprefixer')(),
                    require('postcss-inline-svg')(),
                    require('cssnano')(),
                ],

                map: {
                    inline: false,
                    annotation: 'css/sourcemaps/',
                },
            },
            dist: {
                src: 'src/css/app.css',
                dest: 'css/app.min.css',
            },
            editor: {
                src: 'src/css/editor.css',
                dest: 'css/editor.min.css',
            },
            admin: {
                src: 'src/css/admin.css',
                dest: 'css/admin.min.css',
            },
        },

        webpack: {
            options: {
                stats: false,
            },
            dev: webpackConfigDev,
            prod: webpackConfigProd,
        },

        imagemin: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*.{png,jpeg,jpg,gif}'],
                        dest: 'img/',
                    },
                ],
                options: {
                    cache: false,
                },
            },
        },

        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false,
                    },
                    {
                        removeUselessStrokeAndFill: false,
                    },
                ],
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*.svg'],
                        dest: 'img/',
                    },
                ],
            },
        },

        ftpush: {
            production: {
                auth: {
                    host: '<%= ftp.key1.host %>',
                    port: 21,
                    authKey: 'key1',
                },
                src: '',
                dest: '/wp-content/themes/port-f',
                exclusions: [
                    '**/.*',
                    'readme*',
                    'package*.json',
                    'webpack*.js',
                    'gruntfile.js',
                    '**/Thumbs.db',
                    'node_modules',
                ],
                simple: false,
                useList: false,
            },
        },

        watch: {
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['buildcss'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },

            js: {
                files: ['src/js/**/*.js'],
                tasks: ['webpack:dev'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },

            imgraster: {
                files: ['src/img/**/*.{jspg,jpeg,gif,png}'],
                tasks: ['buildimagesraster'],
            },

            imgvector: {
                files: ['src/img/**/*.svg'],
                tasks: ['buildimagesvector'],
            },
        },
    });

    grunt.registerTask('default', ['build']);

    grunt.registerTask('buildcss', ['postcss']);
    grunt.registerTask('buildjs', ['webpack:dev', 'webpack:prod']);
    grunt.registerTask('buildimagesraster', ['imagemin']);
    grunt.registerTask('buildimagesvector', ['svgmin']);
    grunt.registerTask('buildimages', ['buildimagesraster', 'buildimagesvector']);

    grunt.registerTask('deploy', ['build', 'ftpush:production']);

    grunt.registerTask('build', ['buildcss', 'buildjs', 'buildimages']);
};

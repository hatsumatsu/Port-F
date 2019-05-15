module.exports = function( grunt ) {

    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    const webpackConfigDev = require( './webpack.dev.js');
    const webpackConfigProd = require( './webpack.prod.js');

    grunt.initConfig( {

        pkg: grunt.file.readJSON( 'package.json' ),
        ftp: grunt.file.readJSON( '.ftppass' ),

        postcss: {
            options: {
                parser: require( 'postcss-comment' ),

                processors: [
                    require( 'postcss-partial-import' )(),
                    require( 'postcss-mixins' )(),
                    require( 'postcss-nested' )(),
                    require( 'postcss-media-variables' )(),
                    require( 'postcss-custom-properties' )( {
                        preserve: false
                    } ),
                    require( 'postcss-color-function' )(),
                    require( 'postcss-media-variables' )(),
                    require( 'autoprefixer' )( {
                        browsers: 'last 2 versions'
                    } ),
                    require( 'postcss-inline-svg' )(),
                    require( 'cssnano' )()
                ],

                map: {
                    inline: false,
                    annotation: 'src/css/sourcemaps/'
                },
            },
            dist: {
                src: 'src/css/app.css',
                dest: 'css/app.css'
            },
            dist: {
                src: 'src/css/editor.css',
                dest: 'css/editor.css'
            }
        },

        webpack: {
            options: {
                stats: false
            },
            dev: webpackConfigDev,
            prod: webpackConfigProd,
        },

        imagemin: {
            all: {
                files: [ {
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpeg,jpg,gif}'],
                    dest: 'img/'
                } ],
                options: {
                    cache: false
                }
            }
        },

        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    },
                    {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            dist: {
                files: [ {
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.svg'],
                    dest: 'img/'
                } ]
            }
        },

        ftpush: {
            preview: {
                auth: {
                    host: '<%= ftp.key1.host %>',
                    port: 21,
                    authKey: 'key1'
                },
                src: '',
                dest: '/preview/wp-content/themes/port-f',
                exclusions: [
                    '**/.*',
                    'readme*',
                    'package*.json',
                    'webpack*.js',
                    'gruntfile.js',
                    '**/Thumbs.db',
                    'node_modules'
                    ],
                simple: false,
                useList: false
            },

            production: {
                auth: {
                    host: '<%= ftp.key2.host %>',
                    port: 21,
                    authKey: 'key2'
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
                    'node_modules'
                    ],
                simple: false,
                useList: false
            }
        },

        watch: {
            css: {
                files: ['src/css/**/*.css'],
                tasks: ['buildcss'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['src/js/**/*.js'],
                tasks: ['buildjs'],
                options: {
                    livereload: true
                }
            },

            imgraster: {
                files: ['src/img/**/*.{jspg,jpeg,gif,png}'],
                tasks: ['buildimagesraster']
            },

            imgvector: {
                files: ['src/img/**/*.svg'],
                tasks: ['buildimagesvector']
            }
        }

    } );


    grunt.registerTask( 'default', ['build'] );

    grunt.registerTask( 'buildcss',  ['postcss'] );
    grunt.registerTask( 'buildjs',  ['webpack:dev','webpack:prod'] );
    grunt.registerTask( 'buildimagesraster',  ['imagemin'] );
    grunt.registerTask( 'buildimagesvector',  ['svgmin'] );
    grunt.registerTask( 'buildimages',  ['buildimagesraster', 'buildimagesvector'] );

    grunt.registerTask( 'deploy_preview',  ['ftpush:preview'] );
    grunt.registerTask( 'deploy_production',  ['ftpush:production'] );

    grunt.registerTask( 'build',  ['buildcss', 'buildjs', 'buildimages'] );

};

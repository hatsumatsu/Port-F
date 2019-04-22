module.exports = function( grunt ) {

    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    const webpackConfigDev = require( './webpack.dev.js');
    const webpackConfigProd = require( './webpack.prod.js');

    grunt.initConfig( {

        pkg: grunt.file.readJSON( 'package.json' ),
        ftp: grunt.file.readJSON( '.ftppass' ),

        less: {
            development: {
                files: {
                    'style.css': 'style.less',
                    'css/editor.css': 'css/editor.less'
                }
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
                    cwd: 'img/src/',
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
                    cwd: 'img/src/',
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
                exclusions: ['**/.*', '**/Thumbs.db', 'node_modules'],
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
                exclusions: ['**/.*', '**/Thumbs.db', 'node_modules'],
                simple: false,
                useList: false
            }
        },

        watch: {
            css: {
                files: ['**/*.less'],
                tasks: ['buildcss'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['js/**/*.js','!js/**/*.min.js'],
                tasks: ['buildjs'],
                options: {
                    livereload: true
                }
            },

            imgraster: {
                files: ['img/src/**/*.{jpg,jpeg,gif,png}'],
                tasks: ['buildimagesraster']
            },

            imgvector: {
                files: ['img/src/**/*.svg'],
                tasks: ['buildimagesvector']
            }
        }

    } );


    grunt.registerTask( 'default', ['build'] );

    grunt.registerTask( 'buildcss',  ['less'] );
    grunt.registerTask( 'buildmodernizr', ['modernizr'] );
    grunt.registerTask( 'buildjs',  ['webpack:dev','webpack:prod'] );
    grunt.registerTask( 'buildimagesraster',  ['imagemin'] );
    grunt.registerTask( 'buildimagesvector',  ['svgmin'] );
    grunt.registerTask( 'buildimages',  ['buildimagesraster', 'buildimagesvector'] );

    grunt.registerTask( 'deploy_preview',  ['ftpush:preview'] );
    grunt.registerTask( 'deploy_production',  ['ftpush:production'] );

    grunt.registerTask( 'build',  ['buildcss', 'buildmodernizr', 'buildjs', 'buildimages'] );

};

module.exports = function( grunt ) {

    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

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

        autoprefixer: {
            style: {
              src: 'style.css',
              dest: 'style.css'
            },
            editor: {
              src: 'css/editor.css',
              dest: 'css/editor.css'
            }
        },

        modernizr: {
            dist: {
                'dest' : 'js/src/critical/modernizr.min.js',
                'options' : [
                    'setClasses',
                    'addTest',
                    'html5printshiv',
                    'testProp',
                    'fnBind',
                    'mq'
                ],
                'tests' : [
                    'touchevents',
                    'pointerevents'
                ],
                'files' : {
                    'src': [
                        'js/**/*.js',
                        '**/*.css',
                        '!node_modules/**/*',
                        '!js/**/*.min.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapName: function( filename ) {
                    var parts = filename.split( '/' );
                    return 'js/sourcemaps/' + parts[parts.length-1] + '.map'
                }
            },
            critical: {
              files: {
                'js/critical.min.js': [
                    'js/src/critical/modernizr.min.js',
                    'js/src/critical/yepnope.1.5.4.min.js',
                    'js/src/critical/globals.js',
                    'js/src/critical/debug.js',
                    'js/src/critical/loader.js'
                ]
              }
            },
            dependenciesGlobal: {
                options: {
                    compress: false
                },
                files: {
                    'js/dependencies--global.js': ['js/src/dependencies--global/*.js']
                }
            },
            dependenciesSmaller: {
                options: {
                    compress: false
                },
                files: {
                    'js/dependencies--smaller.js': ['js/src/dependencies--smaller/*.js']
                }
            },
            dependenciesLarger: {
                options: {
                    compress: false
                },
                files: {
                    'js/dependencies--larger.js': ['js/src/dependencies--larger/*.js']
                }
            },
            appGlobal: {
                options: {
                    compress: false
                },
                files: {
                    'js/app--global.js': [
                        'js/src/app--global/debug.js',
                        'js/src/app--global/viewport.js',
                        'js/src/app--global/nav.js'
                    ]
                }
            },
            appSmaller: {
                options: {
                    compress: false
                },
                files: {
                    'js/app--smaller.js': [
                        'js/src/app--smaller/module.js'
                    ]
                }
            },
            appLarger: {
                options: {
                    compress: false
                },
                files: {
                    'js/app--larger.js': [
                        'js/src/app--larger/module.js'
                    ]
                }
            },
            packageGlobal: {
                files: {
                    'js/package--global.min.js': [
                        'js/dependencies--global.js',
                        'js/app--global.js'
                    ]
                }
            },
            packageSmaller: {
                files: {
                    'js/package--smaller.min.js': [
                        'js/dependencies--global.js',
                        'js/app--global.js',
                        'js/dependencies--smaller.js',
                        'js/app--smaller.js'
                    ]
                }
            },
            packageLarger: {
                files: {
                    'js/package--larger.min.js': [
                        'js/dependencies--global.js',
                        'js/app--global.js',
                        'js/dependencies--larger.js',
                        'js/app--larger.js'
                    ]
                }
            }
        },

        imagemin: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'img/src/',
                    src: ['**/*.{png,jpeg,jpg,gif}'],
                    dest: 'img/'
                }],
                options: {
                    cache: false
                }
            }
        },

        svgmin: {
            options: {
                plugins: [
                  { removeViewBox: false },
                  { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img/src/',
                    src: ['**/*.svg'],
                    dest: 'img/'
                }]
            }
        },

        svg2png: {
            all: {
                files: [{
                    src: ['img/src/*.svg'],
                    dest: ''
                }]
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
                    authKey: 'key1'
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
                tasks: ['buildjs']
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

    grunt.registerTask( 'buildcss',  ['less', 'autoprefixer'] );
    grunt.registerTask( 'buildmodernizr', ['modernizr'] );
    grunt.registerTask( 'buildjs',  ['uglify'] );
    grunt.registerTask( 'buildimagesraster',  ['imagemin'] );
    grunt.registerTask( 'buildimagesvector',  ['svgmin', 'svg2png'] );
    grunt.registerTask( 'buildimages',  ['buildimagesraster', 'buildimagesvector'] );

    grunt.registerTask( 'deploy_preview',  ['ftpush:preview'] );
    grunt.registerTask( 'deploy_production',  ['ftpush:production'] );

    grunt.registerTask( 'build',  ['buildcss', 'buildmodernizr', 'buildjs', 'buildimages'] );
};

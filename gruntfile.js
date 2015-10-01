module.exports = function( grunt ) {

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

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
		        'dest' : 'js/src/critical/00-modernizr.js',
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
				mangle: false
			},
			critical: {
			  files: {
			    'js/critical.min.js': ['js/src/critical/*.js']
			  }
			},
			dependencies: {
			  files: {
			    'js/dependencies-global.min.js': ['js/src/dependencies-global/*.js']
			  }
			},
			dependenciesLarger: {
			  files: {
			    'js/dependencies-larger.min.js': ['js/src/dependencies-larger/*.js']
			  }
			},
			dependenciesSmaller: {
			  files: {
			    'js/dependencies-smaller.min.js': ['js/src/dependencies-smaller/*.js']
			  }
			},
			site: {
				files: {
					'js/site-global.min.js': ['js/src/site-global.js']
				}
			},
			siteLarger: {
				files: {
					'js/site-larger.min.js': ['js/src/site-larger.js']
				}
			},
			siteSmaller: {
				files: {
					'js/site-smaller.min.js': ['js/src/site-smaller.js']
				}
			},
			all: {
				files: {
					'js/all-global.min.js': [
						'js/dependencies-global.min.js',
						'js/src/site-global.js'
					]
				}
			},
			allLarger: {
				files: {
					'js/all-larger.min.js': [
						'js/dependencies-global.min.js', 
						'js/src/site-global.js', 
						'js/dependencies-larger.min.js', 
						'js/src/site-larger.js'
					]
				}
			},
			allSmaller: {
				files: {
					'js/all-smaller.min.js': [
						'js/dependencies-global.min.js', 
						'js/src/site-global.js', 
						'js/dependencies-smaller.min.js', 
						'js/src/site-smaller.js'
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
		      		host: 'example.com',
		      		port: 21,
		      		authKey: 'key1'
		    	},
		    	src: '',
		    	dest: '/preview/wp-content/themes/port-f',
		    	exclusions: ['**/.*', '**/Thumbs.db', 'node_modules'],
		    	// keep: ['/important/images/at/img/*.jpg'],
		    	simple: false,
		    	useList: false
		  	},
			production: { 
				auth: {
		      		host: 'example.com',
		      		port: 21,
		      		authKey: 'key1'
		    	},
		    	src: '',
		    	dest: '/wp-content/themes/port-f',
		    	exclusions: ['**/.*', '**/Thumbs.db', 'node_modules'],
		    	// keep: ['/important/images/at/img/*.jpg'],
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
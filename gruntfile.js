module.exports = function(grunt){

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		less: {
		  development: {
		    files: {
		      'style.css': 'style.less',
		      'mobilemenu.css': 'mobilemenu.less',
		      'editor-style.css': 'editor-style.less'
		    }
		  }
		},

		autoprefixer: {
		    style: {
		      src: 'style.css',
		      dest: 'style.css'
		    }
		},

		modernizr: {
		    dist: {
		        'devFile' : 'remote',
		        'outputFile' : 'js/src/dependencies-global/modernizr.js',
		        'extra' : {
		            'shiv' : true,
		            'printshiv' : false,
		            'load' : true,
		            'mq' : true,
		            'cssclasses' : true
		        },
		        'uglify' : false,
		        'parseFiles' : true,
		        'files' : {
            		'src': ['js/**/*.js', '**/*.css', '!node_modules/**/*', '!js/**/*.min.js']
        		},
		        'matchCommunityTests' : false
		    }
		},

		uglify: {
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
			}

		},

		imagemin: {
			all: {                        
				files: [{
					expand: true,  
					cwd: 'img/src',
					src: ['**/*.{png,jpeg,jpg,gif}'],
					dest: 'img/'
		     	}]
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
	                cwd: 'img/src',     
	                src: ['**/*.svg'],  
	                dest: 'img/'       
	            }]
	        }
	    },

	    svg2png: {
	        all: {
	            files: [{ 
	            	src: ['img/src/*.svg'], 
	            	dest: 'img/' 
	            }]
	        }
	    },

		watch: {
		    css: {
		        files: ['*.less'],
		        tasks: ['buildcss']
		    },
		    js: {
		    	files: ['js/**/*.js','!js/**/*.min.js'],
		    	tasks: ['buildjs']
		    }
		}


    });

    grunt.registerTask( 'default', ['build'] );

	grunt.registerTask( 'buildcss',  ['less', 'autoprefixer'] );
	grunt.registerTask( 'buildmodernizr', ['modernizr'] );
	grunt.registerTask( 'buildjs',  ['uglify'] );
	grunt.registerTask( 'buildimages',  ['imagemin', 'svgmin', 'svg2png'] );

	grunt.registerTask( 'build',  ['buildcss', 'buildmodernizr', 'buildjs', 'buildimages'] );
};
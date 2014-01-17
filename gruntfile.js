module.exports = function(grunt){

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		less: {
		  development: {
		    files: {
		      "style.css": "style.less",
		      "mobilemenu.css": "mobilemenu.less",
		      "editor-styles.css": "editor-styles.less"
		    }
		  }
		},

		autoprefixer: {
		    style: {
		      src: 'style.css',
		      dest: 'style.css'
		    }
		},

		uglify: {
			dependencies: {
			  files: {
			    'js/dependencies.min.js': ['js/dependencies/*.js']
			  }
			},
			dependenciesLarger: {
			  files: {
			    'js/dependencies-larger.min.js': ['js/dependencies-larger/*.js']
			  }
			},
			dependenciesSmaller: {
			  files: {
			    'js/dependencies-smaller.min.js': ['js/dependencies-smaller/*.js']
			  }
			},
			site: {
				files: {
					'js/site.min.js': ['js/site.js']
				}
			},
			siteLarger: {
				files: {
					'js/site-larger.min.js': ['js/site-larger.js']
				}
			},
			siteSmaller: {
				files: {
					'js/site-smaller.min.js': ['js/site-smaller.js']
				}
			}

		},

		imageoptim: {
		  optim: {
		    src: ['img']
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

    grunt.registerTask('default', ['build']);

	grunt.registerTask('buildcss',  ['less', 'autoprefixer']);
	grunt.registerTask('buildjs',  ['uglify']);
	grunt.registerTask('buildimages',  ['imageoptim']);

	grunt.registerTask('build',  ['buildcss', 'buildjs', 'buildimages']);
};
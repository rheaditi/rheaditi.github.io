// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

	// ===========================================================================
	// CONFIGURE GRUNT ===========================================================
	// ===========================================================================
	grunt.initConfig({

		// get the configuration info from package.json ----------------------------
		// this way we can use things like name and version (pkg.name)
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			target: {
				files: {
					'cv/style.min.css': ['cv/uikit.css','cv/style.css']
				}
			}
		},
		postcss: {
				options: {
						map: false,
						processors: [
							require('pixrem')(),
							require('autoprefixer')({ browsers: ['> 1%'] })
						]
				},
				dist: {
						src: 'cv/src/**/*.css'
				}
		},

		// configure watch to auto update ----------------
		watch: {
			files: ['cv/src/**/*.css'], 
			tasks: ['postcss:dist','cssmin'] 
		}
	});

grunt.registerTask('default', ['watch']);

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
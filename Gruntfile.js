module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: {
				options: {
					eqeqeq: true,
					es3: true,
					unused: true,
					eqnull: true,
					camelcase: false,
					laxbreak: true,
					force: true,
					reporter: require('jshint-stylish')
				},
				src: ["gruntfile.js", "source/**/*.js"]
			}
		}
	});

	//Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', [
		'jshint:all'
	]);
};
module.exports = {

	build: {

		options : {
			banner : '/*! <%= app.name %> Wordpress Plugin v<%= app.version %> */ \n',
			preserveComments : 'some'
		},

		files: {
			'<%= app.jsPath %>/share.min.js': [
				'<%= app.jsPath %>/share.js'
			],
		}
	}
};
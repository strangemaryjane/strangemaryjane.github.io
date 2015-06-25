define([ 'jquery', 'underscore', 'backbone', 'models/project' ], 
function ($, _, Backbone, Project) {
	var Projects = Backbone.Collection.extend({
		model: Project
	});

	return Projects;
});

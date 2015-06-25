define([ 'jquery', 'underscore', 'backbone' ], 
function ($, _, Backbone) {
    var Project = Backbone.Model.extend({
        defaults: function () {
            return {
                "title" : 'This is the "title" property of the project.',
                "preview_image" : "http://placehold.it/100x100",
                "features" : [
                    {
                        "image" : "http://placehold.it/470x340/3FF6D1/C0092E&text=470x340+=+maximum+dimensions",
                        "description" : 'This is the "description" property of the "feature(s)". Update me with some information about this specific feature of the project.',
                        "title" : 'This is the "title" property',
                        "caption" : 'This is the "caption" property.'
                    }
                ],
                "current_feature" : 0
            };
        }
    });

    return Project;
});
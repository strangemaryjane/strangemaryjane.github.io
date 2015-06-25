define([ 
    'jquery', 
    'underscore', 
    'backbone', 
    'vendor/text!../../templates/resume.html'
], function ($, _, Backbone, resumeTemplate) {

    var ResumeView = Backbone.View.extend({
        $el: $('#Resume'),
        template: _.template( resumeTemplate ),
        events: { },

        render: function () {
            // Provide the Template access to the *content properties.
            this.$el.html( this.template() );

            return this;
        }
    });

    return ResumeView;
});
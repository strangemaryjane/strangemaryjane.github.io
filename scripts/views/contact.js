define([ 
    'jquery', 
    'underscore', 
    'backbone',
    'vendor/text!../../templates/contact/base.html',
    'vendor/text!../../templates/contact/about.html'
], function ($, _, Backbone, contactTemplate, aboutTemplate) {

    var ContactView = Backbone.View.extend({
        $el: $('#Contact'),
        template: _.template( contactTemplate ),
        about_template: _.template( aboutTemplate ),
        events: { },

        render: function () {
            this.$el.html( this.template() );
            return this;
        },

        render_about: function () {
            $('#Contact .sub-section').html( this.about_template() );
            return this;
        }
    });

    return ContactView;
});
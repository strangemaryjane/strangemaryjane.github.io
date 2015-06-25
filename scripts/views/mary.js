define([
	'jquery',
	'underscore',
	'backbone',
	'views/portfolio',
	'views/resume',
	'views/contact'
], function ($, _, Backbone, PortfolioView, ResumeView, ContactView) {

	var MaryView = Backbone.View.extend({
		$el: $('#Mary'),
		$bottom_layer: $('#BottomLayer'),
		portfolioView: new PortfolioView,
		resumeView: new ResumeView,
		contactView: new ContactView,

		initialize: function () { },

		navigate: function (whereToGo) {

			switch (whereToGo) {
				case 'Splash' : 
					this.$bottom_layer.html('');
					break;
				case 'Portfolio' : 
					this.$bottom_layer.html(this.portfolioView.render().$el);
					break;
				case 'Resume' : 
					this.$bottom_layer.html(this.resumeView.render().$el);
					break;
				case 'Contact' : 
					this.$bottom_layer.html(this.contactView.render().$el);
					break;
				default: 
					this.$bottom_layer.html('');
					break;
			}
		}
	});

	return MaryView;
});
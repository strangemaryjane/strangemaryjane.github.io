require.config({
	//baseUrl: 'scripts',
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: "Backbone"
		}
	},
	paths: {
		jquery : 'vendor/jquery',
		underscore : 'vendor/underscore',
		backbone : 'vendor/backbone'
	}
});

require([
	'jquery',
	'app'
], function ($, App) {
	$(function () { App.initialize(); });
});
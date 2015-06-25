({
    baseUrl: "scripts/",
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
	},
    name: "main",
    out: "scripts/main-built.js"
})
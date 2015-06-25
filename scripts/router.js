define([ 'jquery', 'underscore', 'backbone', 'views/mary' ], 
function ($, _, Backbone, MaryView) {
    // NOT IDEAL... but it works for now.
    var maryView = new MaryView;

    var router =  Backbone.Router.extend({
        routes: {
            "" : "splash",
            "Portfolio" : "portfolio:start",
            "Portfolio/:project" : "portfolio:project",
            "Portfolio/:project/:feature" : "portfolio:project:feature",
            "Resume" : "resume",
            "Contact" : "contact",
            "Contact/About" : "contact:about"
        },

        initialize: function () {

            // Start backbone's history tracking.
            Backbone.history.start();

            // Initialize a google analytics instance.
            ga('create', 'UA-40742397-1');

            // Send the landing page.
            this._trackPageview();

            // Call the google tracking function on any route event.
            this.bind('all', _.throttle(this._trackPageview), 50);
        },

        //function for google analytics.
        _trackPageview: function () {
            //console.log("Logging your analytics now...");

            var url = ('/#/' + Backbone.history.getFragment());
            window.ga('send', 'pageview', {
                'page': url
            });
        },


        // Route Functions.
        // ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~
        "splash": function () {
            maryView.navigate("Splash");
        },

        "portfolio:start": function () {
            maryView.navigate("Portfolio");
        },
            "portfolio:project": function (project) {
                maryView.navigate("Portfolio");

                var spacified_project = project.replace(/-/g, ' ');
                maryView.portfolioView.open_a_project(spacified_project);
            },
                "portfolio:project:feature": function (project, feature) {
                    maryView.navigate("Portfolio");

                    var spacified_project = project.replace(/-/g, ' ');
                    maryView.portfolioView.open_a_project(spacified_project, true);

                    var spacified_feature = feature.replace(/-/g, ' ');
                    maryView.portfolioView.open_a_feature(spacified_feature);
                },

        "resume": function () {
            maryView.navigate("Resume");
        },

        "contact": function () {
            maryView.navigate("Contact");
        },
        "contact:about": function () {
            maryView.navigate("Contact");
            maryView.contactView.render_about();
        }
    });

    return router;
});
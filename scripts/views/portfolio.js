define ([
	'jquery',
	'underscore',
	'backbone',
	'collections/projects',
	'models/project',
	'vendor/text!../../templates/portfolio/base.html',
	'vendor/text!../../templates/portfolio/project.html'
], function ($, _, Backbone, Projects, Project, portfolioTemplate, projectTemplate) {

	return Backbone.View.extend({
		$el: $('#Portfolio'),
		//template: _.template( $('#projects-root-view').html() ),
		template: _.template( portfolioTemplate ),
		project_template: _.template( projectTemplate ),
		events: { /* All events are router-updating and are therefore called from the router. */ },
		projects: new Projects([
			new Project({
				"title" : "Blend Beverage Brand",
				"preview_image" : "images/Blend_Beverage_Brand/preview.png",
				"features" : [
					{
						"image" : "images/Blend_Beverage_Brand/logo_and_flavors.png",
						"title" : "canned milk packaging",
						"description" : "flavored, carbonated skim milk beverage packaging created for blend to reflect the vintage meets contemporary feeling of enjoying milk beverage.",
						"caption" : ""
					},
					{
						"image" : "images/Blend_Beverage_Brand/nutritional_info.png",
						"title" : "back view",
						"description" : "nutrition and articulation on can backside.",
						"caption" : ""
					}
				]
			}),
			new Project({
				"title" : "Maryland College Institute of Arts Ad Campaign",
				"preview_image" : "images/MCIA_Ad_Campaign/preview.png",
				"features" : [
					{
						"image" : "images/MCIA_Ad_Campaign/ad_featuring_ink_drawing.png",
						"description" : 'print spread for undergraduate programs. "Our curriculum minimizes barriers among disciplines and provides opportunities to explore a wide array of interests and to experiment with a variety of mediums and approaches to design and art-making. The Maryland Institute College of Art offers 15 BAchelors of Fine Art degree programs. as well as 11 studio corporations.',
						"title" : "ad featuring ink drawing",
						"caption" : "illustration by mary m. motta"
					},
					{
						"image" : "images/MCIA_Ad_Campaign/bus_stop_hand_illustration.png",
						"description" : "bus stop ad for undergraduate programs. utilized an illustration of mine to draw the eye. the subtitle provides information.",
						"title" : "Bus Stop Ad",
						"caption" : "illustration by: mary m. motta"
					},
					{
						"image" : "images/MCIA_Ad_Campaign/ad_featuring_pencil_drawing.png",
						"description" : 'utilized another illustration of mine to draw the eye. the user is intended to feel curiosity and then read the small print for detailed information on the program.',
						"title" : "ad featuring pencil drawing",
						"caption" : "illustration by mary m. motta"
					}
				]
			}),
			new Project({
				"title" : "HiFructose Magazine ReDesign",
				"preview_image" : "images/HiFructose_Magazine_ReDesign/preview.png",
				"features" : [
					{
						"image" : "images/HiFructose_Magazine_ReDesign/cover.png",
						"title" : "volume 16 cover",
						"description" : "fine art publicaiton, hi-fructose, shown here with an updated logo and cover style placing emphasis on the fine art visuals.",
						"caption" : "paintings by: sylvia ji"
					},
					{
						"image" : "images/HiFructose_Magazine_ReDesign/table_of_contents.png",
						"title" : "table of contents",
						"description" : "fine art publicaiton, hi-fructose, shown here with an updated table of contents, placing more emphasis on visuals than the original print-only table of contents found in volume 16.",
						"caption" : ""
					},
					{
						"image" : "images/HiFructose_Magazine_ReDesign/feature_introduction.png",
						"title" : "feature spread introduction",
						"description" : "fine art publicaiton, hi-fructose, shown here with an updated feature article introduction as a spread. full article spans 2 more spreads.",
						"caption" : ""
					}
				]
			}),
			new Project({
				"title" : "Simple: Flour, Sugar, & Oats Organic Packaging Solution",
				"preview_image" : "images/Simple_Organic_Packaging_Solution/preview.png",
				"features" : [
					{
						"image" : "images/Simple_Organic_Packaging_Solution/environmentally_friendly_packaging.png",
						"title" : "environmentally friendly packaging",
						"description" : "all natural packaging to support a clean environment. more importantly, packaging shape is reusable and prevents spilling from traditional paper bags or purchase of permanent containers.",
						"caption" : ""
					},
					{
						"image" : "images/Simple_Organic_Packaging_Solution/streamlined_packaging_process.png",
						"title" : "streamlined packaging process",
						"description" : "simplified labels allow for individual canisters to be stamped for inventory and manually marked for flou, sugar, or oats. additional information can be typed.",
						"caption" : ""
					}
				]
			}),
			new Project({
				"title" : "K.C.A.D. Carrerlink Launch Campaign",
				"preview_image" : "images/KCAD_Careerlink_Launch_Campaign/preview.png",
				"features" : [
					{
						"image" : "images/KCAD_Careerlink_Launch_Campaign/letters.png",
						"title" : "letters to students & alums",
						"description" : "kendall college of art & design's initial launch of online site \"careerlink\", which compiles job postings for kcad students and alumni<br><br>awarded a professional silver addy award",
						"caption" : "team: elena tislerics (art director), shannon averill (designer), mary m. motta (designer)"
					},
					{
						"image" : "images/KCAD_Careerlink_Launch_Campaign/postcards.png",
						"title" : "find the right fit reminder postcard",
						"description" : "kendall college of art & design's initial launch of online site \"careerlink\", which compiles job postings for kcad students and alumni<br><br>awarded a professional silver addy award",
						"caption" : "team: elena tislerics (art director), shannon averill (designer), mary m. motta (designer)"
					}
				]
			}),
			new Project({
				"title" : "Tracey Ladd Distinctive Designs Brand Identity",
				"preview_image" : "images/Tracey_Ladd_Distinctive_Designs_Brand_Identity/preview.png",
				"features" : [
					{
						"image" : "images/Tracey_Ladd_Distinctive_Designs_Brand_Identity/brand_book.png",
						"title" : "brand book",
						"description" : "an entire brand created from the ground up compiled into one publication for the client. bound with the same glass materials the client uses, this book includes identity elements such as logos & use, type & color systems, grids, and web, document, and packaging designs.",
						"caption" : ""
					},
					{
						"image" : "images/Tracey_Ladd_Distinctive_Designs_Brand_Identity/brand_identity.png",
						"title" : "brand identity",
						"description" : "close interaction with the client allowed for a well though-out brand, which influenced the look and feel of the design through every component of the brand from tone of copy to colors used on the web.",
						"caption" : ""
					},
					{
						"image" : "images/Tracey_Ladd_Distinctive_Designs_Brand_Identity/small_packaging.png",
						"title" : "small packaging featuring the TLDD logo",
						"description" : "used for product elements such as jewelry. the tie at the top keeps the pyramid closed; upon untying, it pops open to reveal the product. this packaging is an example of the printed pieces of the brand which creates continuity amongst the brand pieces.",
						"caption" : ""
					}
				]
			})
		]),
		current_project : 0,

		render: function () {
			this.$el.html(this.template({ projects : this.projects.toJSON() }));
			return this;
		},

		render_project: function (proj) {
			// Update the HTML in the Project View Area.
			$('#Project_Wrapper').html( this.project_template( proj.toJSON() ) );
		},

		open_a_project: function (nameOfProject, supressRender) {

			// apply a different class to the list-of-projects so that they move down below.
			$('ul.list-of-projects').addClass('down-below');

			// find the idx of the specified project.
			var idx = 0;
			for (var i=0, l=this.projects.length; i<l; i++) {
				if (this.projects.at(i).get("title") === nameOfProject) {
					idx = i;
					break;
				}
			}
			this.current_project = idx;
			var proj_ref = this.projects.at(this.current_project);

			// toggle the indicator showing which project is being viewed.
			// NOTE! -->	Transitions don't work because the DOM is being destroyed
			//				and re-created on each render call.
			$('#Portfolio ul.list-of-projects li.project').removeClass('active');
			$('#Portfolio ul.list-of-projects li.project:nth-child('+ 
				(this.current_project + 1) +
			')').addClass('active');

			// only re-render the project if it's allowed on this call.
			if (supressRender !== true)
				this.render_project(proj_ref);
		},

		open_a_feature: function (nameOfFeature) {
			var idx = 0,
				features = this.projects.at(this.current_project).get("features");

			for (var i=0, l=features.length; i<l; i++) {
				if (features[i].title === nameOfFeature) {
					idx = i;
					break;
				}
			}

			this.projects.at(this.current_project).set("current_feature", idx);
			this.render_project(this.projects.at(this.current_project));
		}
	});
});

require.config({
	paths: {
		// Backbone normally has a "define(["underscore","jquery","exports"],.." in it
		jquery: "../../app/bower_components/jquery/dist/jquery.min",
		underscore: "../../app/bower_components/underscore/underscore-min",
		backbone: "../../app/bower_components/backbone/backbone-min",
		text: "../../app/bower_components/text/text"
	},
	shim: {
		jquery: { exports: '$' },
		underscore: { exports: '_'},
		backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
    }
	}
});

define([
	// Request ./app.js
	"app",
	// Request ./router.js
	"router"
],function(App,Router){
	console.log('ok! main')
});

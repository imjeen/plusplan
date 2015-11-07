
require.config({
	paths: {
		jquery: "../bower_components/jquery/dist/jquery.min",
		underscore: "../bower_components/underscore/underscore-min",
		backbone: "../bower_components/backbone/backbone-min",
		text: "../bower_components/text/text"
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

requirejs(["app","router"],function(App,Router){
	console.log('main')
});

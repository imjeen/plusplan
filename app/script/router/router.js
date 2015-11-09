
var Backbone = require("backbone");

var UserHomeView = require("../view/userHome/UserHomeView");

var AppRouter = Backbone.Router.extend({
	routes :{
		// Default
    '*actions': 'defaultAction'
	}
});

var initialize = function(){

	var appRouter = new AppRouter();

	appRouter.on("route:defaultAction",function(){
		var userHomeView = new UserHomeView();
		userHomeView.render();
	}); 

	// initial URL
	Backbone.history.start();

};

module.exports = {
	initialize: initialize
};
var $ = require("jquery");
var Backbone = require("backbone");
var homeTemplate = require("../../../template/userHome/userHomeTemplate.html");

// constructor
var HomeView = Backbone.View.extend({
	el: $("#page"),
	render: function(){
		this.$el.html(homeTemplate);
	}
});

module.exports = HomeView;

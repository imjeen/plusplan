// var $ = require("jquery");
var Backbone = require("backbone");
var ownHomeTemplate = require("../../../template/own/ownHomeTemplate.html");

// constructor
var OwnHomeView = Backbone.View.extend({
	el: "#jumbotronMain",
	render: function(){
		this.$el.html(ownHomeTemplate);
	}
});

module.exports = OwnHomeView;

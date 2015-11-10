// var $ = require("jquery");
var Backbone = require("backbone");
var ownInfoTemplate = require("../../../template/own/ownInfoTemplate.html");

// constructor
var OwnInfoView = Backbone.View.extend({
	el: "#jumbotronMain",
	render: function(){
		this.$el.html(ownInfoTemplate);
	}
});

module.exports = OwnInfoView;
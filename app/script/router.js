var Backbone = require("backbone");

// order view
var OrderCardView = require("./view/order/OrderCardView.js");
var OrderEvaluateView = require("./view/order/OrderEvaluateView.js");
var OrderListView = require("./view/order/OrderListView.js");
var OrderRefundView = require("./view/order/OrderRefundView.js");
var OrderWaitDeliveryView = require("./view/order/OrderWaitDeliveryView.js");
var OrderWaitPayView = require("./view/order/OrderWaitPayView.js");
var OrderWaitReceiveView = require("./view/order/OrderWaitReceiveView.js");

// own view
var OwnActivityView = require("./view/own/OwnActivityView.js");
var OwnCouponView = require("./view/own/OwnCouponView.js");
var OwnHomeView = require("./view/own/OwnHomeView.js");
var OwnInfoView = require("./view/own/OwnInfoView.js");
var OwnReservationView = require("./view/own/OwnReservationView.js");

// track view
var TrackListView = require("./view/track/TrackListView.js");

var AppRouter = Backbone.Router.extend({
	routes :{
		// own info
		'own/info(/:param)': 'ownInfo', // #info/info, #info/info/param
		// order wait
		'order/wait/:query': 'orderWait', // #order/prama
		// Default
    '*actions': 'defaultAction'
	}
});

var initialize = function(){

	var appRouter = new AppRouter();

	appRouter.on("route:defaultAction",function(){
		var ownHomeView = new OwnHomeView();
		ownHomeView.render();
	});

	appRouter.on("route:ownInfo",function(){
		var ownInfoView = new OwnInfoView();
		ownInfoView.render();
	}); 

	// initial URL
	Backbone.history.start();

};

module.exports = {
	initialize: initialize
};
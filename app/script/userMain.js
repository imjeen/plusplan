
// a entry
var $ = require("jquery");
var _ = require("underscore");
var Backbone = require("backbone");

var router = require("./router.js");
try{
	router.initialize();
}catch(e){
	console.log('err',e);
	// $('#page').html("something is wrong!")
}finally{
	// console.log('end');
}


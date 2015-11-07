
var gulp = require("gulp");
var connect = require("gulp-connect");

var myPort = process.env.PORT || 80;

gulp.task("connect",function(){
	connect.server({
		port: myPort
	});
});

gulp.task("help",function(){
	var tasks = Object.keys(gulp.tasks);
	for(var key in tasks){
		console.log("$ gulp %s",tasks[key]);
	}
});

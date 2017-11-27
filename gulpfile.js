var gulp = require('gulp')
var watch = require('gulp-watch');


gulp.task('default', function(){
	console.log('Hooray - you created a Gulp Task')
})

gulp.task("html", function(){
	console.log('imagine something useful being done to your html here')
})

gulp.task("styles", function(){
	console.log('Imagine Sass or PostCss task running here')
})

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	})

});
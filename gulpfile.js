const gulp = require('gulp');

const options = {
    pattern: ['tasks/**/*.js']
};

require('load-gulp-tasks')(gulp, options, {});

gulp.task('default', [
    'build.default'
]);

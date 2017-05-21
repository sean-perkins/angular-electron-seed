const gulp = require('gulp');
const path = require('path');

const options = {
    pattern: ['tasks/**/*.js']
};

require('load-gulp-tasks')(gulp, options, {});

gulp.task('default', [
    'build.desktop.default'
]);

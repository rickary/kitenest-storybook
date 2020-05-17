"use strict";

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const postcssCustomProperties = require("postcss-custom-properties");
const stripComments = require("gulp-strip-css-comments");
const notify = require("gulp-notify");

const cssDir = "public/css";
const sassDir = "_dev/scss/**/*.scss";

function compileSass() {
    return gulp
        .src("_dev/scss/master.scss")
        .pipe(
            sass().on("error", function (err) {
                console.error(err.message);
                this.emit("end");
            })
        )
        .pipe(stripComments())
        .pipe(
            autoprefixer({
                flexbox: true,
                grid: true,
            })
        )
        .pipe(postcss([postcssCustomProperties()]))
        .pipe(gulp.dest(cssDir))
        .pipe(notify("Sass compiled"));
}

function watchSass() {
    gulp.watch(sassDir, compileSass);
}

gulp.task("default", gulp.series(compileSass, watchSass));

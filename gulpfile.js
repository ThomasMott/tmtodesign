"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));
var concat = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var { task, series } = require("gulp");

var SCSS_SRC = "./scss/**/*";
var SCSS_DEST = "./css";

function compile_scss() {
	return gulp
		.src("./scss/all.css")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(concat("all.css"))
		.pipe(cleanCss("all.css"))
		.pipe(gulp.dest(SCSS_DEST));
}

function watch_scss() {
	gulp.watch(SCSS_SRC, series(compile_scss));
}

exports.default = series(watch_scss);

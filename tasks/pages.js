import gulp from 'gulp'; // gulp 构建工具
import gulpif from 'gulp-if'; // gulp 工具的 if 判断
import livereload from 'gulp-livereload'; // 自动热更新
import args from './util/args'; // 命令行参数解析

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()));
});
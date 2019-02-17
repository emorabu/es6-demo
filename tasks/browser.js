import gulp from 'gulp'; // gulp 构建工具
import args from './util/args'; // 命令行参数解析

gulp.task('browser', (cb) => {
    if(!args.watch){
        return cb();
    }
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});
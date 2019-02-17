import gulp from 'gulp'; // gulp 构建工具
import del from 'del';

gulp.task('clean', () => {
    return del(['server/public', 'server/views']);
});
import gulp from 'gulp'; // gulp 构建工具
import gulpSequence from 'gulp-sequence'; // 任务顺序

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
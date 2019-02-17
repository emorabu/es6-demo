import gulp from 'gulp'; // gulp 构建工具
import gulpif from 'gulp-if'; // gulp 工具的 if 判断
// import concat from 'gulp-concat'; // gulp 中处理文件拼接
// import webpack from 'webpack'; // webpack 打包
import gulpWebpack from 'webpack-stream'; // gulp 流
import named from 'vinyl-named'; // 文件重命名标志
import livereload from 'gulp-livereload'; // 自动热更新
import plumber from 'gulp-plumber'; // 处理文件信息流
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // 文件压缩
import {log, colors} from 'gulp-util'; // 命令行输出
import args from './util/args'; // 命令行参数解析

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js']) //入口文件
        .pipe(plumber({
            errorHandle: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module : {
                rules : [{
                    test : /\.js$/,
                    loader : 'babel-loader'
                }]
            }
        }), null, (err, status) => {
            log(`Finished '${colors.cyan('scripts')}'`, status.toString({
                chunks : false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename : 'cp',
            extname : '.min.js'
        }))
        .pipe(uglify({
            compress : {
                properties : false,
            },
            output : {
                'quote_keys' : true,
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload()));
});


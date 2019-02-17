import gulp from 'gulp'; // gulp 构建工具
import liveserver from 'gulp-live-server'; // 服务器
import args from './util/args'; // 命令行参数解析

gulp.task('serve', (cb) => {
    if(!args.watch) {
        return cb();
    }

    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
        server.start.bind(server)();
    });
});
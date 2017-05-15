import gulp from 'gulp';
import webpack from 'webpack';
import nodemon from 'nodemon';
import path from 'path';
import config from './webpack.config';

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build', 'dist'),
  buildSrv: path.join(__dirname, 'build', 'dist', 'server.js'),
};

function onBuild (done, logLevel) {
  return (err, stats) => {
    if (err) {
      console.log('Build threw error:', err);
    } else if (logLevel === 'debug') {
      console.log('[build stats]:', stats.toString());
    }

    if (done) {
      done();
    }
  };
}

gulp.task('watch-server', () => (
  new Promise((resolve, reject) => {
    let compiled = false;
    webpack(config).watch(100, (err/* , stats*/) => {
      if (err) {
        return reject(err);
      }
      if (!compiled) {
        compiled = true;
        resolve();
      } else {
        nodemon.restart();
      }
    });
  })
));

gulp.task('server', ['watch-server'], () => {
  nodemon({
    execMap: {
      js: 'node',
    },
    script: PATHS.buildSrv,
    // do not watch any directory/files to refresh
    // all refreshes should be manual
    watch: ['foo/'],
    ext: 'noop',
    ignore: ['*'],
  }).on('restart', () => {
    console.log('[nodemon]: restart');
  });

  // fixes issue with nodemon's exit event
  // https://github.com/JacksonGariety/gulp-nodemon/issues/33
  process.once('SIGINT', () => {
    process.exit(0);
  });
});

gulp.task('build-server', (done) => {
  webpack(config).run(onBuild(done));
});

gulp.task('build', ['build-server']);

gulp.task('default', ['server']);

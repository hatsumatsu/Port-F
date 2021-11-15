const chokidar = require('chokidar');
const { exec } = require('child_process');

const { devBuildJS } = require('./build/tasks');

console.log('START');

const watcher = chokidar.watch('src/js/**/*.js', {
    persistent: true,
});

watcher.on('change', (path) => {
    console.log(`${path} changed`);

    devBuildJS();
});

process.on('SIGINT', function () {
    console.log('STOP');

    watcher.close();

    process.exit();
});

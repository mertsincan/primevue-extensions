const fs = require('fs-extra');
const path = require('path');

const INPUT_DIR = `../${process.env.INPUT_DIR}`;

fs.readdirSync(path.resolve(__dirname, INPUT_DIR), { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        fs.readdirSync(path.resolve(__dirname, INPUT_DIR + folderName)).forEach(file => {
            if (file ==='package.json' || file.endsWith('d.ts') || file.endsWith('vue')) {
                fs.copySync(path.resolve(__dirname, INPUT_DIR + folderName) + '/' + file, 'dist/' + folderName + '/' + file);
            }
        })
    });

fs.copySync(path.resolve(__dirname, INPUT_DIR + 'resources'), 'dist/resources');
fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/package.json');

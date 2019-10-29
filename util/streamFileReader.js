var fs = require('fs');

fs.createReadStream('node-logo.png')
    .pipe(fs.createWriteStream('node-logo3.png'))
    .on('finish', function () {
        console.log('arquivo escrito com stream!');
    });
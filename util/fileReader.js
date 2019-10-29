var fs = require('fs');

fs.readFile('node-logo.png', function (error, buffer) {
    console.log('arquivo lido!');

    fs.writeFile('node-logo2.png', buffer, function () {
        console.log('arquivo escrito!');
    });

});
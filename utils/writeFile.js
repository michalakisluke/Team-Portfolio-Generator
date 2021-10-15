const fs = require('fs');

function writeFile(fileContent) {
    fs.writeFile('./dist/index.html', fileContent, function(err) {
        if (err) throw err;
        console.log('File Created!');
    })
}

module.exports = writeFile;

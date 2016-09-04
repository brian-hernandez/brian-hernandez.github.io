'use strict';
function getFiles(dir) {
    var fileList = [];

    var files = fs.readdirSync(dir);
    for (var i in files) {
        if (!files.hasOwnProperty(i)) continue;
        var name = dir + '/' + files[i];
        if (!fs.statSync(name).isDirectory()) {
            fileList.push(name);
        }
    }
    return fileList;
}

console.log(getFiles('../img/drummers/'));
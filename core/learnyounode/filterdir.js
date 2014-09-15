var FilterDir = function (dirname, type, callback) {
  var fs = require('fs');
  var path = require('path');
  var files = [];
  fs.readdir(dirname, function(err, list) {
    if(err) {
      return callback(err);
    } else {

      list.forEach(function(item, index) {
        if(path.extname(item).replace('.', '') === type) {
          files.push(item);
        }
      });
      callback(null, files);
    }

  });
}

module.exports = FilterDir;

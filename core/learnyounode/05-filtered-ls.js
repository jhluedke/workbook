var fs = require('fs');
var path = require('path');
var dirname = process.argv[2];
var type = process.argv[3];

fs.readdir(dirname, function(err, list) {
  if(err) {
    throw err;
  } else {
    list.forEach(function(item, index) {
      if(path.extname(item).replace('.', '') === type) {
        console.log(item);
      }
    });
  }

});

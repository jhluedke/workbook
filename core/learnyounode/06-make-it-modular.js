var dirname = process.argv[2];
var type = process.argv[3];
var filterDir = require('./filterdir.js');

var results = filterDir(dirname, type, function(err, data) {
  if(err) {
    console.log('error reading directory "' + dirname + '".');
  } else {
    data.forEach(function(item, index) {
      console.log(item);
    });
  }

});

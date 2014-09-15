var http = require('http');
var url = process.argv[2];
var collect = "";
var count = 0;
http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('error', function(e) {
    console.log("Got error: " + e.message);
  });

  res.on('data', function(data) {
    collect += data;
    count = count + data.length;
  });

  res.on('end', function(data) {
    console.log(count);
    console.log(collect);
  });

});


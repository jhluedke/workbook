var args = process.argv;
var total = 0;
args.forEach(function(arg, index) {
  var number = parseInt(arg);
  if (!isNaN(number)) {
    total = total + number;
  };

});
console.log(total);

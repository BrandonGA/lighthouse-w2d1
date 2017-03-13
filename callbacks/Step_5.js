var https = require('https');
module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
    response.setEncoding('utf8');
    var x = ''
    response.on('data', function (data){
      x = x + data;
    });

    response.on('end', function(){
      callback(x)
    });
  });
};

var getHTML = require('./Step_5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions,function(x) {
  console.log(x)
})
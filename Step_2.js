var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    var x = ''
    response.on('data', function (data){
      x = x + data;
    });

    response.on('end', function(){
      console.log(x)
    });
  });
}

getAndPrintHTML()
var https = require('https');

function getHTML (options, callback){
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


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions,function(x) {
  console.log(x)
})
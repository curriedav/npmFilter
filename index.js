var request = require('request');
request('http://registry.npmjs.org/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)) // Print the google web page.
  }
})


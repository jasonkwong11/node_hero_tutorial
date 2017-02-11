const request = require('request-promise')

/// GET REQUESTS TO EXTERNAL API
const options = {
  method: 'GET',
  uri: 'https://risingstack.com',
  //if calling a JSON API, add this to parse the response automatically:
  //json: true
}

request(options)
  .then(function(response){
    //Request was successful, use the response object at will
  })
  .catch(function(err){
    //Something bad happened, handle the error
  })

// HOW TO POST REQUESTS TO EXTERNAL API

const options = {
  method: 'POST',
  uri: 'https//risingstack.com/login',
  body: {
    foo: 'bar'
  },
  json: true //JSON stringifies the body automatically
  // to add query string params: add the qs property to options object
  //this makes the request URL:
  // https://risingstack.com?limit=10&skip=20&sort=asc.
  qs: {
    limit: 10,
    skip: 20,
    sort: 'asc'
  }
  //can also define any headers the same way:
  headers: {
    'User-Agent': 'Request-Promise',
    'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l' }
  }
}

request(options)
  .then(function(response){
    //Handle the response
  })
  .catch(function(err){
    //Deal with the error
  })




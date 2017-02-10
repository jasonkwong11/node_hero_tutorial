/// HTTP server:

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log('Inside requestHandler, heres request.url:')
  console.log(request.url);
  response.end('Hello Node Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err){
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

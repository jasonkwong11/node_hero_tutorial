const express = require('express');
const app = express()

//first middleware:
//notice app.use is how you define middlewares
//first middleware logs the headers and calls the next one 
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

//second middleware:
//adds an extra property to request
// this is one of the most powerful
// features of middleware pattern
// (appending extra data to request object
// that downstream middlewares can read/alter)
app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

//third middleware (can send back a 
//response or be a route handler): 
app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)


///ERROR HANDLING IN EXPRESS:
//create a special middleware function
//with four params:

const express = require(express)
const app = express()

app.get('/', (request, response) => {
  throw new Error('oops')
})

app.use((err, request, response, next) => {
  //log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})


//Note: the error handler function 
//should be the last function 
//added with app.use

//Note: it has a next callback, which can be
//used to chain multiple error handlers




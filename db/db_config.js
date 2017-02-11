'use strict';

const pg = require('pg')
const conString = 'postgres://jasonkwong:11jk11@localhost/node_hero'

//POSTING a new user to the PG database
app.post('/users', function (request, response, next) {
  const user = req.body

  pg.connect(conString, function(err, client, done){
    if(err){
      //pass the error to the express error handler
      return next(err)
    }
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], function(err, result){
      done() //this done callback signals the pg driver that the connection can 
      //closed or returned to the connection pool
    })

    if (err) {
      //pass the error to the express error handler
      return next(err)
    }

    response.send(200)
  })
})


//GET-ing a new user from the database

app.get('/users', function(request, response, next){
  pg.connect(conString, function(err, client, done){
    if(err) {
      //pass the error to the express error handle
      return next(err)
    }
    client.query('SELECT name, age FROM users;', [], function(err, result){
      if (err){
        return next(err)
      }
      //return the response (of users) as json 
      response.json(result.rows)
    })
  })
})



///GENERALIZED EXAMPLE OF CONNECTING TO PG DB

pg.connect(conString, function(err, client, done){
  if (err) {
    return console.error('error fetching client from pool', err)
  }

//EXAMPLE:first param is our SQL command, the second param
//is an array of values we'd like to parameterize our query with
  client.query('SELECT $1::varchar AS my_first_query', ['node_hero'], function(err, result){
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})

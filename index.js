/*
require('./app/index')

const _ = require('lodash')

const see = _.assign({ 'a': 1}, {'b':2}, {'c': 3});
console.log(see);

const numbers = [2,4,1,5,4]
function isBiggerThanTwo (num) { 
  return num > 2
} 
console.log(numbers.filter(isBiggerThanTwo));

*/

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

//initialize handlebars engine and sets
//layouts directory to views/layouts
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(_dirname, 'views/layouts')
}))

app.set('views engine', '.hbs')
app.set('views', path.join(_dirname, 'views'))

// add a route to express app
  //render takes 2 params: 
  // first is name of the view (home)
  //second is the data you want to render
app.get('/', (request, response) => {
  response.render('home', {
    name: 'Jason'
  })
})






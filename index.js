require('./app/index')

const _ = require('lodash')

const see = _.assign({ 'a': 1}, {'b':2}, {'c': 3});
console.log(see);

const numbers = [2,4,1,5,4]
function isBiggerThanTwo (num) { 
  return num > 2
} 
console.log(numbers.filter(isBiggerThanTwo));
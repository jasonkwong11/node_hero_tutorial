// Dont put logic in index.js files. Use these files only to export functionality:

var product = require('./product')

module.exports = { create: product.create
}
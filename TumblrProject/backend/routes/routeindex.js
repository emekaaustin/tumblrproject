const express = require('express')
const app = express.Router()

require('./endpoints/category')(app)
require('./endpoints/databasepage')(app)


module.exports = app;
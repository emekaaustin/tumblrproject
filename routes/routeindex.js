const express = require('express')
const app = express.Router()

require('./endpoints/category')(app)
require('./endpoints/auth')(app)


module.exports = app;
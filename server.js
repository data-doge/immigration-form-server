var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()
server.use(bodyParser.json())
server.use(cors())

server.post('/process', function (req, res) {
  console.log('req.body: ', req.body)
  res.end()
})

server.listen(3000)

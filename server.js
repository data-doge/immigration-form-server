var express = require('express')
var server = express()

var i485Path = './i-485-jane.pdf'
var g325Path = './g-325-jane-beneficiary.pdf'

server.post('/process', function (req, res) {
  res.end('meow')
})

server.listen(3000)

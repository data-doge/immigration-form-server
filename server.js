var express = require('express')
var zip = require('express-zip')
var bodyParser = require('body-parser')
var cors = require('cors')
var populatePDFs = require('./populate-pdfs.js')
var fs = require('fs')

var server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(express.static('public'));

server.post('/process', function (req, res) {
  var fieldData = req.body

  populatePDFs(fieldData).then(function (filePaths) {
    var files = filePaths.map(function (filePath) {
      return {path: filePath, name: filePath}
    })

    res.zip(files, function () {
      filePaths.forEach(fs.unlinkSync)
    })
  })
})

server.listen(process.env.PORT || 3000)

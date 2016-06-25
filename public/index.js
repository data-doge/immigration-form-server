var $ = require('jquery')
var request = require('request')
var toObject = require('form-to-object')
var download = require('downloadjs')
var config = require('./../config')[process.env.NODE_ENV]

$('#client-form').submit(function (e) {
  e.preventDefault()
  var data = toObject(this)
  request.post({
    url: config.baseUrl + '/process',
    body: data,
    json: true,
    encoding: null
  }, function (err, res, body) {
    if (err) throw err
    var blob = new Blob([res.body], {type: 'octet/stream'})
    download(blob, 'fuck.zip', 'application/zip')
  })
})

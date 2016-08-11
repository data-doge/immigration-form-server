var $ = require('jquery')
var request = require('request')
var toObject = require('form-to-object')
var download = require('downloadjs')
var config = require('./../config')[process.env.NODE_ENV]
require('html5-simple-date-input-polyfill')

$('#client-form').submit(function (e) {
  e.preventDefault()
  $('#loading-screen').show()
  var data = toObject(this)
  // request.post({
  //   url: config.baseUrl + '/process',
  //   body: data,
  //   json: true,
  //   encoding: null
  // }, function (err, res, body) {
  //   $('#loading-screen').hide()
  //   if (err) throw err
  //   var blob = new Blob([res.body], {type: 'octet/stream'})
  //   // todo: maybe change this
  //   e.target.reset()

  //   download(blob, 'immigration-forms__' + Date.now() + '.zip', 'application/zip')
  // })
  console.log(data.beneficiary_birth_date)
})

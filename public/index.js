var $ = require('jquery')
var request = require('request')
var toObject = require('form-to-object')
var download = require('downloadjs')
var config = require('./../config')[process.env.NODE_ENV]

$('#client-form').submit(function (e) {
  e.preventDefault()
  $('#loading-screen').show()
  var data = toObject(this)
  request.post({
    url: config.baseUrl + '/process',
    body: data,
    json: true,
    encoding: null
  }, function (err, res, body) {
    $('#loading-screen').hide()
    if (err) throw err
    var blob = new Blob([res.body], {type: 'octet/stream'})
    // todo: maybe change this
    e.target.reset()

    download(blob, 'immigration-forms__' + Date.now() + '.zip', 'application/zip')
  })
})

if (process.env.NODE_ENV) {
  var sampleData = require('./sample-data')
  var each = require('lodash.foreach')
  var $testBtn = $('<button>fill fields with sample data</button>').css({
    'position': 'absolute',
    'top': '5px',
    'left': '5px'
  }).on('click', function (e) {
    each(sampleData, function (val, key) {
      $('input[name="' + key + '"]').val(val)
    })
  })
  $('body').append($testBtn)
}
